const path = require('path')
const { promisify } = require('util');
const frontMatter = require('front-matter')
const fs = require('fs')
const moment = require('moment')
const readdir = promisify(fs.readdir)
const readFile = promisify(fs.readFile)

const deserialize = parsed => ({
  title: parsed.attributes.title,
  date: parsed.attributes.date,
  private: parsed.attributes.private,
  body: parsed.body
})

async function fetchPosts() {
    const postsDir = path.join(__dirname, '..', 'posts');
  	const filenames = await readdir(postsDir);

	const results = await Promise.all(
      filenames.map(async filename => {
  			const markdown = await readFile(path.join(postsDir, filename), 'utf-8');
  			const parsed = frontMatter(markdown);
  			const post = deserialize(parsed);

  			return Promise.resolve(post);
  		})
	);

  sortDates(results);
  results.reverse()
	return results;
}

const sortDates = (dateArray) => {
  dateArray.sort( (a, b) => {
    let dateA = moment(a.date, moment.ISO_8601)
    let dateB = moment(b.date, moment.ISO_8601)

    if (dateA < dateB) {            // a comes first
        return -1
    } else if (dateB < dateA) {     // b comes first
        return 1
    } else {                // equal, so order is irrelevant
        return 0            // note: sort is not necessarily stable in JS
    }
  })
}

async function fetchPost(target) {
	const postsDir = path.join(__dirname, '..', 'posts');
	const filename = target + '.md';

	const markdown = await readFile(path.join(postsDir, filename), 'utf-8');
	const parsed = frontMatter(markdown);
	const post = deserialize(parsed);

	return post;
}

exports.fetchPosts = fetchPosts;
exports.fetchPost = fetchPost;

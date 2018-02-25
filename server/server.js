const { createServer } = require('http');
const { parse } = require('url');
const express = require('express');
const cors = require('cors');
const compression = require('compression');
const next = require('next');
const repo = require('./repo');
const PORT = 8080

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const serialize = data => JSON.stringify({ data })


app.prepare().then(() => {
	const server = express();

	server.use(cors());
	server.use(compression());
	server.use(express.static(__dirname + '/static'));


	server.get('/api/posts', async (req, res) => {
		const posts = await repo.fetchPosts();
		res.writeHead(200, { 'Content-Type': 'application/json' });
		return res.end(serialize(posts));
	});

	server.get('/api/posts/:title', async (req, res) => {
		const title = req.params.title;
		const post = await repo.fetchPost(title);
		res.writeHead(200, { 'Content-Type': 'application/json' });
		return res.end(serialize(post));
	});

	server.get('/:year/:month/:day/:title', async (req, res) => {
		const actualPage = '/post';
		const queryParams = req.params;
		app.render(req, res, actualPage, queryParams);
	});

	server.get('*', async (req, res) => {
			return handle(req, res);
		});

	server.listen(process.env.PORT || PORT, err => {
		if (err) throw err;
		console.log('Express server listening on port %d in %s mode', server.address().port, app.settings.env);
	});

});

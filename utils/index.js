import fs from "fs";
import read from "fs-readdir-recursive"
import path from "path";
import matter from "gray-matter";
import externalPosts from "../data/externalPosts.js";


const POSTS_DIR = path.join(process.cwd(), "src/blog");
const filenames = read(POSTS_DIR)

const formattedExternal = new Map(
    externalPosts.map((post) => {

        const options = { month: "long", day: "numeric", year: "numeric" };
        const formattedDate = new Date(post.date).toLocaleDateString(
          "en-IN",
          options
        );

        return {
            frontMatter: {
                title: post.title,
                date: formattedDate
            }
            
        }
    })
)

export const postsData = new Map(
    filenames.map((filename) => {
        const filePath = path.join(POSTS_DIR, filename);
        const rawPost = fs.readFileSync(filePath, "utf8");
        const { content, data } = matter(rawPost);

        const slug = filePath.replace(/^.*\/blog\//, "").replace(".mdx", "")

        const options = { month: "long", day: "numeric", year: "numeric" };
        const formattedDate = new Date(data.date).toLocaleDateString(
          "en-IN",
          options
        );

        return {
            content,
            frontMatter: {
                ...data,
                title: data.title,
                date: formattedDate,
            },
            slug,
            path: filePath
        }
    })
    .map((entry) => {
        const { slug } = entry
          return [slug, entry]
    })
)

export default postsData;

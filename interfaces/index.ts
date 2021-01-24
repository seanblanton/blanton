export type User = {
  id: number
  name: string
}

export type Post = {
  frontMatter: {
    title: string,
    excerpt: string,
    url?: string,
  }
  slug?: string
}

export type Book = {
  title: string,
  author: string,
  url: string,
}
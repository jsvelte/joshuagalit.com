export type Blog = {
  slug: string
  frontMatter: FrontMatter
}

export type FrontMatter = {
  title: string
  publishedAt: string
  summary: string
  socialImage: string
  tags: string[]
  content: string
}

export type TLink = {
  text: string
  href: string
  offset: number
}

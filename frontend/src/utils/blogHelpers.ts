import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'src/markdown')

export type IBlogPost = {
  data: Record<string, any>
  content: string
  slug: string
}

export const getAllBlogPosts = (): IBlogPost[] => {
  const allPosts = fs.readdirSync(contentDirectory)

  return allPosts.map((fileName) => {
    const slug = fileName.replace('.md', '')
    const fileContents = fs.readFileSync(path.join(contentDirectory, fileName), 'utf8')
    const { data, content } = matter(fileContents)

    return {
      data,
      content,
      slug
    }
  })
}

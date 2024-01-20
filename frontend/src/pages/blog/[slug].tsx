import fs from 'fs'
import matter from 'gray-matter'
import { ParsedUrlQuery } from 'querystring'
import React, { useEffect, useState } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'

import { FrontMatter } from '~/utils/types'
import MarkdownRender from '~/lib/markdown-render'
import calculateReadTime from '~/utils/readTimeDuration'
import BlogLayout from '~/components/templates/blog-layout'

type BlogProps = {
  frontMatter: FrontMatter
  content: string
  readTime: number
}

export default function Blog({ frontMatter, content, readTime }: BlogProps): JSX.Element {
  const [renderedContent, setRenderedContent] = useState<string>('')

  useEffect(() => {
    setRenderedContent(content)
  }, [content])

  return (
    <BlogLayout
      {...{
        title: frontMatter.title,
        publishedAt: frontMatter.publishedAt,
        readTime
      }}
    >
      <section className="prose prose-indigo mx-auto dark:prose-invert md:prose-lg">
        <MarkdownRender mdString={renderedContent} />
      </section>
    </BlogLayout>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  // Retrieve all our slugs
  const files = fs.readdirSync('src/markdown')
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', '')
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as ParsedUrlQuery
  const fileName = fs.readFileSync(`src/markdown/${slug as string}.md`, 'utf-8')

  const { data: frontMatter, content } = matter(fileName)
  const readTime = calculateReadTime(content, 200)

  return {
    props: {
      frontMatter,
      content,
      readTime
    }
  }
}

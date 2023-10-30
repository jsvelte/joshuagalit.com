import fs from 'fs'
import md from 'markdown-it'
import matter from 'gray-matter'
import { ParsedUrlQuery } from 'querystring'
import React, { useEffect, useState } from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import { FrontMatter } from '~/utils/types'
import calculateReadTime from '~/utils/readTimeDuration'
import BlogLayout from '~/components/templates/blog-layout'

type Props = {
  frontMatter: FrontMatter
  content: string
  readTime: number
}

const Blog: NextPage<Props> = ({ frontMatter, content, readTime }): JSX.Element => {
  const [renderedContent, setRenderedContent] = useState<string>('')

  useEffect(() => {
    setRenderedContent(md().render(content))
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
        <p dangerouslySetInnerHTML={{ __html: renderedContent }} />
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

export default Blog

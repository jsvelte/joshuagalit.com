import Link from 'next/link'
import Image from 'next/image'
import React, { FC } from 'react'
import { ChevronRight } from 'lucide-react'

import { cn } from '~/utils/cn'
import { Blog } from '~/utils/types'
import { Badge } from '~/components/atoms/badge'

type Props = {
  blog: Blog
  idx: number
}

const BlogCard: FC<Props> = ({ blog, idx }): JSX.Element => {
  const index = idx + 1
  return (
    <div
      className={cn(
        index === 2 ? 'md:-mt-[380px] lg:-mt-[380px]' : '',
        index === 4 ? 'md:-mt-[380px] lg:-mt-[340px]' : ''
      )}
      data-aos="fade-up"
      data-aos-offset="300"
    >
      <div className="relative rounded-2xl p-4 transition-shadow duration-200 hover:shadow-2xl">
        <Image
          src={blog.frontMatter.socialImage}
          width={800}
          height={500}
          priority
          alt={blog.frontMatter.title}
          onError={() => {}}
          className="rounded-2xl"
        />
        <div className="flex flex-col space-y-3">
          <h1 className="mt-4 text-xl font-semibold text-slate-800 dark:text-white md:text-2xl lg:text-3xl">
            {blog.frontMatter.title}
          </h1>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            {blog.frontMatter.tags.map((tag, idx) => (
              <Badge variant="secondary" key={idx}>
                {tag}
              </Badge>
            ))}
          </div>
          <p
            className="line-clamp-5 text-sm leading-loose text-slate-600 dark:text-slate-300 sm:text-base"
            dangerouslySetInnerHTML={{ __html: blog.frontMatter.summary }}
          />
          <Link
            href={`/blog/${blog.slug}`}
            className="mt-10 flex items-center space-x-2 text-base font-semibold text-sky-500 md:text-lg"
          >
            <span>Read More</span>
            <ChevronRight className="w-4 md:w-6" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BlogCard

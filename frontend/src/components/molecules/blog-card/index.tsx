import Image from 'next/image'
import React, { FC } from 'react'
import { ChevronRight } from 'lucide-react'

import { cn } from '~/utils/cn'
import { Blog } from '~/utils/constant/blog'

type Props = {
  blog: Blog
}

const BlogCard: FC<Props> = ({ blog }): JSX.Element => {
  return (
    <div
      className={cn(
        blog.id === 2 ? 'md:-mt-[380px] lg:-mt-[450px]' : '',
        blog.id === 4 ? 'md:-mt-[380px] lg:-mt-[450px]' : ''
      )}
      data-aos="fade-up"
      data-aos-offset="300"
      data-aos-delay={blog.delay}
    >
      <div className="relative rounded-2xl p-4 transition-shadow duration-200 hover:shadow-2xl">
        <Image src={blog.image} width={800} height={500} priority alt="" />
        <div className="flex flex-col space-y-3">
          <h1 className="mt-4 text-xl font-medium text-slate-800 dark:text-white md:text-2xl lg:text-3xl">
            {blog.title}
          </h1>
          <p
            className="line-clamp-5 text-sm leading-loose text-slate-600 dark:text-slate-300 sm:text-base"
            dangerouslySetInnerHTML={{ __html: blog.description }}
          />
          <a
            href="#"
            className="mt-10 flex items-center space-x-2 text-base font-semibold text-sky-500 md:text-lg"
          >
            <span>Read More</span>
            <ChevronRight className="w-4 md:w-6" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default BlogCard

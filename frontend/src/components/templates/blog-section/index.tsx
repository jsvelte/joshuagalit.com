import React, { FC } from 'react'

import { blogs } from '~/utils/constant/blog'
import { Button } from '~/components/atoms/button'
import BlogCard from '~/components/molecules/blog-card'
import { Separator } from '~/components/atoms/separator'
import useScreenCondition from '~/hooks/useScreenCondition'
import SectionTitle from '~/components/molecules/section-title'

const BlogSection: FC<Record<string, unknown>> = (): JSX.Element => {
  const isMediumScreen = useScreenCondition('(max-width: 768px)')

  return (
    <div id="blog">
      <div className="mx-auto w-full max-w-2xl">
        <Separator />
      </div>
      <div className="mx-auto w-full max-w-6xl px-4 py-32">
        <div className="grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2 md:gap-y-12">
          {/* Title */}
          <div className="block space-y-14">
            <div className="start flex" data-aos="fade-down" data-aos-delay="200">
              <SectionTitle title="MyBlog" />
            </div>
            <Button
              variant="primary"
              data-aos="fade-up"
              size={isMediumScreen ? 'lg' : 'xl'}
              className="rounded-full px-10 text-base md:px-14 md:text-lg"
            >
              See all
            </Button>
          </div>
          {/* Content */}
          {blogs.map((blog, idx) => (
            <BlogCard
              key={idx}
              {...{
                blog
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogSection

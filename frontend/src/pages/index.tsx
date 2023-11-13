import fs from 'fs'
import React from 'react'
import matter from 'gray-matter'
import dynamic from 'next/dynamic'
import type { GetStaticProps, NextPage } from 'next'

import { Blog } from '~/utils/types'
import Layout from '~/components/templates/layout'
import Footer from '~/components/organisms/footer'
import { Separator } from '~/components/atoms/separator'
import HeroSection from '~/components/templates/hero-section'
import SocialLinkSection from '~/components/templates/social-link-section'

const AboutSection = dynamic(async () => await import('~/components/templates/about-section'), {
  ssr: false
})
const MySkillsSection = dynamic(
  async () => await import('~/components/templates/my-skills-section'),
  {
    ssr: false
  }
)
const ProjectsSection = dynamic(
  async () => await import('~/components/templates/projects-section'),
  {
    ssr: false
  }
)
const ExperienceSection = dynamic(
  async () => await import('~/components/templates/experience-section'),
  {
    ssr: false
  }
)
const BlogSection = dynamic(async () => await import('~/components/templates/blog-section'), {
  ssr: false
})
const TestimonialSection = dynamic(
  async () => await import('~/components/templates/testimonial-section'),
  {
    ssr: false
  }
)
const ContactSection = dynamic(async () => await import('~/components/templates/contact-section'), {
  ssr: false
})

type Props = {
  posts: Blog[]
}

const Index: NextPage<Props> = ({ posts }): JSX.Element => {
  return (
    <Layout>
      <HeroSection />
      <SocialLinkSection />
      <AboutSection />
      <Separator />
      <MySkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <Separator />
      <BlogSection
        {...{
          posts
        }}
      />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = () => {
  // Get all our blog posts
  const files = fs.readdirSync('src/markdown')
  const posts = files
    .map((fileName) => {
      const slug = fileName.replace('.md', '')
      const readFile = fs.readFileSync(`src/markdown/${fileName}`, 'utf-8')
      const { data: frontMatter } = matter(readFile)

      return {
        slug,
        frontMatter
      }
    })
    .slice(0, 4)

  return {
    props: {
      posts
    }
  }
}

export default Index

import React from 'react'
import dynamic from 'next/dynamic'
import type { NextPage } from 'next'

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

const Index: NextPage = (): JSX.Element => {
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
      <BlogSection />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </Layout>
  )
}

export default Index

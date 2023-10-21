import React from 'react'
import type { NextPage } from 'next'

import Layout from '~/components/templates/layout'
import HeroSection from '~/components/templates/hero-section'
import BlogSection from '~/components/templates/blog-section'
import AboutSection from '~/components/templates/about-section'
import ProjectsSection from '~/components/templates/projects-section'
import MySkillsSection from '~/components/templates/my-skills-section'
import ExperienceSection from '~/components/templates/experience-section'
import SocialLinkSection from '~/components/templates/social-link-section'
import TestimonialSection from '~/components/templates/testimonial-section'

const Index: NextPage = (): JSX.Element => {
  return (
    <Layout>
      <HeroSection />
      <SocialLinkSection />
      <AboutSection />
      <MySkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <BlogSection />
      <TestimonialSection />
    </Layout>
  )
}

export default Index

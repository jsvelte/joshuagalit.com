import React from 'react'
import type { NextPage } from 'next'

import Layout from '~/components/templates/layout'
import HeroSection from '~/components/templates/hero-section'
import AboutSection from '~/components/templates/about-section'
import SocialLinkSection from '~/components/templates/social-link-section'

const Index: NextPage = (): JSX.Element => {
  return (
    <Layout>
      <HeroSection />
      <SocialLinkSection />
      <AboutSection />
    </Layout>
  )
}

export default Index

import React from 'react'
import type { NextPage } from 'next'

import Layout from '~/components/templates/layout'
import HeroSection from '~/components/templates/hero-section'
import SocialLinkSection from '~/components/templates/social-link-section'

const Index: NextPage = (): JSX.Element => {
  return (
    <Layout>
      <HeroSection />
      <SocialLinkSection />
      <div className="h-[2000px]"></div>
    </Layout>
  )
}

export default Index

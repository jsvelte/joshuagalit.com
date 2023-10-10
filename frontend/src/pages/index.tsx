import React from 'react'
import Head from 'next/head'
import type { NextPage } from 'next'

import { Button } from '~/components/ui/button'

const Home: NextPage = (): JSX.Element => {
  return (
    <div>
      <Head>
        <title>Title</title>
      </Head>
      <p className="font-bold text-2xl"> Hello World</p>
      <Button variant="destructive">Hello</Button>
    </div>
  )
}

export default Home

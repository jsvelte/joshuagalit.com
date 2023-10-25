import Head from 'next/head'
import React, { FC, ReactNode } from 'react'

import { cn } from '~/utils/cn'

type Props = {
  metaTitle?: string
  children: ReactNode
}

const Layout: FC<Props> = ({ metaTitle, children }): JSX.Element => {
  return (
    <div
      className={cn(
        'overflow-hidden bg-white transition-colors',
        'duration-1000 dark:bg-slate-900'
      )}
    >
      <Head>
        <title>{(metaTitle as string) ?? 'Joshua Galit'}</title>
        <meta
          name="description"
          content="I'm Josh, residing in the province of Bato, Leyte. With 2 years of freelancing experience in video editing and 1.4 years of full-time work as a web developer at Sun Asterisk Philippines, I possess expertise in Fullstack application development, web design, and video editing. I excel at working under pressure, am highly adaptable in various situations, and demonstrate flexibility in my job. Consider hiring me for your needs!"
        />
      </Head>
      {children}
    </div>
  )
}

export default Layout

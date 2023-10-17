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
      </Head>
      {children}
    </div>
  )
}

export default Layout

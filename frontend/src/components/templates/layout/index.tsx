import Head from 'next/head'
import React, { FC, ReactNode } from 'react'

type Props = {
  metaTitle?: string
  children: ReactNode
}

const Layout: FC<Props> = ({ metaTitle, children }): JSX.Element => {
  return (
    <div className="overflow-hidden bg-white dark:bg-slate-900">
      <Head>
        <title>{(metaTitle as string) ?? 'Joshua Galit'}</title>
      </Head>
      {children}
    </div>
  )
}

export default Layout

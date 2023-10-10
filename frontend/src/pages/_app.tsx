import React, { FC } from 'react'
import type { AppProps } from 'next/app'
import { Open_Sans } from 'next/font/google'

import '~/styles/globals.css'
import { cn } from '~/lib/utils'

const openSans = Open_Sans({ subsets: ['latin'] })

const MyApp: FC<AppProps> = ({ Component, pageProps }): JSX.Element => {
  return (
    <div className={cn(openSans.className)}>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp

import Aos from 'aos'
import type { AppProps } from 'next/app'
import React, { FC, useEffect } from 'react'
import { Open_Sans } from 'next/font/google'

import '~/styles/globals.css'
import { cn } from '~/utils/cn'
import { ThemeProvider } from '~/components/templates/theme-provider'

const openSans = Open_Sans({ subsets: ['latin'] })

const MyApp: FC<AppProps> = ({ Component, pageProps }): JSX.Element => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100
    })
  }, [])

  return (
    <div className={cn(openSans.className)}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  )
}

export default MyApp

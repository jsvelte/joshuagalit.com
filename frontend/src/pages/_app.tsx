import Aos from 'aos'
import type { AppProps } from 'next/app'
import React, { FC, useEffect } from 'react'

import '~/styles/globals.css'
import { cn } from '~/utils/cn'
import { openSans } from '~/utils/font'
import FacebbokMessenger from '~/lib/facebook-messenger'
import { ThemeProvider } from '~/components/templates/theme-provider'

const MyApp: FC<AppProps> = ({ Component, pageProps }): JSX.Element => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100
    })
  }, [])

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className={cn(openSans.className)}>
        <Component {...pageProps} />
      </div>
      {process.env.NODE_ENV === 'production' && <FacebbokMessenger />}
    </ThemeProvider>
  )
}

export default MyApp

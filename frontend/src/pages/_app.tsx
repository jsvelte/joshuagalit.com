import Aos from 'aos'
import React, { useEffect } from 'react'
import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'

import '~/styles/globals.css'
import { openSans } from '~/utils/font'
import { ThemeProvider } from '~/components/templates/theme-provider'

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 0
    })
  }, [])

  return (
    <div className={openSans.className}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Toaster position="bottom-center" />
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  )
}

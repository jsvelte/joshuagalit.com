import Aos from 'aos'
import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'
import React, { FC, useEffect } from 'react'
// @ts-expect-error: Temporary workaround for missing types in 'react-messenger-customer-chat' library
import MessengerCustomerChat from 'react-messenger-customer-chat'

import '~/styles/globals.css'
import { openSans } from '~/utils/font'
import { ThemeProvider } from '~/components/templates/theme-provider'

const MyApp: FC<AppProps> = ({ Component, pageProps }): JSX.Element => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100
    })
  }, [])

  return (
    <div className={openSans.className}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Toaster position="bottom-center" />
        <Component {...pageProps} />
        {process.env.NODE_ENV === 'production' && (
          <MessengerCustomerChat
            pageId={process.env.MESSENGER_PAGE_ID}
            appId={process.env.MESSENGER_APP_ID}
          />
        )}
      </ThemeProvider>
    </div>
  )
}

export default MyApp

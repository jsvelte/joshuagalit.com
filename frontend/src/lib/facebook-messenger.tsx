import React from 'react'
import { FacebookProvider, CustomChat } from 'react-facebook'

export const FacebbokMessenger = (): JSX.Element => {
  return (
    <FacebookProvider appId={process.env.MESSENGER_APP_ID as string} chatSupport>
      <CustomChat pageId={process.env.MESSENGER_PAGE_ID as string} minimized={true} />
    </FacebookProvider>
  )
}

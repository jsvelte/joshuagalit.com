import React, { FC } from 'react'
import { FacebookProvider, CustomChat } from 'react-facebook'

const FacebbokMessenger: FC<Record<string, unknown>> = (): JSX.Element => {
  return (
    <FacebookProvider appId={process.env.MESSENGER_APP_ID as string} chatSupport>
      <CustomChat pageId={process.env.MESSENGER_PAGE_ID as string} minimized={true} />
    </FacebookProvider>
  )
}

export default FacebbokMessenger

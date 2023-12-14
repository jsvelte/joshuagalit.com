import React from 'react'
// @ts-expect-error: Temporary workaround for missing types in 'react-messenger-customer-chat' library
import MessengerCustomerChat from 'react-messenger-customer-chat'

export const FacebbokMessenger = (): JSX.Element => {
  return (
    <MessengerCustomerChat
      pageId={process.env.MESSENGER_APP_ID as string}
      appId={process.env.MESSENGER_PAGE_ID as string}
    />
  )
}

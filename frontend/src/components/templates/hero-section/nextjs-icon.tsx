import React from 'react'

import { cn } from '~/utils/cn'
import { NextJSIcon as NextJS } from '~/utils/icons/NextJSIcon'

export const NextJSIcon = (): JSX.Element => {
  return (
    <div>
      <NextJS
        className={cn(
          'absolute bottom-[250px] right-[30px] z-10 h-20',
          'w-20 scale-75 text-black sm:right-[80px] sm:scale-100'
        )}
      />
    </div>
  )
}

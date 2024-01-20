import React from 'react'

import { cn } from '~/utils/cn'
import { FigmaIcon as Figma } from '~/utils/icons/FigmaIcon'

export const FigmaIcon = (): JSX.Element => {
  return (
    <div
      className={cn(
        'absolute bottom-[90px] right-[40px] z-10 rounded-full',
        'bg-slate-200 p-2.5 shadow-md dark:bg-slate-800',
        'transition-colors duration-700'
      )}
    >
      <Figma className="h-9 w-9 sm:h-12 sm:w-12" />
    </div>
  )
}

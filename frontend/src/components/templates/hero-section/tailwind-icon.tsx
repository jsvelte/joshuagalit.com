import React from 'react'

import { cn } from '~/utils/cn'
import { TailwindcssIcon } from '~/utils/icons/TailwindcssIcon'

export const TailwindIcon = (): JSX.Element => {
  return (
    <div
      className={cn(
        'absolute bottom-[220px] right-[250px] z-10 rounded-full p-2.5',
        'shadow-md dark:bg-slate-800 sm:bottom-[220px] sm:right-[470px]',
        'transition-colors duration-700'
      )}
    >
      <TailwindcssIcon className="h-12 w-12 text-[#38bdf8]" />
    </div>
  )
}

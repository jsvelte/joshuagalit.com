import React from 'react'
import Link from 'next/link'

import { cn } from '~/utils/cn'
import { nunito } from '~/utils/font'

export const LogoTitle = (): JSX.Element => {
  return (
    <Link href="/" className="outline-indigo-500">
      <span className={cn(nunito.className, 'text-xl font-extrabold md:text-2xl')}>
        JoshG<span className="text-indigo-500">.</span>
      </span>
    </Link>
  )
}

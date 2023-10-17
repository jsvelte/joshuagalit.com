import React, { FC } from 'react'
import { Nunito } from 'next/font/google'

import { cn } from '~/utils/cn'
import BubbleCircleIcon from '~/utils/icons/BubbleCircleIcon'

type Props = {
  title: string
}

const nunito = Nunito({ subsets: ['latin'] })

const SectionTitle: FC<Props> = ({ title }): JSX.Element => {
  return (
    <div className="relative">
      <h1 className={cn('text-3xl font-extrabold md:text-5xl', nunito.className)}>{title}</h1>
      <BubbleCircleIcon className="absolute -left-12 -top-5" />
    </div>
  )
}

export default SectionTitle

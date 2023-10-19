import React, { FC } from 'react'

import { cn } from '~/utils/cn'
import { nunito } from '~/utils/font'
import BubbleCircleIcon from '~/utils/icons/BubbleCircleIcon'

type Props = {
  title: string
}

const SectionTitle: FC<Props> = ({ title }): JSX.Element => {
  return (
    <div className="relative">
      <h1 className={cn('text-3xl font-extrabold md:text-5xl', nunito.className)}>{title}</h1>
      <BubbleCircleIcon className="absolute -left-12 -top-5 select-none" />
    </div>
  )
}

export default SectionTitle

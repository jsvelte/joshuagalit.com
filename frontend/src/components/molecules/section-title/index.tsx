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
      <h2 className={cn('h2', nunito.className)}>{title}</h2>
      <BubbleCircleIcon className="absolute -left-12 -top-5 select-none" />
    </div>
  )
}

export default SectionTitle

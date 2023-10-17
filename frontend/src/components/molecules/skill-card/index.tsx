import Image from 'next/image'
import React, { FC } from 'react'

import { cn } from '~/utils/cn'
import { Skill } from '~/utils/constant/my-skills'

const SkillCard: FC<Skill> = ({ title, image }): JSX.Element => {
  return (
    <div
      className={cn(
        'rounded-xl border border-transparent bg-slate-50 ',
        'transition-colors duration-1000 hover:shadow-lg dark:border-slate-700',
        'h-44 flex-1 dark:bg-slate-800 hover:dark:border-slate-400'
      )}
    >
      <div className="relative flex flex-col items-center space-y-6 px-6 py-8">
        <Image
          src={image}
          width={50}
          height={50}
          priority
          alt=""
          style={{ width: 'auto', height: 'auto' }}
        />
        <h2 className="text-base font-medium text-slate-700 dark:text-slate-300 sm:text-lg md:text-xl">
          {title}
        </h2>
      </div>
    </div>
  )
}

export default SkillCard

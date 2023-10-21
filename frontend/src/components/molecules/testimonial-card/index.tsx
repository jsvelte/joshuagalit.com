import Image from 'next/image'
import React, { FC } from 'react'

import { Card } from '~/components/atoms/card'
import { Testimony } from '~/utils/constant/testimonials'

type Props = {
  testimony: Testimony
}

const TestimonialCard: FC<Props> = ({ testimony }): JSX.Element => {
  return (
    <Card className="relative mx-auto flex w-full max-w-3xl flex-col items-center justify-center overflow-visible rounded-[40px] dark:bg-slate-900">
      <div className="absolute -top-16">
        <Image
          src={testimony.profileImageUrl}
          width={250}
          height={250}
          priority
          onError={() => {}}
          style={{ height: 'auto', width: 'auto' }}
          className="rounded-full"
          alt=""
        />
      </div>
      <div className="mt-10 p-4 sm:p-6 md:p-8">
        <div className="p-8 text-sm font-normal italic leading-loose text-slate-700 dark:text-slate-100 md:p-10 md:text-base">
          <p dangerouslySetInnerHTML={{ __html: testimony.text }} />
        </div>
        <div className="flex flex-col items-center space-y-1">
          <h4 className="text-lg font-bold">{testimony.name}</h4>
          <span className="text-sm text-slate-500 dark:text-slate-400">{testimony.position}</span>
          <img src={testimony.companyImageUrl} />
        </div>
      </div>
    </Card>
  )
}

export default TestimonialCard

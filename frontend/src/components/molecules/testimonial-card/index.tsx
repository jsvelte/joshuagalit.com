import React from 'react'
import Image from 'next/image'

import { cn } from '~/utils/cn'
import { oleoScript } from '~/utils/font'
import { Card } from '~/components/atoms/card'
import { Testimony } from '~/utils/constant/testimonials'

type TestimonialCardProps = {
  testimony: Testimony
}

export const TestimonialCard = ({ testimony }: TestimonialCardProps): JSX.Element => {
  return (
    <Card className="relative mx-auto flex w-full max-w-3xl flex-col items-center justify-center overflow-visible rounded-[40px] dark:bg-slate-900">
      <p
        className={cn(
          oleoScript.className,
          'absolute left-10 top-10 text-8xl font-extrabold text-slate-400'
        )}
      >
        “
      </p>
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
        <div className="px-14 py-8 text-sm font-normal italic leading-loose text-slate-700 dark:text-slate-100 md:p-10 md:text-base">
          <p dangerouslySetInnerHTML={{ __html: testimony.text }} />
        </div>
        <div className="flex flex-col items-center space-y-1">
          <p className="text-lg font-bold">{testimony.name}</p>
          <span className="text-sm text-slate-500 dark:text-slate-400">{testimony.position}</span>
          <img src={testimony.companyImageUrl} alt={testimony.name} />
        </div>
      </div>
    </Card>
  )
}

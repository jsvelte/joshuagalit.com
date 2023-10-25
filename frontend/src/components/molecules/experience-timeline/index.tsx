import React, { FC } from 'react'

import { cn } from '~/utils/cn'
import { nunito } from '~/utils/font'
import { Experience } from '~/utils/constant/experiences'

type Props = {
  exp: Experience
}

const ExperienceTimeLine: FC<Props> = ({ exp }): JSX.Element => {
  return (
    <div
      className="relative mt-16 flex items-start gap-x-6 sm:gap-x-12 md:gap-x-24"
      data-aos="fade-up"
      data-aos-offset="400"
      data-aos-delay={exp.delay}
    >
      <div className="flex items-start space-x-2 sm:space-x-6 md:space-x-8">
        <div className="relative hidden shrink-0 rounded bg-slate-100 shadow-md dark:bg-slate-800 md:block">
          <span className="relative z-20 px-2 py-1.5 text-sm font-bold">
            {cn(exp.yearFrom + ' - ' + exp.yearTo)}
          </span>
          <span className="absolute -right-2 top-1.5 rotate-45 bg-slate-100 p-2.5 dark:bg-slate-800"></span>
        </div>
        <div className="flex flex-col items-center space-y-6">
          <span className="h-6 w-6 rounded-full bg-sky-500"></span>
          <span
            className={cn(
              'w-1.5 rounded-full bg-slate-200 dark:bg-slate-700',
              exp.id === 1 ? 'h-[480px] sm:h-[380px] md:h-[420px]' : '',
              exp.id === 2 ? 'h-[260px] sm:h-[220px] md:h-[260px]' : '',
              exp.id === 3 ? 'h-[240px] sm:h-[220px]' : '',
              exp.id === 4 ? 'h-[240px] sm:h-[240px]' : ''
            )}
          ></span>
        </div>
      </div>
      <div>
        <h1 className={cn(nunito.className, 'text-2xl font-bold md:text-3xl')}>{exp.jobTitle}</h1>
        <div className="flex flex-wrap items-start gap-x-4 sm:items-center">
          <img src={exp.company.image} className={cn(exp.id === 4 ? 'w-8' : 'w-14')} alt="" />
          <p className="font-semibold text-slate-700 dark:text-slate-400 md:text-lg">
            {exp.company.name} • {exp.company.position}
          </p>
        </div>
        <p
          className="mt-4 text-sm text-slate-600 dark:text-slate-400 md:pr-24 md:text-base lg:pr-32"
          dangerouslySetInnerHTML={{ __html: exp.description }}
        />
      </div>
    </div>
  )
}

export default ExperienceTimeLine

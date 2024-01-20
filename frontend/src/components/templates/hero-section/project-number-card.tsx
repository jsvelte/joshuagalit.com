import React from 'react'
import { Plus } from 'lucide-react'
import CountUp from 'react-countup'

import { cn } from '~/utils/cn'
import { Card } from '~/components/atoms/card'

export const ProjectNumberCard = (): JSX.Element => {
  return (
    <div className="absolute right-[350px] z-10 sm:right-[400px]">
      <Card
        className={cn(
          'relative w-full max-w-[240px] border border-slate-200 backdrop-blur-xl',
          'bg-[#FDFDFD]/50 blur-none hover:bg-[#FDFDFD]/80 dark:border-slate-700',
          'transition-colors duration-700 dark:bg-slate-900/50 hover:dark:bg-slate-900/80'
        )}
      >
        <div className="px-6 py-3">
          <div className="relative flex items-start text-indigo-500">
            <h2 className="text-xl font-bold sm:text-3xl">
              <CountUp start={1} end={25} duration={6} enableScrollSpy />
            </h2>
            <Plus size={14} strokeWidth="5" />
          </div>
          <p className="pt-1 text-sm font-bold text-slate-800 dark:text-slate-300 sm:text-base">
            Completed Projects
          </p>
        </div>
      </Card>
    </div>
  )
}

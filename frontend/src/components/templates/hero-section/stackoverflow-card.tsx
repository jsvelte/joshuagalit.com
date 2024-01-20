import CountUp from 'react-countup'
import React, { useEffect, useState } from 'react'

import { cn } from '~/utils/cn'
import { Card } from '~/components/atoms/card'
import { responseDataSchema } from '~/utils/types'
import { TropyIcon } from '~/utils/icons/TropyIcon'

export const StackOverflowCard = (): JSX.Element => {
  const [totalReputation, setTotalReputation] = useState<number>(1)

  const fetchData = async (): Promise<void> => {
    try {
      const response = await fetch(
        'https://api.stackexchange.com/2.3/users/14108225/reputation?site=stackoverflow'
      )
      const rawData = await response.json()

      // Validate the response data against the schema
      const parsedData = responseDataSchema.parse(rawData)

      // Calculate the total reputation
      const total = parsedData.items.reduce((sum, item) => sum + item.reputation_change, 0)

      setTotalReputation(total)
    } catch {
      throw new Error('Something went wrong')
    }
  }

  useEffect(() => {
    void fetchData()
  }, [])

  return (
    <div className="absolute right-0 z-10">
      <Card
        className={cn(
          'relative w-full max-w-[240px] border border-slate-200 backdrop-blur-xl',
          'bg-[#FDFDFD]/50 blur-none hover:bg-[#FDFDFD]/80 dark:border-slate-700',
          'transition-colors duration-700 dark:bg-slate-900/50 hover:dark:bg-slate-900/80'
        )}
      >
        <div className="px-6 py-3">
          <TropyIcon className="h-8 w-8 sm:h-14 sm:w-14" />
          <p className="pt-1 text-sm font-bold text-slate-800 dark:text-slate-300 sm:text-base">
            <CountUp start={1} end={totalReputation} duration={4} enableScrollSpy />+ Stack Overflow
            Reputation
          </p>
        </div>
      </Card>
    </div>
  )
}

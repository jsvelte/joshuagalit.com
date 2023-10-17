import Image from 'next/image'
import React, { FC } from 'react'
import { Github, Link, Star } from 'lucide-react'

import { cn } from '~/utils/cn'
import { nunito, openSans } from '~/utils/font'
import { Button } from '~/components/atoms/button'
import { IProject } from '~/utils/constant/my-projects'
import useScreenCondition from '~/hooks/useScreenCondition'
import { Card, CardContent, CardTitle } from '~/components/atoms/card'

type Props = {
  project: IProject
}

const ProjectCard: FC<Props> = ({ project }): JSX.Element => {
  const { title, description, demoUrl, imageUrl, rating, sourceCodeUrl } = project

  const isMediumScreen = useScreenCondition('(max-width: 768px)')

  const renderRatings = (count: number): JSX.Element[] => {
    const filledStars = Array.from({ length: count }, (_, index) => (
      <Star key={cn('filled-' + index)} fill="#f59e0b" size={20} stroke="none" />
    ))
    const emptyStars = Array.from({ length: 5 - count }, (_, index) => (
      <Star key={cn('empty-' + index)} size={20} stroke="#94a3b8" strokeWidth={1} />
    ))
    return [...filledStars, ...emptyStars]
  }

  return (
    <Card className="select-none">
      <Image
        src={imageUrl}
        width={500}
        height={256}
        priority
        alt=""
        style={{ width: 'auto', height: 'auto' }}
      />
      <CardContent className="mt-4 text-slate-600 dark:text-slate-300">
        <div className="flex items-center gap-x-1">{renderRatings(rating)}</div>
        <CardTitle className={cn(nunito.className, 'mt-2')}>{title}</CardTitle>
        <p className={cn(openSans.className, 'mt-2 text-sm')}>{description}</p>
        <div className="mt-6 grid grid-cols-2 gap-x-4">
          <Button
            variant="primary"
            size={isMediumScreen ? 'lg' : 'xl'}
            className="relative rounded-sm text-base"
            onClick={() => window.open(sourceCodeUrl, '_blank')}
          >
            <Github size={18} className="absolute left-4" />
            Code
          </Button>
          <Button
            variant="outline"
            size={isMediumScreen ? 'lg' : 'xl'}
            className="relative rounded-sm text-base"
            onClick={() => window.open(demoUrl, '_blank')}
          >
            <Link size={18} className="absolute left-4" />
            Demo
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default ProjectCard

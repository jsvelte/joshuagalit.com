import React, { FC } from 'react'
import { Nunito } from 'next/font/google'
import { ArrowUp, Plus } from 'lucide-react'

import { cn } from '~/utils/cn'
import { Card } from '~/components/atoms/card'
import TropyIcon from '~/utils/icons/TropyIcon'
import FigmaIcon from '~/utils/icons/FigmaIcon'
import NextJSIcon from '~/utils/icons/NextJSIcon'
import Header from '~/components/organisms/header'
import { Button } from '~/components/atoms/button'
import TailwindcssIcon from '~/utils/icons/TailwindcssIcon'
import BubbleCircleIcon from '~/utils/icons/BubbleCircleIcon'

const nunito = Nunito({ subsets: ['latin'] })

const HeroSection: FC<Record<string, unknown>> = (): JSX.Element => {
  return (
    <section
      className={cn(
        'relative h-[550px] w-full bg-section dark:bg-dark-section sm:h-[780px]',
        'px-2 py-6 text-slate-800 dark:text-white md:px-4'
      )}
    >
      <div className="mx-auto flex max-w-6xl place-content-center justify-center">
        <Header />
      </div>
      <div className="mx-auto max-w-6xl px-4 py-4">
        <div className="relative z-20 mt-36">
          <div
            className="relative flex w-full max-w-xs md:max-w-sm"
            data-aos="fade-down"
            data-aos-delay="500"
          >
            <h1 className={cn('text-5xl font-extrabold lg:text-6xl', nunito.className)}>
              Hi, I Am Joshua Galit
            </h1>
            <BubbleCircleIcon className="absolute right-0 top-8 flex md:top-12" />
          </div>
          <div className="mt-8 w-full max-w-lg">
            <p
              className="text-slate-700 dark:text-slate-300 md:text-xl lg:text-2xl"
              data-aos="fade-down"
              data-aos-delay="600"
            >
              Experienced in web design, video editing, and fullstack development, with a passion
              for crafting engaging user experiences
            </p>
          </div>
          <div
            className="mt-14 inline-flex items-center space-x-4"
            data-aos="fade-down"
            data-aos-delay="700"
          >
            <Button
              variant="primary"
              className="px-10 py-6 text-base font-semibold md:px-14 md:py-7 md:text-lg"
            >
              Hire Me
            </Button>
            <Button
              variant="ghost"
              className={cn(
                'inline-flex items-center space-x-3 px-6 py-6',
                'text-base md:px-14 md:py-7 md:text-lg'
              )}
            >
              <span className="font-semibold">Project</span>
              <ArrowUp className="rotate-45" />
            </Button>
          </div>
        </div>
        <div
          className="relative opacity-50 blur-sm lg:opacity-100 lg:blur-none"
          data-aos="fade-left"
          data-aos-delay="600"
        >
          {/* My Profile */}
          <img
            src="/images/user/joshuagalit-banner.png"
            className={cn(
              'absolute -right-[80px] -top-[750px] z-10 rotate-[38deg]',
              'scale-75 sm:-right-[150px] sm:-top-[1000px] sm:scale-125'
            )}
          />
          {/* Tailwindcss Icon */}
          <TailwindIconComp />
          {/* NextJS Icon */}
          <NextJSIconComp />
          {/* Figma Icon */}
          <FigmaIconComp />
          {/* Stack Overflow Card */}
          <StackOverflowCardComp />
          {/* Number of Projects Card */}
          <ProjectNumberCardComp />
        </div>
      </div>
    </section>
  )
}

function TailwindIconComp(): JSX.Element {
  return (
    <div
      className={cn(
        'absolute bottom-[220px] right-[250px] z-10 rounded-full p-2.5',
        'shadow-md dark:bg-slate-800 sm:bottom-[220px] sm:right-[450px]'
      )}
    >
      <TailwindcssIcon className="h-12 w-12 text-[#38bdf8]" />
    </div>
  )
}

function NextJSIconComp(): JSX.Element {
  return (
    <div>
      <NextJSIcon
        className={cn(
          'absolute bottom-[210px] right-[30px] z-10 h-20',
          'w-20 scale-75 text-black sm:right-[80px] sm:scale-100'
        )}
      />
    </div>
  )
}

function FigmaIconComp(): JSX.Element {
  return (
    <div
      className={cn(
        'absolute bottom-[80px] right-[40px] z-10 rounded-full',
        'bg-slate-200 p-2.5 shadow-md dark:bg-slate-800'
      )}
    >
      <FigmaIcon className="h-9 w-9 sm:h-12 sm:w-12" />
    </div>
  )
}

function StackOverflowCardComp(): JSX.Element {
  return (
    <div className="absolute right-0 z-10">
      <Card
        className={cn(
          'relative w-full max-w-[240px] border border-slate-200 backdrop-blur-xl',
          'bg-[#FDFDFD]/50 blur-none dark:border-slate-700 dark:bg-slate-900/50'
        )}
      >
        <div className="px-6 py-3">
          <TropyIcon className="h-8 w-8 sm:h-14 sm:w-14" />
          <p className="pt-1 text-sm font-bold text-slate-800 dark:text-slate-300 sm:text-base">
            1,149+ Stack Overflow Reputation
          </p>
        </div>
      </Card>
    </div>
  )
}

function ProjectNumberCardComp(): JSX.Element {
  return (
    <div className="absolute right-[350px] z-10 sm:right-[400px]">
      <Card
        className={cn(
          'relative w-full max-w-[240px] border border-slate-200 backdrop-blur-xl',
          'bg-[#FDFDFD]/50 blur-none dark:border-slate-700 dark:bg-slate-900/50'
        )}
      >
        <div className="px-6 py-3">
          <div className="relative flex items-start text-indigo-500">
            <h2 className="text-xl font-bold sm:text-3xl">25</h2>
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

export default HeroSection

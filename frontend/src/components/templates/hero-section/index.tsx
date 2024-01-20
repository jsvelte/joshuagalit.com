import Image from 'next/image'
import { ArrowUp } from 'lucide-react'
import React, { useState } from 'react'

import { cn } from '~/utils/cn'
import { TLink } from '~/utils/types'
import { nunito } from '~/utils/font'
import { Button } from '~/components/atoms/button'
import { Header } from '~/components/organisms/header'
import { BubbleCircleIcon } from '~/utils/icons/BubbleCircleIcon'

import { FigmaIcon } from './figma-icon'
import { NextJSIcon } from './nextjs-icon'
import { TailwindIcon } from './tailwind-icon'
import { StackOverflowCard } from './stackoverflow-card'
import { ProjectNumberCard } from './project-number-card'

export default function HeroSection(): JSX.Element {
  const [links] = useState<TLink[]>([
    {
      text: 'Home',
      href: 'home',
      offset: -50
    },
    {
      text: 'Projects',
      href: 'projects',
      offset: -50
    },
    {
      text: 'Blog',
      href: 'blog',
      offset: 0
    },
    {
      text: 'Testimonial',
      href: 'testimonial',
      offset: 0
    }
  ])

  return (
    <section
      id="home"
      className={cn(
        'section-block relative h-[550px] w-full sm:h-[780px]',
        'px-2 py-6 transition-colors duration-700 md:px-4'
      )}
    >
      <div className="mx-auto flex max-w-6xl place-content-center justify-center">
        <Header {...{ links }} />
      </div>
      <div className="mx-auto max-w-6xl px-4 py-4">
        <div className="relative z-20 mt-36">
          <div
            className="relative flex w-full max-w-xs md:max-w-sm"
            data-aos="fade-down"
            data-aos-delay="500"
          >
            <h1 className={cn('h1', nunito.className)}>Hi, I Am Joshua Galit</h1>
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
            <a href="/pdf/josh-resume.pdf" target="_blank" className="outline-none">
              <Button
                variant="primary"
                className="px-10 py-6 text-base font-semibold md:px-14 md:py-7 md:text-lg"
              >
                Hire Me
              </Button>
            </a>
            <a href="#projects">
              <Button
                variant="ghost"
                className={cn(
                  'inline-flex items-center space-x-3 px-6 py-6',
                  'text-base md:px-11 md:py-7 md:text-lg'
                )}
              >
                <span className="font-semibold">Project</span>
                <ArrowUp className="rotate-45" />
              </Button>
            </a>
          </div>
        </div>
        <div
          className="relative opacity-50 blur-sm lg:opacity-100 lg:blur-none"
          data-aos="fade-left"
          data-aos-delay="600"
        >
          {/* My Profile */}
          <div
            className={cn(
              'absolute -right-[80px] -top-[750px] z-10 rotate-[38deg]',
              'scale-75 sm:-right-[150px] sm:-top-[1050px] sm:scale-125'
            )}
          >
            <Image
              src="/images/user/joshuagalit-banner-1.png"
              quality={100}
              width={400}
              height={400}
              priority
              style={{ width: 'auto', height: 'auto' }}
              className="clip"
              alt="Profile"
            />
          </div>
          {/* Tailwindcss Icon */}
          <TailwindIcon />
          {/* NextJS Icon */}
          <NextJSIcon />
          {/* Figma Icon */}
          <FigmaIcon />
          {/* Stack Overflow Card */}
          <StackOverflowCard />
          {/* Number of Projects Card */}
          <ProjectNumberCard />
        </div>
      </div>
    </section>
  )
}

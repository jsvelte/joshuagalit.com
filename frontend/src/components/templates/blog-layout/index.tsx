import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import DarkModeToggle from 'react-dark-mode-toggle'
import React, { ReactNode, useEffect, useState } from 'react'

import { cn } from '~/utils/cn'
import Layout from './../layout'
import { TLink } from '~/utils/types'
import { Badge } from '~/components/atoms/badge'
import { Button } from '~/components/atoms/button'
import ScrollProgress from '~/lib/scroll-progress'
import { LogoTitle } from '~/components/atoms/logo-title'

type BlogLayoutProps = {
  title: string
  publishedAt: string
  readTime: number
  children: ReactNode
}

export default function BlogLayout(props: BlogLayoutProps): JSX.Element {
  const { title, publishedAt, readTime, children } = props

  const [header, setHeader] = useState<boolean>(false)
  const [links] = useState<TLink[]>([
    {
      text: 'Home',
      href: '/',
      offset: 0
    },
    {
      text: 'Projects',
      href: '/#projects',
      offset: 0
    },
    {
      text: 'Blog',
      href: '/blog',
      offset: 0
    }
  ])

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 36 ? setHeader(true) : setHeader(false)
    })
  }, [header])

  const { theme, setTheme } = useTheme()
  const toggleMode = (): void => {
    switch (theme) {
      case 'light':
        setTheme('dark')
        break
      default:
        setTheme('light')
    }
  }

  return (
    <Layout metaTitle={`Blog - ${title}`}>
      <ScrollProgress />
      <div className="fixed top-0 z-50 w-full flex-1">
        <header
          className={cn(
            header ? 'py-2' : 'py-4 md:py-6',
            'bg-section px-4 transition-all duration-700 dark:bg-dark-section'
          )}
        >
          <div className="mx-auto flex w-full max-w-2xl flex-wrap items-center justify-between">
            <div className="flex flex-wrap items-center gap-x-4">
              <LogoTitle />
              <nav>
                <ul className="inline-flex flex-wrap items-center gap-x-2">
                  {links?.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href}>
                        <Button
                          variant="ghost"
                          className="px-3 font-semibold hover:bg-slate-200 hover:text-slate-900 dark:hover:bg-slate-500"
                        >
                          {link.text}
                        </Button>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <DarkModeToggle
              className="rounded-full focus:outline-none dark:ring-1 dark:ring-inset"
              onChange={toggleMode}
              checked={theme !== 'light'}
              size={55}
            />
          </div>
        </header>
      </div>
      <article className="mt-20 flex flex-col space-y-8 px-4 py-4 md:py-8">
        <section className="mx-auto flex w-full max-w-2xl items-center justify-between">
          <div className="flex flex-col gap-x-4 gap-y-2 md:flex-row">
            <div>
              <Image
                src="/images/user/joshuagalit.png"
                width={50}
                height={50}
                priority
                alt="profile"
                style={{
                  width: 'auto',
                  height: 'auto'
                }}
              />
            </div>
            <div className="text-sm font-medium text-slate-700 dark:text-slate-300">
              <h2 className="text-sm font-bold md:text-base">Joshua Galit</h2>
              <p>Web Developer / Video Editor / UI Designer</p>
              <span>{publishedAt}</span>
            </div>
          </div>
          <div>
            <Badge variant="secondary">{readTime} min read</Badge>
          </div>
        </section>
        <main>{children}</main>
      </article>
    </Layout>
  )
}

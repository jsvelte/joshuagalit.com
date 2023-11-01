import Link from 'next/link'
import { useTheme } from 'next-themes'
import DarkModeToggle from 'react-dark-mode-toggle'
import React, { FC, useEffect, useState } from 'react'

import { cn } from '~/utils/cn'
import { TLink } from '~/utils/types'
import { nunito } from '~/utils/font'
import { Button } from '~/components/atoms/button'
import useScreenCondition from '~/hooks/useScreenCondition'
import NavPopover from '~/components/molecules/nav-popover/NavPopover'

type Props = {
  links: TLink[]
}

const Header: FC<Props> = ({ links }): JSX.Element => {
  const { theme, setTheme } = useTheme()
  const isMediumScreen = useScreenCondition('(max-width: 768px)')

  const [header, setHeader] = useState<boolean>(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 36 ? setHeader(true) : setHeader(false)
    })
  }, [header])

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
    <div
      className={cn(
        header ? 'top-4' : 'top-4 md:top-8',
        'fixed z-50 w-full max-w-xl px-4',
        'transition-all duration-500 md:max-w-3xl lg:max-w-6xl'
      )}
    >
      <header
        className={cn(
          'flex items-center justify-between rounded-full',
          'border border-slate-200 bg-white shadow-sm',
          'dark:border-slate-800 dark:bg-slate-900',
          'transition-colors duration-700'
        )}
      >
        <div className="inline-flex items-center gap-x-12 pl-6">
          <Link href="/" className="outline-indigo-500">
            <span className={cn(nunito.className, 'text-xl font-extrabold md:text-2xl')}>
              JoshG<span className="text-indigo-500">.</span>
            </span>
          </Link>
          {!isMediumScreen && (
            <nav>
              <ul className="flex items-center gap-x-10 font-semibold text-slate-700 dark:text-slate-300">
                {links?.map((link, index) => (
                  <li key={index} className="relative flex flex-col items-center">
                    <a href={link.href} className="outline-indigo-500">
                      {link.text}
                    </a>
                    <span
                      className={cn(
                        'absolute -bottom-3 h-[5px] w-10 rounded-t-md',
                        link.text === 'Home' ? ' bg-indigo-500' : 'bg-transparent'
                      )}
                    ></span>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
        <div className="relative inline-flex items-center space-x-2 py-1 pr-1">
          <DarkModeToggle
            className="rounded-full focus:outline-none dark:ring-1 dark:ring-inset"
            onChange={toggleMode}
            checked={theme !== 'light'}
            size={55}
          />
          {isMediumScreen ? (
            <NavPopover
              {...{
                links
              }}
            />
          ) : (
            <a href="#contact">
              <Button variant="primary" className="rounded-full px-8 outline-indigo-500">
                Contact
              </Button>
            </a>
          )}
        </div>
      </header>
    </div>
  )
}

export default Header

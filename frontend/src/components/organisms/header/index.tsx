import { useTheme } from 'next-themes'
import { Link as ScrollLink } from 'react-scroll'
import DarkModeToggle from 'react-dark-mode-toggle'
import React, { FC, useEffect, useState } from 'react'

import { cn } from '~/utils/cn'
import { TLink } from '~/utils/types'
import { Button } from '~/components/atoms/button'
import { LogoTitle } from '~/components/atoms/logo-title'
import useScreenCondition from '~/hooks/useScreenCondition'
import NavPopover from '~/components/molecules/nav-popover/NavPopover'

type Props = {
  links: TLink[]
}

const Header: FC<Props> = ({ links }): JSX.Element => {
  const { theme, setTheme } = useTheme()
  const isMediumScreen = useScreenCondition('(max-width: 768px)')

  const [header, setHeader] = useState<boolean>(false)
  const [activeNav, setActiveNav] = useState<number | null>(null)

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

  const handleOnSetActive = (link: TLink): void => {
    const index = links.findIndex((l) => l.href === link.href)
    setActiveNav(index)
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
          <LogoTitle />
          {!isMediumScreen && (
            <nav>
              <ul className="flex items-center gap-x-10 font-semibold text-slate-700 dark:text-slate-300">
                {links?.map((link, index) => (
                  <li key={index} className="relative flex flex-col items-center">
                    <ScrollLink
                      to={link.href}
                      spy={true}
                      smooth={true}
                      offset={link.offset}
                      duration={200}
                      onSetActive={() => {
                        handleOnSetActive(link)
                      }}
                      className="cursor-pointer select-none"
                    >
                      {link.text}
                    </ScrollLink>
                    <span
                      className={cn(
                        'absolute -bottom-3 h-[5px] w-10 rounded-t-md transition duration-300',
                        Number(activeNav) === index ? ' w-full bg-indigo-500' : 'bg-transparent'
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
                links,
                activeNav,
                handleOnSetActive
              }}
            />
          ) : (
            <ScrollLink to="contact">
              <Button variant="primary" className="rounded-full px-8 outline-indigo-500">
                Contact
              </Button>
            </ScrollLink>
          )}
        </div>
      </header>
    </div>
  )
}

export default Header

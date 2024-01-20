import React from 'react'
import { Menu } from 'lucide-react'
import { Link as ScrollLink } from 'react-scroll'

import { TLink } from '~/utils/types'
import { Button } from '~/components/atoms/button'
import { Popover, PopoverContent, PopoverTrigger } from '~/components/templates/popover'

type NavPopoverProps = {
  links: TLink[]
  activeNav: number | null
  handleOnSetActive: (link: TLink) => void
}

export const NavPopover = (props: NavPopoverProps): JSX.Element => {
  const { links, activeNav, handleOnSetActive } = props

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          className="rounded-full px-2.5 text-slate-700 outline-indigo-500 dark:text-slate-300"
        >
          <Menu size={22} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="mt-2 w-full overflow-hidden rounded-xl p-0 dark:bg-slate-800">
        <div className="px-4 py-3">
          {links.map((link, index) => (
            <ScrollLink
              key={index}
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
              <Button
                variant={Number(activeNav) === index ? 'primary' : 'ghost'}
                className="inline-flex w-full justify-start dark:hover:bg-slate-700"
              >
                {link.text}
              </Button>
            </ScrollLink>
          ))}
        </div>
        <div className="bg-slate-900 px-4 py-2.5">
          <ScrollLink to="contact">
            <Button variant="primary" size="sm" className="w-full rounded-full text-sm">
              Contact
            </Button>
          </ScrollLink>
        </div>
      </PopoverContent>
    </Popover>
  )
}

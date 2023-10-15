import React, { FC } from 'react'
import { Menu } from 'lucide-react'

import { Button } from '~/components/atoms/button'
import { TLink } from '~/components/organisms/header'
import { Popover, PopoverContent, PopoverTrigger } from '~/components/templates/popover'

type Props = {
  links: TLink[]
}

const NavPopover: FC<Props> = ({ links }): JSX.Element => {
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
            <a key={index} href={link.href}>
              <Button
                variant="ghost"
                className="inline-flex w-full justify-start dark:hover:bg-slate-700"
              >
                {link.text}
              </Button>
            </a>
          ))}
        </div>
        <div className="bg-slate-900 px-4 py-2.5">
          <Button variant="primary" size="sm" className="w-full rounded-full text-sm">
            Contact
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default NavPopover

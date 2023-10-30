import * as React from 'react'
import * as SeparatorPrimitive from '@radix-ui/react-separator'

import { cn } from '~/utils/cn'

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(({ className, orientation = 'horizontal', decorative = true, ...props }, ref) => (
  <SeparatorPrimitive.Root
    ref={ref}
    decorative={decorative}
    orientation={orientation}
    data-aos="fade-up"
    className={cn(
      'shrink-0 bg-slate-200 dark:bg-slate-700',
      'transition-colors duration-700',
      orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
      className,
      'mx-auto w-full max-w-2xl'
    )}
    {...props}
  />
))
Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }

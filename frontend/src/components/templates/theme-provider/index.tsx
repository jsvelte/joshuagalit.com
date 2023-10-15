import React, { FC } from 'react'
import { type ThemeProviderProps } from 'next-themes/dist/types'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

export const ThemeProvider: FC<ThemeProviderProps> = ({ children, ...props }): JSX.Element => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

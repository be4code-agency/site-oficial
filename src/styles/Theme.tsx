import React, { ReactNode } from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'

const round = (num: number) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const rem = (px: number) => `${round(px / 16)}rem`

export const theme: DefaultTheme = {
  colors: {
    white: '#FFFFFF',
    ligthGray: '#f1f0f5',
    black: '#050505',
    darkPurple: '#222831',
    ligthPurple: '#0097bd',
    purple: '#007bff',
    purpleHover: '#30bdff',
    gradientPurple: 'linear-gradient(45deg, #007bff 20%, #0097bd 100%)'
    /* gradientPurple: 'linear-gradient(45deg, rgba(141,138,237,1) 20%, rgba(58,54,191,1) 100%)' */
  },
  fontFamily: {
    raleway: ['Raleway', 'sans-serif'].join(',')
  },
  fontSize: {
    xs: rem(10),
    sm: rem(12),
    md: rem(14),
    base: rem(16),
    lg: rem(18),
    xl: rem(20),
    '2xl': rem(24),
    '3xl': rem(32),
    '4xl': rem(40),
    '5xl': rem(64),
  },
  breakPoints:{

    xs: '575px',
    sm: '767px',
    md: '991px',
    lg: '1199px',
    xl: '1399px',

  }
}

interface ThemeProps {
  children: ReactNode
}

export function Theme({ children }: ThemeProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

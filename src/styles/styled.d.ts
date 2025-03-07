import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius?: string

    colors: {
      white: string
      ligthGray: string
      black: string
      ligthPurple: string
      darkPurple: string
      purple: string
      purpleHover: string
      gradientPurple: string
    }
    fontFamily: {
      raleway: string
    }
    fontSize: {
      xs: string
      sm: string
      md: string
      base: string
      lg: string
      xl: string
      '2xl': string
      '3xl': string
      '4xl': string
      '5xl': string
    }
    breakPoints: {

      xs: string
      sm: string
      md: string
      lg: string
      xl: string

    }
  }
}

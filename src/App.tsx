import { BrowserRouter } from 'react-router-dom'

import { AppRoutes } from './routes'

import { Theme } from './styles/Theme'
import { GlobalStyle } from './styles/global'
import { Normalize } from 'styled-normalize'
import ScrollToTop from './helpers/ScrollToTop'

export default function App() {
  return (
    <BrowserRouter>
      <Theme>
        <ScrollToTop />
        <AppRoutes />
        <GlobalStyle />
        <Normalize />
      </Theme>
    </BrowserRouter>
  )
}

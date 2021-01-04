import React from "react"

import Layout from "../components/layout"
import { ThemeProvider } from 'styled-components'

const theme = {
  color: '#111',
  headerFontSize: '14px',
  footerTitleSize: '17px',
  footerTextSize: '15px',
}

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <Layout />
  </ThemeProvider>
)

export default IndexPage

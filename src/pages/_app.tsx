import NavBar from '@/components/layout/NavBar'
import '@/styles/globals.css'
import { ChakraTheme } from '@/styles/theme'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

const App = (props: AppProps) => {
  const { Component, pageProps } = props

  const theme = extendTheme(ChakraTheme);
  return (
    <ChakraProvider theme={theme}>
      <NavBar>
      <Component {...pageProps} />
      </NavBar>
    </ChakraProvider>
  )
}

export default App;

import '@/styles/globals.css'
import { ChakraTheme } from '@/styles/theme'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

const App = (props: AppProps) => {
  const { Component, pageProps } = props

  const theme = extendTheme(ChakraTheme);
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App;

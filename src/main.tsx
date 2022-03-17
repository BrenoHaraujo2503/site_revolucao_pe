import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom'
import { AppRoutes } from './routes'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <AppRoutes />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

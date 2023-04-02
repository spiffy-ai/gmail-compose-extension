import { ChakraProvider, theme } from '@chakra-ui/react';
import React from 'react';
import { createRoot } from 'react-dom/client';
import PopupApp from './PopupApp'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <PopupApp />
    </ChakraProvider>
  </React.StrictMode>
)

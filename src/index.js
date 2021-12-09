import { ChakraProvider, CSSReset } from '@chakra-ui/react';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//lightmode bgcolor: #f0e7db


ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <CSSReset/>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
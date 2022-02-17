import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ChatProvider from './Context/ChatProvider';
import { ChakraProvider } from '@chakra-ui/react'



ReactDOM.render(
  <ChakraProvider>
  <BrowserRouter>
  <ChatProvider>
  
    <App />
    </ChatProvider>
  </BrowserRouter>
  
  </ChakraProvider>,
  document.getElementById('root')
);



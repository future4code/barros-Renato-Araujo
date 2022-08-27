import React from 'react';
import Router from './components/Router';
import { ChakraProvider, Box } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Box w='100vw' h='100vh' bg='#051427'>
      <Router />
      </Box>     
    </ChakraProvider>
  );
}

export default App;

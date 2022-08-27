import React from 'react';
import { useNavigate  } from 'react-router-dom';
import FormLogin from '../components/FormLogin';
import IsLogged from '../components/IsLogged';
import { Button, ButtonGroup, Center, Box, Flex, Spacer, Heading } from '@chakra-ui/react'

export default function LoginPage() {
    
const Navigate = useNavigate()

    const goToHome = () => {
        Navigate("/")
      }
    
      const goToLastPage = () => {
        Navigate(-1)
      }

return (
  <Center w='100%' h='100%'>
    <Box bg='#530f1e' variant='solid' p='20px' borderRadius='10px'>
        
        {localStorage.token && <IsLogged />}
        {!localStorage.token && <FormLogin />}

    <form>
      
    </form>
    <Center> 
      <Button bg='#f8bc04' color='#051427' colorScheme='yellow' p='20px' m='20px' onClick={ goToHome }>Home</Button>
      <Button bg='#f8bc04' color='#051427' colorScheme='yellow' p='20px' m='20px' onClick={ goToLastPage }>Voltar</Button>
    </Center>
    </Box>
    </Center>
)
}
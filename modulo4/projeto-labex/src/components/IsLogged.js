import { useNavigate } from "react-router-dom"
import { Button, ButtonGroup, Center, Box, Flex, Spacer, Heading } from '@chakra-ui/react'

export default function IsLogged() {
    const Navigate = useNavigate()
    const goToAdminHomePage = () => {
        Navigate("/adminHomePage")
    }
    const logOut = () => {
        localStorage.clear()
        document.location.reload()
    }

    return (
        <Box border='3px dashed #f8bc04' borderRadius='10px' p='20px'>
            <Heading size='xl' color='#f8bc04' pb='20px'>Você está logado como</Heading>
            <Center bg='#051427' fontSize='3xl' fontWeight='bolder' color='#f8bc04' >{localStorage.userName}</Center>
            <ButtonGroup size='xs' w='100%' p='10px' bg='#051427'>
                <Button bg='#f8bc04' color='#051427' colorScheme='yellow' onClick={goToAdminHomePage}>Continuar como {localStorage.userName}?</Button>
                <Spacer />
                <Button bg='#f8bc04' color='#051427' colorScheme='yellow' onClick={logOut}>Logout</Button>
            </ButtonGroup>
        </Box>
    )
}
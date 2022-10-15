import React from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { Button, ButtonGroup, Center, Box, Image } from '@chakra-ui/react'
import { SunIcon } from '@chakra-ui/icons';
import Ad from "../AD.png"

export default function HomePage() {
    const Navigate = useNavigate()
    const goToLoginPage = () => {
        Navigate("/LoginPage")
    }

    const goToListTripsPage = () => {
        Navigate("/ListTripsPage")
    }

    const goToAd = () => {
        window.open("https://dazzling-rain.surge.sh/")
    }


    return (
        <Center w='100%' h='100%'>
            <Box>
            <Box bg='#530f1e' variant='solid' p='20px' borderRadius='10px'>
            <Center fontFamily='fantasy' fontSize='100px' fontWeight='bolder' color='#f8bc04' border='3px dashed' borderRadius='10px' p='20px' m='20px'>LabeX<SunIcon /></Center>
            
            <section>
                <Button bg='#f8bc04' color='#051427' colorScheme='yellow' p='20px' m='20px' onClick={goToLoginPage}>Área de Administrador</Button>
                <Button bg='#f8bc04' color='#051427' colorScheme='yellow' p='20px' m='20px' onClick={goToListTripsPage}>Lista de Viagens</Button>
            </section>
            </Box>
            <Center>
                
                <Image onClick={goToAd} mt='50px' w='300px' src={Ad} a="https://dazzling-rain.surge.sh/" alt="Você não vai querer perder!" ></Image>
            </Center>
            </Box>
        </Center>
    )
}
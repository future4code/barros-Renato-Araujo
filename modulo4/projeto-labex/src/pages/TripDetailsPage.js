import React from 'react';
import { BASE_URL } from '../constants/constants';
import useRequestData from '../hooks/useRequestData';
import {useNavigate} from 'react-router-dom'
import { useAuth } from '../hooks/useAuth';
import TripDetailCard from '../components/TripDetailCard';
import { Button, ButtonGroup, Center, Box, Flex, Spacer, Heading, Spinner, CircularProgress } from '@chakra-ui/react'

function TripDetailsPage() {
useAuth()
const [dado, isLoading, erro] = useRequestData(`${BASE_URL}trips`)

const [dado2, isLoading2, erro2] = useRequestData(`${BASE_URL}trip/${localStorage.tripId}`)

const selectTrip = (id) => {
localStorage.removeItem("tripId"); 
localStorage.setItem("tripId", id)
}

const Navigate = useNavigate()
const cardId = ""

const tripsList =
    dado.trips && dado.trips.map((t) => {
             
            return  <Center color='#f8bc04' bg='#051427' variant='solid' m='5px' p='5px' borderRadius='10px' justifyContent='center'>{t.name}<Spacer /><Button bg='#f8bc04' color='#051427' colorScheme='yellow' m='5px' onClick={()=>selectTrip(t.id)}>Detail</Button></Center>
     
    }
    )
    const goToApplicationFormPage = () => {
        Navigate("/ApplicationFormPage")
    }
    
    const goToHomePage = () => {
        Navigate("/HomePage")
    }

const tripDetalhes =
    dado2.trip && dado2.trip.map((td) => {
        return <div>
            {td.name}
            {td.date}
        </div>
    }
    )

    return (
        <Center w='100%' h='100%'>
    <Box bg='#530f1e' variant='solid' p='20px' borderRadius='10px'>
    <Heading color='#f8bc04'>Lista de trips:</Heading>
        {isLoading && <Spinner color='yellow.300' />}
        {!isLoading && erro && <p>Ocorreu um erro</p>}
        {!isLoading && dado.trips && dado.trips.lenght !== 0 && (tripsList) }   
        {!isLoading && dado.trips && dado.trips.lenght === 0 && <p> Não há trip </p>}  
        
        <br></br>
        <Box>
        <Heading color='#f8bc04'>Details here:</Heading>
        <Center bg='#051427' p='20px' borderRadius='10px'>
        <Spinner color='yellow.300' />
        </Center>
        </Box>
        <Button bg='#f8bc04' color='#051427' colorScheme='yellow' p='20px' m='20px' onClick={goToApplicationFormPage}>Se inscrever em uma viagem</Button>
                <Button bg='#f8bc04' color='#051427' colorScheme='yellow' p='20px' m='20px' onClick={goToHomePage}>Home Page</Button>
    </Box>
    </Center>
    )
}
export default TripDetailsPage
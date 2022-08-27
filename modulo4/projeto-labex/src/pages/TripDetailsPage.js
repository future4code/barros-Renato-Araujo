import React from 'react';
import { BASE_URL } from '../constants/constants';
import useRequestData from '../hooks/useRequestData';
import {useNavigate} from 'react-router-dom'
import { useAuth } from '../hooks/useAuth';
import TripDetailCard from '../components/TripDetailCard';
import * as style from '../components/styled'

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
             
            return <div>{t.name}
            <button onClick={()=>selectTrip(t.id)}>Detail</button>
            </div>
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
    <style.Box>
        <p>Lista de trips:</p>
        {isLoading && <p>Carregando...</p>}
        {!isLoading && erro && <p>Ocorreu um erro</p>}
        {!isLoading && dado.trips && dado.trips.lenght !== 0 && (tripsList) }   
        {!isLoading && dado.trips && dado.trips.lenght === 0 && <p> Não há trip </p>}  
        
        <br></br>
        <div>Detalhes aqui:</div>
        <button onClick={ goToApplicationFormPage }>Se inscrever em uma viagem</button>  
        <button onClick={ goToHomePage }>Home Page</button>  
    </style.Box>
    )
}
export default TripDetailsPage
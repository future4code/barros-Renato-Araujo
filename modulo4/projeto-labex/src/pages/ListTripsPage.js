import React from 'react';
import { BASE_URL } from '../constants/constants';
import useRequestData from '../hooks/useRequestData';
import {useNavigate} from 'react-router-dom'
import * as style from '../components/styled'

function ListTripsPage() {
const [dado, isLoading, erro] = useRequestData(`${BASE_URL}trips`)
const Navigate = useNavigate()


const tripsList =
    dado.trips && dado.trips.map((t) => {
       
    localStorage.setItem("tripId", t.id)
            return <li>{t.name}<style.But>Apply</style.But></li>
    }
    )
    const goToApplicationFormPage = () => {
        Navigate("/ApplicationFormPage")
    }
    
    const goToHomePage = () => {
        Navigate("/HomePage")
    }

    return (
    <style.Box>
        <p>Lista de trips:</p>
        {isLoading && <p>Carregando...</p>}
        {!isLoading && erro && <p>Ocorreu um erro</p>}
        {!isLoading && dado.trips && dado.trips.lenght !== 0 && (tripsList) }   
        {!isLoading && dado.trips && dado.trips.lenght === 0 && <p> Não há trip </p>}  
        
        <style.But onClick={ goToApplicationFormPage }>Se inscrever em uma viagem</style.But>  
        <style.But onClick={ goToHomePage }>Home Page</style.But>  
    </style.Box>
    )
}
export default ListTripsPage
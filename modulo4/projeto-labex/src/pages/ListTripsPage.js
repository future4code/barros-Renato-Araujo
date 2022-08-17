import React from 'react';
import { BASE_URL } from '../constants/constants';
import useRequestData from '../hooks/useRequestData';
import {useNavigate} from 'react-router-dom'


function ListTripsPage() {
const [dado, isLoading, erro] = useRequestData(`${BASE_URL}trips`)
const Navigate = useNavigate()
const tripsList =
    dado.trips && dado.trips.map((t) => {
            return <li>{t.name}</li>
    }
    )
    const goToApplicationFormPage = () => {
        Navigate("/ApplicationFormPage")
    }
    
    const goToHomePage = () => {
        Navigate("/HomePage")
    }

    return (
    <div>
        <p>Lista de trips:</p>
        {isLoading && <p>Carregando...</p>}
        {!isLoading && erro && <p>Ocorreu um erro</p>}
        {!isLoading && dado.trips && dado.trips.lenght !== 0 && (tripsList) }   
        {!isLoading && dado.trips && dado.trips.lenght === 0 && <p> Não há trip </p>}  
        
        <button onClick={ goToApplicationFormPage }>Se inscrever em uma viagem</button>  
        <button onClick={ goToHomePage }>Home Page</button>  
    </div>
    )
}
export default ListTripsPage
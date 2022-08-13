import React from 'react';
import { BASE_URL } from '../constants/constants';
import useRequestData from '../hooks/useRequestData';


function ListTripsPage() {
const lista = useRequestData(BASE_URL)

    return (
    <div>
        <p>Lista de trips:</p>
        {lista.map((trip) => {
            return <p>{trip.name}</p>
        })}
    </div>
    )
}
export default ListTripsPage
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { BASE_URL } from '../constants/contants'

const useRequestData=()=>{
    const [listaTrips, setListaTrips] = useState([])
    useEffect(() => {
        axios.get(`${BASE_URL}trips`)
        .then(response =>{
            setListaTrips(response.data)
        }).catch(error => {
            console.log(error)
        })
        }, [])
    return listaTrips
    
}
export default useRequestData
import React, {useEffect, useState} from 'react'
import axios from 'axios'

const useRequestData=(url)=>{
    const [listaTrips, setListaTrips] = useState([])
    useEffect(() => {
        axios.get(`${url}trips`)
        .then(response =>{
            setListaTrips(response.data.trips)
        }).catch(error => {
            console.log(error)
        })
        }, [])
    return listaTrips
    
}
export default useRequestData;
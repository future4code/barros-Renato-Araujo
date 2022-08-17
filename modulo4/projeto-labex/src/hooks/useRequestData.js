import React, {useEffect, useState} from 'react'
import axios from 'axios'

const useRequestData=(url)=>{
    const [dado, setDado] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [erro, setError] = useState(false)

    
    
    useEffect(() => {
        setIsLoading(true)
        axios.get(url)
        .then(response =>{
            setIsLoading(false)
            setDado(response.data)
        }).catch(error => {
            setIsLoading(false)
            setError(error)
        })
        }, [url])
    return [dado, isLoading, erro]
    
}
export default useRequestData;
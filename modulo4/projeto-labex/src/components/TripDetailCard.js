import React, { useState } from "react"
import axios from "axios"
import { BASE_URL } from "../constants/constants"
import useRequestData from "../hooks/useRequestData"

export default function TripDetailCard(tripDetailId) {
const [dado, setDado] = useRequestData(`${BASE_URL}trips`)
    
    
    return (
        <div>
           {dado.name}
          
        </div>
    )
}
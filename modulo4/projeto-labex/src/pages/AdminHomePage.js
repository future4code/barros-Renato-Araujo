import React from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import * as Rot from '../components/Coordinator'
import { useAuth } from '../hooks/useAuth';
import * as style from '../components/styled'

export default function AdminHomePage() {
    useAuth()
    const Navigate = useNavigate()
    const logOut = () => {
        localStorage.clear()
        Rot.goToLoginPage(Navigate)
    }
    
    return (
    <style.Box>
        <p>AdminHomePage</p>
        <style.But onClick={()=>{Rot.goToCreateTripPage(Navigate)}}>Create Trip</style.But>
        <style.But onClick={()=>{Rot.goToTripDetailsPage(Navigate)}}>Trip Details List</style.But>
        <style.But onClick={()=>{logOut()}}>Logout</style.But>
        
        <style.But onClick={()=>{Rot.goToHomePage(Navigate)}}>Back to Home</style.But>
      
    </style.Box>
    )
}
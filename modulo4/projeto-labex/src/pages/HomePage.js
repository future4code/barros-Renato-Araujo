import React from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import * as style from '../components/styled'

export default function HomePage() {
    const Navigate = useNavigate()
    const goToLoginPage = () => {
        Navigate("/LoginPage")
    }

    const goToListTripsPage = () => {
        Navigate("/ListTripsPage")
    }
    return (
    <style.Box>
        <style.Logo>LabeX</style.Logo>
        <section>
  
      <style.But onClick={ goToLoginPage }>Área de Administrador</style.But>
      <style.But onClick={ goToListTripsPage }>Lista de Viagens</style.But>
    </section>
    </style.Box>
    )
}
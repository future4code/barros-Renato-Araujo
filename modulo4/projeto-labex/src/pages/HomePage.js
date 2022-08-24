import React from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';

export default function HomePage() {
    const Navigate = useNavigate()
    const goToLoginPage = () => {
        Navigate("/LoginPage")
    }

    const goToListTripsPage = () => {
        Navigate("/ListTripsPage")
    }
    return (
    <div>
        <p>HomePage</p>
        <section>
  
      <button onClick={ goToLoginPage }>Área de Administrador</button>
      <button onClick={ goToListTripsPage }>Lista de Viagens</button>
    </section>
    </div>
    )
}
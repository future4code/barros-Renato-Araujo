import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from "../pages/HomePage"
import AdminHomePage from '../pages/AdminHomePage';
import ApplicationFormPage from '../pages/ApplicationFormPage';
import CreateTripPage from '../pages/CreateTripPage';
import ListTripsPage from '../pages/ListTripsPage';
import LoginPage from '../pages/LoginPage';
import TripDetailsPage from '../pages/TripDetailsPage';


function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={ <HomePage /> } />
            <Route path="/AdminHomePage" element={<AdminHomePage />} />
            <Route path="/ApplicationFormPage" element={<ApplicationFormPage />} />
            <Route path="/CreateTripPage" element={<CreateTripPage />} />
            <Route path="/ListTripsPage" element={<ListTripsPage />} />
            <Route path="/LoginPage" element={<LoginPage />} />
            <Route path="/TripDetailsPage" element={<TripDetailsPage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default Router;
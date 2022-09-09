import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainScreen from '../screen/MainScreen';

const Routers = ()=> { return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<MainScreen/>}/>
   </Routes>
   </BrowserRouter>
 );
}


export default Routers;
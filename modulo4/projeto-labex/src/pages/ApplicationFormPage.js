import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  FormLogin from '../components/FormLogin';

export default function ApplicationFormPage() {

    return (
    <div>
        <p>ApplicationFormPage</p>
        <FormLogin />
    </div>
    )
}
import { React, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  FormLogin from '../components/FormLogin';
import Axios from 'axios';
import * as style from '../components/styled'

export default function ApplicationFormPage() {

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [application, setApplication] = useState("");
  const [occupation, setOccupation] = useState("");
  const [country, setCountry] = useState("");

  const handleInputName = (e) => {
    setName(e.target.value);
  };
  const handleInputAge = (e) => {
    setAge(e.target.value);
  };
  const handleInputApplication = (e) => {
    setApplication(e.target.value);
  };
  const handleInputOccupation = (e) => {
    setOccupation(e.target.value);
  };
  const handleSelectCountry = (e) => {
    setCountry(e.target.value);
  }

  const sendForm = (e) => {
    e.preventDefault()
    console.log (name)
}


    return (
    <style.Box>
        <p>ApplicationFormPage</p>
    
     <form >
          <input
            name="name"
            id="name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleInputName}
            minLength="5"
            required
            />
          <input
            name="age"
            id="age"
            type="number"
            placeholder="Age"
            value={age}
            onChange={handleInputAge}
            min="18"
            required
            />
          <input
            name="application"
            id="application"
            type="text"
            placeholder="Application Text"
            value={application}
            onChange={handleInputApplication}
            minLength="30"
            required
            />
          <input
            name="occupation"
            id="occupation"
            type="text"
            placeholder="Profession"
            value={occupation}
            onChange={handleInputOccupation}
            minLength="10"
            required
            />
          
          
          <select 
            name="country" 
            id="country"
            value={country} 
            onChange={handleSelectCountry} 
            required>
                {/* {countriesList.nome && countriesList.map((option, index) => (
                    console.log(`hi`),
                <option key={index} value= {option.nome.abreviado}>
                    {option.nome}
                </option>))} */}
                    <option>Brazil</option>
                    <option>United States</option>
                    <option>USSR</option>

                     </select>
           <style.But onClick={sendForm}>Submit</style.But>     
        </form>
    </style.Box>
    )
}
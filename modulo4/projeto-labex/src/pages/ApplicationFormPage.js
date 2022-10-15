import { React, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormLogin from "../components/FormLogin";
import Axios from "axios";
import {
  Button,
  ButtonGroup,
  Center,
  Box,
  Flex,
  Spacer,
  Heading,
  Input,
  FormLabel,
  Select,
} from "@chakra-ui/react";

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
  };

  const sendForm = (e) => {
    e.preventDefault();
    console.log(name);
  };

  return (
    <Center w="100%" h="100%">
      <Box bg="#530f1e" variant="solid" p="20px" borderRadius="10px" w='400px'>
        <Heading size="md" color="#f8bc04" pb="20px">
          ApplicationFormPage
        </Heading>

        <form>
          <Input
            
            my='10px'
            color="#f8bc04"
            bg="#051427"
            name="name"
            id="name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleInputName}
            minLength="5"
            required
          />
          <Input
            
            my='10px'
            color="#f8bc04"
            bg="#051427"
            name="age"
            id="age"
            type="number"
            placeholder="Age"
            value={age}
            onChange={handleInputAge}
            min="18"
            required
          />
          <Input
            
            my='10px'
            color="#f8bc04"
            bg="#051427"
            name="application"
            id="application"
            type="text"
            placeholder="Application Text"
            value={application}
            onChange={handleInputApplication}
            minLength="30"
            required
          />
          <Input
            
            my='10px'
            color="#f8bc04"
            bg="#051427"
            name="occupation"
            id="occupation"
            type="text"
            placeholder="Profession"
            value={occupation}
            onChange={handleInputOccupation}
            minLength="10"
            required
          />

          <Select
            
            my='10px'
            color="#f8bc04"
            bg="#051427"
            name="country"
            id="country"
            value={country}
            onChange={handleSelectCountry}
            required
          >
            {/* {countriesList.nome && countriesList.map((option, index) => (
                    console.log(`hi`),
                <option key={index} value= {option.nome.abreviado}>
                    {option.nome}
                </option>))} */}
            <option>Brazil</option>
            <option>United States</option>
            <option>USSR</option>
          </Select>
          <Button
            type="submit"
            bg="#f8bc04"
            color="#051427"
            colorScheme="yellow"
            onClick={sendForm}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Center>
  );
}

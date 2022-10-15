import React from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { BASE_URL } from "../constants/constants";
import axios from "axios";
import { useForm } from "../hooks/useForm";
import * as Rot from "../components/Coordinator";
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
} from "@chakra-ui/react";

export default function CreateTripPage() {
  useAuth();
  const navigate = useNavigate();
  const [form, onChange, clear] = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  });

  const cadastrarViagem = (event) => {
    event.preventDefault();
    const body = {
      name: form.name,
      planet: form.planet,
      date: form.date,
      description: form.description,
      durationInDays: form.duration,
    };
    console.log(body);
    axios
      .post(`${BASE_URL}trips`, body, {
        headers: { auth: localStorage.getItem("token") },
      })
      .then((response) => {
        alert("Viagem cadastrada com sucesso");
        clear();
      })
      .catch((error) => console.log(error));
  };

  return (
    <Center w='100%' h='100%'>
      <Box bg="#530f1e" variant="solid" p="20px" borderRadius="10px">
        <Heading pb="20px" color="#f8bc04">
          CreateTripPage
        </Heading>
        <form onSubmit={cadastrarViagem}>
          <FormLabel color="#f8bc04" p="5px" htmlFor="name">
            Nome
          </FormLabel>
          <Input
            type="text"
            name="name"
            value={form.name}
            id="name"
            onChange={onChange}
            required
          />
          <FormLabel color="#f8bc04" p="5px" pt="13px" htmlFor="planet">
            Destination
          </FormLabel>
          <Input
            type="text"
            name="planet"
            value={form.planet}
            id="planet"
            onChange={onChange}
            required
          />
          <FormLabel color="#f8bc04" p="5px" pt="13px" htmlFor="description">
            Description
          </FormLabel>
          <Input
            type="text"
            name="description"
            value={form.description}
            id="description"
            onChange={onChange}
            required
          />
          <FormLabel color="#f8bc04" p="5px" pt="13px" htmlFor="duration">
            Duration - days
          </FormLabel>
          <Input
            type="text"
            name="duration"
            value={form.duration}
            id="duration"
            onChange={onChange}
            required
          />
          <FormLabel color="#f8bc04" p="5px" pt="13px" htmlFor="date">
            Date
          </FormLabel>
          <Input
            type="text"
            name="date"
            value={form.date}
            id="date"
            onChange={onChange}
            pattern="^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$"
            required
          />
          <Button
            bg="#f8bc04"
            color="#051427"
            colorScheme="yellow"
            p="20px"
            m="20px"
          >
            Send Form
          </Button>
          <Button
            bg="#f8bc04"
            color="#051427"
            colorScheme="yellow"
            p="20px"
            m="20px"
            type="button"
            onClick={() => {
              Rot.goBack(navigate);
            }}
          >
            Voltar
          </Button>
        </form>
      </Box>
    </Center>
  );
}

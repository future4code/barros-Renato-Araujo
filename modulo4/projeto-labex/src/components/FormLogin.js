import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../constants/constants";
import { useNavigate } from "react-router-dom";
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

export default function FormLogin() {
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const mudaEmail = (event) => {
    setEmail(event.target.value);
  };
  const mudaSenha = (event) => {
    setSenha(event.target.value);
  };

  console.log(email, senha);

  const url = `${BASE_URL}login`;

  const body = {
    email: email,
    password: senha,
  };
  const headers = "Content-Type: application/json";

  const fazerLogin = (event) => {
    event.preventDefault();
    axios
      .post(url, body, headers)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userName", email);
        Navigate("/adminHomePage");
      })
      .catch((error) => {
        alert(`USUÁRIO NÃO CADASTRADO OU SENHA INVÁLIDA!`);
      });

    console.log(body);
  };

  return (
    <div>
      <Heading size="md" color="#f8bc04" pb="20px">
        {" "}
        Login{" "}
      </Heading>
      <form onSubmit={fazerLogin}>
        <FormLabel color="#f8bc04" htmlFor="email">
          E-mail:{" "}
        </FormLabel>
        <Input
          color="#f8bc04"
          bg="#051427"
          id="email"
          name="email"
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={mudaEmail}
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        />
        <FormLabel color="#f8bc04" htmlFor="password">
          Senha:{" "}
        </FormLabel>
        <Input
          color="#f8bc04"
          bg="#051427"
          id="password"
          name="password"
          type="password"
          required
          placeholder="Senha"
          value={senha}
          onChange={mudaSenha}
          pattern="^.{3,}"
        />
        <Center p='20px'>
        <Button type='submit' bg='#f8bc04' color='#051427' colorScheme='yellow'>Login</Button>
        </Center>
      </form>
    </div>
  );
}

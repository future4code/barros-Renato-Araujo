import React from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import * as Rot from "../components/Coordinator";
import { useAuth } from "../hooks/useAuth";
import {
  Button,
  ButtonGroup,
  Center,
  Box,
  Flex,
  Spacer,
  Heading,
} from "@chakra-ui/react";

export default function AdminHomePage() {
  useAuth();
  const Navigate = useNavigate();
  const logOut = () => {
    localStorage.clear();
    Rot.goToLoginPage(Navigate);
  };

  return (
    <Center w="100%" h="100%">
      <Box bg="#530f1e" variant="solid" p="20px" borderRadius="10px">
        {" "}
        <Box pb='20px'>
          <Heading color='#f8bc04'>AdminHomePage</Heading>
        </Box>
        <ButtonGroup>
          <Button
            bg="#f8bc04"
            color="#051427"
            colorScheme="yellow"
            onClick={() => {
              Rot.goToCreateTripPage(Navigate);
            }}
          >
            Create Trip
          </Button>
          <Button
            bg="#f8bc04"
            color="#051427"
            colorScheme="yellow"
            onClick={() => {
              Rot.goToTripDetailsPage(Navigate);
            }}
          >
            Trip Details List
          </Button>
          <Button
            bg="#f8bc04"
            color="#051427"
            colorScheme="yellow"
            onClick={() => {
              logOut();
            }}
          >
            Logout
          </Button>

          <Button
            bg="#f8bc04"
            color="#051427"
            colorScheme="yellow"
            onClick={() => {
              Rot.goToHomePage(Navigate);
            }}
          >
            Back to Home
          </Button>
        </ButtonGroup>
      </Box>
    </Center>
  );
}

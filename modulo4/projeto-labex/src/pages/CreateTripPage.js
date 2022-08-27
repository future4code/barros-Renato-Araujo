import React from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import {BASE_URL} from "../constants/constants"
import axios from "axios";
import { useForm } from "../hooks/useForm"
import * as Rot from "../components/Coordinator"

export default function CreateTripPage() {
  useAuth();
  const navigate = useNavigate();
  const [form, onChange, clear] = useForm({ name: "", planet: "", date: "", description: "", durationInDays: ""});

  const cadastrarViagem = (event) => {
    event.preventDefault();
    const body = {
      name: form.name,
      planet: form.planet,
      date: form.date,
      description: form.description,
      durationInDays: form.duration
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
    <div>
      <p>CreateTripPage</p>
      <h1>Cadastro de viagens</h1>
      <form onSubmit={cadastrarViagem}>
        <h2>Cadastrar nova viagem</h2>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          name="name"
          value={form.name}
          id="name"
          onChange={onChange}
          required
        />
        <label htmlFor="planet">Destino</label>
        <input
          type="text"
          name="planet"
          value={form.planet}
          id="planet"
          onChange={onChange}
          required
        />
        <label htmlFor="description">Descrição</label>
        <input
          type="text"
          name="description"
          value={form.description}
          id="description"
          onChange={onChange}
          required
        />
        <label htmlFor="duration">Duração em dias</label>
        <input
          type="text"
          name="duration"
          value={form.duration}
          id="duration"
          onChange={onChange}
          required
        />
        <label htmlFor="date">Data</label>
        <input
          type="text"
          name="date"
          value={form.date}
          id="date"
          onChange={onChange}
          pattern="^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$"
          required
        />
        <button>Cadastrar viagem</button>
        <button
          type="button"
          onClick={() => {
            Rot.goBack(navigate);
          }}
        >
          Voltar
        </button>
      </form>
    </div>
  );
}

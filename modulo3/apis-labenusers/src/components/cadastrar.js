import { React , useState } from "react";
import axios from "axios";

export default function Cadastrar() {
    const [inputName, setInputName] = useState("")

    const handleInputName = (event) => {
        setInputName(event.target.value)
    }
    const [inputEmail, setInputEmail] = useState("")

    const handleInputEmail = (event) => {
        setInputEmail(event.target.value)
    }

    const addUsuario = (event) => {
        event.preventDefault();
        axios
          .post(url, body, myHeaders)
          .then(() => {
            alert("Usuário cadastrado com sucesso!");
            
          })
          .catch((erro) => {
            alert("Ops! Algo deu errado!");
            
          });
        setInputName("");
        setInputEmail("");
      };
    
    const body = {
        name: inputName ,
        email: inputEmail
      };

    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    const myHeaders = {
        headers: {
            Authorization: "renato-araujo-barros"
        }

    }
    return(
        <div>
            <form>
        <input type="text" value={inputName} onChange={handleInputName} placeholder="Digite seu nome" />
        <input type="email" value={inputEmail} onChange={handleInputEmail} placeholder="Digite seu e-mail" />
        <button onClick={addUsuario}>Cadastrar usuário</button> 
      </form>
        </div>
    )
}
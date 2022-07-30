import { React , useState, useEffect } from "react";
import axios from "axios";

export default function Listar() {
    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
      // Update the document title using the browser API
      listarUsuarios();
    });

    const listarUsuarios = (event) => {
        axios
          .get(url, myHeaders)
          .then((response) => {
            setUsuarios(response.data.result.list);
            
          })
          .catch((erro) => {
            alert("Ops! Algo deu errado!");
            
          });
      };
    
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    const myHeaders = {
        headers: {
            Authorization: "renato-araujo-barros"
        }

    }
    return(
        <div>
         {usuarios.map((usuario) => {
          return <li key={usuario.id}>Teste {usuario.name}</li>
          
         })}
        </div>
    )
}
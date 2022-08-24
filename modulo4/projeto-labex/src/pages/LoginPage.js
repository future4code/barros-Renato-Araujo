import React from 'react';
import { useNavigate  } from 'react-router-dom';
import FormLogin from '../components/FormLogin';
import IsLogged from '../components/IsLogged';

export default function LoginPage() {
    
const Navigate = useNavigate()

    const goToHome = () => {
        Navigate("/")
      }
    
      const goToLastPage = () => {
        Navigate(-1)
      }

return (
    <div>
        <p>LoginPage</p>
        {localStorage.token && <IsLogged />}
        {!localStorage.token && <FormLogin />}

    <form>
      
    </form>
    <section> 
      <button onClick={ goToHome }>Home</button>
      <button onClick={ goToLastPage }>Voltar</button>
    </section>
    </div>
)
}
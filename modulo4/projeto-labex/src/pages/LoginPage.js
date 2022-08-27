import React from 'react';
import { useNavigate  } from 'react-router-dom';
import FormLogin from '../components/FormLogin';
import IsLogged from '../components/IsLogged';
import * as style from '../components/styled'

export default function LoginPage() {
    
const Navigate = useNavigate()

    const goToHome = () => {
        Navigate("/")
      }
    
      const goToLastPage = () => {
        Navigate(-1)
      }

return (
    <style.Box>
        
        {localStorage.token && <IsLogged />}
        {!localStorage.token && <FormLogin />}

    <form>
      
    </form>
    <section> 
      <style.But onClick={ goToHome }>Home</style.But>
      <style.But onClick={ goToLastPage }>Voltar</style.But>
    </section>
    </style.Box>
)
}
import React from 'react';
import { useNavigate  } from 'react-router-dom';

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
    <form>
      
    </form>
    <section> 
      <button onClick={ goToHome }>Home</button>
      <button onClick={ goToLastPage }>Voltar</button>
    </section>
    </div>
)
}
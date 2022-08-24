import { useNavigate } from "react-router-dom"

export default function IsLogged() {
const Navigate = useNavigate()
const goToAdminHomePage = () => {
    Navigate("/adminHomePage")
}
const logOut = () => {
    localStorage.clear()
    document.location.reload()
}

    return(
        <div>
            <h3>Você está logado como</h3>
            <h2>{localStorage.userName}</h2>
            <button onClick={goToAdminHomePage}>Continuar como {localStorage.userName}?</button>
            <button onClick={logOut}>Logout</button>
        </div>
    )
}
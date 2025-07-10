import Header from "../components/header";
import { Link } from 'react-router-dom';




function Home(){
    return <>
        <div class="fondo1">
            <div class="contenido-unic">
                <Header />
                <h1>Bienvenido a la pagina de Inicio</h1>
                <Link to="/">Inicio</Link>
                <Link to="/login">Login</Link> 
            </div>
        </div>
    </>;
}

export default Home;
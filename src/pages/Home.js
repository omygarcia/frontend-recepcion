import { Link } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";


function Home(){
    return <>
        <Header />
            <section className="hero">
                <div className="overlay"></div>
                <div className="hero-content">
                    <h1>Bienvenido al Sistema de Recepción UNIC</h1>
                    <p>Gestiona tu acceso de manera rápida y segura</p>
                    <Link to={'/login'} className="link-button">Iniciar sesión</Link>
                </div>
            </section>
        <Footer />
    </>;
}

export default Home;
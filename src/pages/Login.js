import Header from "../components/header";
import Footer from "../components/footer";
import { Link } from "react-router-dom";


function Login(){
        return <>
        <Header />
            <section className="hero">
                <div className="overlay"></div>
                <div className="hero-content">
                    <h1>Bienvenido al Sistema de Recepción UNIC</h1>
                    <p>Inicia sesión para gestionar accesos y procesos de forma rápida y segura.</p>
                    </div>
                    
                    <div className="login-box">
                        <h2>Acceso al Sistema</h2>
                        <form action="#" method="post">
                            <label for="email">Correo:</label>
                            <div className="input-group">
                                <i className="fas fa-user"></i>
                                <input type="email" id="email" name="email" placeholder="Correo" required />
                            </div>

                            <label for="password">Contraseña:</label>
                            <div className="input-group">
                                <i className="fas fa-lock"></i>
                                <input type="password" id="password" name="password" placeholder="Contraseña" required />
                            </div>

                            <button type="submit">Iniciar sesión</button>
                        </form>
                        <Link href="#" className="forgot">¿Olvidaste tu contraseña?</Link>
                    </div>
            </section>
            <Footer />
    </>;
}

export default Login;
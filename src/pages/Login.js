import { Link } from "react-router-dom";
import Header from "../components/header"

function Login(){
        return <>
        <div class="fondo1">
            <div class="contenido-unic">
                <Header />
                <form>
                    <h1>Login</h1>
                    <div className="form-group">
                        <label>Correo: </label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input type="password" className="form-control" />
                    </div>
                    <button className="btn btn-warning">Ingresar</button>
                </form>
                
                <Link to="/">Inicio</Link>
                <Link to="/login">Login</Link> 
            </div>
        </div>
    </>;
}

export default Login;
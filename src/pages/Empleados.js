import { Link } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";


function Empleados(){
    return <>
        <div class="contenido-unic">
            <Header />
            <div className="contenido">
                <div className="uk-container">
                    <h1>Lista de empleados</h1>
                    <table className="uk-table uk-table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombres</th>
                                <th>Apellidos</th>
                                <th>Cargo</th>
                                <th>Departamento</th>
                                <th>Email</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>ID</td>
                                <td>Nombres</td>
                                <td>Apellidos</td>
                                <td>Cargo</td>
                                <td>Departamento</td>
                                <td>Email</td>
                                <td>
                                    <button className="uk-button uk-button-primary">
                                        Editar
                                    </button>
                                    <button className="uk-button uk-button-danger">
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </div>
    </>;
}

export default Empleados;
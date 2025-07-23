import { Link } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import { useEffect } from "react";
import useEmpleado from "../hooks/useEmpleado";


function Empleados(){
    const {listarEmpleados, empelados} = useEmpleado();

    useEffect(()=>{
       listarEmpleados();
    },[]);

    return <>
        <div className="contenido-unic">
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
                            {empelados.map((empl,index)=>(
                                <tr>
                                    <td>{empl.id_empleado}</td>
                                    <td>{empl.nombres}</td>
                                    <td>{empl.apellidos}</td>
                                    <td>{empl.cargo}</td>
                                    <td>{empl.departamento}</td>
                                    <td>{empl.email}</td>
                                    <td>
                                        <button className="uk-button uk-button-primary">
                                            Editar
                                        </button>
                                        <button className="uk-button uk-button-danger">
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </div>
    </>;
}

export default Empleados;
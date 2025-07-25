import Footer from "../components/footer";
import Header from "../components/header";
import { useEffect, useState } from "react";
import useEmpleado from "../hooks/useEmpleado";


function Empleados(){
    const {listarEmpleados, setEmpleados, empleados, nuevo_empleado} = useEmpleado();
    const [form,setForm] = useState({
        nombres:"",
        apellidos:"",
        cargo:"",
        departamento:"",
        email:""
    });

    useEffect(()=>{
       listarEmpleados().then((empl)=>{
        console.log('ppp',empl);
        setEmpleados(empl);
       });
       console.log(':))',empleados);
    },[]);

    const agregar_empleado = async()=>{
        await nuevo_empleado(form);
    }

    return <>
        <div className="contenido-unic">
            <Header />
            <div className="contenido">
                <div className="uk-container">
                    <h1>Lista de empleados</h1>
                    <button uk-toggle="target: #modal-areas" className="uk-button uk-button-primary">Nuevo</button>
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
                            {empleados.length === 0?(
                                <div>No se necontraron empleados cargados</div>
                            ):(
                                empleados.map((empl,index)=>(
                                <tr key={index}>
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
                            ))
                            )}
                            
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />

                <div id="modal-areas" className="uk-modal-container" uk-modal="true">
                    <div className="uk-modal-dialog" uk-overflow-auto="true">
                      <button className="uk-modal-close-default" type="button" uk-close="true"></button>
                      <div className="uk-modal-header">
                        <h2 className="uk-modal-title">Nuevo Empleado</h2>
                      </div>
                      <div className="uk-modal-body">
                        <form className="uk-grid-small" uk-grid="true">
                            <div className="uk-width-1-2@s">
                                <label class="uk-form-label" for="form-stacked-text">Nombres:</label>
                                <div class="uk-form-controls">
                                    <input className="uk-input" type="text" placeholder=""
                                    value={form.nombres}
                                    onChange={e=>setForm({...form,nombres:e.target.value})}
                                    />
                                </div>
                            </div>
                             <div className="uk-width-1-4@s">
                                <label className="uk-form-label" for="form-stacked-text">Apellidos:</label>
                                <div class="uk-form-controls">
                                    <input class="uk-input"  type="text" placeholder=""
                                    value={form.apellidos}
                                    onChange={e=>setForm({...form,apellidos:e.target.value})}
                                    />
                                </div>
                            </div>
                             <div class="uk-width-1-4@s">
                                <label class="uk-form-label" for="form-stacked-text">Cargo:</label>
                                <div class="uk-form-controls">
                                    <input class="uk-input"  type="text" placeholder="" 
                                    value={form.cargo}
                                    onChange={e=>setForm({...form,cargo:e.target.value})}
                                    />
                                </div>
                            </div>
                             <div class="uk-width-1-2@s">
                                <label class="uk-form-label" for="form-stacked-text">Departamento:</label>
                                <div class="uk-form-controls">
                                    <input class="uk-input"  type="text" placeholder=""
                                    value={form.departamento}
                                    onChange={e=>setForm({...form,departamento:e.target.value})}
                                    />
                                </div>
                            </div>
                            <div class="uk-width-1-4@s">
                                <label class="uk-form-label" for="form-stacked-text">E-mail:</label>
                                <div class="uk-form-controls">
                                    <input class="uk-input"  type="text" placeholder=""
                                    value={form.email}
                                    onChange={e=>setForm({...form,email:e.target.value})}
                                    />
                                </div>
                            </div>
                        </form>
                      </div>
                      <div className="uk-modal-footer uk-text-right">
                        <button className="uk-button uk-button-default uk-modal-close" type="button">CANCELAR</button>
                        <button className="uk-button uk-button-primary" type="button" onClick={agregar_empleado}>GUARDAR</button>
                      </div>
                    </div>
                </div>
        </div>
    </>;
}

export default Empleados;
import Footer from "../components/footer";
import Header from "../components/header";
import { useEffect, useState } from "react";
import useEmpleado from "../hooks/useEmpleado";


function Empleados(){
    const {listarEmpleados, setEmpleados, 
        empleados, nuevo_empleado,
        actualizar_empleado,
        empleado,setEmpleado,show_empleado,eliminar_empleado
    } = useEmpleado();
    const [form,setForm] = useState({
        id_empleado:"",
        nombres:"",
        apellidos:"",
        cargo:"",
        departamento:"",
        email:""
    });

    useEffect(()=>{
        const cargar = async()=>{
            const result = await listarEmpleados();
            setEmpleados(result);
        }
       cargar();
    },[]);

    
    useEffect(() => {
        window.UIkit.modal('#modal-areas'); // o el selector que uses
    }, []);




    const agregar_empleado = async()=>{
       
        try {
            if(form.id_empleado == "")
            {
                const data = await nuevo_empleado(form);
                await window.UIkit.modal.alert('El empleado se agrego con exito!');
            }else{
                const data = await actualizar_empleado(form);
                await window.UIkit.modal.alert('El empleado se actualizo con exito!')
            }
            limpiar();
            const result = await listarEmpleados();
            setEmpleados(result);
        } catch (error) {
             await window.UIkit.modal.alert('No se pudo registrar el empleado');
        }
        
        /*alert('ooo');
        await nuevo_empleado(form);*/
    }

    const editar_empleado = async(id)=>{
        const empl = await show_empleado(id);
        console.log(empleado);
        form.id_empleado = empl.id_empleado;
        form.nombres = empl.nombres;
        form.apellidos = empl.apellidos;
        form.cargo = empl.cargo;
        form.email = empl.email;
        form.departamento = empl.departamento;
        //window.UIkit.modal('#modal-areas').show();
    }

    const btnNuevo = () =>{
        limpiar();
        window.UIkit.modal('#modal-areas').show();
    }


    const limpiar = ()=>{
        setForm({
            nombres:"",
            apellidos:"",
            cargo:"",
            departamento:"",
            email:""
        });
    }

    const btnEliminar = async({id_empleado, nombres}) =>{
        try{
            const resp = await window.UIkit.modal.confirm('¿Desea eliminar al empleado: '+nombres+'?');
            const data = await eliminar_empleado(id_empleado);
            await window.UIkit.modal.alert('El empleado se elimino con exito!');
            const result = await listarEmpleados();
            setEmpleados(result);
            console.log(resp);
        }
        catch(error){
            console.log(error);
        }
        
    }

    return <>
        <div className="contenido-unic">
            <Header />
            <div className="contenido">
                <div className="uk-container">
                    <form className="uk-grid-small" uk-grid="true">
                            <div className="uk-width-1-2@s">
                                <label className="uk-form-label">Nombres:</label>
                                <div className="uk-form-controls">
                                    <input className="uk-input" type="text" placeholder=""
                                    value={form.nombres}
                                    onChange={e=>setForm({...form,nombres:e.target.value})}
                                    />
                                </div>
                            </div>
                             <div className="uk-width-1-4@s">
                                <label className="uk-form-label">Apellidos:</label>
                                <div className="uk-form-controls">
                                    <input className="uk-input"  type="text" placeholder=""
                                    value={form.apellidos}
                                    onChange={e=>setForm({...form,apellidos:e.target.value})}
                                    />
                                </div>
                            </div>
                             <div className="uk-width-1-4@s">
                                <label className="uk-form-label">Cargo:</label>
                                <div className="uk-form-controls">
                                    <input className="uk-input"  type="text" placeholder="" 
                                    value={form.cargo}
                                    onChange={e=>setForm({...form,cargo:e.target.value})}
                                    />
                                </div>
                            </div>
                             <div className="uk-width-1-2@s">
                                <label className="uk-form-label">Departamento:</label>
                                <div className="uk-form-controls">
                                    <input className="uk-input"  type="text" placeholder=""
                                    value={form.departamento}
                                    onChange={e=>setForm({...form,departamento:e.target.value})}
                                    />
                                </div>
                            </div>
                            <div className="uk-width-1-4@s">
                                <label className="uk-form-label">E-mail:</label>
                                <div className="uk-form-controls">
                                    <input className="uk-input"  type="text" placeholder=""
                                    value={form.email}
                                    onChange={e=>setForm({...form,email:e.target.value})}
                                    />
                                </div>
                            </div>
                        </form>
                        <button onClick={agregar_empleado} className="uk-button uk-button-secondary">GUARDAR</button>
                        <button onClick={limpiar} className="uk-button uk-button-secondary">LIMPIAR</button>
                    <h1>Lista de empleados</h1>
                    <button onClick={btnNuevo} className="uk-button uk-button-primary">Nuevo</button>
                    
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
                                <tr>
                                    <td colSpan={7}>
                                         <img src="img/loading.gif" />
                                    </td>
                                </tr>
                               
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
                                        <button onClick={()=>editar_empleado(empl.id_empleado)} className="uk-button uk-button-primary">
                                            Editar
                                        </button>
                                        <button onClick={async()=>await btnEliminar(empl)} className="uk-button uk-button-danger">
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
                                <label className="uk-form-label">Nombres:</label>
                                <div className="uk-form-controls">
                                    <input className="uk-input" type="text" placeholder=""
                                    value={form.nombres}
                                    onChange={e=>setForm({...form,nombres:e.target.value})}
                                    />
                                </div>
                            </div>
                             <div className="uk-width-1-4@s">
                                <label className="uk-form-label">Apellidos:</label>
                                <div className="uk-form-controls">
                                    <input className="uk-input"  type="text" placeholder=""
                                    value={form.apellidos}
                                    onChange={e=>setForm({...form,apellidos:e.target.value})}
                                    />
                                </div>
                            </div>
                             <div className="uk-width-1-4@s">
                                <label className="uk-form-label">Cargo:</label>
                                <div className="uk-form-controls">
                                    <input className="uk-input"  type="text" placeholder="" 
                                    value={form.cargo}
                                    onChange={e=>setForm({...form,cargo:e.target.value})}
                                    />
                                </div>
                            </div>
                             <div className="uk-width-1-2@s">
                                <label className="uk-form-label">Departamento:</label>
                                <div className="uk-form-controls">
                                    <input className="uk-input"  type="text" placeholder=""
                                    value={form.departamento}
                                    onChange={e=>setForm({...form,departamento:e.target.value})}
                                    />
                                </div>
                            </div>
                            <div className="uk-width-1-4@s">
                                <label className="uk-form-label">E-mail:</label>
                                <div className="uk-form-controls">
                                    <input className="uk-input"  type="text" placeholder=""
                                    value={form.email}
                                    onChange={e=>setForm({...form,email:e.target.value})}
                                    />
                                </div>
                            </div>
                            
                        </form>
                      </div>
                      <div className="uk-modal-footer uk-text-right">
                        <button className="uk-button uk-button-default uk-modal-close" type="button">CANCELAR</button>
                        <button onClick={agregar_empleado} className="uk-button uk-button-secondary">GUARDAR</button>


                      </div>
                    </div>
                </div>
        </div>
    </>;
}

export default Empleados;
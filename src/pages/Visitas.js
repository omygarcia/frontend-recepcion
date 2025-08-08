import Footer from "../components/footer";
import Header from "../components/header";
import { useEffect, useState } from "react";
import useTipoVisitante from "../hooks/useTipoVisitante";
import useVisita from "../hooks/useVisita";


function Visitas(){
    const {listaVisitas,visitas,setVisitas,visita,setVisita,nuevo_visitante,actualizar_visistante,
        show_visitante,eliminar_visitante
    } = useVisita();
    const {getListTipoVisitante} = useTipoVisitante();
    const [catVisitantes,setCatVisitantes] = useState([]);
    const [form,setForm] = useState({
        tipo_visitante:"",
        nombres:"",
        apellidos:"",
        genero:"",
        telefono:"",
        email:"",
        motivo_visita:""
    });

    useEffect(()=>{
      const cargar = async()=>{
        const datos = await listaVisitas();
        setVisitas(datos);
      }
      cargar();
    },[]);

    useEffect(()=>{
        const cargar2 = async()=>{
            const datos = await getListTipoVisitante();
            console.log('awair',datos);
            setCatVisitantes(datos);
            
        }
        cargar2();
        console.log('Cat',catVisitantes);
    },[]);

    const actionNuevoVisitante = (event)=>{
        event.preventDefault();
        alert("ok");
        //window.UIkit.modal('#modal-areas').hide();
    }

    const mi = ()=>{
        alert("todo Ok");
    }

    return <>
        <div className="contenido-unic">
            <Header />
            <div className="contenido">
                <div className="uk-container">
                    <h1>Registro de Visitas</h1>
                    <button uk-toggle="target: #modal-areas" className="uk-button uk-button-primary">Nuevo</button>
                    <div style={{overflowY:'scroll',height:'100%'}}></div>
                    <table className="uk-table uk-table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombres</th>
                                <th>Apellidos</th>
                                <th>Cargo</th>
                                <th>Departamento</th>
                                <th>Email</th>
                                <th>Motivo Visita</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {visitas.length === 0?(
                                <tr>
                                    <td colSpan={8}>
                                        <div>No se necontraron empleados cargados</div>
                                    </td>
                                </tr>
                                
                            ):(
                                visitas.map((empl,index)=>(
                                <tr key={index}>
                                    <td>{empl.id_visitante}</td>
                                    <td>{empl.nombres}</td>
                                    <td>{empl.apellidos}</td>
                                    <td>{empl.genero}</td>
                                    <td>{empl.telefono}</td>
                                    <td>{empl.email}</td>
                                    <td>{empl.motivo_visita}</td>
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
                        <h2 className="uk-modal-title">Registrar Visitante</h2>
                      </div>
                      <div className="uk-modal-body">
                        <form className="uk-grid-small" uk-grid="true" onSubmit={actionNuevoVisitante}>
                            <div className="uk-width-1-4@s">
                                <label className="uk-form-label" for="form-stacked-text">Tipo Visitante:</label>
                                <div className="uk-form-controls">
                                    <select class="uk-input"  type="text" placeholder="" 
                                    value={form.tipo_visitante}
                                    onChange={e=>setForm({...form,tipo_visitante:e.target.value})}
                                    >
                                        {catVisitantes.length ===0?(
                                            <option>No se encontraron registros</option>
                                        ):(
                                            catVisitantes.map((tipoVisi, index)=>(
                                                <option value={tipoVisi.id_tipovisitante} key={index}>{tipoVisi.tipo_visitante}</option>
                                            )))
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className="uk-width-1-2@s"></div>
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
                                <label class="uk-form-label" for="form-stacked-text">Genero:</label>
                                <div class="uk-form-controls">
                                    <select class="uk-input"  type="text" placeholder="" 
                                    value={form.genero}
                                    onChange={e=>setForm({...form,genero:e.target.value})}
                                    >
                                        <option value='Hombre'>Masculino</option>
                                        <option value='Mujer'>Femenino</option>
                                    </select>
                                </div>
                            </div>
                             <div class="uk-width-1-2@s">
                                <label class="uk-form-label" for="form-stacked-text">Telefono:</label>
                                <div class="uk-form-controls">
                                    <input class="uk-input"  type="text" placeholder=""
                                    value={form.telefono}
                                    onChange={e=>setForm({...form,telefono:e.target.value})}
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
                            <div class="uk-width-1-1@s">
                                <label class="uk-form-label" for="form-stacked-text">Motivo Visita:</label>
                                <div class="uk-form-controls">
                                    <textarea class="uk-input"  type="text" placeholder="" style={{width:'100%',height:'300px'}}
                                    value={form.motivo_visita}
                                    onChange={e=>setForm({...form,motivo_visita:e.target.value})}
                                    ></textarea>
                                </div>
                                <button className="uk-button uk-button-primary" type="submit">GUARDAR</button>
                            </div>
                        </form>
                      </div>
                      <div className="uk-modal-footer uk-text-right">
                        
                        <button className="uk-button uk-button-default uk-modal-close" type="button">CANCELAR</button>
                        <button className="uk-button uk-button-primary" onClick={()=>alert('Guardado')}>GUARDAR</button>
                      </div>
                    </div> 
                </div>
        </div>
    </>;
}

export default Visitas;
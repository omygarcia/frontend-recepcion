import axios from 'axios';
import { useState } from 'react';


axios.defaults.headers.common.Authorization = 'Bearer ';

const useVisita = () =>{
    const [visitas,setVisitas] = useState([]);
    const [visita,setVisita] = useState(null);
    const listaVisitas = async()=>{
        try{
            const {data} = await axios.get('/visitante');
            console.log('data',data);
            return data;
        }
        catch(error)
        {
            console.log("ERROR: ");
            console.log(error);
            return [];
        }
    }

    const nuevo_visitante = async(form)=>{
         try{
            const {data} = await axios.post('/visitante/create',form);
            console.log('data',data);
            return data;
        }
        catch(error)
        {
            console.log("ERROR: ");
            console.log(error);
            return [];
        }
    }

    const show_visitante = async(id)=>{
        try{
            const {data} = await axios.get('/visitante/show/'+id);
            console.log('data',data);
            setVisita(data);
            return data;
        }
        catch(error)
        {
            console.log("ERROR: ");
            console.log(error);
            return [];
        }
    }

    const actualizar_visistante = async(form)=>{
         try{
            const {data} = await axios.post('/visitante/update',form);
            console.log('data',data);
            return data;
        }
        catch(error)
        {
            console.log("ERROR: ");
            console.log(error);
            return [];
        }
    }

    const eliminar_visitante = async(id)=>{
        try{
            const {data} = await axios.delete('/visitante/delete/'+id);
            console.log('data',data);
            return data;
        }
        catch(error)
        {
            console.log("ERROR: ");
            console.log(error);
            return [];
        }
    }

    return{
        listaVisitas,
        visitas,
        setVisitas,
        visita,
        setVisita,
        nuevo_visitante,
        show_visitante,
        actualizar_visistante,
        eliminar_visitante
    }
}

export default useVisita;
import axios from 'axios';
import { useState } from 'react';


axios.defaults.headers.common.Authorization = 'Bearer ';

const useEmpleado = () =>{
    const [empleados,setEmpleados] = useState([]);
    const [empleado,setEmpleado] = useState(null);
    const listarEmpleados = async()=>{
        try{
            const {data} = await axios.get('/');
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

    const nuevo_empleado = async(form)=>{
         try{
            const {data} = await axios.post('/empleado/create',form);
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

    const show_empleado = async(id)=>{
        try{
            const {data} = await axios.get('/empleado/'+id);
            console.log('data',data);
            setEmpleado(data);
            return data;
        }
        catch(error)
        {
            console.log("ERROR: ");
            console.log(error);
            return [];
        }
    }

    const actualizar_empleado = async(form)=>{
         try{
            const {data} = await axios.put('/empleado/update/'+form.id_empleado,form);
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

    const eliminar_empleado = async(id)=>{
        try{
            const {data} = await axios.delete('/empleado/delete/'+id);
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
        listarEmpleados,
        setEmpleados,
        empleados,
        nuevo_empleado,
        empleado,
        setEmpleado,
        show_empleado,
        actualizar_empleado,
        eliminar_empleado
    }
}

export default useEmpleado;
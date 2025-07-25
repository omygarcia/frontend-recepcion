import axios from 'axios';
import { useState } from 'react';


axios.defaults.headers.common.Authorization = 'Bearer ';

const useEmpleado = () =>{
    const [empleados,setEmpleados] = useState([]);
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

    return{
        listarEmpleados,
        setEmpleados,
        empleados,
        nuevo_empleado
    }
}

export default useEmpleado;
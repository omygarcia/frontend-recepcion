import axios from 'axios';
import { useState } from 'react';

const useEmpleado = () =>{
    const [empelados,setEmpleados] = useState([]);
    const listarEmpleados = async()=>{
        try{
            const {data} = await axios.get('/');
            console.log(data);
            setEmpleados(data);
        }
        catch(error)
        {
            console.log(error);
        }
      
    }

    return{
        listarEmpleados,
        empelados
    }
}

export default useEmpleado;
import axios from 'axios';
import { useState, useEffect } from 'react';


axios.defaults.headers.common.Authorization = 'Bearer ';

class TipoVisitante {
    id_tipovisitante = "";
    tipo_visitante = "";
    organizacion = ""
}


const useTipoVisitante = () =>{
    const [listTipoVistente,setListTipoVisitante] = useState([]);
    const getListTipoVisitante = async()=>{
        try{
            const {data} = await axios.get('/visitante/tipo-visitante');
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
        listTipoVistente,
        setListTipoVisitante,
        getListTipoVisitante
    }
}

export default useTipoVisitante;
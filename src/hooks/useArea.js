import axios from 'axios';
import { useState, useEffect } from 'react';


axios.defaults.headers.common.Authorization = 'Bearer ';

const useArea = () =>{
    const [areas,setAreas] = useState([]);
    const listarAreas = async()=>{
        try{
            const {data} = await axios.get('/areas');
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

    useEffect(() => {
        listarAreas().then(setAreas);
    }, []);


    const nueva_area = async(form)=>{
         try{
            const {data} = await axios.post('/areas/create',form);
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
        listarAreas,
        setAreas,
        areas,
        nueva_area
    }
}

export default useArea;
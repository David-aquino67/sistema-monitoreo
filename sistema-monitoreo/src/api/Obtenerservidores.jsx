import axios from 'axios';


export const obtenerServidores=async()=>{
    try{
        const respuesta=await axios.get('http://localhost:3001/servidores');
        if(respuesta.status!==200){
            throw new Error('Error al conectar con la API de la OOMS');
        }
        console.log('Respuesta de servidores:',respuesta.data);
        return respuesta.data;

    }catch(error){
        console.error('Error al obtener los servidores:',error);
        throw error;
    }
};
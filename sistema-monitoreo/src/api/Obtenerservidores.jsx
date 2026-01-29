import clienteApi from '@api/configuracionApi/configuracionApi';

export const obtenerServidores = async () => {
    try {
        const respuesta = await clienteApi.get('http://localhost:8000/api/servidores');
        return respuesta.data;
    } catch (error) {
        const mensajeError = error.response?.data?.message || 'Error al conectar con la API de la OOMS';
        console.error('Error en la petición:', mensajeError);
        throw new Error(mensajeError);
    }
};
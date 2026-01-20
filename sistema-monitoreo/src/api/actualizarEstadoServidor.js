import clienteApi from '@api/configuracionApi/configuracionApi.js';

export const actualizarEstadoServidor = async (id, nuevoEstado) => {
    try {
        const respuesta = await clienteApi.patch(`/servidores/${id}`, {
            estado: nuevoEstado
        });
        return respuesta.data;
    } catch (error) {
        console.error('Error al actualizar servidor:', error.message);
        throw error;
    }
};
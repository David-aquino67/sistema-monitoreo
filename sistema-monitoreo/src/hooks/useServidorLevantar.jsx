import { actualizarEstadoServidor } from '@api/actualizarEstadoServidor';

export const useServidorLevantar = (execute, refrescar) => {

    const manejarLevantar = async (id) => {
        await execute(async () => {
            await actualizarEstadoServidor(id, 'online');
            if (refrescar) {
                await refrescar();
            }
            console.log(`Servidor ${id} levantado con éxito.`);
        });
    };
    return { manejarLevantar };
};
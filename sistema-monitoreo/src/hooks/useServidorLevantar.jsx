import { useState, useEffect } from 'react';
import { actualizarEstadoServidor } from '@api/actualizarEstadoServidor';

export const useServidorLevantar = (execute, refrescar) => {
    const [success, setSuccess] = useState(false);
    useEffect(() => {
        if (success) {
            const timer = setTimeout(() => setSuccess(false), 10000);
            return () => clearTimeout(timer);
        }
    }, [success]);

    const manejarLevantar = async (id) => {
        await execute(async () => {
            try {
                await actualizarEstadoServidor(id, 'online');
                if (refrescar) {
                    await refrescar();
                }
                setSuccess(true);
                console.log('Servidor ${id} levantado con éxito.');
            } catch (error) {
                console.error("Error al levantar servidor:", error);
                setSuccess(false);
            }
        });
    };

    return {
        manejarLevantar,
        success 
    };
};
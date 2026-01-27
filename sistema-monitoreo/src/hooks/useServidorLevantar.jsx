import { useState, useEffect } from 'react';
import { actualizarEstadoServidor } from '@api/actualizarEstadoServidor';

export const useServidorLevantar = (execute, refrescar) => {
    const [success, setSuccess] = useState(false);

    // Efecto para limpiar el estado de éxito después de 2 segundos
    useEffect(() => {
        if (success) {
            const timer = setTimeout(() => setSuccess(false), 10000);
            return () => clearTimeout(timer);
        }
    }, [success]);

    const manejarLevantar = async (id) => {
        // Usamos el 'execute' original para manejar el loading global
        await execute(async () => {
            try {
                // 1. Llamada a la API de Axios
                await actualizarEstadoServidor(id, 'online');

                // 2. Refrescamos los datos del dashboard
                if (refrescar) {
                    await refrescar();
                }

                // 3. Activamos el estado visual de éxito
                setSuccess(true);
                console.log(`Servidor ${id} levantado con éxito.`);
            } catch (error) {
                console.error("Error al levantar servidor:", error);
                setSuccess(false);
            }
        });
    };

    return {
        manejarLevantar,
        success // Exportamos success para que el botón cambie de color
    };
};
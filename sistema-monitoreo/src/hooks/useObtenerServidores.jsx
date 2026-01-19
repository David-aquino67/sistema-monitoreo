import { useState, useEffect } from 'react';
import { obtenerServidores } from '../api/Obtenerservidores';

export const useObtenerServidores = () => {
    const [servidores, setServidores] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const consultarAPI = async () => {
            try {
                setCargando(true);
                const respuesta = await obtenerServidores();
                console.log("Respuesta de la API:", respuesta);
                setServidores(respuesta);
            } catch (err) {
                console.error("Fallo en la carga:", err);
                setError(err.message);
            } finally {
                setCargando(false);
            }
        };

        consultarAPI();
    }, []);

    return { servidores, cargando, error };
};
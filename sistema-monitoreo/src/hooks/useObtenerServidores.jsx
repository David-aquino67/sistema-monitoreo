import { useState, useEffect, useCallback } from 'react';
import { obtenerServidores } from '@api/Obtenerservidores.jsx';

export const useObtenerServidores = () => {
    const [servidores, setServidores] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    const consultarAPI = useCallback(async () => {
        try {
            setCargando(true);
            const datos = await obtenerServidores();
            setServidores(datos);
            setError(null);
        } catch (err) {
            console.error("Error al obtener servidores:", err.message);
            setError(err.message);
        } finally {
            setCargando(false);
        }
    }, []);
    useEffect(() => {
        consultarAPI();
    }, [consultarAPI]);

   return { servidores, cargando, error, refrescar: consultarAPI };
};
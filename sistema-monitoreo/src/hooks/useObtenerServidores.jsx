import { useState, useEffect } from 'react';
import { obtenerServidores } from '../api/Obtenerservidores.jsx';

export const useObtenerServidores = () => {
    const [servidores, setServidores] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const consultarAPI = async () => {
            try {
                setCargando(true);
                const datos = await obtenerServidores();
                setServidores(datos);
            } catch (err) {
                setError(err.message);
            } finally {
                setCargando(false);
            }
        };

        consultarAPI();
    }, []);

    return { servidores, cargando, error };
};
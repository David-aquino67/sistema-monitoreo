import { useState, useEffect } from 'react';

export const useObtenerServidores = () => {
    const [servidores, setServidores] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const consultarAPI = async () => {
            try {
                setCargando(true);
                const respuesta = await fetch('http://localhost:3001/servidores');
                if (!respuesta.ok) {
                    throw new Error('Error al conectar con la API de la OOMS');
                }
                const datos = await respuesta.json();
                setServidores(datos);
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
import { useState, useEffect } from 'react';
import { servidoresSimulados } from '../data/servidoresSimulados';

export const useObtenerServidores = () => {
    const [servidores, setServidores] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const obtenerDatos = async () => {
            setCargando(true);
            // Simulamos retraso de red de 1.5 segundos
            await new Promise(resolve => setTimeout(resolve, 1500));
            setServidores(servidoresSimulados);
            setCargando(false);
        };

        obtenerDatos();
    }, []);

    return { servidores, cargando };
};
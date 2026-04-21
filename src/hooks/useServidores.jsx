import { useState, useEffect, useCallback, useRef } from 'react';
import { obtenerServidores } from '@api/Obtenerservidores.jsx';
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

window.Pusher = Pusher;

const echo = new Echo({
    broadcaster: 'reverb',
    key: import.meta.env.VITE_REVERB_APP_KEY,
    wsHost: import.meta.env.VITE_REVERB_HOST || '127.0.0.1',
    wsPort: import.meta.env.VITE_REVERB_PORT || 8080,
    wssPort: import.meta.env.VITE_REVERB_PORT || 8080,
    forceTLS: false,
    enabledTransports: ['ws', 'wss'],
    disableStats: true,
});

export const useServidores = () => {
    const [servidores, setServidores] = useState([]);
    const [cargando, setCargando] = useState(true);

    const cargarServidores = useCallback(async () => {
        try {
            const datos = await obtenerServidores();
            setServidores(datos);
        } catch (err) { 
            console.error("Error cargando servidores:", err); 
        } finally { 
            setCargando(false); 
        }
    }, []);

    useEffect(() => {
        cargarServidores();
    }, [cargarServidores]);

    useEffect(() => {
        const channel = echo.channel('status-channel');
        channel.listen('.server.updated', (data) => {
            const nuevosDatos = data.payload || data;

            setServidores((prevServidores) => {
                const mapa = new Map(prevServidores.map(s => [s.id, s]));
                if (Array.isArray(nuevosDatos)) {
                    nuevosDatos.forEach(nuevo => {
                        const existente = mapa.get(nuevo.id);
                        mapa.set(nuevo.id, { ...existente, ...nuevo });
                    });
                } else {
                    mapa.set(nuevosDatos.id, { ...mapa.get(nuevosDatos.id), ...nuevosDatos });
                }
                return Array.from(mapa.values());
            });
        });

        return () => {
            echo.leaveChannel('status-channel');
        };
    }, []); 

    return { servidores, cargando, refrescar: cargarServidores };
};
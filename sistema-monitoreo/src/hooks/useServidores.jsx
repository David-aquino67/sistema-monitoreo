import { useState, useEffect, useCallback } from 'react';
import { obtenerServidores } from '@api/Obtenerservidores.jsx';
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

window.Pusher = Pusher;
const echo = new Echo({
    broadcaster: 'reverb',
    key: import.meta.env.VITE_REVERB_APP_KEY,
    wsHost: import.meta.env.VITE_REVERB_HOST,
    wsPort: import.meta.env.VITE_REVERB_PORT,
    forceTLS: false,
    enabledTransports: ['ws', 'wss'],
});

export const useServidores = () => {
    const [servidores, setServidores] = useState([]);
    const [cargando, setCargando] = useState(true);

    const cargarServidores = useCallback(async () => {
        try {
            const datos = await obtenerServidores();
            setServidores(datos);
        } catch (err) {
            console.error("Error inicial:", err);
        } finally {
            setCargando(false);
        }
    }, []);

    useEffect(() => {
        cargarServidores();
    }, [cargarServidores]);

    useEffect(() => {
        const channel = echo.channel('status-channel')
            .listen('.server.updated', (data) => {
                const nuevosDatos = data.payload; 

                setServidores((prev) => {
                    const mapa = new Map(prev.map(s => [s.id, s]));
                    
                    nuevosDatos.forEach(nuevo => {
                        if (mapa.has(nuevo.id)) {
                            mapa.set(nuevo.id, { ...mapa.get(nuevo.id), ...nuevo });
                        } else {
                            mapa.set(nuevo.id, nuevo);
                        }
                    });

                    return Array.from(mapa.values());
                });
            });

        return () => echo.leaveChannel('status-channel');
    }, []);

    return { servidores, cargando, refrescar: cargarServidores };
};
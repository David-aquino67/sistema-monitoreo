import { useState, useEffect, useCallback, useRef } from 'react';
import { obtenerServidores } from '@api/Obtenerservidores.jsx';
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

// Configuración de Echo fuera del hook para evitar duplicar conexiones
window.Pusher = Pusher;

const echo = new Echo({
    broadcaster: 'reverb',
    key: import.meta.env.VITE_REVERB_APP_KEY,
    // Usamos un fallback a 127.0.0.1 por si el .env falla
    wsHost: import.meta.env.VITE_REVERB_HOST,
    wsPort: import.meta.env.VITE_REVERB_PORT,
    wssPort: import.meta.env.VITE_REVERB_PORT,
    forceTLS: false,
    enabledTransports: ['ws', 'wss'],
    disableStats: true,
});

export const useServidores = () => {
    const [servidores, setServidores] = useState([]);
    const [cargando, setCargando] = useState(true);
    // Usamos una referencia para saber si ya estamos escuchando
    const isListening = useRef(false);

    const cargarServidores = useCallback(async () => {
        try {
            const datos = await obtenerServidores();
            setServidores(datos);
        } catch (err) { console.error(err); }
        finally { setCargando(false); }
    }, []);

    useEffect(() => {
        cargarServidores();
    }, [cargarServidores]);

    useEffect(() => {
        // Si ya hay un listener activo, no creamos otro
        if (isListening.current) return;

        console.log("🔥 SUSCRIBIENDO AL CANAL POR PRIMERA VEZ");
        const channel = echo.channel('status-channel');
        
        channel.listen('.server.updated', (data) => {
            console.log("⚡ DATOS RECIBIDOS:", data.payload.length, "servidores.");
            setServidores((prev) => {
                const mapa = new Map(prev.map(s => [s.id, s]));
                data.payload.forEach(nuevo => {
                    mapa.set(nuevo.id, { ...mapa.get(nuevo.id), ...nuevo });
                });
                return Array.from(mapa.values());
            });
        });

        isListening.current = true;

        // Comenta el leaveChannel para probar. 
        // En una app de monitoreo 24/7, a veces es mejor dejar la conexión abierta
        return () => {
            // console.log("Intento de desmontaje bloqueado por useRef");
        };
    }, []);

    return { servidores, cargando, refrescar: cargarServidores };
};
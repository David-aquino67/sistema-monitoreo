import { useEffect } from 'react';
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

export const useMonitoreoRealTime = (setServidores) => {
    useEffect(() => {
        window.Pusher = Pusher;

        const echo = new Echo({
    broadcaster: 'reverb',
    key: import.meta.env.VITE_REVERB_APP_KEY,
    wsHost: import.meta.env.VITE_REVERB_HOST, 
    wsPort: import.meta.env.VITE_REVERB_PORT,
    forceTLS: false,
    enabledTransports: ['ws', 'wss'],
});

        const channel = echo.channel('status-channel')
            .listen('.server.updated', (data) => {
                const nuevosEstados = data.payload;
                setServidores((prevServidores) => {
                    const servidoresActualizados = [...prevServidores];
                    nuevosEstados.forEach((nuevoEstado) => {
                        const index = servidoresActualizados.findIndex(s => s.id === nuevoEstado.id);
                        if (index !== -1) {
                            servidoresActualizados[index] = {
                                ...servidoresActualizados[index],
                                online: nuevoEstado.online,
                                latencia: nuevoEstado.latencia,
                                fecha_actualizacion: nuevoEstado.fecha
                            };
                        }
                    });

                    return servidoresActualizados;
                });
            });

        return () => {
            channel.stopListening('.server.updated');
            echo.leaveChannel('status-channel');
        };
    }, [setServidores]); 
};
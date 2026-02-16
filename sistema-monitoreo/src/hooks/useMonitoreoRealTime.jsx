import { useEffect } from 'react';
import { echo } from '@lib/echo.js';

export const useMonitoreoRealTime = (setServidores, refrescar) => {
    useEffect(() => {
        const channel = echo.channel('monitoreo-global');

        channel.listen('.servidor.cambio', (data) => {
            console.log('¡Actualización recibida!', data.servidor);
            if (setServidores) {
                setServidores(prev => prev.map(s =>
                    s.id === data.servidor.id ? data.servidor : s
                ));
            } else {
                refrescar();
            }
        });

        return () => {
            echo.leaveChannel('monitoreo-global');
        };
    }, [refrescar, setServidores]);
};
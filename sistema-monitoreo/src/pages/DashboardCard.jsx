import { useEffect } from 'react'; 
import { Grid, Typography, Box, CircularProgress } from '@mui/material';
import { useStatusActions } from '@hooks/useStatusActions';
import { useObtenerServidores } from '@hooks/useObtenerServidores.jsx';
import { SeccionResumen } from '@components/SeccionResumen';
import { ListadoServidores } from '@components/ListadoServidores.jsx';
import { useServidorLevantar } from "@hooks/useServidorLevantar.jsx";
import { echo } from '@lib/echo.js';

const DashboardCard = () => {
    const { servidores, loading: loadingData, refrescar, setServidores } = useObtenerServidores();
    const { loading: actionLoading, execute } = useStatusActions();
    const { manejarLevantar } = useServidorLevantar(execute, refrescar);

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

    if (loadingData) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 10 }}>
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Box sx={{ p: 4 }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4 }}>
                Monitoreo SIMF (Tiempo Real)
            </Typography>

            <SeccionResumen servidores={servidores} />

            <ListadoServidores
                servidores={servidores}
                actionLoading={actionLoading}
                manejarLevantar={manejarLevantar}
                execute={execute}
            />
        </Box>
    );
};

export default DashboardCard;
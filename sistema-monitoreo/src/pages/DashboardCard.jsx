import { useEffect } from 'react'; 
import { Grid, Typography, Box, CircularProgress } from '@mui/material';
import { useStatusActions } from '@hooks/useStatusActions';
import { useObtenerServidores } from '@hooks/useObtenerServidores.jsx';
import { SeccionResumen } from '@components/SeccionResumen';
import { ListadoServidores } from '@components/ListadoServidores.jsx';
import { useServidorLevantar } from "@hooks/useServidorLevantar.jsx";
import { echo } from '@lib/echo.js';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { IconButton, Stack } from '@mui/material';
import { dashboard } from '@styles/page/Dashboard.jsx'
import { Stack1 } from '@const/page/dashboard.jsx'

const DashboardCard = ({ toggleTheme, isDarkMode }) => {
    const { servidores, loading: loadingData, refrescar, setServidores } = useObtenerServidores();
    const { loadingId, execute } = useStatusActions();
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
            <Box sx={dashboard.Noloadigncircularpogres}>
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Box sx={dashboard.boxpadre}>
            <Stack {...Stack1} sx={{ mb: 4 }}>
                <Typography variant="h4" sx={dashboard.TituloPrincipal}>
                    Monitoreo SIMF (Tiempo Real)
                </Typography>
                <IconButton onClick={toggleTheme} color="inherit" sx={dashboard.IconoParaTema}>
                    {isDarkMode ? <LightModeIcon sx={{ color: '#ffeb3b' }} /> : <DarkModeIcon />}
                </IconButton>
            </Stack>

            <SeccionResumen servidores={servidores} />

            <ListadoServidores
                servidores={servidores}
                loadingId={loadingId}
                manejarLevantar={manejarLevantar}
                execute={execute}
            />
        </Box>
    );
};

export default DashboardCard;
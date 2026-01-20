import { Grid, Typography, Box, CircularProgress } from '@mui/material';
import { useStatusActions } from '../hooks/useStatusActions';
import { useObtenerServidores } from '../hooks/useObtenerServidores.jsx'; // Usando ruta relativa si el alias @ falla
//import { actualizarEstadoServidor } from '../api/actualizarEstadoServidor.js';
import { SeccionResumen } from '../components/SeccionResumen';
import { ListadoServidores } from '../components/ListadoServidores';
import {useServidorLevantar} from "@hooks/useServidorLevantar.jsx";

const DashboardCard = () => {
    const { servidores, loading: loadingData, refrescar } = useObtenerServidores();
    const { loading: actionLoading, execute } = useStatusActions();
    const { manejarLevantar } = useServidorLevantar(execute, refrescar);

    if (loadingData) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 10 }}>
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Box sx={{ p: 4 }}>
            <Typography variant="h4" sx={{ mb: 4 }}>Monitoreo SIMF (Dinámico)</Typography>

            {/* 1. Módulo de Resumen */}
            <SeccionResumen servidores={servidores} />

            {/* 2. Módulo de Listado */}
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
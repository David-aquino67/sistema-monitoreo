import { Box, CircularProgress } from '@mui/material';
import { useStatusActions } from '@hooks/useStatusActions';
import { useObtenerServidores } from '@hooks/useObtenerServidores.jsx';
import { useServidorLevantar } from "@hooks/useServidorLevantar.jsx";
import { useMonitoreoRealTime } from "@hooks/useMonitoreoRealTime";
import { useServidores } from '@hooks/useServidores';
import { SeccionResumen } from '@components/SeccionResumen';
import { ListadoServidores } from '@components/ListadoServidores.jsx';
import { DashboardHeader } from '@components/DashboardHeader.jsx';

import { dashboard } from '@styles/page/Dashboard.jsx';

const DashboardCard = ({ toggleTheme, isDarkMode }) => {
    const { servidores, cargando, refrescar } = useServidores();
    //const { servidores, loading: loadingData, refrescar, setServidores } = useObtenerServidores();
    const { loadingId, execute } = useStatusActions();
    const { manejarLevantar } = useServidorLevantar(execute, refrescar);

    //useMonitoreoRealTime(setServidores, refrescar);

    if (cargando) {
        return (
            <Box sx={dashboard.Noloadigncircularpogres}>
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Box sx={dashboard.boxpadre}>
            <DashboardHeader toggleTheme={toggleTheme} isDarkMode={isDarkMode} />

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
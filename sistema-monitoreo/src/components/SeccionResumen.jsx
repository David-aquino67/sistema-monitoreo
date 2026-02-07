import { Grid} from '@mui/material';
import ResumenServidores from '@components/ResumenServidores/ResumenServidores.jsx';
import StatusResume from '@components/StatusResume/StatusResume.jsx';

export const SeccionResumen = ({ servidores = [] }) => {
    const conteo = {
        total: servidores.length,
        online: servidores.filter(s => s.estado === 'online').length,
        warning: servidores.filter(s => s.estado === 'warning').length,
        offline: servidores.filter(s => s.estado === 'offline').length,
        maintenance: servidores.filter(s => s.estado === 'maintenance').length,
    };

    return (
        <Grid container spacing={2} sx={{ mb: 4 }} alignItems="stretch">
            <Grid size={{ xs: 12, md: 3 }}>
                <ResumenServidores total={conteo.total} />
            </Grid>
            <Grid size={{ xs: 12, md: 9 }}>
                <Grid container spacing={2} height="100%">
                    <Grid size={{ xs: 6, sm: 3 }}>
                        <StatusResume quantity={conteo.online} status="online" />
                    </Grid>
                    <Grid size={{ xs: 6, sm: 3 }}>
                        <StatusResume quantity={conteo.warning} status="warning" />
                    </Grid>
                    <Grid size={{ xs: 6, sm: 3 }}>
                        <StatusResume quantity={conteo.maintenance} status="maintenance" />
                    </Grid>
                    <Grid size={{ xs: 6, sm: 3 }}>
                        <StatusResume quantity={conteo.offline} status="offline" />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

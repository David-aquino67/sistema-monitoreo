import { Grid, Box } from '@mui/material';
import ResumenServidores from '../components/ResumenServidores/ResumenServidores.jsx';
import StatusResume from '../components/StatusResume/StatusResume.jsx';

export const SeccionResumen = ({ servidores = [] }) => {
    const conteo = {
        total: servidores.length,
        online: servidores.filter(s => s.estado === 'online').length,
        warning: servidores.filter(s => s.estado === 'warning').length,
        offline: servidores.filter(s => s.estado === 'offline').length,
        maintenance: servidores.filter(s => s.estado === 'maintenance').length,
    };

    return (
        <Grid container spacing={2} sx={{ mb: 4 }}>
            <Grid item xs={12} md={3}>
                <ResumenServidores total={conteo.total} />
            </Grid>
            <Grid item xs={12} md={9}>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', height: '100%' }}>
                    <StatusResume quantity={conteo.online} status="online" />
                    <StatusResume quantity={conteo.warning} status="warning" />
                    <StatusResume quantity={conteo.maintenance} status="maintenance" />
                    <StatusResume quantity={conteo.offline} status="offline" />
                </Box>
            </Grid>
        </Grid>
    );
};
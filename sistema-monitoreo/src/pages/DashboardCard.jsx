import { Grid, Typography, Box, CircularProgress } from '@mui/material';
//import { useObtenerServidores } from '../hooks/useObtenerServidores.jsx';
import { useStatusActions } from '../hooks/useStatusActions';
import StatusCard from '../components/StatusCard/StatusCard';
import { StatusMetrics } from '../components/StatusCard/StatusMetrics';
import { BotonesCard } from '../components/StatusCard/BotonesCard';
import { fecha, latencia } from '../helpers/formateo';
import ResumenServidores from '../components/ResumenServidores/ResumenServidores.jsx';
import {useObtenerServidores} from '@hooks/useObtenerServidores.jsx'
import {StatusResume} from '@components/StatusResume/StatusResume.jsx'

const DashboardCard = () => {
    const { servidores, loading: loadingData } = useObtenerServidores();
    const { loading: actionLoading, execute } = useStatusActions();
    const totalServidores = servidores?.length || 0;
    if (loadingData) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 10 }}>
                <CircularProgress /> {}
            </Box>
        );
    }
    const conteo = {
        total: servidores?.length || 0,
        online: servidores?.filter(s => s.estado === 'online').length || 0,
        warning: servidores?.filter(s => s.estado === 'warning').length || 0,
        offline: servidores?.filter(s => s.estado === 'offline').length || 0,
        maintenance: servidores?.filter(s => s.estado === 'maintenance').length || 0,
    };
    return (
        <Box sx={{ p: 4 }}>
            {/* Header con Título y Resumen alineados */}
            <Grid container alignItems="center" sx={{ mb: 4 }}>
                <Grid item xs={12} md={8}>
                    <Typography variant="h4">Monitoreo SIMF (Dinámico)</Typography>
                </Grid>
                <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    {/* Quitamos el !cargando de aquí porque el 'if' de arriba ya maneja la espera */}
                    <ResumenServidores total={totalServidores} />
                </Grid>

                    {/* Sección de Resumen Global */}
                    <Grid container spacing={2} sx={{ mb: 4 }}>
                        <Grid item xs={12} md={3}>
                            <ServerResume quantity={conteo.total} />
                        </Grid>
                        <Grid item xs={12} md={9}>
                            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                                <StatusResume quantity={conteo.online} status="online" />
                                <StatusResume quantity={conteo.warning} status="warning" />
                                <StatusResume quantity={conteo.maintenance} status="maintenance" />
                                <StatusResume quantity={conteo.offline} status="offline" />
                            </Box>
                        </Grid>
                    </Grid>
            </Grid>

            <Grid container spacing={3}>
                {servidores?.map((srv) => (
                    <Grid item xs={12} md={6} lg={4} key={srv.id}>
                        <StatusCard
                            title={srv.titulo}
                            place={srv.ubicacion}
                            status={srv.estado}
                            footer={
                                <BotonesCard
                                    loading={actionLoading}
                                    onReboot={srv.permisos.reiniciar ? () => execute(() => console.log("Reinicio", srv.id)) : null}
                                    onReset={srv.permisos.restablecer ? () => execute(() => console.log("Reset", srv.id)) : null}
                                    onClean={srv.permisos.limpiar ? () => execute(() => console.log("Limpieza", srv.id)) : null}
                                />
                            }
                        >
                            <StatusMetrics
                                uptime={fecha(srv.tiempoActividad)}
                                latency={latencia(srv.latencia)}
                                lastPing={new Date(srv.ultimoPing)}
                            />
                        </StatusCard>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};
export default DashboardCard;
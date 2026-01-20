import { Grid, Typography, Box, CircularProgress } from '@mui/material';
import { useObtenerServidores } from '../hooks/useObtenerServidores.jsx';
import { useStatusActions } from '../hooks/useStatusActions';
import StatusCard from '../components/StatusCard/StatusCard';
import { StatusMetrics } from '../components/StatusCard/StatusMetrics';
import { BotonesCard } from '../components/StatusCard/BotonesCard';
import { fecha, latencia } from '../helpers/formateo';

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

    return (
        <Box sx={{ p: 4 }}>
            <Typography variant="h4" sx={{ mb: 4 }}>Monitoreo SIMF (Dinámico)</Typography>
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
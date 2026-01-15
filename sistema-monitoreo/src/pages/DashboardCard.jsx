import { Grid, Typography, Box, Alert } from '@mui/material';
import { fecha, latencia } from '../helpers/formateo'; 


import StatusCard from '../components/StatusCard/StatusCard';
import { StatusMetrics } from '../components/StatusCard/StatusMetrics';
import { BotonesCard } from '../components/StatusCard/BotonesCard';
import { useStatusActions } from '../hooks/useStatusActions';


const DashboardCard = () => {
    const { loading, execute } = useStatusActions();

    return (
        <Box sx={{ p: 4 }}>
            <Typography variant="h4" sx={{ mb: 4 }}>Panel de Monitoreo SIMF</Typography>

            <Grid container spacing={3}>
                {/* TARJETA 1 */}
                <Grid item xs={12} md={6} lg={4}>
                    <StatusCard
                        title="UMF 10"
                        place="Delegación Norte"
                        status="online"
                        footer={
                            <BotonesCard
                                loading={loading}
                                onReboot={() => execute(() => console.log("Reinicio UMF 10"))}
                                onReset={() => execute(() => console.log("Reset UMF 10"))}
                                onClean={() => execute(() => console.log("Limpieza UMF 10"))}
                            />
                        }
                    >
                        <StatusMetrics
                            uptime={fecha("12d 5h")}
                            latency={latencia(45)}
                            lastPing={new Date()}
                        />
                    </StatusCard>
                </Grid>

                {/* TARJETA 2 */}
                <Grid item xs={12} md={6} lg={4}>
                    <StatusCard
                        title="Servidor Central"
                        place="Data Center"
                        status="warning"
                        footer={
                            <BotonesCard
                                loading={loading}
                                onReboot={() => execute(() => console.log("Reinicio Crítico"))}
                            />
                        }
                    >
                        <StatusMetrics
                            uptime={fecha("150d 2h")}
                            latency={latencia(5)}
                            lastPing={new Date()}
                        />
                        <Alert severity="info" sx={{ mt: 2 }}>
                            Limpieza deshabilitada en producción.
                        </Alert>
                    </StatusCard>
                </Grid>
            </Grid>
        </Box>
    );
};

export default DashboardCard;
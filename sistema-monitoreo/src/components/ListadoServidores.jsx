import { Grid } from '@mui/material';
import StatusCard from '../components/StatusCard/StatusCard.jsx';
import { StatusMetrics } from '../components/StatusCard/StatusMetrics.jsx';
import { BotonesCard } from '../components/StatusCard/BotonesCard.jsx';
import { fecha, latencia } from '../helpers/formateo.jsx';

export const ListadoServidores = ({ servidores, actionLoading, manejarLevantar, execute }) => {
    return (
        <Grid container spacing={3}>
            {servidores?.map((srv) => (
                <Grid item xs={12} md={6} lg={4} key={srv.id}>
                    <StatusCard
                        title={srv.titulo}
                        place={srv.ubicacion}
                        status={srv.estado}
                        footer={
                            <BotonesCard
                                estado={srv.estado}
                                loading={actionLoading}
                                onLevantar={() => manejarLevantar(srv.id)}
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
    );
};
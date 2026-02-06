import { Grid } from '@mui/material';
import StatusCard from '@components/StatusCard/StatusCard.jsx';
import { StatusMetrics } from '@components/StatusCard/StatusMetrics.jsx';
import { BotonesCard } from '@components/StatusCard/BotonesCard.jsx';
import { fecha, latencia } from '@helpers/formateo.jsx';
import AlertaServidor from '@components/StatusCard/AlertaServidor.jsx';


export const ListadoServidores = ({ servidores, loadingId, manejarLevantar, execute }) => {
    return (
        <Grid container spacing={8} alignItems={"stretch"}>
            {servidores?.map((srv) => (
                <Grid item xs={12} sm={6} lg={4} key={srv.id} sx={{ display: 'flex' }}>
                    <StatusCard
                        key={srv.id}
                        title={srv.titulo}
                        place={srv.ubicacion}
                        status={srv.estado}
                        sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}
                        Alerta={<AlertaServidor servidores={srv.estado} />}
                        footer={
                            <BotonesCard
                                id={srv.id}
                                estado={srv.estado}
                                loading={loadingId === srv.id}
                                onLevantar={() => manejarLevantar(srv.id)}
                                onReboot={srv.permisos.reiniciar ? () => execute(srv.id, () => console.log("Reinicio", srv.id)) : null}
                                onReset={srv.permisos.restablecer ? () => execute(srv.id, () => console.log("Reset", srv.id)) : null}
                                onClean={srv.permisos.limpiar ? () => execute(srv.id, () => console.log("Limpieza", srv.id)) : null}
                            />
                        }
                    >
                        <div style={{flexGrow: 1}}>
                        <StatusMetrics
                            uptime={fecha(srv.tiempoActividad)}
                            latency={latencia(srv.latencia)}
                            lastPing={new Date(srv.ultimoPing)}
                        />
                    </div>
                    </StatusCard>
                </Grid>
            ))}
        </Grid>
    );
};
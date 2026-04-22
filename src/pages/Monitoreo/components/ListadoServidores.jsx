import Grid from '@mui/material/Grid';
import StatusCard from '@pages/Monitoreo/components/StatusCard/StatusCard.jsx';
import { StatusMetrics } from '@pages/Monitoreo/components/StatusCard/StatusMetrics.jsx';
import { BotonesCard } from '@pages/Monitoreo/components/StatusCard/BotonesCard.jsx';
import { fecha, latencia } from '../helpers/formateo.jsx';
import AlertaServidor from '@pages/Monitoreo/components/StatusCard/AlertaServidor.jsx';
import { ListadoServidoresStyle } from '@pages/Monitoreo/styles/ListadoServidoresStyle.jsx';
import { GridPadreListServidoresConst } from '@pages/Monitoreo/const/ListadoServidoresConst.jsx';

export const ListadoServidores = ({ servidores, loadingId, manejarLevantar, execute }) => {
	return (
		<Grid {...GridPadreListServidoresConst} sx={ListadoServidoresStyle.GriPadreListServidores}>
			{servidores?.map((srv) => (
				<Grid size={{ xs: 12, sm: 6, lg: 4 }} key={srv.id} sx={{ display: 'flex' }}>
					<StatusCard
						key={srv.id}
						title={srv.nombre}
						place={`Unidad: ${srv.unidad_id}`}
						status={srv.online}
						sx={ListadoServidoresStyle.StatusCardListServidores}
						Alerta={<AlertaServidor servidores={srv.estado} />}
						footer={
							<BotonesCard
								id={srv.id}
								estado={srv.online}
								loading={loadingId === srv.id}
								onLevantar={() => manejarLevantar(srv.id)}
								onReboot={() => execute(srv.id, () => console.log("Iniciando Reinicio..."))}
								onReset={() => execute(srv.id, () => console.log("Iniciando Restablecimiento..."))}
								onClean={() => execute(srv.id, () => console.log("Iniciando Limpieza..."))}
							/>
						}
					>
						<div style={{ flexGrow: 1 }}>
							<StatusMetrics
								uptime={fecha(srv.fecha)}
								latency={latencia(srv.latencia)}
								lastPing={new Date(srv.fecha)}
							/>
						</div>
					</StatusCard>
				</Grid>
			))}
		</Grid>
	);
};

import { Box, CircularProgress } from '@mui/material';
import { SeccionResumen } from './components/SeccionResumen';
import useObtenerServidores from './hooks/useObtenerServidores';
// import { useStatusActions } from './hooks/useStatusActions';
// import { useServidorLevantar } from './hooks/useServidorLevantar.jsx';
// import { useMonitoreoRealTime } from './hooks/useMonitoreoRealTime';
// import { ListadoServidores } from './components/ListadoServidores.jsx';
import { dashboard } from './styles/page/Dashboard.jsx';

export default function MonitoreoPage() {
	const { servidores, cargando, refrescar } = useObtenerServidores();
	// const { loadingId, execute } = useStatusActions();
	// const { manejarLevantar } = useServidorLevantar(execute, refrescar);

	if (cargando) {
		return (
			<Box sx={dashboard.Noloadigncircularpogres}>
				<CircularProgress />
			</Box>
		);
	}

	return (
		<Box sx={dashboard.boxpadre}>
			<DashboardHeader />
			<SeccionResumen servidores={servidores} />
			{/* <ListadoServidores
				servidores={servidores}
				loadingId={loadingId}
				manejarLevantar={manejarLevantar}
				execute={execute}
			/>  */}
		</Box>
	);
}

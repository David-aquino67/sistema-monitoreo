import useObtenerServidores from './hooks/useObtenerServidores';
import { Box, CircularProgress } from '@mui/material';
import { SeccionResumen } from './components/SeccionResumen';
import { dashboard } from './styles/page/Dashboard.jsx';
import { ListadoServidores } from './components/ListadoServidores.jsx';
import { useStatusActions } from './hooks/useStatusActions';

export default function MonitoreoPage() {
	const { servidores, cargando, cargarServidores } = useObtenerServidores();
	const { loadingId, execute } = useStatusActions();

	if (cargando) {
		return (
			<Box sx={dashboard.Noloadigncircularpogres}>
				<CircularProgress />
			</Box>
		);
	}

	return (
		<Box sx={dashboard.boxpadre}>
			<SeccionResumen servidores={servidores} />
			<ListadoServidores
				servidores={servidores}
				loadingId={loadingId}
				execute={execute}
			/>
		</Box>
	);
}

import useVersion from "@/pages/Version/hooks/useVersion";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Chip,
	CircularProgress,
	Paper,
	Stack,
	Typography,
} from '@mui/material';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import { versionPageStyles } from '@/styles/VersionPage';

export default function VersionPage() {
	const styles = versionPageStyles;

	const { versiones, loading } = useVersion();

	function formatDate(value) {
		if (!value) return 'Fecha no disponible';
		const date = new Date(value);
		if (Number.isNaN(date.getTime())) return value;
		return date.toLocaleDateString('es-MX', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		});
	}

	if (loading) {
		return (
			<Box sx={styles.loadingBox}>
				<CircularProgress />
				<Typography color='text.secondary'>Cargando historial de versiones...</Typography>
			</Box>
		);
	}

	return (
		<Box sx={styles.root}>
			<Box sx={styles.header}>
				<Typography variant='h4' component='h1' sx={styles.title}>
					Historial de versiones
				</Typography>
				<Typography color='text.secondary' sx={styles.subtitle}>
					Consulta los cambios liberados en cada versión del sistema.
				</Typography>
			</Box>

			{!versiones?.length && (
				<Paper elevation={0} sx={styles.emptyCard}>
					<Typography color='text.secondary'>No hay versiones disponibles por el momento.</Typography>
				</Paper>
			)}

			{versiones?.map((version) => {
				const id = version.REGISTRO_id || version.numero_version || version.titulo_version;
				const historial = Array.isArray(version.historial) ? version.historial : [];

				return (
					<Accordion key={id} sx={styles.versionCard} disableGutters>
						<AccordionSummary expandIcon={<ExpandMoreRoundedIcon />}>
							<Stack spacing={0.75}>
								<Typography fontWeight={600}>
									{version.numero_version || 'Versión sin número'} - {version.titulo_version || 'Sin título'}
								</Typography>
								<Box sx={styles.versionMeta}>
									<Chip label={formatDate(version.fecha_liberacion)} size='small' sx={styles.chip} />
									<Chip label={`${historial.length} cambio(s)`} size='small' variant='outlined' sx={styles.chip} />
								</Box>
							</Stack>
						</AccordionSummary>

						<AccordionDetails>
							{historial.length === 0 ? (
								<Typography color='text.secondary'>Sin cambios registrados en esta versión.</Typography>
							) : (
								<Box sx={styles.changesBox}>
									{historial.map((cambio, index) => (
										<Box key={cambio.REGISTRO_id || index} sx={styles.changeItem}>
											<Typography fontWeight={600}>
												{cambio.titulo_cambio || 'Cambio sin título'}
											</Typography>
											<Typography color='text.secondary'>
												{cambio.descripcion_cambio || 'Sin descripción disponible.'}
											</Typography>
										</Box>
									))}
								</Box>
							)}
						</AccordionDetails>
					</Accordion>
				);
			})}
		</Box>
	);
}
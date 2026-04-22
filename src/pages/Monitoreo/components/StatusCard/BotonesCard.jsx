import { CardActions, Button, Box, CircularProgress } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { estilosBotones } from '../../styles/Statuscard/estilosBotones.jsx';
import CheckIcon from '@mui/icons-material/Check';
export const BotonesCard = ({ loading, estado, onLevantar, id, onReboot, onReset, onClean }) => {
	if (estado === 'offline') {
		return (
			<CardActions sx={{ p: 2, pt: 0 }}>
				<Box sx={estilosBotones.contenedorRelativo}>
					<Button
						fullWidth
						variant="contained"
						startIcon={success ? <CheckIcon /> : (!loading && <PlayArrowIcon />)}
						onClick={() => { }}
						disabled={loading}
						sx={estilosBotones.botonLevantar(success)}
					>
						{loading ? 'Levantando...' : (success ? 'En línea' : 'Levantar')}
					</Button>
					{loading && (
						<CircularProgress
							size={24}
							sx={estilosBotones.progresoCircular}
						/>
					)}
				</Box>
			</CardActions>
		);
	}
	return (
		<CardActions sx={{ p: 2, pt: 0, gap: 1, flexWrap: 'wrap' }}>
			{onReboot && (
				<Button size="small" variant="contained" disabled={loading} onClick={onReboot}>
					Reinicio
				</Button>
			)}
			{onReset && (
				<Button size="small" variant="contained" sx={{ color: "primary.main", backgroundColor: "primary.contrastText" }} disabled={loading} onClick={onReset}>
					Restablecer
				</Button>
			)}
			{onClean && (
				<Button size="small" variant="contained" sx={{ color: "secondary.main", backgroundColor: "secondary.contrastText" }} disabled={loading} onClick={onClean}>
					Limpieza
				</Button>
			)}
		</CardActions>
	);
};

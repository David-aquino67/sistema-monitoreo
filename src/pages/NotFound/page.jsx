import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import SearchOffRoundedIcon from '@mui/icons-material/SearchOffRounded';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import { useNavigate } from 'react-router-dom';
import { styles } from '@/pages/NotFound/styles/page';

export default function NotFoundPage() {
	const navigate = useNavigate();

	return (
		<Box sx={styles.root}>
			<Paper elevation={6} sx={styles.paper}>
				<Stack spacing={3}>
					<Stack spacing={2} sx={styles.header}>
						<Box sx={styles.iconWrapper}>
							<SearchOffRoundedIcon sx={styles.icon} />
						</Box>

						<Typography variant='h3' component='h1' sx={styles.titleCode}>
							404
						</Typography>

						<Typography variant='h5' component='h2' sx={styles.title}>
							Página no encontrada
						</Typography>

						<Typography variant='body1' color='text.secondary' sx={styles.message}>
							La ruta que intentas abrir no existe o fue movida. Puedes regresar a la vista anterior o navegar a una página válida del sistema.
						</Typography>
					</Stack>

					<Stack
						direction={styles.actions.direction}
						spacing={styles.actions.spacing}
						justifyContent={styles.actions.justifyContent}
					>
						<Button
							variant='contained'
							color='primary'
							startIcon={<ArrowBackRoundedIcon />}
							onClick={() => navigate(-1)}
						>
							Regresar
						</Button>

						<Button
							variant='outlined'
							color='primary'
							startIcon={<HomeRoundedIcon />}
							onClick={() => navigate('/home')}
						>
							Ir al inicio
						</Button>

						<Button
							variant='text'
							color='inherit'
							startIcon={<LoginRoundedIcon />}
							onClick={() => navigate('/login')}
						>
							Ir a login
						</Button>
					</Stack>
				</Stack>
			</Paper>
		</Box>
	);
}
import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import GppBadOutlinedIcon from '@mui/icons-material/GppBadOutlined';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { useNavigate } from 'react-router-dom';
import { unauthorizedPageStyles } from '@/pages/Unauthorized/styles/page';

export default function UnauthorizedPage() {
	const navigate = useNavigate();
	const styles = unauthorizedPageStyles;

	return (
		<Box sx={styles.root}>
			<Paper
				elevation={6}
				sx={styles.paper}
			>
				<Stack spacing={3}>
					<Stack spacing={2} sx={styles.header}>
						<Box sx={styles.iconWrapper}>
							<GppBadOutlinedIcon sx={styles.icon} />
						</Box>

						<Typography variant='h3' component='h1' sx={styles.titleCode}>
							403
						</Typography>

						<Typography variant='h5' component='h2' sx={styles.title}>
							Acceso no autorizado
						</Typography>

						<Typography variant='body1' color='text.secondary' sx={styles.message}>
							No cuentas con los permisos necesarios para visualizar este recurso. Si consideras que esto es un error, contacta al administrador del sistema.
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
							startIcon={<LoginRoundedIcon />}
							onClick={() => navigate('/login')}
						>
							Ir a login
						</Button>

						<Button
							variant='text'
							color='inherit'
							startIcon={<HomeRoundedIcon />}
							onClick={() => navigate('/home')}
						>
							Ir al inicio
						</Button>
					</Stack>
				</Stack>
			</Paper>
		</Box>
	);
}
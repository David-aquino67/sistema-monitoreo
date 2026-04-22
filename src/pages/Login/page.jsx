import { Box, Button, IconButton, InputAdornment, Paper, Stack, TextField, Typography } from '@mui/material';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import useLogin from '@/pages/Login/hooks/useLogin';
import { loginPageStyles } from '@/pages/Login/styles/page';
import favicon from '@/assets/favicon.png';

export default function LoginPage() {
	const styles = loginPageStyles;

	const { handleSubmit, handleLogin, handleForgotPassword, handlePwdChange, handleUserChange, matricula, password, showPassword, toggleShowPassword } = useLogin();

	return (
		<Box sx={styles.root}>
			<Paper elevation={8} sx={styles.paper}>
				<Stack spacing={3.5}>
					<Stack spacing={1.25} sx={styles.header}>
						<Stack direction='row' spacing={1.5} sx={styles.brandBlock}>
							<Box component='span' sx={styles.logoBox}>
								<Box component='img' src={favicon} alt='Logo de SMARS' sx={styles.logoImage} />
							</Box>
							<Stack spacing={0.5}>
								<Typography variant='subtitle2' component='p' sx={styles.brandTitle}>
									SMARS
								</Typography>
								<Typography variant='caption' sx={styles.systemName}>
									Sistema de Monitoreo y Acciones Rápidas para SIMF
								</Typography>
							</Stack>
						</Stack>
						<Typography variant='h4' component='h1' sx={styles.title}>
							Iniciar sesión
						</Typography>
						<Typography variant='body1' color='text.secondary' sx={styles.subtitle}>
							Accede con tu usuario y contraseña del SIBOP
						</Typography>
					</Stack>

					<Box component='form' sx={styles.form} onSubmit={handleSubmit} autoComplete='on'>
						<TextField
							id='username'
							name='username'
							label='Matrícula'
							placeholder='Ej. 311220302'
							value={matricula}
							onChange={handleUserChange}
							autoComplete='username'
							inputProps={{
								'aria-label': 'Usuario',
							}}
							fullWidth
							InputProps={{
								startAdornment: (
									<InputAdornment position='start'>
										<BadgeRoundedIcon color='action' fontSize='small' />
									</InputAdornment>
								),
							}}
						/>

						<TextField
							id='password'
							name='password'
							label='Contraseña'
							placeholder='Ingresa tu contraseña'
							type={showPassword ? 'text' : 'password'}
							value={password}
							onChange={handlePwdChange}
							autoComplete='current-password'
							inputProps={{
								'aria-label': 'Contraseña',
							}}
							fullWidth
							InputProps={{
								startAdornment: (
									<InputAdornment position='start'>
										<LockRoundedIcon color='action' fontSize='small' />
									</InputAdornment>
								),
								endAdornment: (
									<InputAdornment position='end'>
										<IconButton
											onClick={toggleShowPassword}
											edge='end'
											aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
										>
											{showPassword ? <VisibilityOffRoundedIcon fontSize='small' /> : <VisibilityRoundedIcon fontSize='small' />}
										</IconButton>
									</InputAdornment>
								),
							}}
						/>

						<Box sx={styles.actions}>
							<Button type='submit' variant='contained' size='large' startIcon={<LoginRoundedIcon />}>
								Iniciar sesión
							</Button>

							<Button type='button' variant='text' onClick={handleForgotPassword} sx={styles.forgotPassword}>
								Olvidé mi contraseña
							</Button>
						</Box>
					</Box>
				</Stack>
			</Paper>
		</Box>
	);

}
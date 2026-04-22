import { AppBar, Box, Button, IconButton, Toolbar, Tooltip, Typography } from '@mui/material';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import { useLocation, useNavigate } from 'react-router-dom';
import favicon from '@/assets/favicon.png';
import { menuStyles } from '@/styles/Menu';
import { menuItems } from '@/const/menu';
import { useThemeContext } from '@/contexts/ThemeContext';

export default function Menu() {
	const navigate = useNavigate();
	const location = useLocation();
	const styles = menuStyles;
	const { isDarkMode, toggleTheme } = useThemeContext();

	return (
		<AppBar position='sticky' sx={styles.appBar}>
			<Toolbar sx={styles.toolbar}>
				<Box sx={styles.brand}>
					<Box component='img' src={favicon} alt='SMARS' sx={styles.logo} />
					<Typography variant='subtitle1' sx={styles.brandText}>
						SMARS
					</Typography>
				</Box>

				<Box sx={styles.navSection}>
					<Box sx={styles.nav}>
						{menuItems.map((item) => {
							const isActive = location.pathname === item.path;

							return (
								<Tooltip key={item.path} title={item.disabled ? 'Disponible próximamente' : ''}>
									<span>
										<Button
											disabled={item.disabled}
											size='small'
											variant={isActive ? 'contained' : 'text'}
											color={isActive ? 'primary' : 'inherit'}
											onClick={() => navigate(item.path)}
											sx={styles.navButton}
										>
											{item.label}
										</Button>
									</span>
								</Tooltip>
							);
						})}
					</Box>

					<Tooltip title={isDarkMode ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}>
						<IconButton onClick={toggleTheme} sx={styles.themeButton} size='small'>
							{isDarkMode ? <LightModeRoundedIcon fontSize='small' /> : <DarkModeRoundedIcon fontSize='small' />}
						</IconButton>
					</Tooltip>
				</Box>
			</Toolbar>
		</AppBar>
	);
}
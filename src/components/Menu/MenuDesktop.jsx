import { Box, Button, IconButton, Tooltip } from '@mui/material';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import { menuItems } from '@/const/menu';
import { menuStyles } from '@/styles/Menu';

export function MenuDesktop({ location, navigate, isDarkMode, toggleTheme }) {
	const styles = menuStyles;
	return (
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
	);
}

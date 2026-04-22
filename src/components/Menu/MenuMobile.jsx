import { Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Tooltip } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import { menuItems } from '@/const/menu';
import { menuStyles } from '@/styles/Menu';

export function MenuMobile({ location, isDarkMode, toggleTheme, drawerOpen, handleDrawerToggle, handleNavClick }) {
	const styles = menuStyles;
	return (
		<>
			<IconButton
				color="inherit"
				aria-label="open drawer"
				edge="end"
				onClick={handleDrawerToggle}
				sx={{ ml: 1 }}
			>
				<MenuIcon />
			</IconButton>
			<Drawer
				anchor="right"
				open={drawerOpen}
				onClose={handleDrawerToggle}
			>
				<Box sx={{ width: 220, p: 2 }} role="presentation" onClick={handleDrawerToggle}>
					<List>
						{menuItems.map((item) => (
							<ListItem key={item.path} disablePadding>
								<ListItemButton
									disabled={item.disabled}
									selected={location.pathname === item.path}
									onClick={() => handleNavClick(item.path)}
								>
									<ListItemText primary={item.label} />
								</ListItemButton>
							</ListItem>
						))}
					</List>
					<Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
						<Tooltip title={isDarkMode ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}>
							<IconButton onClick={toggleTheme} sx={styles.themeButton} size='small'>
								{isDarkMode ? <LightModeRoundedIcon fontSize='small' /> : <DarkModeRoundedIcon fontSize='small' />}
							</IconButton>
						</Tooltip>
					</Box>
				</Box>
			</Drawer>
		</>
	);
}

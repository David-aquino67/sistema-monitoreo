
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import favicon from '@/assets/favicon.png';
import { menuStyles } from '@/styles/Menu';
import { MenuDesktop } from './MenuDesktop';
import { MenuMobile } from './MenuMobile';
import { useMenuLogic } from '@/hooks/useMenuLogic';

export default function Menu() {
	const styles = menuStyles;
	const {
		location,
		navigate,
		isDarkMode,
		toggleTheme,
		isMobile,
		drawerOpen,
		handleDrawerToggle,
		handleNavClick,
	} = useMenuLogic();

	return (
		<AppBar position='sticky' sx={styles.appBar}>
			<Toolbar sx={styles.toolbar}>
				<Box sx={styles.brand}>
					<Box component='img' src={favicon} alt='SMARS' sx={styles.logo} />
					<Typography variant='subtitle1' sx={styles.brandText}>
						SMARS
					</Typography>
				</Box>
				{isMobile ? (
					<MenuMobile
						location={location}
						isDarkMode={isDarkMode}
						toggleTheme={toggleTheme}
						drawerOpen={drawerOpen}
						handleDrawerToggle={handleDrawerToggle}
						handleNavClick={handleNavClick}
					/>
				) : (
					<MenuDesktop
						location={location}
						navigate={navigate}
						isDarkMode={isDarkMode}
						toggleTheme={toggleTheme}
					/>
				)}
			</Toolbar>
		</AppBar>
	);
}
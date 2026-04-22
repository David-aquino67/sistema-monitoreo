import { Box } from '@mui/material';
import Menu from '@/components/Menu/Menu.jsx';
import { styles } from '@/styles/Layout';

export default function Layout({ children }) {
	return (
		<Box sx={styles.container}>
			<Menu />
			<Box component="main" sx={styles.main}>
				{children}
			</Box>
		</Box>
	);
}


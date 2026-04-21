import DashboardPage from '@pages/DashboardCard.jsx';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from '@styles/tema/tema.js';
import { useState } from 'react';

function App() {
	const storedTheme = localStorage.getItem('theme');
	const defaultTheme = storedTheme ? storedTheme : 'dark';
	const [isDarkMode, setIsDarkMode] = useState(defaultTheme === 'dark');

	function toggleTheme() {
		const newTheme = isDarkMode ? 'light' : 'dark';
		localStorage.setItem('theme', newTheme);
		setIsDarkMode(newTheme === 'dark');
	}

	return (
		<ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
			<CssBaseline />
			<DashboardPage toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
		</ThemeProvider>
	);
}

export default App;
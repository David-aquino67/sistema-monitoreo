import { createContext, useContext, useEffect, useState } from "react";
import { CssBaseline, ThemeProvider } from '@mui/material';
import { lightTheme, darkTheme } from '@/const/theme.js';

const ThemeContext = createContext();

export function ThemeContextProvider({ children }) {

	const storedTheme = localStorage.getItem('theme');
	const defaultTheme = storedTheme ? storedTheme : 'dark';
	const [isDarkMode, setIsDarkMode] = useState(defaultTheme === 'dark');

	function toggleTheme() {
		const newTheme = isDarkMode ? 'light' : 'dark';
		localStorage.setItem('theme', newTheme);
		setIsDarkMode(newTheme === 'dark');
	}

	return (
		<ThemeContext.Provider value={{ toggleTheme, isDarkMode }}>
			<CssBaseline />
			<ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
				{children}
			</ThemeProvider>
		</ThemeContext.Provider >
	);

}

export function useThemeContext() {
	return useContext(ThemeContext);
}
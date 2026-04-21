import DashboardPage from '@pages/DashboardCard.jsx';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from '@styles/tema/tema.js';
import { useState } from 'react';

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <CssBaseline />
            <DashboardPage toggleTheme={() => setIsDarkMode(!isDarkMode)} isDarkMode={isDarkMode} />
        </ThemeProvider>
    );
}

export default App;
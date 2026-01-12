import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { StatusProvider } from './contexts/StatusContext';
import App from './App';

const theme = createTheme();

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <StatusProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <App />
            </ThemeProvider>
        </StatusProvider>
    </React.StrictMode>
);
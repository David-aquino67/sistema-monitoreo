import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: '#f8fafc',
            paper: '#ffffff',
        },
        text: {
            primary: '#0f172a',
        },
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#0f172a',
            paper: '#1e293b',
        },
        text: {
            primary: '#f1f5f9',
        },
    },
});
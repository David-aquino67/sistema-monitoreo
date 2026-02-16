import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2563eb', 
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#9333ea', 
      contrastText: '#ffffff',
    },
    success: {
      main: '#22c55e',
    },
    error: {
      main: '#ef4444',
    },
    warning: {
      main: '#f59e0b',
    },
    info: {
      main: '#0ea5e9',
    },
    background: {
      default: '#f8fafc',
      paper: '#ffffff',
    },
    text: {
      primary: '#0f172a',
      secondary: '#475569',
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#3b82f6', 
      contrastText: '#0f172a',
    },
    secondary: {
      main: '#a855f7',
      contrastText: '#0f172a',
    },
    success: {
      main: '#4ade80',
    },
    error: {
      main: '#f87171',
    },
    warning: {
      main: '#facc15',
    },
    info: {
      main: '#38bdf8',
    },
    background: {
      default: '#0f172a',
      paper: '#1e293b',
    },
    text: {
      primary: '#f1f5f9',
      secondary: '#cbd5e1',
    },
  },
});
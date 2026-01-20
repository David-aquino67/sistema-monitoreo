import { styled } from '@mui/material/styles';
import { Paper, Box } from '@mui/material';
import { mapaEstados } from '@/const/StatusResume/mapaEstados.js'; // usa tu alias si lo configuraste

export const TarjetaMiniResumen = styled(Paper)(({ theme, estado }) => ({
    padding: theme.spacing(2),
    backgroundColor: '#1e293b',
    borderLeft: `4px solid ${mapaEstados[estado]?.color || '#ccc'}`,
    color: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    minWidth: '160px',
    flex: 1,
}));

export const IndicadorCircular = styled(Box)(({ estado }) => ({
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: mapaEstados[estado]?.color || '#ccc',
}));

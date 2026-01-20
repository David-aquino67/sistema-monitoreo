import { styled } from '@mui/material/styles';
import { Paper, Typography } from '@mui/material';

export const TarjetaResumen = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
    backgroundColor: '#1a2332', // Color oscuro similar a tu referencia
    color: '#ffffff',
    borderRadius: '12px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    minWidth: '250px'
}));

export const ValorTexto = styled(Typography)({
    fontSize: '2rem',
    fontWeight: 'bold',
    marginTop: '8px'
});
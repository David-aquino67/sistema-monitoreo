import { green } from '@mui/material/colors';

export const estilosBotones = {
    contenedorRelativo: {
        m: 1,
        position: 'relative',
        width: '100%'
    },
    botonLevantar: (success) => ({
        borderRadius: '8px',
        textTransform: 'none',
        transition: 'all 0.3s ease',
        ...(success && {
            bgcolor: green[700],
            '&:hover': { bgcolor: green[700] },
        }),
    }),
    progresoCircular: {
        color: green[700],
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: '-12px',
        marginLeft: '-12px',
    },
    contenedorAcciones: {
        p: 2,
        pt: 0,
        gap: 1,
        flexWrap: 'wrap'
    }
};
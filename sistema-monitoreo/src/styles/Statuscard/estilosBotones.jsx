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
  bgcolor: success ? green[700] : green[500],   
  '&:hover': { bgcolor: success ? green[800] : green[600] }, 
}),
    progresoCircular: {
        color: "warning",
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
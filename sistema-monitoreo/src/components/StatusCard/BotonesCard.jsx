import { CardActions, Button, Box, CircularProgress } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import {estilosBotones} from "@/styles/Statuscard/estilosBotones.jsx";
import {useServidorLevantar} from "@hooks/useServidorLevantar.jsx";
export const BotonesCard = ({ loading, estado, onLevantar, id, onReboot, onReset, onClean }) => {
    const { manejarLevantar, success } = useServidorLevantar(onLevantar);
    if (estado === 'offline') {
        return (
            <CardActions sx={{ p: 2, pt: 0 }}>
                <Box sx={estilosBotones.contenedorRelativo}>
                    <Button
                        onClick={() => manejarLevantar(id)}
                        disabled={loading}
                    >
                        {loading ? 'Levantando...' : (success ? 'En línea' : 'Levantar')}
                    </Button>
                </Box>
            </CardActions>
        );
    }
    return (
        <CardActions sx={{ p: 2, pt: 0, gap: 1, flexWrap: 'wrap' }}>
            {onReboot && (
                <Button size="small" variant="contained" disabled={loading} onClick={onReboot}>
                    Reinicio
                </Button>
            )}
            {onReset && (
                <Button size="small" variant="outlined" color="secondary" disabled={loading} onClick={onReset}>
                    Restablecer
                </Button>
            )}
            {onClean && (
                <Button size="small" variant="outlined" color="warning" disabled={loading} onClick={onClean}>
                    Limpieza
                </Button>
            )}
        </CardActions>
    );
};
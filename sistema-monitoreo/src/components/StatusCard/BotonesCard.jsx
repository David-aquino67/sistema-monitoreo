import { CardActions, Button, Box, CircularProgress } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import {estilosBotones} from "@/styles/Statuscard/estilosBotones.jsx";
import {useServidorLevantar} from "@hooks/useServidorLevantar.jsx";
import CheckIcon from '@mui/icons-material/Check';
export const BotonesCard = ({ loading, estado, onLevantar, id, onReboot, onReset, onClean }) => {
    const { manejarLevantar, success } = useServidorLevantar(onLevantar);
    if (estado === 'offline') {
        return (
            <CardActions sx={{ p: 2, pt: 0 }}>
                <Box sx={estilosBotones.contenedorRelativo}>
                    <Button
                        fullWidth
                        variant="contained"
                        // Cambia el color base: success si tuvo éxito, primary por defecto
                        color={success ? "success" : "primary"}
                        // Cambia el icono: Check si tuvo éxito, Play si está listo, nada si está cargando
                        startIcon={success ? <CheckIcon /> : (!loading && <PlayArrowIcon />)}
                        onClick={() => manejarLevantar(id)}
                        disabled={loading}
                        // Aplicamos el objeto de estilos que creamos
                        sx={estilosBotones.botonLevantar(success)}
                    >
                        {loading ? 'Levantando...' : (success ? 'En línea' : 'Levantar')}
                    </Button>

                    {loading && (
                        <CircularProgress
                            size={24}
                            sx={estilosBotones.progresoCircular}
                        />
                    )}
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
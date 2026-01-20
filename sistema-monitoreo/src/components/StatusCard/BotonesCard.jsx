import { CardActions, Button, Box } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export const BotonesCard = ({ loading, onReboot, onReset, onClean, estado, onLevantar }) => {
    if (estado === 'offline') {
        return (
            <CardActions sx={{ p: 2, pt: 0 }}>
                <Button
                    fullWidth
                    variant="contained"
                    color="success"
                    startIcon={<PlayArrowIcon />}
                    onClick={onLevantar}
                    disabled={loading}
                    sx={{ borderRadius: '8px', textTransform: 'none' }}
                >
                    {loading ? 'Levantando...' : 'Levantar'}
                </Button>
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
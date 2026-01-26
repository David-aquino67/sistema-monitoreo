import { CardActions, Button, Box, CircularProgress } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
const buttonSx = {
    ...(success && {
      bgcolor: green[500],
      '&:hover': {
        bgcolor: green[700],
      },
    }),
  };

export const BotonesCard = ({ loading, onReboot, onReset, onClean, estado, onLevantar }) => {
    if (estado === 'offline') {
        return (
            <CardActions sx={{ p: 2, pt: 0, buttonSx }}>
                <Button
                    fullWidth
                    variant="contained"
                    color="success"
                    startIcon={<PlayArrowIcon />}
                    onClick={onLevantar }
                    disabled={loading}
                    sx={{ borderRadius: '8px', textTransform: 'none' }}
                >
                    {loading ? 'Levantando...' : 'Levantar'}
                </Button>
                {loading && (
                    <CircularProgress
                        size={20}
                        sx={{ ml: 1, color: 'white' }}
                    />
                )}
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
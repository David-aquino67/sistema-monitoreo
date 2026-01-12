import { CardActions, Button } from '@mui/material';

export const BotonesCard = ({ loading, onReboot, onReset, onClean }) => (
    <CardActions sx={{ p: 2, pt: 0, gap: 1 }}>
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
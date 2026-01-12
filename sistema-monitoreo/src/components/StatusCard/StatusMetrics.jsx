import { Box, Typography } from '@mui/material';
import { cardStyles } from '../../styles/Statuscard/styles';
import { horaFormateada } from '../../helpers/formateo';

export const StatusMetrics = ({ uptime, latency, lastPing }) => (
    <Box sx={cardStyles.metricsContainer}>
        <Box>
            <Typography variant="caption" color="text.secondary" display="block">Uptime</Typography>
            <Typography variant="body2" fontWeight="bold">{uptime}</Typography>
        </Box>
        <Box>
            <Typography variant="caption" color="text.secondary" display="block">Latencia</Typography>
            <Typography variant="body2" fontWeight="bold">{latency}</Typography>
        </Box>
        <Box sx={cardStyles.fullWidthMetric}>
            <Typography variant="caption" color="text.secondary" display="block">Último reporte</Typography>
            <Typography variant="body2" fontWeight="bold">{horaFormateada(lastPing)}</Typography>
        </Box>
    </Box>
);
import { Box, Typography } from '@mui/material';
import { horaFormateada } from '@helpers/formateo';
import { metricstyle } from '@styles/Statuscard/stylemetrics';

export const StatusMetrics = ({ uptime, latency, lastPing }) => (
    <Box sx={metricstyle.metricsContainer}>
        <Box>
            <Typography variant="caption" color="text.secondary" display="block">Uptime</Typography>
            <Typography variant="body2" fontWeight="bold">{uptime}</Typography>
        </Box>
        <Box>
            <Typography variant="caption" color="text.secondary" display="block">Latencia</Typography>
            <Typography variant="body2" fontWeight="bold">{latency}</Typography>
        </Box>
        <Box sx={metricstyle.fullWidthMetric}>
            <Typography variant="caption" color="text.secondary" display="block">Último reporte</Typography>
            <Typography variant="body2" fontWeight="bold">{horaFormateada(lastPing)}</Typography>
        </Box>
    </Box>
);
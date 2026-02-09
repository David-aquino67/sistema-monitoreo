import { Box, Typography } from '@mui/material';
import { horaFormateada } from '@helpers/formateo';
import { metricstyle } from '@styles/Statuscard/stylemetrics';
import { typografyConstTitulo, typografy2 } from '@const/StatusMetricsConst.jsx';
export const StatusMetrics = ({ uptime, latency, lastPing }) => (
    <Box sx={metricstyle.metricsContainer}>
        <Box>
            <Typography {...typografyConstTitulo}>Uptime</Typography>
            <Typography {...typografy2}>{uptime}</Typography>
        </Box>
        <Box>
            <Typography {...typografyConstTitulo}>Latencia</Typography>
            <Typography {...typografy2}>{latency}</Typography>
        </Box>
        <Box sx={metricstyle.fullWidthMetric}>
            <Typography {...typografyConstTitulo}>Último reporte</Typography>
            <Typography {...typografy2}>{horaFormateada(lastPing)}</Typography>
        </Box>
    </Box>
);
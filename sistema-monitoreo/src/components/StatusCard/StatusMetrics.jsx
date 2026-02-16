import { Box, Typography } from '@mui/material';
import { horaFormateada } from '@helpers/formateo';
import { metricstyle } from '@styles/Statuscard/stylemetrics';
import { typografyConstTitulo, typografy2 } from '@const/StatusMetricsConst.jsx';
export const StatusMetrics = ({ uptime, latency, lastPing }) => (
    <Box sx={metricstyle.metricsContainer}>
        <Box>
            <Typography {...typografyConstTitulo} sx={metricstyle.label}>Uptime</Typography>
            <Typography {...typografy2} sx={metricstyle.value}>{uptime}</Typography>
        </Box>
        <Box>
            <Typography {...typografyConstTitulo} sx={metricstyle.label}>Latencia</Typography>
            <Typography {...typografy2} sx={metricstyle.value}>{latency}</Typography>
        </Box>
        <Box sx={metricstyle.fullWidthMetric}>
            <Typography {...typografyConstTitulo} sx={metricstyle.label}>Último reporte</Typography>
            <Typography {...typografy2} sx={metricstyle.value}>{horaFormateada(lastPing)}</Typography>
        </Box>
    </Box>
);
import { Box, Typography } from '@mui/material';
import { fecha } from '../../helpers/formateo.jsx';
import { metricstyle } from '@pages/Monitoreo/styles/Statuscard/stylemetrics';
import { typografyConstTitulo, typografy2 } from '@pages/Monitoreo/const/StatusMetricsConst.jsx';
import { StatusChip } from '@pages/Monitoreo/components/StatusCard/StatusChip';

export const StatusMetrics = ({ red_router, latency, lastPing }) => (
	<Box sx={metricstyle.metricsContainer}>
		<Box>
			<Typography {...typografyConstTitulo} sx={metricstyle.label}>Router de unidad</Typography>
			<StatusChip status={red_router} />
		</Box>
		<Box>
			<Typography {...typografyConstTitulo} sx={metricstyle.label}>Latencia</Typography>
			<Typography {...typografy2} sx={metricstyle.value}>{latency}</Typography>
		</Box>
		<Box sx={metricstyle.fullWidthMetric}>
			<Typography {...typografyConstTitulo} sx={metricstyle.label}>Último reporte</Typography>
			<Typography {...typografy2} sx={metricstyle.value}>{fecha(lastPing)}</Typography>
		</Box>
	</Box>
);

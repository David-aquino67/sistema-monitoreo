import { Box, Typography } from '@mui/material';
import { StatusChip } from '@pages/Monitoreo/components/StatusCard/StatusChip';
import { headerstyle } from '@pages/Monitoreo/styles/Statuscard/styleheadercard';

export const StatusHeader = ({ title, status, place }) => (
	<Box sx={{ mb: 2 }}>
		<Box sx={headerstyle.header}>
			<Typography sx={headerstyle.titulo} variant="h6">{title}</Typography>
			<StatusChip status={status} />
		</Box>
	</Box>
);

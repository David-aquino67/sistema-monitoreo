import { Box, Typography } from '@mui/material';
import { StatusChip } from '@components/StatusCard/StatusChip';
import { headerstyle } from '@styles/Statuscard/styleheadercard';

export const StatusHeader = ({ title, status, place }) => (
    <Box sx={{ mb: 2 }}>
        <Box sx={headerstyle.header}>
            <Typography variant="h6">{title}</Typography>
            <StatusChip status={status} />
        </Box>
        <Typography color="text.secondary" variant="body2">
            {place}
        </Typography>
    </Box>
);
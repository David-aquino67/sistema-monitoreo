// src/components/StatusCard/StatusHeader.jsx
import { Box, Typography } from '@mui/material';
import { StatusChip } from './StatusChip';
import { cardStyles } from '../../styles/Statuscard/styles';

export const StatusHeader = ({ title, status, place }) => (
    <Box sx={{ mb: 2 }}>
        <Box sx={cardStyles.header}>
            <Typography variant="h6">{title}</Typography>
            <StatusChip status={status} />
        </Box>
        <Typography color="text.secondary" variant="body2">
            {place}
        </Typography>
    </Box>
);
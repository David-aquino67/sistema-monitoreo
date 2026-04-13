import { Chip } from '@mui/material';
import { STATUS_MAP } from '@const/EstadosCarta';

export const StatusChip = ({ status }) => {
    let statusKey = status;

    if (typeof status === 'boolean' || typeof status === 'number') {
        statusKey = status ? 'online' : 'offline';
    }
    const key = String(statusKey || '').toLowerCase();
    
    const config = STATUS_MAP[key] || STATUS_MAP.default;

    return <Chip label={config.label} color={config.color} size="small" />;
};
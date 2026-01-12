import { Chip } from '@mui/material';

const STATUS_MAP = {
    online: { color: 'success', label: 'En línea' },
    warning: { color: 'warning', label: 'Inestable' },
    offline: { color: 'error', label: 'Fuera de servicio' },
    default: { color: 'default', label: 'Desconocido' }
};

export const StatusChip = ({ status }) => {
    const config = STATUS_MAP[status?.toLowerCase()] || STATUS_MAP.default;
    return <Chip label={config.label} color={config.color} size="small" />;
};
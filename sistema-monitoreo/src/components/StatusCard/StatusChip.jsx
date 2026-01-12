import { Chip } from '@mui/material';
import { STATUS_MAP } from '../../const/EstadosCarta';
export const StatusChip = ({ status }) => {
    const config = STATUS_MAP[status?.toLowerCase()] || STATUS_MAP.default;
    return <Chip label={config.label} color={config.color} size="small" />;
};
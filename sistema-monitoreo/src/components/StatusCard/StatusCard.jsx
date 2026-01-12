// src/components/StatusCard/StatusCard.jsx
import { Card, CardContent } from '@mui/material';
import { StatusHeader } from './StatusHeader';
import { cardStyles } from '../../styles/Statuscard/styles';

const StatusCard = ({ title, place, status, children, footer }) => {
    return (
        <Card sx={cardStyles.container}>
            <CardContent sx={{ flexGrow: 1 }}>
                {/* El Header siempre está presente */}
                <StatusHeader title={title} status={status} place={place} />

                {/* Aquí se inyectará StatusMetrics u otro contenido */}
                {children}
            </CardContent>

            {/* Aquí se inyectará BotonesCard */}
            {footer}
        </Card>
    );
};

export default StatusCard;
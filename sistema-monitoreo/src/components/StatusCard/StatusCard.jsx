import { Alert, Card, CardContent } from '@mui/material';
import { StatusHeader } from '@components/StatusCard/StatusHeader';
import { cardStyles } from '@styles/Statuscard/styles';

const StatusCard = ({ title, place, status, children, footer, Alerta }) => {
    return (
        <Card sx={cardStyles.container}>
            <CardContent sx={{ flexGrow: 1 }}>
                <StatusHeader title={title} status={status} place={place} />
                {children}
            </CardContent>
            {Alerta}
            {footer}
        </Card>
    );
};

export default StatusCard;
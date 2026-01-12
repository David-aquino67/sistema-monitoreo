import { Card, CardContent } from '@mui/material';
import { StatusHeader } from './StatusHeader';
import { cardStyles } from '../../styles/Statuscard/styles';

const StatusCard = ({ title, place, status, children, footer }) => {
    return (
        <Card sx={cardStyles.container}>
            <CardContent sx={{ flexGrow: 1 }}>
                <StatusHeader title={title} status={status} place={place} />
                {children}
            </CardContent>
            {footer}
        </Card>
    );
};

export default StatusCard;
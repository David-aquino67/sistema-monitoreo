import WarningIcon from '@mui/icons-material/Warning';
import ConstructionIcon from '@mui/icons-material/Construction';
import DangerousIcon from '@mui/icons-material/Dangerous'; 
import AutoGraphIcon from '@mui/icons-material/AutoGraph';

const StatusIcons = ({ status }) => {
    return (
        <>
            {status === 'warning' && (
                <WarningIcon sx={{ color: '#f59e0b', fontSize: '1.5rem', ml: 1 }} />
            )}
            {status === 'maintenance' && (
                <ConstructionIcon sx={{ color: '#3b82f6', fontSize: '1.5rem', ml: 1 }} />
            )}
            {status === 'offline' && (
                <DangerousIcon sx={{ color: '#ef4444', fontSize: '1.5rem', ml: 1 }} />
            )}
            {status === 'online' && (
                <AutoGraphIcon sx={{ color: '#10b981', fontSize: '1.5rem', ml: 1 }} />
            )}
        </>
    );
}
export default StatusIcons;
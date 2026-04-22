import WarningIcon from '@mui/icons-material/Warning';
import ConstructionIcon from '@mui/icons-material/Construction';
import DangerousIcon from '@mui/icons-material/Dangerous'; 
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import { StatusIconsStyle } from '@pages/Monitoreo/styles/ResumenServidoresStyle/StatusIcons.jsx';
const StatusIcons = ({ status }) => {
    return (
        <>
            {status === 'warning' && (
                <WarningIcon sx={StatusIconsStyle.WarningIcon} />
            )}
            {status === 'maintenance' && (
                <ConstructionIcon sx={StatusIconsStyle.MaintenanceIcon} />
            )}
            {status === 'offline' && (
                <DangerousIcon sx={StatusIconsStyle.OfflineIcon} />
            )}
            {status === 'online' && (
                <AutoGraphIcon sx={StatusIconsStyle.OnlineIcon} />
            )}
        </>
    );
}
export default StatusIcons;

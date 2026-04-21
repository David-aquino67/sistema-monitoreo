import { Stack, Typography, IconButton } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { dashboard } from '@styles/page/Dashboard.jsx';
import { Stack1 } from '@const/page/dashboard.jsx';

export const DashboardHeader = ({ toggleTheme, isDarkMode }) => (
    <Stack {...Stack1} sx={{ mb: 4 }}>
        <Typography variant="h4" sx={dashboard.TituloPrincipal}>
            Monitoreo SIMF (Tiempo Real)
        </Typography>
        <IconButton onClick={toggleTheme} color="inherit" sx={dashboard.IconoParaTema}>
            {isDarkMode ? <LightModeIcon sx={{ color: '#ffeb3b' }} /> : <DarkModeIcon />}
        </IconButton>
    </Stack>
);
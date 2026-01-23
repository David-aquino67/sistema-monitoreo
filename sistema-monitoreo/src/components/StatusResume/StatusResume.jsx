import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { mapaEstados } from '@/const/StatusResume/mapaEstados.js';
import { estilosStatus } from '@styles/StatusResume/StatusResume.jsx';
import WarningIcon from '@mui/icons-material/Warning';
import ConstructionIcon from '@mui/icons-material/Construction';
import DangerousIcon from '@mui/icons-material/Dangerous'; 
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
const StatusResume = ({ quantity = 0, status = 'online' }) => {
    const config = mapaEstados[status] || { color: '#ccc', etiqueta: 'Desconocido' };

    return (
        <Paper elevation={2} sx={estilosStatus.tarjetaBase(config.color)}>
            <Box sx={estilosStatus.contenedorEncabezado}>
                <Typography
                    variant="caption"
                    sx={{ color: config.color, fontWeight: 'bold' }}
                >
                    {config.etiqueta}
                </Typography>
            {status === 'warning' && (
                <WarningIcon sx={{ color: config.color, fontSize: '1.5rem', ml: 1 }} />
            )}
            {status === 'maintenance' && (
                <ConstructionIcon sx={{ color: config.color, fontSize: '1.5rem', ml: 1 }} />
            )}
            {status === 'offline' && (
                <DangerousIcon sx={{ color: config.color, fontSize: '1.5rem', ml: 1 }} />
            )}
            {status === 'online' && (
                <AutoGraphIcon sx={{ color: config.color, fontSize: '1.5rem', ml: 1 }} />
            )}
            </Box>

            <Typography variant="h5" sx={estilosStatus.textoCantidad}>
                {quantity}
            </Typography>
            
        </Paper>
    );
};

export default StatusResume;
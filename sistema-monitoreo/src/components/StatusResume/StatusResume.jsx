import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { mapaEstados } from '@/const/StatusResume/mapaEstados.js';

const StatusResume = ({ quantity = 0, status = 'online' }) => {
    const config = mapaEstados[status] || { color: '#ccc', etiqueta: 'Desconocido' };

    return (
        <Paper
            elevation={2}
            sx={{
                padding: 2,
                backgroundColor: '#1e293b',
                borderLeft: `4px solid ${config.color}`,
                color: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                minWidth: '160px',
                flex: 1,
            }}
        >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                <Typography variant="caption" sx={{ color: config.color, fontWeight: 'bold' }}>
                    {config.etiqueta}
                </Typography>
                <Box
                    sx={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: config.color,
                    }}
                />
            </Box>

            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                {quantity}
            </Typography>
        </Paper>
    );
};

export default StatusResume;
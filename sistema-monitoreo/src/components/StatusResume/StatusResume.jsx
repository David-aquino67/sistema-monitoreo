import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { mapaEstados } from '@/const/StatusResume/mapaEstados.js';
import { estilosStatus } from '../../styles/StatusResume/StatusResume.jsx';

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

                <Box sx={estilosStatus.indicador(config.color)} />
            </Box>

            <Typography variant="h5" sx={estilosStatus.textoCantidad}>
                {quantity}
            </Typography>
        </Paper>
    );
};

export default StatusResume;
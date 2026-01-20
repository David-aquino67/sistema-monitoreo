import React from 'react';
import { Box, Typography } from '@mui/material';
import { TarjetaMiniResumen, IndicadorCircular } from '../../styles/StatusResume/StatusResume.jsx';
import {mapaEstados} from '@/const/StatusResume/mapaEstados.js';

const StatusResume = ({ quantity = 0, status = 'online' }) => {
    const configuracion = mapaEstados[status];

    return (
        <TarjetaMiniResumen estado={status} elevation={2}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                <Typography variant="caption" sx={{ color: configuracion.color, fontWeight: 'bold' }}>
                    {configuracion.etiqueta}
                </Typography>
                <IndicadorCircular estado={status} />
            </Box>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                {quantity}
            </Typography>
        </TarjetaMiniResumen>
    );
};

export default StatusResume;
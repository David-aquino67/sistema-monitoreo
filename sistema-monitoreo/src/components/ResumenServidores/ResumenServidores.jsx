import React from 'react';
import { Box, Typography } from '@mui/material';
import StorageIcon from '@mui/icons-material/Storage';
import { TarjetaResumen, ValorTexto } from '../../styles/ResumenServidoresStyle/resumenStyles';

const ResumenServidores = ({ total = 0 }) => {
    return (
        <TarjetaResumen elevation={3}>
            <Box>
                <Typography variant="overline" sx={{ color: '#94a3b8', fontWeight: 'bold' }}>
                    Unidades en Red
                </Typography>
                <ValorTexto>
                    {total}
                </ValorTexto>
            </Box>
            <StorageIcon sx={{ fontSize: 45, opacity: 0.2 }} />
        </TarjetaResumen>
    );
};

export default ResumenServidores;
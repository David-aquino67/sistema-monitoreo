import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import StorageIcon from '@mui/icons-material/Storage';
import { estilosResumen } from '../../styles/ResumenServidoresStyle/resumenStyles.jsx';

const ResumenServidores = ({ total = 0 }) => {
    return (
        <Paper elevation={3} sx={estilosResumen.contenedorPrincipal}>
            <Box>
                <Typography variant="body1" sx={estilosResumen.tituloSeccion}>
                    Total Servidores
                </Typography>

                <Typography sx={estilosResumen.valorGrande}>
                    {total}
                </Typography>
            </Box>

            <StorageIcon sx={{ fontSize: 48, color: '#334155', opacity: 0.8 }} />
        </Paper>
    );
};

export default ResumenServidores;
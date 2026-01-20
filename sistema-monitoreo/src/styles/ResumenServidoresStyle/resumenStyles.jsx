import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import StorageIcon from '@mui/icons-material/Storage';

const ResumenServidores = ({ total = 0 }) => {
    return (
        <Paper
            elevation={3}
            sx={{
                padding: 3,
                backgroundColor: '#1a2332',
                color: '#ffffff',
                borderRadius: '12px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                minWidth: '250px',
                height: '100%'
            }}
        >
            <Box>
                <Typography
                    variant="body1"
                    sx={{ color: '#94a3b8', textTransform: 'uppercase', letterSpacing: 1 }}
                >
                    Total Servidores
                </Typography>

                <Typography
                    sx={{
                        fontSize: '2.5rem',
                        fontWeight: 'bold',
                        lineHeight: 1.2,
                        mt: 1
                    }}
                >
                    {total}
                </Typography>
            </Box>

            <StorageIcon
                sx={{
                    fontSize: 48,
                    color: '#334155',
                    opacity: 0.8
                }}
            />
        </Paper>
    );
};

export default ResumenServidores;
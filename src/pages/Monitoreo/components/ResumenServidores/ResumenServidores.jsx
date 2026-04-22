import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import StorageIcon from '@mui/icons-material/Storage';
import { estilosResumen } from '@pages/Monitoreo/styles/ResumenServidoresStyle/resumenStyles.jsx';

const ResumenServidores = ({ total = 0 }) => {
	return (
		<Paper elevation={3} sx={estilosResumen.contenedorPrincipal}>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'space-between',
					width: '100%',
					height: '100%',
				}}
			>
				<Box sx={{ flex: 1 }}>
					<Typography variant="body1" sx={estilosResumen.tituloSeccion}>
						Total Servidores
					</Typography>
					<Typography sx={estilosResumen.valorGrande}>
						{total}
					</Typography>
				</Box>
				<StorageIcon sx={estilosResumen.icono} />
			</Box>
		</Paper>
	);
};

export default ResumenServidores;

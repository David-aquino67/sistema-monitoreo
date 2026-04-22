import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { mapaEstados } from '../../const/StatusResume/mapaEstados.js';
import { estilosStatus } from '@pages/Monitoreo/styles/StatusResume/StatusResume.jsx';
import StatusIcons from '@pages/Monitoreo/components/ResumenServidores/StatusIcons.jsx';

const StatusResume = ({ quantity = 0, status = 'online' }) => {
	const config = mapaEstados[status] || { color: 'grey', etiqueta: 'Desconocido' };
	return (
		<Paper
			elevation={0}
			sx={estilosStatus.tarjetaBase(config.color)}
		>
			<Box sx={estilosStatus.contenedorEncabezado}>
				<Typography sx={estilosStatus.typografyStyle(config.color)}>
					{config.etiqueta}
				</Typography>
				<StatusIcons status={status} />
			</Box>

			<Typography sx={estilosStatus.textoCantidad}>
				{quantity}
			</Typography>
		</Paper>
	);
};

export default StatusResume;

export const estilosResumen = {
	contenedorPrincipal: {
		padding: { xs: 1.5, sm: 3 },
		bgcolor: 'background.paper',
		color: 'text.primary',
		borderRadius: 2,
		display: 'flex',
		flexDirection: { xs: 'column', sm: 'row' },
		justifyContent: { xs: 'flex-start', sm: 'space-between' },
		alignItems: { xs: 'flex-start', sm: 'center' },
		width: '100%',
		height: '100%',
		boxSizing: 'border-box',
		border: '1px solid',
		borderColor: 'divider',
		transition: 'all 0.3s ease',
		gap: { xs: 1, sm: 0 },
		'&:hover': {
			boxShadow: 4,
			borderColor: 'primary.main'
		}
	},
	tituloSeccion: {
		color: 'text.secondary',
		textTransform: 'uppercase',
		letterSpacing: 1,
		fontSize: { xs: '0.7rem', sm: '0.8rem' },
		fontWeight: 600
	},
	valorGrande: {
		fontSize: { xs: '1.7rem', sm: '2.8rem' },
		fontWeight: 800,
		lineHeight: 1.2,
		mt: 0.5,
		color: 'text.primary'
	},
	icono: {
		fontSize: { xs: 32, sm: 56 },
		color: 'primary.main',
		opacity: 0.9,
		display: 'flex',
		alignItems: 'center',
		mt: { xs: 1, sm: 0 }
	}
};
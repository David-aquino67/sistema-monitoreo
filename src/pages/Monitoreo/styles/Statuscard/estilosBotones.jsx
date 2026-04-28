export const estilosBotones = {
	contenedorRelativo: {
		m: 1,
		position: 'relative',
		width: '100%',
		display: 'flex',
		justifyContent: 'center'
	},
	botonLevantar: (success) => ({
		borderRadius: 2,
		textTransform: 'none',
		fontWeight: 'bold',
		transition: 'all 0.3s ease',
		bgcolor: success ? 'success.main' : 'primary.main',
		color: success ? 'success.contrastText' : 'primary.contrastText',
		boxShadow: success ? '0 0 15px rgba(74, 222, 128, 0.4)' : 'none',
		'&:hover': {
			bgcolor: success ? 'success.dark' : 'primary.dark',
			boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
		},

		'&.Mui-disabled': {
			bgcolor: 'action.disabledBackground',
			color: 'action.disabled'
		}
	}),
	progresoCircular: {
		color: "info.main",
		position: 'absolute',
		top: '50%',
		left: '50%',
		marginTop: '-12px',
		marginLeft: '-12px',
	},
	contenedorAcciones: {
		p: 2,
		pt: 0,
		display: 'flex',
		gap: 1,
		flexWrap: 'wrap',
		justifyContent: 'center'
	},
	cardActions: {
		p: 2,
		pt: 0,
		gap: 1,
		flexWrap: 'wrap',
		justifyContent: 'center'
	}
};
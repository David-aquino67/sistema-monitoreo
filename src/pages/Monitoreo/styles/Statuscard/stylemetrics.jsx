export const metricstyle = {
	metricsContainer: {
		display: 'grid',
		gridTemplateColumns: '1fr 1fr',
		gap: 2,
		pt: 1.5,
		borderColor: 'divider',
	},
	metricBox: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
	},
	label: {
		color: 'text.secondary',
		fontSize: '0.65rem',
		textTransform: 'uppercase',
		fontWeight: 'bold',
		letterSpacing: '0.05em',
		mb: 0.5
	},
	value: {
		color: 'text.primary',
		fontSize: '0.9rem',
		fontWeight: 700,
		fontFamily: 'monospace',
	},
	fullWidthMetric: {
		gridColumn: 'span 2',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		mt: 1,
		p: 1,
		bgcolor: 'action.hover',
		borderRadius: 1
	}
};
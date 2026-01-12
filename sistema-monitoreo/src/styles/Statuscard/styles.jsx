export const cardStyles = {
    container: {
        minWidth: 275,
        boxShadow: 3,
        borderRadius: 2,
        transition: 'transform 0.2s',
        '&:hover': { transform: 'scale(1.02)' }
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: 1
    },
    metricsContainer: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 1,
        mt: 2
    },
    fullWidthMetric: {
        gridColumn: 'span 2'
    },
    actions: {
        p: 2,
        pt: 0,
        gap: 1
    },
    progress: {
        mt: 2
    }
};
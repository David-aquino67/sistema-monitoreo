export const dashboard = {
    Noloadigncircularpogres: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '50vh',
        p: 10,
        color: 'primary.main'
    },
    TituloPrincipal: {
        fontWeight: 'bold',
        color: 'text.primary',
        fontSize: {
            xs: '1.5rem',
            sm: '2rem'
        },
        letterSpacing: '-0.02em'
    },
    IconoParaTema: {
        border: '1px solid',
        borderColor: 'divider',
        bgcolor: 'background.paper',
        transition: 'all 0.3s ease',
        '&:hover': {
            bgcolor: 'action.hover',
        }
    },
    boxpadre: {
        p: { xs: 2, md: 4 },
        minHeight: '100vh',
        bgcolor: 'background.default',
        transition: 'background-color 0.3s ease'
    }
}
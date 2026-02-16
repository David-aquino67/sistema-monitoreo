export const estilosStatus = {
    tarjetaBase: (tipo) => ({
        padding: 2,
        bgcolor: 'background.paper',
        borderRadius: 3,
        border: '1px solid',
        borderColor: 'divider',
        borderLeft: '6px solid',
        borderLeftColor: `${tipo}.main`,
        transition: 'transform 0.2s',
        '&:hover': { transform: 'translateY(-4px)' }
    }),
    typografyStyle: (tipo) => ({
        color: `${tipo}.main`,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: '0.75rem'
    }),
    textoCantidad: {
        fontWeight: 'bold',
        fontSize: '1.8rem',
        color: 'text.primary'
    },
    contenedorEncabezado: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: 1
    }
};
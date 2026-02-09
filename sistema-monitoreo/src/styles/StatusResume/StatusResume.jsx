export const estilosStatus = {
    tarjetaBase: (colorEstado) => ({
        padding: 2,
        backgroundColor: 'background.paper',
        borderLeft: `4px solid ${colorEstado}`,
        color: 'text.primary',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        borderRadius: '12px',
        boxSizing: 'border-box'
    }),
    contenedorEncabezado: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: 1
    },
    indicador: (colorEstado) => ({
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        backgroundColor: colorEstado,
    }),
    textoCantidad: {
        fontWeight: 'bold',
        fontSize: { xs: '1.2rem', md: '1.5rem' }
    }
};
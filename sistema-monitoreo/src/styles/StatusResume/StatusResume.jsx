export const estilosStatus = {
    tarjetaBase: (colorEstado) => ({
        padding: 2,
        backgroundColor: '#1e293b',
        borderLeft: `4px solid ${colorEstado}`,
        color: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        minWidth: '160px',
        flex: 1,
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
        fontWeight: 'bold'
    }
};
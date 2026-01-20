export const estilosStatus = {
    tarjetaBase: (colorEstado) => ({
        padding: 2,
        backgroundColor: '#ffffff', // 1e293b
        borderLeft: `4px solid ${colorEstado}`,
        color: '#000000',
        display: 'flex',
        flexDirection: 'column',
        minWidth: '200px',
        height: '85%',
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
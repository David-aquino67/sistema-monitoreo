export const estilosStatus = {
    tarjetaBase: (colorEstado) => ({
        padding: 2,
        backgroundColor: '#ffffff',
        borderLeft: `4px solid ${colorEstado}`,
        color: '#000000',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', // Centra el contenido verticalmente
        width: '100%',            // Ocupa el 100% del espacio del Grid asignado
        height: '100%',           // Se estira para igualar a sus compañeras de fila
        borderRadius: '12px',     // Consistencia con el diseño de Paper
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
        fontSize: { xs: '1.2rem', md: '1.5rem' } // Tamaño de fuente responsivo
    }
};
export const calcularResumenServidores = (servidores = []) => {
    return {
        total: servidores.length,
        online: servidores.filter(s => s.estado === 'online').length,
        warning: servidores.filter(s => s.estado === 'warning').length,
        offline: servidores.filter(s => s.estado === 'offline').length,
        maintenance: servidores.filter(s => s.estado === 'maintenance').length,
    };
};
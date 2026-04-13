export const calcularResumenServidores = (servidores = []) => {
    const counts = { total: servidores.length, online: 0, warning: 0, offline: 0, maintenance: 0 };
    
    servidores.forEach(s => {
        let status = s.online;
        if (typeof status === 'boolean' || typeof status === 'number') {
            status = status ? 'online' : 'offline';
        } else {
            status = String(status || '').toLowerCase();
        }

        if (counts.hasOwnProperty(status)) {
            counts[status]++;
        }
    });
    
    return counts;
};
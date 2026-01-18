export const servidoresSimulados = [
    {
        id: 1,
        titulo: "UMF 10",
        ubicacion: "Delegación Norte",
        estado: "online",
        tiempoActividad: "15d 4h",
        latencia: 42,
        ultimoPing: new Date().toISOString(),
        permisos: { reiniciar: true, restablecer: true, limpiar: true }
    },
    {
        id: 2,
        titulo: "Servidor Central",
        ubicacion: "Data Center",
        estado: "warning",
        tiempoActividad: "120d 2h",
        latencia: 5,
        ultimoPing: "2024-03-20T10:05:00Z",
        permisos: { reiniciar: true, restablecer: false, limpiar: false }
    }
];
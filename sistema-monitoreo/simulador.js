const fs = require('fs');

// Configuración
const ARCHIVO_DB = 'db.json';
const INTERVALO_MS = 10000; // 10 segundos para propósitos de prueba rápida

const simularEvento = () => {
    // 1. Leer el archivo db.json
    const data = JSON.parse(fs.readFileSync(ARCHIVO_DB, 'utf8'));

    // 2. Elegir un servidor al azar
    const indiceAleatorio = Math.floor(Math.random() * data.servidores.length);
    const servidor = data.servidores[indiceAleatorio];

    // 3. Decidir nuevo estado (80% probabilidad de estar online/warning, 20% offline)
    const estadosPosibles = ['online', 'online', 'online', 'warning', 'offline'];
    const nuevoEstado = estadosPosibles[Math.floor(Math.random() * estadosPosibles.length)];

    console.log(`>>> Actualizando ${servidor.titulo}: ${servidor.estado} -> ${nuevoEstado}`);

    // 4. Aplicar lógica de negocio según el estado
    if (nuevoEstado === 'offline') {
        servidor.estado = 'offline';
        servidor.latencia = 0;
        servidor.tiempoActividad = "0d 0h";
        servidor.ultimoPing = new Date().toISOString();
    } else {
        servidor.estado = nuevoEstado;
        // Valores aleatorios coherentes para servidores activos
        servidor.latencia = Math.floor(Math.random() * (100 - 10) + 10); // entre 10ms y 100ms
        servidor.tiempoActividad = `${Math.floor(Math.random() * 30)}d ${Math.floor(Math.random() * 24)}h`;
        servidor.ultimoPing = new Date().toISOString();
    }

    // 5. Guardar los cambios en el archivo
    fs.writeFileSync(ARCHIVO_DB, JSON.stringify(data, null, 2));
};

// Iniciar simulación
console.log('--- Simulador de Red SIMF Iniciado ---');
setInterval(simularEvento, INTERVALO_MS);
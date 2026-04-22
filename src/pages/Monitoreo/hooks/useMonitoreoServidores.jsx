import { useEffect, useState } from 'react';
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

window.Pusher = Pusher;
const echo = new Echo({
	broadcaster: 'reverb',
	key: import.meta.env.VITE_REVERB_APP_KEY,
	wsHost: import.meta.env.VITE_REVERB_HOST,
	wsPort: import.meta.env.VITE_REVERB_PORT,
	forceTLS: import.meta.env.VITE_REVERB_FORCE_TLS,
	enabledTransports: ['ws', 'wss'],
});

const useMonitoreoServidores = () => {
	const [servidores, setServidores] = useState([]);

	useEffect(() => {
		const channel = echo.channel('status-channel')
			.listen('.server.updated', (data) => {
				const nuevosDatos = data.payload;
				console.log('Datos recibidos del servidor:', nuevosDatos);
				setServidores((prevServidores) => {
					const mapaServidores = [...prevServidores];
					nuevosDatos.forEach((item) => {
						const index = mapaServidores.findIndex(s => s.unidad_id === item.unidad_id);
						if (index !== -1) {
							mapaServidores[index] = { ...mapaServidores[index], ...item };
						} else {
							mapaServidores.push(item);
						}
					});

					return mapaServidores;
				});
			});

		return () => {
			channel.stopListening('.server.updated');
			echo.leaveChannel('status-channel');
		};
	}, []);

	return servidores;
};

export default useMonitoreoServidores;
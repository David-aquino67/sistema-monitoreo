import { useState, useEffect, useCallback, useRef } from 'react';
import useServidores from '@/api/useServidores.js';

export default function useObtenerServidores() {
	const [servidores, setServidores] = useState([]);
	const [cargando, setCargando] = useState(true);
	const { obtenerServidores } = useServidores();

	async function cargarServidores() {
		const datos = await obtenerServidores();
		setServidores(datos);
		setCargando(false);
	}

	useEffect(() => {
		cargarServidores();
	}, []);

	useEffect(() => {
		const echo = window.Echo;
		const channel = echo.channel('status-channel');
		channel.listen('.server.updated', (data) => {
			const nuevosDatos = data.payload || data;
			setServidores((prevServidores) => {
				const mapa = new Map(prevServidores.map(s => [s.id, s]));
				if (Array.isArray(nuevosDatos)) {
					nuevosDatos.forEach(nuevo => {
						const existente = mapa.get(nuevo.id);
						mapa.set(nuevo.id, { ...existente, ...nuevo });
					});
				} else {
					mapa.set(nuevosDatos.id, { ...mapa.get(nuevosDatos.id), ...nuevosDatos });
				}
				return Array.from(mapa.values());
			});
		});

		return () => {
			echo.leaveChannel('status-channel');
		};
	}, []);

	return { servidores, cargando, cargarServidores };
};
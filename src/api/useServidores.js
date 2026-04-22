import axios from "axios";
import {useAuthContext} from "@/contexts/AuthContext";

export default function useServidores() {
	const {apiErrorManager, BASE_URL, authOptions, apiCallStart, apiCallEnd} = useAuthContext();

	async function actualizarEstadoServidor({id, nuevoEstado}) {
		const url = `${BASE_URL}/servidores/${id}/levantar`;
		const data = {estado: nuevoEstado};
		apiCallStart();
		try {
			const response = await axios.patch(url, data, authOptions);
			return response.data;
		} catch (error) {
			apiErrorManager(error);
		} finally {
			apiCallEnd();
		}
	}

	async function obtenerServidores() {
		const url = `${BASE_URL}/servidores`;
		try {
			const response = await axios.get(url, authOptions);
			return response.data;
		} catch (error) {
			apiErrorManager(error);
		}
	}

	return {obtenerServidores, actualizarEstadoServidor};
}

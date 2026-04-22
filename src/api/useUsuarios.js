import axios from "axios";
import {useAuthContext} from "@/contexts/AuthContext";

export default function useUsuarios() {
	const {apiErrorManager, BASE_URL, authOptions, apiCallStart, apiCallEnd} = useAuthContext();

	async function getUsuarios() {
		const url = `${BASE_URL}/usuarios`;
		try {
			const response = await axios.get(url, authOptions);
			return response.data;
		} catch (error) {
			apiErrorManager(error);
		}
	}

	async function createUsuario({id_sibop, FK_permiso_ability}) {
		const url = `${BASE_URL}/usuarios`;
		const data = {
			id_sibop,
			FK_permiso_ability,
		};
		apiCallStart();
		try {
			const response = await axios.post(url, data, authOptions);
			return response.data;
		} catch (error) {
			apiErrorManager(error);
		} finally {
			apiCallEnd();
		}
	}

	async function getUsuario({idSibop}) {
		const url = `${BASE_URL}/usuarios/${idSibop}`;
		apiCallStart();
		try {
			const response = await axios.get(url, authOptions);
			return response.data;
		} catch (error) {
			apiErrorManager(error);
		} finally {
			apiCallEnd();
		}
	}

	async function updateUsuario({idSibop, FK_permiso_ability}) {
		const url = `${BASE_URL}/usuarios/${idSibop}`;
		const data = {
			FK_permiso_ability,
		};
		apiCallStart();
		try {
			await axios.put(url, data, authOptions);
			return true;
		} catch (error) {
			apiErrorManager(error);
		} finally {
			apiCallEnd();
		}
	}

	async function deleteUsuario({idSibop}) {
		const url = `${BASE_URL}/usuarios/${idSibop}`;
		apiCallStart();
		try {
			await axios.delete(url, authOptions);
			return true;
		} catch (error) {
			apiErrorManager(error);
		} finally {
			apiCallEnd();
		}
	}

	async function searchUsuarios({nombre, matricula}) {
		const url = `${BASE_URL}/usuarios/search`;
		const params = {};
		if (nombre) params.nombre = nombre;
		if (matricula) params.matricula = matricula;

		apiCallStart();
		try {
			const response = await axios.get(url, {
				...authOptions,
				params,
			});
			return response.data;
		} catch (error) {
			apiErrorManager(error);
		} finally {
			apiCallEnd();
		}
	}

	return {getUsuarios, createUsuario, getUsuario, updateUsuario, deleteUsuario, searchUsuarios};
}

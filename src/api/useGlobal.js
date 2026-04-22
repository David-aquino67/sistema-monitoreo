import axios from "axios";
import {useAuthContext} from "@/contexts/AuthContext";

export default function useGlobal() {
	const {apiErrorManager, BASE_URL, authOptions, apiCallStart, apiCallEnd} = useAuthContext();

	async function clearCache() {
		const url = `${BASE_URL}/global/cache`;
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

	async function getVersiones() {
		const url = `${BASE_URL}/global/versiones`;
		try {
			const response = await axios.get(url, authOptions);
			return response.data;
		} catch (error) {
			apiErrorManager(error);
		}
	}

	async function getUltimaVersion() {
		const url = `${BASE_URL}/global/versiones/ultima`;
		try {
			const response = await axios.get(url, authOptions);
			return response.data;
		} catch (error) {
			apiErrorManager(error);
		}
	}

	async function getVersion(version) {
		const url = `${BASE_URL}/global/versiones/${version}`;
		try {
			const response = await axios.get(url, authOptions);
			return response.data;
		} catch (error) {
			apiErrorManager(error);
		}
	}

	return {clearCache, getVersiones, getUltimaVersion, getVersion};
}

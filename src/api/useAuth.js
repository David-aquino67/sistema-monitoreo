import axios from "axios";
import {useAuthContext} from "@/contexts/AuthContext";

export default function useAuth() {
	const {apiErrorManager, BASE_URL, authOptions} = useAuthContext();

	async function login({token}) {
		const url = `${BASE_URL}/auth/login`;
		const options = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};
		const data = {};
		try {
			const response = await axios.post(url, data, options);
			return response.data;
		} catch (error) {
			return false;
		}
	}

	async function logout() {
		const url = `${BASE_URL}/auth/logout`;
		try {
			await axios.get(url, authOptions);
		} catch (error) {
			apiErrorManager(error);
		}
	}

	async function validateToken() {
		const url = `${BASE_URL}/auth/validate/token`;
		try {
			await axios.get(url, authOptions);
			return true;
		} catch (error) {
			return false;
		}
	}

	async function validateUser({userId}) {
		const url = `${BASE_URL}/auth/validate/user/${userId}`;
		try {
			const response = await axios.get(url, authOptions);
			return response.data.existe;
		} catch (error) {
			return false;
		}
	}

	return {login, logout, validateToken, validateUser};
}

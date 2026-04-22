import axios from "axios";
import {useAuthContext} from "@/contexts/AuthContext";

export default function useUsuarios() {
	const {apiErrorManager, SIBOP_BASE_URL, apiCallStart, apiCallEnd} = useAuthContext();

	async function getUserId({username}) {
		const url = `${SIBOP_BASE_URL}/auth/user/${username}/id`;
		apiCallStart();
		try {
			const response = await axios.get(url);
			return response.data.id;
		} catch (error) {
			apiErrorManager(error);
		} finally {
			apiCallEnd();
		}
	}

	async function createToken({id, pwd}) {
		const url = `${SIBOP_BASE_URL}/auth/login`;
		const data = {
			id_usuario: id,
			clave: pwd,
		};
		const response = await axios.post(url, data);
		return response.data.token;
	}

	async function sendPwdEmail({id}) {
		const url = `${SIBOP_BASE_URL}/auth/forgotpwd/${id}`;
		const data = {};
		try {
			await axios.patch(url, data);
		} catch (error) {
			apiErrorManager(error);
		}
	}

	return {getUserId, createToken, sendPwdEmail};
}

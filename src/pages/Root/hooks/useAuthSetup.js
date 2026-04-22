import useAuth from "@/api/useAuth";
import {useNavigate} from "react-router-dom";
import CryptoJS from "crypto-js";
import {useAuthContext} from "@/contexts/AuthContext";
import {useEffect, useState} from "react";

export default function useAuthSetup() {
	const {setToken, setPermiso, authOptions, setIdUsuario} = useAuthContext();
	const {login, validateToken} = useAuth();
	const params = new URLSearchParams(window.location.search);
	const navigate = useNavigate();
	const [ready, setReady] = useState(false);

	async function autenticate() {
		// Obtenemos información proporcionada por el SIBOP
		const encryptedToken = params.get("et");
		const key = import.meta.env.VITE_ENCRYPTATION_KEY;

		// Validamos que el token no sea nulo o vacío
		if (encryptedToken == null || encryptedToken == undefined || encryptedToken == "") {
			navigate("/unauthorized");
			return;
		}

		// Desencriptamos el token e intentamos iniciar sesión
		const token = CryptoJS.AES.decrypt(encryptedToken, key).toString(CryptoJS.enc.Utf8);
		const data = await login({token});
		if (data === false) {
			navigate("/unauthorized");
			return;
		}

		// Asigamos los datos de sesión y redirigimos al usuario
		sessionStorage.setItem("token_sibop", token);
		sessionStorage.setItem("token", data.token);
		sessionStorage.setItem("permiso", data.permiso);
		sessionStorage.setItem("idUsuario", data.id_sibop);
		setToken(data.token);
		setPermiso(data.permiso);
		setIdUsuario(data.id_sibop);
		setReady(true);
	}

	async function redirect() {
		const isTokenValid = await validateToken();
		if (!isTokenValid) return;
		navigate("/home");
	}

	useEffect(() => {
		autenticate();
	}, []);

	useEffect(() => {
		if (!ready) return;
		redirect();
	}, [authOptions, ready]);

	return {ready};
}

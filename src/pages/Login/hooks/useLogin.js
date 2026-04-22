import {useState} from "react";
import {useFastDialogContext} from "@/contexts/FastDialogContext";
import useSibop from "@/api/useSibop";
import CryptoJS from "crypto-js";
import {useNavigate} from "react-router-dom";

export default function useLogin() {
	const [matricula, setMatricula] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const {fastDialog} = useFastDialogContext();
	const {getUserId, createToken, sendPwdEmail} = useSibop();
	const navigate = useNavigate();

	function handlePwdChange(e) {
		setPassword(e.target.value);
	}

	function handleUserChange(e) {
		setMatricula(e.target.value);
	}

	function toggleShowPassword() {
		setShowPassword((prev) => !prev);
	}

	function validateInputs() {
		if (matricula.trim() === "") {
			fastDialog({
				title: "Campos incompletos",
				message: "La matrícula no puede estar vacía.",
			});
			return false;
		}
		if (password.trim() === "") {
			fastDialog({
				title: "Campos incompletos",
				message: "La contraseña no puede estar vacía.",
			});
			return false;
		}
		return true;
	}

	async function handleLogin() {
		if (!validateInputs()) {
			return;
		}
		const userId = await getUserId({username: matricula});
		let token;
		try {
			token = await createToken({id: userId, pwd: password});
		} catch (error) {
			fastDialog({
				title: "Error de autenticación",
				message: "No se pudo iniciar sesión. Verifica tu matrícula y contraseña.",
			});
			console.error("Error al obtener el token:", error);
			return;
		}

		sessionStorage.setItem("token_sibop", token);

		// Ciframos el token de acceso
		const key = import.meta.env.VITE_ENCRYPTATION_KEY;
		const encryptedToken = CryptoJS.AES.encrypt(token, key).toString();
		const safeToken = encodeURIComponent(encryptedToken);
		navigate(`/?et=${safeToken}`);
	}

	async function handleForgotPassword() {
		if (matricula.trim() === "") {
			fastDialog({
				title: "Campos incompletos",
				message: "La matrícula no puede estar vacía.",
			});
			return;
		}
		const userId = await getUserId({username: matricula});
		await sendPwdEmail({id: userId});
		fastDialog({
			title: "Correo enviado",
			message: "Se ha enviado un correo con tu nueva contraseña.",
		});
	}

	return {handleLogin, handleForgotPassword, handlePwdChange, handleUserChange, matricula, password, showPassword, toggleShowPassword};
}

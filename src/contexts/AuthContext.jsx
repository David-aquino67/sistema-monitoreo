import { createContext, useContext, useEffect, useState } from "react";
import { useLoaderContext } from '@/contexts/LoaderContext';
import { useFastDialogContext } from '@/contexts/FastDialogContext';
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {

	const navigate = useNavigate();
	const BASE_URL = import.meta.env.VITE_BACKEND_DIR;
	const SIBOP_BASE_URL = import.meta.env.VITE_SIBOP_BACKEND_URL;
	const { setIsLoading } = useLoaderContext();
	const { fastDialog } = useFastDialogContext();
	const [token, setToken] = useState(sessionStorage.getItem('token') || null);
	const [permiso, setPermiso] = useState(sessionStorage.getItem('permiso') || 'user');
	const [idUsuario, setIdUsuario] = useState(sessionStorage.getItem('idUsuario') || null);
	const [authOptions, setAuthOptions] = useState({
		headers: {
			"Authorization": `Bearer ${token}`
		}
	});

	function apiCallStart() {
		setIsLoading(true);
	}

	function apiCallEnd() {
		setIsLoading(false);
	}

	function apiErrorManager(error) {

		// Mostramos el error en consola para posibles depuraciones
		console.log(error);

		// Si el error es de autenticación o autorización, lo mandamos a la pestaña correspondiente
		if (error?.response?.status == 401 || error?.response?.status == 403) {
			navigate('/unauthorized');
			throw new Error('Error de Autenticación o Autorización detuvo la ejecución');
		}

		// Si el error contiene un mensaje, lo mostramos
		if (error?.response?.data?.title && error?.response?.data?.message) {
			fastDialog({
				title: error.response.data.title,
				message: error.response.data.message,
			});
			throw new Error('Error con Mensaje de la API detuvo la ejecución');
		}

		// Si el error es un 422 genérico mostramos el mensaje de datos incompletos
		if (error?.response?.status == 422) {
			fastDialog({
				title: 'Datos incompletos o con errores',
				message: `Hay algún dato que contiene errores en la útlima petición. ${error?.response?.data?.message || ''}`,
			});
			throw new Error('Error 422 en petición a la API detuvo la ejecución');
		}

		// Si el error no cae en los casos anteriores, mostramos el mensaje de error no controlado y detenemos la ejecución
		fastDialog({
			title: 'Error inesperado',
			message: 'Ha ocurrido un error inesperado en el programa, por favor reporta esta falla'
		});
		throw new Error('Error inesperado en petición a la API detuvo la ejecución');

	}

	useEffect(() => {
		setAuthOptions({
			headers: {
				"Authorization": `Bearer ${token}`
			}
		});
	}, [token]);

	return (
		<AuthContext.Provider value={{ SIBOP_BASE_URL, apiCallStart, apiCallEnd, apiErrorManager, setToken, setPermiso, permiso, token, authOptions, BASE_URL, idUsuario, setIdUsuario }}>
			{children}
		</AuthContext.Provider >
	);

}

export function useAuthContext() {
	return useContext(AuthContext);
}
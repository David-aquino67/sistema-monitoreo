import {useEffect, useState} from "react";
import useAuth from "@/api/useAuth";
import {useAuthContext} from "@/contexts/AuthContext";

export default function usePrivateRoute() {
	const [authorized, setAuthorized] = useState(null);
	const {validateToken} = useAuth();
	const {permiso} = useAuthContext();

	async function verifyToken() {
		const isTokenValid = await validateToken();
		setAuthorized(isTokenValid);
	}

	useEffect(() => {
		verifyToken();
	}, []);

	const isLoading = authorized === null;
	const isAuthorized = authorized === true;

	const hasPermission = (only) => {
		if (!only) return true;
		return only.includes(permiso);
	};

	return {isLoading, isAuthorized, hasPermission};
}

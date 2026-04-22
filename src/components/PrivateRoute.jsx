import { Navigate } from "react-router-dom";
import usePrivateRoute from "@/hooks/usePrivateRoute";
import CheckingCredentialsPage from "@/pages/CheckingCredentials/page";

export default function PrivateRoute({ children, only }) {
	const { isLoading, isAuthorized, hasPermission } = usePrivateRoute();

	if (isLoading) {
		return <CheckingCredentialsPage />;
	}

	if (!isAuthorized) {
		return <Navigate to="/unauthorized" />;
	}

	if (!hasPermission(only)) {
		return <Navigate to="/unauthorized" />;
	}

	return children;
}
import { Alert, Fade, Stack } from "@mui/material";
import { createContext, useContext, useState } from "react";

const FastAlertContext = createContext();

export function FastAlertContextProvider({ children }) {

	const duration = 5 * 1000;
	const [alerts, setAlerts] = useState([]);

	function fastAlert({ severity, content }) {
		const alertId = Date.now() + Math.random(); // ID único
		const newAlert = {
			id: alertId,
			severity,
			content,
			visible: true
		};

		setAlerts(prev => [...prev, newAlert]);

		// Configurar auto-cierre para este alert específico
		setTimeout(() => {
			setAlerts(prev =>
				prev.map(alert =>
					alert.id === alertId
						? { ...alert, visible: false }
						: alert
				)
			);

			// Remover el alert después de la animación de fade
			setTimeout(() => {
				setAlerts(prev => prev.filter(alert => alert.id !== alertId));
			}, 300); // 300ms para que termine la animación de fade
		}, duration);
	}

	return (
		<FastAlertContext.Provider value={{ fastAlert }}>
			{children}
			<Stack
				spacing={1}
				sx={{
					position: 'fixed',
					top: 0,
					right: 0,
					m: 2,
					zIndex: 9999
				}}
			>
				{alerts.map((alert) => (
					<Fade key={alert.id} in={alert.visible}>
						<Alert severity={alert.severity}>
							{alert.content}
						</Alert>
					</Fade>
				))}
			</Stack>
		</FastAlertContext.Provider>
	);

}

export function useFastAlertContext() {
	return useContext(FastAlertContext);
}
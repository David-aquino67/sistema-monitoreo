import { createContext, useContext, useEffect, useState } from "react";
import useGlobal from "@/api/useGlobal";

const VersionContext = createContext();

export function VersionContextProvider({ children }) {

	const [version, setVersion] = useState(null);
	const [isNew, setIsNew] = useState(false);
	const { getUltimaVersion } = useGlobal();

	async function asignarVersion() {
		const ultimaVersion = await getUltimaVersion();
		const versionAnterior = localStorage.getItem("version");
		if (versionAnterior != ultimaVersion?.numero_version) {
			// Aqui puedes limpiar datos como la cache o el localStorage si es necesario
			setIsNew(true);
		}
		localStorage.setItem("version", ultimaVersion?.numero_version || "desconocida");
		setVersion(ultimaVersion);
	}

	return (
		<VersionContext.Provider value={{ version, isNew, asignarVersion }}>
			{children}
		</VersionContext.Provider >
	);

}

export function useVersionContext() {
	return useContext(VersionContext);
}
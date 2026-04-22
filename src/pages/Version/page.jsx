import useVersion from "@/pages/Version/hooks/useVersion";

export default function VersionPage() {

	const { versiones, loading } = useVersion();

	// TODO: Implementar página de versionado, esta página
	// sirve para que los usuarios consulten el historial
	// de versiones del proyecto.
	// versiones es un arreglo de objetos, cada elemento 
	// es una version, cada version tiene numero_version,
	// titulo_version, fecha_liberacion, historial
	// historial es a su vez un arreglo de objetos, cada
	// elemento representa un cambio realizado, incluye
	// REGISTRO_id es el id interno de la version, 
	// titulo_cambio es una descripción breve del cambio
	// descripcion_cambio es el detalle del cambio
	// loading es un booleano que indica si las versiones
	// han terminado de cargar
	return (
		<>
			Version
		</>
	);

}
import useAuthSetup from "@/pages/Root/hooks/useAuthSetup";

export default function RootPage() {

	const { ready } = useAuthSetup();

	// TODO: Implementar página de espera mientras se entra al sistema
	// desde otro sistema. Considera ready como un booleano, si es true 
	// debe haber textos del tipo "Redirigiendo..." y "Serás redirigido a la página principal en un momento."
	// si es false debe haber textos del tipo "Configurando sesión" y "Validando tu sesión proveniente del SIBOP..."
	return (
		<>
			Redirigiendo...
		</>
	);

}
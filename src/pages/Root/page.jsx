import useAuthSetup from "@/pages/Root/hooks/useAuthSetup";
import SessionStatusPage from '@/components/SessionStatusPage';

export default function RootPage() {

	const { ready } = useAuthSetup();
	const title = ready ? 'Redirigiendo...' : 'Configurando sesión';
	const subtitle = ready
		? 'Serás redirigido a la página principal en un momento.'
		: 'Validando tu sesión proveniente del SIBOP y preparando tus credenciales de acceso.';
	const hint = ready
		? 'Estamos finalizando la autenticación para entrar al sistema.'
		: 'Este proceso puede tardar unos segundos. No cierres esta ventana.';

	return (
		<SessionStatusPage
			title={title}
			subtitle={subtitle}
			hint={hint}
		/>
	);

}
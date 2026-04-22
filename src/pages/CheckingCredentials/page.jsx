import SessionStatusPage from '@/components/SessionStatusPage';

export default function CheckingCredentialsPage() {
	return (
		<SessionStatusPage
			title='Validando tu sesión'
			subtitle='Verificando credenciales y permisos de acceso para esta página. Esto tardará solo unos segundos.'
			hint='No cierres esta ventana mientras finaliza la validación. Serás redirigido automáticamente cuando el proceso concluya.'
		/>
	);
}
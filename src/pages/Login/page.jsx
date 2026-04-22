import useLogin from '@/pages/Login//hooks/useLogin';

export default function LoginPage() {

	const { handleLogin, handleForgotPassword, handlePwdChange, handleUserChange, matricula, password, showPassword, toggleShowPassword } = useLogin();

	// TODO: Implementar página de login, debes incluir al menos
	// -Matricula
	// -Contraseña
	// -Boton de inicio de sesión
	// -Boton de recuperar contraseña
	// Utiliza las funciones del hook, puedes modificarlas si
	// necesitas personalizar la lógica
	//...handleLogin: 
	//......Debe ejecutarse una vez que el usuario de clic
	//......en el boton de iniciar sesión
	//...handleForgotPassword:
	//......Debe ejecutarse una vez que el usuario de clic en
	//......el boton de "olvide mi contraseña"
	//...handlePwdChange:
	//......Debe ir en la propiedad onChange del input que
	//......maneje la contraseña
	//...handleUserChange:
	//......Debe ir en la propiedad onChange del input
	//......que maneje la matricula
	//...matricula:
	//......Debe ir en la propiedad value del input que
	//......maneje la matricula
	//...password:
	//......Debe ir en la propiedad value del input que
	//......maneje la contraseña
	//...showPassword:
	//......Estado booleano para controlar si el texto
	//......de la contraseña es visible
	//...toggleShowPassword:
	//......Al ejecutarse invierte el valor de showPassword

	// El ejemplo siguiente es solo un ejemplo de uso de las funciones, no debes dejarlo así, debes implementar la interfaz de usuario completa
	return (
		<>
			<h1>Login</h1>
			<form>
				<input type='text' placeholder='Matricula' value={matricula} onChange={handleUserChange} autoComplete='username' /><br />
				<input type={(showPassword) ? 'text' : 'password'} placeholder='Contraseña' value={password} onChange={handlePwdChange} autoComplete='current-password' />
				<button type='button' onClick={toggleShowPassword}>{showPassword ? 'Ocultar' : 'Mostrar'} contraseña</button><br />
				<button type='button' onClick={handleForgotPassword}>Olvide mi contraseña</button><br />
				<button type='button' onClick={handleLogin}>Iniciar sesion</button><br />
			</form>
		</>
	);

}
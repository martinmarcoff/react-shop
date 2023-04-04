import React, {useRef} from 'react';
import {ToastContainer, toast} from 'react-toastify'
import '../styles/Login.scss';

const Login = () => {
	//almacenamos el hook useRef en la constante form 
	//añadimos "ref" como elemento del formulario (linea 21) y le asignamos la constante form como valor
	const form = useRef(null)

	//función que nos permite enviar la información del formulario
	const handleSubmit = (e) => {

		e.preventDefault()
		//creamos una constante en la que almacenamos un nuevo formData,
		//cuyo argumento es la constante form(que almacena useRef), en su versión más reciente (current)
		const formData = new FormData(form.current);
		
		//creamos un objeto que nos permite visualizar información de la manera en que queremos enviarsela
		//al backend
		const data = {
		//.get permite traer elementos que se contenga en el form
		//el elemento que se trae es el que coincide con "name" en form
			username: formData.get('email'),
			password: formData.get('password')
		}
		
		console.log(data);
	}

	
	return (
		<div className="Login">
			<div className="Login-container">
				<img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
				<form action="/" className="form" ref={form}>
					<label htmlFor="email" className="label">Email address</label>
					<input type="text" name="email" placeholder="lionelmessi@example.com" className="input input-email" />
					<label htmlFor="password" className="label">Password</label>
					<input type="password" name="password" placeholder="*********" className="input input-password" />
					<button className="primary-button login-button" onClick={handleSubmit}>Login</button>
					<ToastContainer />
					<a href="/">Forgot my password</a>
				</form>
				<button className="secondary-button signup-button">Sign up</button>
			</div>
		</div>
	);
}

export default Login;
import React, {useState, useContext, useEffect} from 'react';
import {Link} from 'react-router-dom'
import AlertaContext from '../../context/alertas/alertaContex';
import AuthContext from '../../context/autenticacion/authContext';

const Login = props => {

    // extraer los valores del context
    const alertaContex = useContext(AlertaContext);
    const {alerta, mostrarAlerta} = alertaContex;

    const authContext = useContext(AuthContext);
    const {mensaje, autenticado, iniciarSesion} = authContext;

    useEffect(() => {
        // cuando el usr es autenticado se redirige a secciones. Falta agregar la validacion del perfil, ya que solo admin iran a esta
        if(autenticado){
            props.history.push('/secciones');
        }

        if (mensaje){
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }
    }, [mensaje, autenticado, props.history])

    // state para iniciar sesión
    const [usuario, guardarUsuario] = useState({
        email: '',
        password: ''
    });

    const {email, password} = usuario;

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    // cuando el usuario inicia sesión
    const onSubmit = e => {
        e.preventDefault();

        // validar campos
        if(email.trim() === '' || password.trim() === '') {
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
        }

        // pasarlos al action
        iniciarSesion({email, password});
    }

    return ( 
        <div className='form-usuario'>
            { alerta ? ( <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div> ) : null }
            <div className='contenedor-form sombra-dark'>
                <h1>Iniciar Sesión</h1>
                <form
                    onSubmit={onSubmit}
                >
                    <div className='campo-form'>
                        <label htmlFor='email'>Email</label>
                        <input 
                            type='email'
                            id='email'
                            name='email'
                            placeholder='Email'
                            value={email}
                            onChange={onChange}
                        />
                    </div>
                    <div className='campo-form'>
                        <label htmlFor='password'>Password</label>
                        <input 
                            type='password'
                            id='password'
                            name='password'
                            placeholder='Password'
                            value={password}
                            onChange={onChange}
                        />
                    </div>
                    <div className='campo-form'>
                        <input 
                            type='submit'  
                            className='button button-primario button-block'
                            value='Iniciar Sesión'
                        /> 

                    </div>
                </form>
                <Link to={'/nueva-cuenta'} className='enlace-cuenta'>
                    Obtener cuenta
                </Link>
            </div>
     </div>
     );
}
 
export default Login;
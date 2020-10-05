import React, {useContext, useEffect} from 'react';
import {Route, Redirect} from 'react-router-dom';
import AuthContext from '../../context/autenticacion/authContext';

const RutaPrivada = ({component: Component, ...props}) => { // high order component

    // extraer informacion de autenticacion
    const authContext = useContext(AuthContext);
    const {autenticado, cargando, usuarioAutenticado} = authContext;

    useEffect(() => {
        usuarioAutenticado();
    }, [])

    return ( 
        <Route { ...props } render={ props => !autenticado && !cargando ? (
            <Redirect to='/login' />
        ) : (
            <Component {...props} />
        ) } /> 
    );
}

export default RutaPrivada;
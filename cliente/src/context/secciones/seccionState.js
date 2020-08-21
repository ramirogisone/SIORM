import React, {useReducer} from 'react';
import seccionContext from './seccionContext';
import seccionReducer from './seccionReducer';
import {FORMULARIO_SECCION, OBTENER_SECCIONES} from '../../types';

const SeccionState = props => {

    const secciones = [
        {id:1, nombre: 'Sección 1'},
        {id:2, nombre: 'Sección 2'},
        {id:3, nombre: 'Sección 3'}
    ]
    const initialState = {
        secciones : [],
        formulario : false
    }
    // dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(seccionReducer, initialState)

    // funciones para el CRUD
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_SECCION
        })
    }

    // obtener las secciones
    const obtenerSecciones = () => {
        dispatch({
            type: OBTENER_SECCIONES,
            payload: secciones
        })
    }
    return(
        <seccionContext.Provider
            value={{
                secciones: state.secciones,
                formulario: state.formulario,
                mostrarFormulario,
                obtenerSecciones
            }}
        >
            {props.children}
        </seccionContext.Provider>
    )
}

export default SeccionState;
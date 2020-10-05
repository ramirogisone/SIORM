import React, {useReducer} from 'react';
import seccionContext from './seccionContext';
import seccionReducer from './seccionReducer';
import {FORMULARIO_SECCION, OBTENER_SECCIONES, AGREGAR_SECCIONES, VALIDAR_FORMULARIO, SECCION_ACTUAL, ELIMINAR_SECCION} from '../../types';
import {v4 as uuidv4} from 'uuid';

const SeccionState = props => {

    const secciones = [
        {id:1, nombre: 'Sección 1'},
        {id:2, nombre: 'Sección 2'},
        {id:3, nombre: 'Sección 3'}
    ]
    const initialState = {
        secciones : [],
        formulario : false,
        errorFormulario: false,
        seccion: null
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

    // agregar seccion
    const agregarSeccion = seccion => {
        seccion.id = uuidv4();
        dispatch({
            type: AGREGAR_SECCIONES,
            payload: seccion
        })
    }
    
    // validar formulario
    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    }

    // mostrar el proyecto seleccionado
    const seccionActual = seccionId => {
        dispatch({
            type: SECCION_ACTUAL,
            payload: seccionId
        })
    }

    // eliminar una seccion
    const eliminarSeccion = seccionId => {
        dispatch({
            type: ELIMINAR_SECCION,
            payload: seccionId
        })
    }

    return(
        <seccionContext.Provider
            value={{
                secciones: state.secciones,
                formulario: state.formulario,
                errorFormulario: state.errorFormulario,
                seccion: state.seccion,
                mostrarFormulario,
                obtenerSecciones,
                agregarSeccion,
                mostrarError,
                seccionActual,
                eliminarSeccion
            }}
        >
            {props.children}
        </seccionContext.Provider>
    )
}

export default SeccionState;
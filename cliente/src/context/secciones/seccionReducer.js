import {FORMULARIO_SECCION, OBTENER_SECCIONES, AGREGAR_SECCIONES, VALIDAR_FORMULARIO, SECCION_ACTUAL, ELIMINAR_SECCION} from '../../types';

export default (state, action) => {
    switch(action.type){
        case FORMULARIO_SECCION:
            return{
                ...state,
                formulario: true
            }
        case OBTENER_SECCIONES:
            return{
                ...state,
                secciones: action.payload
            }
        case AGREGAR_SECCIONES:
            return{
                ...state,
                secciones: [action.payload, ...state.secciones],
                formulario: false,
                errorFormulario: false
            }
        case VALIDAR_FORMULARIO:
            return{
                ...state,
                errorFormulario: true
            }
        case SECCION_ACTUAL:
            return{
                ...state,
                seccion: state.secciones.filter(seccion => seccion.id === action.payload)
            }
        case ELIMINAR_SECCION:
            return{
                ...state,
                secciones: state.secciones.filter(seccion => seccion.id !== action.payload),
                seccion: null
            }
        default:
            return state;
    }
}
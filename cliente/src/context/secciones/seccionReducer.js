import {FORMULARIO_SECCION, OBTENER_SECCIONES} from '../../types';

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
        default:
            return state;
    }
}
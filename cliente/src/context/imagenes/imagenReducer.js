import {IMAGENES_SECCIONES, AGREGAR_IMAGEN, VALIDAR_IMAGEN, ELIMINAR_IMAGEN, ESTADO_IMAGEN, IMAGEN_ACTUAL, ACTUALIZAR_IMAGEN, LIMPIAR_IMAGEN} from '../../types';

export default (state, action) => {
    switch(action.type) {
        case IMAGENES_SECCIONES:
            return{
                ...state,
                imagenesSeccion: state.imagenes.filter(imagen => imagen.seccionId === action.payload)
            }
        case AGREGAR_IMAGEN: 
            return{
                ...state,
                imagenes: [action.payload, ...state.imagenes],
                errorImagen: false
            }
        case VALIDAR_IMAGEN:
            return{
                ...state,
                errorImagen: true
            }
        case ELIMINAR_IMAGEN:
            return{
                ...state,
                imagenes: state.imagenes.filter(imagen => imagen.id !== action.payload) 
            }
        case ACTUALIZAR_IMAGEN:
        case ESTADO_IMAGEN:
            return{
                ...state,
                imagenes: state.imagenes.map(imagen => imagen.id === action.payload.id ? action.payload : imagen)
            }
        case IMAGEN_ACTUAL:
            return{
                ...state,
                imagenSeleccionada: action.payload
            }
        case LIMPIAR_IMAGEN:
            return{
                ...state,
                imagenSeleccionada: null
            }
        default:
            return state;
    }
}
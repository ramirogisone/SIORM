import React, {useReducer} from 'react';
import ImagenContext from './imagenContext';
import ImagenReducer from './imagenReducer';
import {v4 as uuidv4} from 'uuid';
import {IMAGENES_SECCIONES, AGREGAR_IMAGEN, VALIDAR_IMAGEN, ELIMINAR_IMAGEN, ESTADO_IMAGEN, IMAGEN_ACTUAL, ACTUALIZAR_IMAGEN, LIMPIAR_IMAGEN} from '../../types';

const ImagenState = props => {
    const initialState = {
        imagenes: [
            {id: 1, nombre: 'Imágen 1', descripcion: 'descripcion imagen 1', link: 'url a imagen 1', estado: true, seccionId: 1},
            {id: 2, nombre: 'Imágen 2', descripcion: 'descripcion imagen 2', link: 'url a imagen 2', estado: false, seccionId: 2},
            {id: 3, nombre: 'Imágen 3', descripcion: 'descripcion imagen 3', link: 'url a imagen 3', estado: true, seccionId: 3},
            {id: 4, nombre: 'Imágen 1', descripcion: 'descripcion imagen 1', link: 'url a imagen 1', estado: true, seccionId: 3},
            {id: 5, nombre: 'Imágen 2', descripcion: 'descripcion imagen 2', link: 'url a imagen 2', estado: false, seccionId: 2},
            {id: 6, nombre: 'Imágen 3', descripcion: 'descripcion imagen 3', link: 'url a imagen 3', estado: true, seccionId: 1},
            {id: 7, nombre: 'Imágen 1', descripcion: 'descripcion imagen 1', link: 'url a imagen 1', estado: true, seccionId: 2},
            {id: 8, nombre: 'Imágen 2', descripcion: 'descripcion imagen 2', link: 'url a imagen 2', estado: false, seccionId: 1},
            {id: 9, nombre: 'Imágen 3', descripcion: 'descripcion imagen 3', link: 'url a imagen 3', estado: true, seccionId: 3}
        ],
        imagenesSeccion: null,
        errorImagen: false,
        imagenSeleccionada: null
    }

    const [state, dispatch] = useReducer(ImagenReducer, initialState);

    // funciones del CRUD
    // obtener las imagenes de una seccion
    const obtenerImagenes = seccionId => {
        dispatch({
            type: IMAGENES_SECCIONES,
            payload: seccionId
        })
    }

    // agregar imagen a la seccion seleccionada
    const agregarImagen = imagen => {
        imagen.id = uuidv4();
        dispatch({
            type: AGREGAR_IMAGEN, 
            payload: imagen
        })
    }
    // mostrar error en imputs de imagenes
    const validarImagen = () => {
        dispatch({
            type: VALIDAR_IMAGEN
        })
    }

    const eliminarImagen = id => {
        dispatch({
            type: ELIMINAR_IMAGEN,
            payload: id
        })
    }

    const moficaEstadoImagen = imagen => {
        dispatch({
            type: ESTADO_IMAGEN,
            payload: imagen
        })    
    }

    // extraer la imagen actual para edicion
    const guardarImagenActual = imagen => {
        dispatch({
            type: IMAGEN_ACTUAL,
            payload: imagen
        })
    }

    const actualizarImagen = imagen => {
        dispatch({
            type: ACTUALIZAR_IMAGEN,
            payload: imagen
        })
    }

    const limpiarImagen = () => {
        dispatch({
            type: LIMPIAR_IMAGEN
        })
    }
    return (
        <ImagenContext.Provider
            value={{
                imagenes: state.imagenes,
                imagenesSeccion: state.imagenesSeccion,
                errorImagen: state.errorImagen,
                imagenSeleccionada: state.imagenSeleccionada,
                obtenerImagenes,
                agregarImagen,
                validarImagen,
                eliminarImagen,
                moficaEstadoImagen,
                guardarImagenActual,
                actualizarImagen,
                limpiarImagen
            }}
        >
            {props.children}
        </ImagenContext.Provider>
    )
}

export default ImagenState;
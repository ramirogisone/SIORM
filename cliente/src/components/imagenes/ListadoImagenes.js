import React, {Fragment, useContext} from 'react';
import Imagen from './Imagen';
import seccionContext from '../../context/secciones/seccionContext';
import imagenContext from '../../context/imagenes/imagenContext';
import {CSSTransition, TransitionGroup} from 'react-transition-group'

const ListadoImagenes = () => {

    // obtener state del formulario
    const seccionesContext = useContext(seccionContext);
    // obtengo funciones y states dentro del context 
    const {seccion, eliminarSeccion} = seccionesContext;

    // obtener state e imagenes del context de imagenes
    const imagenesContext = useContext(imagenContext);
    const {imagenesSeccion} = imagenesContext;

    // si no hay ningun proyecto seleccionado
    if(!seccion) return <h2>Selecciona una Sección</h2>

    // destructuring para extraer la seccion actual
    const [seccionActual] = seccion;

    const onClickEliminar = () => {
        eliminarSeccion(seccionActual.id);
    }

    return ( 
        <Fragment>
            <h2>Sección: {seccionActual.nombre}</h2>
            
            <ul className='listado-imagenes'>
            {imagenesSeccion.length === 0 
                ? (<li className='imagen'><p>No hay imágenes</p></li>) : 
                <TransitionGroup>
                    {imagenesSeccion.map(imagen => (
                        <CSSTransition
                            key={imagen.id}
                            timeout={600}    
                            classNames='imagen'
                        >
                            <Imagen 
                                imagen={imagen}
                            />
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            }    
            </ul>
            <button
                type='button'
                className='btn btn-eliminar'
                onClick={onClickEliminar}
            >Eliminar Sección &times;</button>
        </Fragment>
     );
}
 
export default ListadoImagenes;
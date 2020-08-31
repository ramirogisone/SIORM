import React, {useContext} from 'react';
import seccionContext from '../../context/secciones/seccionContext';
import imagenContext from '../../context/imagenes/imagenContext';

const Seccion = ({seccion}) => {

    // obtener state de secciones
    const seccionesContext = useContext(seccionContext);
    // obtengo las funciones dentro del context
    const {seccionActual} = seccionesContext;

    // obtener state y funciones del context de imagenes
    const imagenesContext = useContext(imagenContext);
    const {obtenerImagenes} = imagenesContext;

    const seleccionarSeccion = id => {
        seccionActual(id);
        obtenerImagenes(id);// imagenes asociadas a la seccion seleccionada
    }

    return ( 
        <li>
            <button
                type='button'
                className='button button-blank'
                onClick={() => seleccionarSeccion(seccion.id)}
            >{seccion.nombre}{seccion.descripcion}{seccion.link}

            </button>
        </li>
     );
}
 
export default Seccion;
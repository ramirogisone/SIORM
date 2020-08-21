import React, {useContext} from 'react';
import seccionContext from '../../context/secciones/seccionContext';

const Seccion = ({seccion}) => {

        // obtener state de secciones
        const seccionesContext = useContext(seccionContext);
        // obtengo las funciones dentro del context
        const {seccionActual} = seccionesContext;

    return ( 
        <li>
            <button
                type='button'
                className='btn btn-blank'
                onClick={() => seccionActual(seccion.id)}
            >{seccion.nombre}{seccion.descripcion}{seccion.link}

            </button>
        </li>
     );
}
 
export default Seccion;
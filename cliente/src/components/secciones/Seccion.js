import React from 'react';

const Seccion = ({seccion}) => {
    return ( 
        <li>
            <button
                type='button'
                className='btn btn-blank'
            >{seccion.nombre}{seccion.descripcion}{seccion.link}

            </button>
        </li>
     );
}
 
export default Seccion;
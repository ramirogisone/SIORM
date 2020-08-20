import React from 'react';
import Seccion from './Seccion';

const ListadoSecciones = () => {

    const secciones = [
        {nombre: 'Sección 1'},
        {nombre: 'Sección 2'},
        {nombre: 'Sección 3'}
    ]

    return ( 
        <ul className='listado-secciones'>
            {secciones.map(seccion => (
                <Seccion 
                    seccion={seccion}
                />
            ))}
        </ul>
     );
}
 
export default ListadoSecciones;
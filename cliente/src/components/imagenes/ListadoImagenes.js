import React, {Fragment} from 'react';
import Imagen from './Imagen';

const ListadoImagenes = () => {

    const imagenes = [
        {nombre: 'Imágen 1', descripcion: 'descripcion imagen 1', link: 'url a imagen 1', estado: true},
        {nombre: 'Imágen 2', descripcion: 'descripcion imagen 2', link: 'url a imagen 2', estado: false},
        {nombre: 'Imágen 3', descripcion: 'descripcion imagen 3', link: 'url a imagen 3', estado: true}
    ]

    return ( 
        <Fragment>
            <ul className='listado-imagenes'>
                {imagenes.map(imagen => (
                    <Imagen 
                        imagen={imagen}
                    />
                ))}
            </ul>
            <button
                type='button'
                className='btn btn-eliminar'
            >Eliminar Sección &times;</button>
        </Fragment>
     );
}
 
export default ListadoImagenes;
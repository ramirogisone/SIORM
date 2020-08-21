import React, {Fragment, useContext} from 'react';
import Imagen from './Imagen';
import seccionContext from '../../context/secciones/seccionContext';

const ListadoImagenes = () => {

    // obtener state del formulario
    const seccionesContext = useContext(seccionContext);
    // obtengo funciones y states dentro del context 
    const {seccion, eliminarSeccion} = seccionesContext;

    // si no hay ningun proyecto seleccionado
    if(!seccion) return <h2>Selecciona una Sección</h2>

    // destructuring para extraer la seccion actual
    const [seccionActual] = seccion;

    const imagenes = [
        {nombre: 'Imágen 1', descripcion: 'descripcion imagen 1', link: 'url a imagen 1', estado: true},
        {nombre: 'Imágen 2', descripcion: 'descripcion imagen 2', link: 'url a imagen 2', estado: false},
        {nombre: 'Imágen 3', descripcion: 'descripcion imagen 3', link: 'url a imagen 3', estado: true}
    ]

    const onClickEliminar = () => {
        eliminarSeccion(seccionActual.id);
    }

    return ( 
        <Fragment>
            <h2>Sección: {seccionActual.nombre}</h2>
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
                onClick={onClickEliminar}
            >Eliminar Sección &times;</button>
        </Fragment>
     );
}
 
export default ListadoImagenes;
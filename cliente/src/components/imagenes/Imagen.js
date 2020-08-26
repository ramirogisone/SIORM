import React, {useContext} from 'react';
import seccionContext from '../../context/secciones/seccionContext';
import imagenContext from '../../context/imagenes/imagenContext';

const Imagen = ({imagen}) => {

    // obtener state del formulario
    const seccionesContext = useContext(seccionContext);
    // obtengo funciones y states dentro del context 
    const {seccion} = seccionesContext;    

   // obtener state y funciones del context de imagenes
    const imagenesContext = useContext(imagenContext);
    const {eliminarImagen, obtenerImagenes, moficaEstadoImagen, guardarImagenActual} = imagenesContext;

    const [seccionActual] = seccion;

    const onClickEliminar = id => {
        eliminarImagen(id);
        obtenerImagenes(seccionActual.id);
    }

    const cambiarEstado = imagen => {
        if(imagen.estado){
            imagen.estado = false
        }else{
            imagen.estado = true
        }
        moficaEstadoImagen(imagen);
    }

    const seleccionarImagen = imagen => {
        guardarImagenActual(imagen);
    }

    return ( 
        <li className='imagen sombra'>
            <p>{imagen.nombre}</p>
            <p>{imagen.descripcion}</p>
            <p>{imagen.link}</p>

            <div className='estado'>
                {imagen.estado ?
                    (<button
                        type='button'
                        className='completo'
                        onClick={() => cambiarEstado(imagen)}
                    >Activa</button>)
                :
                    (<button
                        type='button'
                        className='incompleto'
                        onClick={() => cambiarEstado(imagen)}
                    >Inactiva</button>)}
            </div>
            <div className='acciones'>
                <button
                    type='button'
                    className='btn btn-primario'
                    onClick={() => seleccionarImagen(imagen)}
                >Editar</button>
                <button
                    type='button'
                    className='btn btn-secundario'
                    onClick={() => onClickEliminar(imagen.id)}
                >Eliminar</button>
            </div>
        </li>
     );
}
 
export default Imagen;
import React from 'react';

const Imagen = ({imagen}) => {
    return ( 
        <li className='tarea sombra'>
            <p>{imagen.nombre}</p>
            <p>{imagen.descripcion}</p>
            <p>{imagen.link}</p>

            <div className='estado'>
                {imagen.estado ?
                    (<button
                        type='button'
                        className='completo'
                    >Activa</button>)
                :
                    (<button
                        type='button'
                        className='incompleto'
                    >Inactiva</button>)}
            </div>
            <div className='acciones'>
                <button
                    type='button'
                    className='btn btn-primario'
                >Editar</button>
                <button
                    type='button'
                    className='btn btn-secundario'
                >Eliminar</button>
            </div>
        </li>
     );
}
 
export default Imagen;
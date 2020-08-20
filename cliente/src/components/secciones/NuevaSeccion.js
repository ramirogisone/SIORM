import React, {Fragment, useState} from 'react';

const NuevaSeccion = () => {

    // state de seccion
    const [seccion, guardarSeccion] = useState({
        nombre: ''
    });

    const {nombre} = seccion;

    // lee el contenido de los imputs
    const onChange = e => {
        guardarSeccion({
            ...seccion,
            [e.target.name] : e.target.value
        })
    }

    // cuando se presiona en agregar
    const onSubmitSeccion = e => {
        e.preventDefault();

        // validar los campos

        // agregar al state

        // reiniciar form
    }

    return ( 
        <Fragment>
            <button
                type='button'
                className='btn btn-block btn-primario'
            >Nueva Sección</button>
            <form
                onSubmit={onSubmitSeccion}
                className='formulario-nueva-seccion'
            >
                <input 
                    type='text'
                    className='input-text'
                    id='nombre'
                    name='nombre'
                    placeholder='Nombre sección'
                    value={nombre}
                    onChange={onChange}
                />
                <input 
                    type='submit'  
                    className='btn btn-primario btn-block'
                    value='Agregar sección'
                />

            </form>
        </Fragment>
     );
}
 
export default NuevaSeccion;
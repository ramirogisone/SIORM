import React, {Fragment, useState, useContext} from 'react';
import seccionContext from '../../context/secciones/seccionContext';

const NuevaSeccion = () => {

    // obtener state del formulario
    const seccionesContext = useContext(seccionContext);
    // obtengo las funciones dentro del context
    const {formulario, mostrarFormulario} = seccionesContext;

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

    const onClickFormulario = () => {
        mostrarFormulario();
    }
    return ( 
        <Fragment>
            <button
                type='button'
                className='btn btn-block btn-primario'
                onClick={onClickFormulario}
            >Nueva Sección</button>
            { formulario ? 
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
                : null
            }
        </Fragment>
     );
}
 
export default NuevaSeccion;
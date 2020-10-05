import React, {useContext, useState, useEffect} from 'react';
import seccionContext from '../../context/secciones/seccionContext';
import imagenContext from '../../context/imagenes/imagenContext';

const NuevaImagen = () => {

    // obtener state del formulario
    const seccionesContext = useContext(seccionContext);
    // obtengo funciones y states dentro del context 
    const {seccion} = seccionesContext;

    // obtener state y funciones del context de imagenes
    const imagenesContext = useContext(imagenContext);
    const {imagenSeleccionada, errorImagen, agregarImagen, validarImagen, obtenerImagenes, actualizarImagen, limpiarImagen} = imagenesContext;

    useEffect(() => {
        if(imagenSeleccionada){
            guardarImagen(imagenSeleccionada)
        }else{
            guardarImagen({
                nombre: '',
                descripcion: '',
                link: ''
            })
        }
    }, [imagenSeleccionada]);

    // state de imagen
    const [imagen, guardarImagen] = useState({
        nombre: '',
        descripcion: '',
        link: ''
    });
    
    const {nombre, descripcion, link} = imagen;

    // si no hay ningun proyecto seleccionado
    if(!seccion) return null

    // destructuring para extraer la seccion actual
    const [seccionActual] = seccion;

    // lee el contenido de los imputs
    const handleChange = e => {
        guardarImagen({
            ...imagen,
            [e.target.name] : e.target.value
        })
    } 

    // cuando se presiona en agregar
    const onSubmitImagen = e => {
        e.preventDefault();

        // validar los campos
        if(nombre.trim() === '' || descripcion.trim() === '' || link.trim() === ''){
            validarImagen();
            return
        }

        // determinar si es edicion o nueva imagen
        if(imagenSeleccionada === null){
            // agregar nueva imagen al state
            imagen.seccionId = seccionActual.id;
            imagen.estado = false;
            agregarImagen(imagen);
        }else{
            actualizarImagen(imagen);
            limpiarImagen();
        }
        
        obtenerImagenes(seccionActual.id);

        // reiniciar form
        guardarImagen({
            nombre: '',
            descripcion: '',
            link: ''
        })

    }

    return (    
        <div className='formulario'>
            <form
                onSubmit={onSubmitImagen}
                /* className='formulario-nueva-imagen' */
            >
                <div className='contenedor-input'>
                    
                    <input 
                        type='text'
                        className='input-text'
                        // id='nombre'
                        name='nombre'
                        placeholder='Nombre'
                        value={nombre}
                        onChange={handleChange}
                    />
                    
                    
                    <input 
                        type='text'
                        className='input-text'
                        // id='descripcion'
                        name='descripcion'
                        placeholder='Descripción'
                        value={descripcion}
                        onChange={handleChange}
                    />
                    
                    <input 
                        type='text'
                        className='input-text'
                        // id='link'
                        name='link'
                        placeholder='Link'
                        value={link}
                        onChange={handleChange}
                    />
                    
                    <div className='contenedor-input'>
                    
                        <input 
                            type='submit'  
                            className='button button-primario button-submit button-block'
                            value={imagenSeleccionada ? 'Editar Imágen' : 'Agregar Imágen'}
                        />
                    
                    </div>
                </div>
            </form>
            {errorImagen ? <p className='mensaje error'>Todos los campos son obligatorios</p> : null}
        </div>
     );
}
 
export default NuevaImagen;
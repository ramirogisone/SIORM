import React, {useContext, useEffect} from 'react';
import Seccion from './Seccion';
import seccionContext from '../../context/secciones/seccionContext';

const ListadoSecciones = () => {

    // obtener state del formulario
    const seccionesContext = useContext(seccionContext);
    // obtengo las funciones dentro del context
    const {secciones, obtenerSecciones} = seccionesContext;

    // obtener secciones cuando carga el componente
    useEffect(() => {
        obtenerSecciones();
    }, []);

    if(secciones.length === 0) 
        return <p>Crea una nueva sección</p>
    ;

    return ( 
        <ul className='listado-secciones'>
            {secciones.map(seccion => (
                <Seccion 
                    key={seccion.id}
                    seccion={seccion}
                />
            ))}
        </ul>
     );
}
 
export default ListadoSecciones;
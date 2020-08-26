import React, {useContext, useEffect} from 'react';
import Seccion from './Seccion';
import seccionContext from '../../context/secciones/seccionContext';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const ListadoSecciones = () => {

    // obtener state del formulario
    const seccionesContext = useContext(seccionContext);
    // obtengo las funciones dentro del context
    const {secciones, obtenerSecciones} = seccionesContext;

    // obtener secciones cuando carga el componente
    useEffect(() => {
        obtenerSecciones();
        //eslint-disable-next-line
    }, []);

    if(secciones.length === 0) 
        return <p>Crea una nueva sección</p>
    ;

    return ( 
        <ul className='listado-secciones'>
            <TransitionGroup>
                {secciones.map(seccion => (
                    <CSSTransition
                        key={seccion.id}
                        timeout={600}
                        classNames='seccion'
                    >
                        <Seccion 
                            seccion={seccion}
                        />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </ul>
     );
}
 
export default ListadoSecciones;
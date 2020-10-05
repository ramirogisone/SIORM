import React, {useContext, useEffect} from 'react';
import Sidebar from '../layout/Sidebar';
import Header from '../layout/Header';
import NuevaImagen from '../imagenes/NuevaImagen';
import ListadoImagenes from '../imagenes/ListadoImagenes';
import AuthContext from '../../context/autenticacion/authContext';

const Secciones = () => {

    // extraer informacion de autenticacion
    const authContext = useContext(AuthContext);
    const {usuarioAutenticado} = authContext;

    useEffect(() => {
        usuarioAutenticado();
    }, []);

    return (
        <div className='contenedor-app'>
            <Sidebar />

            <div className='seccion-principal'>
                <Header />
                <main>
                    <NuevaImagen />

                    <div className='contenedor-secciones'>
                        <ListadoImagenes />
                    </div>

                </main>
            </div>
        </div>
    );
}
 
export default Secciones;
import React from 'react';
import Sidebar from '../layout/Sidebar';
import Header from '../layout/Header';
import NuevaImagen from '../imagenes/NuevaImagen';
import ListadoImagenes from '../imagenes/ListadoImagenes';

const Secciones = () => {

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
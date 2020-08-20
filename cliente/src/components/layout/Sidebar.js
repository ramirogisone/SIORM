import React from 'react';
import NuevaSeccion from '../secciones/NuevaSeccion';
import ListadoSecciones from '../secciones/ListadoSecciones';

const Sidebar = () => {
    return ( 
        <aside>
            <h1>Administrar secciones</h1>
            <NuevaSeccion />

            <div className='secciones'>
                <h2>Secciones</h2>
                <ListadoSecciones />
            </div>
        </aside>
     );
}
 
export default Sidebar;
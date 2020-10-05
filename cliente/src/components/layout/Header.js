import React from 'react';

const Header = () => {
    return ( 
        <header className='app-header'>
            <p className='nombre-usuario'>Hola <span>Ramiro</span></p>
            <nav className='nav-principal'>
                <a href='#!'>Cerrar sesión</a>

            </nav>

        </header>
     );
}
 
export default Header;
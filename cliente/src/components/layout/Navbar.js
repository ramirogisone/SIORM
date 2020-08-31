import React from 'react';
//  import logo from '../img/logo-sf.png';
// import logo from '../img/logo-sf-2.png';
import logo from '../../img/logo-sf-3.png';

const Navbar = () => {
    return ( 
        // <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className='container'>
                    <a className="navbar-brand" href="#">
                    <img src={logo} width="140" height="60" className="d-inline-block align-top" alt="" loading="lazy" />
                    </a>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Inicio
                                <span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Nosotros</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Servicios</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contacto</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <form className="form-inline">
                    <button className="btn btn-sm btn-outline-secondary" type="button">Iniciar sesión</button>
                </form>
            </nav> 
        // </div> 

        
    );
}
 
export default Navbar;
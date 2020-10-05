import React from 'react';

const Footer = () => {
    return ( 
        <footer className='py-5 bg-dark'>
            <div className='container'>
            <p className="float-right"><a href="#">Subir</a></p>
            <p className='m-0  text-white'>&copy; {(new Date().getFullYear())} SIORM, Inc. </p>
            </div>
        </footer>
     );
}
 
export default Footer;
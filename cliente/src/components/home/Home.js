import React, {Fragment} from 'react';
import HomeCarousel from '../layout/HomeCarousel';
import Navbar from '../layout/Navbar';
import Card from '../layout/Card';
import Footer from '../layout/Footer';

const Home = () => {
    return ( 
        <Fragment>
            <Navbar />
            <main role="main" className="flex-shrink-0 mt-5">
                <div className="container">
                    <HomeCarousel />
                    <h1 className='my-4'>Algunas de nuestras imágenes</h1>
                    <Card />
                    <hr className="featurette-divider" />
                </div>
            </main>
            <Footer />
        </Fragment>
     );
}
 
export default Home;
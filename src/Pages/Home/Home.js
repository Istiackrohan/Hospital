import React from 'react';
import Banner from '../../Components/Banner';
import About from '../Home/Components/About&Contact';
import Department from './Components/Department';
import Services from './Components/Services';
import ServiceDetails from '../Service/ServiceDetails';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Services/>
            <Department/>
            <About/>
            <ServiceDetails/>
        </div>
    );
};

export default Home;
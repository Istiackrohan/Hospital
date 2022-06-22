import React from 'react';
import Banner from '../../Components/Banner';
import Login from '../Auth/Login';
import Department from './Components/Department';
import Services from './Components/Services';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Services/>
            <Department/>
            <Login/>
        </div>
    );
};

export default Home;
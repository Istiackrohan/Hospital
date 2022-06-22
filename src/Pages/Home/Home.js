import React from 'react';
import Banner from '../../Components/Banner';
import DepartmentDetails from '../Department/DepartmentDetails';
import Department from './Components/Department';
import Services from './Components/Services';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Services/>
            <Department/>
            <DepartmentDetails/>
        </div>
    );
};

export default Home;
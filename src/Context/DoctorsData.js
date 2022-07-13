import React, { createContext } from 'react';
import ServiceDetails from '../Pages/Service/ServiceDetails';

export const DoctorsContext = createContext();

const DoctorsData = ({children}) => {
    const {doctors} = ServiceDetails();
    return (
        <DoctorsContext.Provider value = {doctors}>
            {children}
        </DoctorsContext.Provider>
    );
};

export default DoctorsData;
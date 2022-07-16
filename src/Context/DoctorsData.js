import React, { createContext } from 'react';
import SpecificService from '../Hooks/SpecificService';

export const DoctorsContext = createContext();

const DoctorsDataProvider = ({ children }) => {
    const allContext = SpecificService();
    return (
        <DoctorsContext.Provider value={allContext}>
            {children}
        </DoctorsContext.Provider>
    );
};

export default DoctorsDataProvider;
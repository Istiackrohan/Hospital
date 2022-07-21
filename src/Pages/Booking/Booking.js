import React from 'react';
import { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ServiceData from '../../Components/fakeData/ServiceData.json'
import useAuth from '../../Hooks/useAuth';

const Booking = () => {
    const { serviceid, bookingid } = useParams();
    const service = ServiceData.find(service => {
        return service.id === serviceid;
    });
    const { doctors } = service;
    const { } = doctors;
    const { user } = useAuth();

    return (<>
        {!user ? <Navigate to="/login" /> : 
         <div>
            <h1>This is {bookingid}</h1>
         </div>
         }
    </>);
};

export default Booking;
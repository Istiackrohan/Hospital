import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ServiceData from '../../Components/fakeData/ServiceData.json'

const Booking = () => {
    const {bookingid} = useParams();
    const {doctors} = useDoctorsData()
    const [request, setRequest] = useState("Request booking");
    const doctor = ServiceData.find(doctor => {
        return doctor.doctorName === bookingid;
    });
    console.log(doctors);

    return (
        <div>
            <h1>This is booking {bookingid}</h1>
        </div>
    );
};

export default Booking;
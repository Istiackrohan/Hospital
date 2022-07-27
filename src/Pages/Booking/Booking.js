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
    const { doctors, serviceName, image } = service;
    const doctor = doctors.find(doctor => {
        return doctor.doctorName === bookingid;
    });
    const { img, doctorName, fees, time, experience } = doctor;
    const { user } = useAuth();

    const [booking, setBooking] = useState("Request booking");

    const isRequestSent = () => {
        setBooking(booking==="Request booking" ? "Cancel booking" : "Request booking");
        alert(booking==="Request booking" ? "Congratulations! Your booking request has been sent to aur agent.": "Your booking request has been cancelled.");
    }

    return (<>
        {!user ? <Navigate to="/login" /> :
            <div className="flex flex-col">
                <img src={image} className="relative" alt="" />
                <h1 className="p-5 w-full text-xl text-white font-bold bg-gray-900 flex justify-center">{serviceName}</h1>
                <div className="">
                    <div className="lg:basis-1/3 md:basis-1/2 sm:basis-1 mb-5 px-5 flex justify-center">
                        <div className="p-6 flex rounded-lg shadow-lg bg-white max-w-sm">
                            <img className="rounded-full w-32 h-full" src={img}/>
                            <div className="pl-6">
                                <h5 className="text-gray-900 text-xl font-medium mb-2">{doctorName}</h5>
                                <p className="text-gray-700 text-base mb-4">{experience}</p>
                                <p className="text-gray-700 text-base mb-4">Are you sure that you want to book Mr. <b>{doctorName}'s</b> appointment at <b>{time}</b> for fees of <b>{fees}</b>?</p>
                                <button type="button" onClick={isRequestSent} className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">{booking}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }
    </>);
};

export default Booking;
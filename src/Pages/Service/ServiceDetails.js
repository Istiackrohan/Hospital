import React from 'react';
import { useParams } from 'react-router-dom';
import ServiceData from '../../Components/fakeData/ServiceData.json'

const ServiceDetails = () => {
    const {serviceid} = useParams();
    const service = ServiceData.find(service =>{
        return service.id === serviceid;
    });

    const bookingServices = () => {
        alert("Your request has been sent to our hospital. Please wait until our officer calls you.");
    }
    return (
        <div className="flex justify-center">
            <div className="container bg-gray-100">
                <div className="mb-5">
                    <img className="relative" src={service?.image} alt="" />
                    <h1 className="p-5 text-xl text-white font-bold bg-gray-900">{service?.serviceName}</h1>
                </div>
                <div className="flex flex-wrap">
                    {
                        ServiceData.map((item, index) => {
                            const [{ doctors }] = ServiceData
                            const { doctorName, time, experience, fees } = doctors[index];
                            return (
                                <div className="lg:basis-1/3 md:basis-1/2 sm:basis-1 mb-5 px-5 flex justify-center" key={index}>
                                    <div className="">
                                        <div className="rounded-lg shadow-lg bg-white max-w-sm">
                                            <div className="p-6">
                                                <h5 className="text-gray-900 text-xl font-medium mb-2">{doctorName}</h5>
                                                <p className="text-gray-700 text-base mb-4">{experience}</p>
                                                <p className="text-gray-700 text-base mb-4">{time}</p>
                                                <p className="text-gray-700 text-base mb-4">{fees}</p>

                                                <button onClick={()=>bookingServices()} type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">{bookingServices ? "Request Sent" : "Request to book"}</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
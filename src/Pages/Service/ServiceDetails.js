import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import ServiceData from '../../Components/fakeData/ServiceData.json';

const ServiceDetails = () => {
    const { serviceid } = useParams();
    const service = ServiceData.find(service => {
        return service.id === serviceid;
    });
    const { doctors } = service;

    return (
        <div className="flex justify-center">
            <div className="container bg-gray-100">
                <div className="mb-5">
                    <img className="relative" src={service?.image} alt="" />
                    <h1 className="p-5 text-xl text-white font-bold bg-gray-900">{service?.serviceName}</h1>
                </div>
                <div className="flex flex-wrap">
                    {
                        doctors.map((doctor, i) => {
                            const { image, doctorName, fees, time, experience } = doctor;
                            return (
                                <div className="lg:basis-1/3 md:basis-1/2 sm:basis-1 mb-5 px-5 flex justify-center" key={i}>
                                    <div className="">
                                        <div className="rounded-lg shadow-lg bg-white max-w-sm">
                                            <div className="p-6">
                                                <div className="flex justify-center">
                                                    <img className="rounded-full w-32 h-32" src={image} alt="" />
                                                </div>
                                                <h5 className="text-gray-900 text-xl font-medium mb-2">{doctorName}</h5>
                                                <p className="text-gray-700 text-base mb-4">{experience}</p>
                                                <p className="text-gray-700 text-base mb-4">{time}</p>
                                                <p className="text-gray-700 text-base mb-4">{fees}</p>

                                                <Link to={`/service/${serviceid}/${i}`}>
                                                    <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Request booking</button>
                                                </Link>
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



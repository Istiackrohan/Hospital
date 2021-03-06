import React from 'react';
import { Link } from 'react-router-dom';
import CarouselData from '../../../Components/fakeData/ServiceData.json';

const Services = () => {
    return (
        <div id="services" className="container mx-auto mb-10">
            <h1 className="font-bold text-xl leading-10 border-b-2 pl-5 mb-5">All services</h1>
            <div className="flex flex-wrap">
                {
                    CarouselData.map((item, index) => {
                        return (
                            <div className="lg:basis-1/3 md:basis-1/2 sm:basis-1 mb-5 px-5" key={index}>
                                <div className="flex justify-center">
                                    <div className="rounded-lg shadow-lg bg-white max-w-sm">
                                        <a href="#" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                            <img className="rounded-t-lg" src={item.image} alt="" />
                                        </a>
                                        <div className="p-6">
                                            <h5 className="text-gray-900 text-xl font-medium mb-2">{item.serviceName}</h5>
                                            <p className="text-gray-700 text-base mb-4">
                                                Some quick example text to build on the card title and make up the bulk of the card's
                                                content.
                                            </p>
                                            <Link to={`/service/${item.id}`}>
                                                <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">See Details</button>
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
    );
};

export default Services;
import React from 'react';
import DepartmentData from '../../../Components/fakeData/DepartmentData.json';

const Department = () => {
    return (
        <div className="container mx-auto mb-10 ">
            <h1 className="font-bold text-xl leading-10 border-b-2 pl-5 mb-5">Our Departments</h1>
            <div className="flex flex-wrap">
            {
                DepartmentData.map((item, index) => {
                    return (
                        <div className="lg:basis-1/5 md:basis-1/3 sm:basis-1 mb-5 px-5" key={index}>
                            <div className="flex justify-center">
                                <div className="rounded-lg shadow-lg bg-white max-w-sm">
                                    <a href="#" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                        <img className="rounded-t-lg" src={item.image} alt="" />
                                    </a>
                                    <div className="p-6">
                                        <h5 className="text-gray-900 text-xl font-medium mb-2">{item.title}</h5>
                                        <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
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

export default Department;
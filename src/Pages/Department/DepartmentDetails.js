import React from 'react';
import DepartmentData from '../../Components/fakeData/DepartmentData.json';

const DepartmentDetails = () => {
    return (
        <div className="mx-auto container flex flex-wrap">
            <div className="">
                
            </div>
            {
                DepartmentData.map((item, index) => {
                    return (
                        <div className="lg:basis-1/3 md:basis-1/2 sm:basis-1 mb-5 px-5" key={index}>
                            <div className="flex justify-center">
                                <div className="rounded-lg shadow-lg bg-white max-w-sm">
                                    <a href="#" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                        <img className="rounded-t-lg" src={item.image} alt="" />
                                    </a>
                                    <div className="p-6">
                                        <h5 className="text-gray-900 text-xl font-medium mb-2">{item.title}</h5>
                                        <h3 className="font-bold text-xl">{item.doctor1}</h3>
                                        <p>{item.doctor1detail}</p>
                                        <h3 className="font-bold text-xl">{item.doctor2}</h3>
                                        <p>{item.doctor2detail}</p>
                                        <h3 className="font-bold text-xl">{item.doctor3}</h3>
                                        <p>{item.doctor3detail}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default DepartmentDetails;
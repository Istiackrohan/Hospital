import React from 'react';
import NavData from './fakeData/NavData.json';

const Footer = () => {
    return (
        <div>
            <div className="bg-gray-900 text-white text-1.5xl min-h-80 flex flex-row p-20 flex-wrap">
                {NavData.map((item, index) => {
                    return (
                    <a key={item.name} href={item.href} className="footer-content basis-1/5 m-5">
                        <h1>{item.name}</h1>
                        <small>{item.description}</small>
                    </a>);
                })}
            </div>
        </div>
    );
};

export default Footer;
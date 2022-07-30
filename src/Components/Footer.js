import React from 'react';
import NavData from './fakeData/NavData.json';

const Footer = () => {
    return (
        <div style={{ minHeight: "30vh", width: "100vw" }} className="bg-gray-900 text-white text-1.5xl flex flex-row p-20 flex-wrap">
            {NavData.map((item) => {
                return (
                    <a key={item.name} href={item.href} className="footer-content basis-1/5 m-5">
                        <h1>{item.name}</h1>
                        <small>{item.description}</small>
                    </a>);
            })}
        </div>
    );
};

export default Footer;
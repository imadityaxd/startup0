import React from 'react';

const AboutUs = () => {
    return (
        <div className="sm:flex items-center max-w-screen-xl">
            <div className="sm:w-1/2 p-10">
                <div className="image object-center text-center">
                    <img src="https://i.imgur.com/WbQnbas.png" alt="About Us" />
                </div>
            </div>
            <div className="sm:w-1/2 p-5">
                <div className="text">
                    <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">About us</span>
                    <h2 className="my-4 font-bold text-3xl sm:text-4xl">
                        About <span className="text-indigo-600">Startupify</span>
                    </h2>
                    <p className="text-gray-700">
                    At Startupify, we believe that every great idea deserves the
              chance to thrive. Whether you&apos;re an aspiring entrepreneur or
              an established startup looking for growth, our platform is
              designed to empower you at every stage of your journey.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;

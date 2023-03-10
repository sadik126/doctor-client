import React from 'react';
import banner from '../../../assets/images/chair.png';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner min-h-full'>
            <div className="hero py-24">
                <div className="hero-content  flex-col lg:flex-row-reverse">
                    <img className='w-full' src={banner} className="sm:w-100 md:max-w-md rounded-lg shadow-2xl" />
                    <div className='w-full  md:w-1/2'>
                        <h1 className="text-5xl font-bold">Your New Smile Starts</h1>
                        <h1 className="text-5xl font-bold">Here</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn-grad">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
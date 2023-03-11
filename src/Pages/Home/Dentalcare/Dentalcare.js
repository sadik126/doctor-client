import React from 'react';
import treatment from '../../../assets/images/treatment.png';
import './Dentalcare.css';

const Dentalcare = () => {
    return (
        <div className="hero min-h-screen bg-base-200" data-aos="fade-right">
            <div className="hero-content flex-col lg:flex-row gap-24">
                <img style={{ width: '100%' }} src={treatment} className="max-w-sm rounded-lg shadow-2xl" />
                <div className='lg:w-1/2'>
                    <h1 className="text-5xl font-bold">Exceptional Dental</h1>
                    <h1 className="text-5xl font-bold">Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web pag</p>
                    <button className="btn btn-grad">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Dentalcare;
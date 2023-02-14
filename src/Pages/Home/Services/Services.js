import React from 'react';
import Service from './Service';
import floride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'

const Services = () => {

    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: '',
            img: floride

        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: '',
            img: cavity

        },
        {
            _id: 3,
            name: 'Teeth whiting ',
            description: '',
            img: whitening

        }
    ]
    return (
        <>
            <div className='my-28'>
                <div className='text-center'>
                    <h3 className='text-orange-800  text-xl font-bold uppercase '> Our services</h3>
                    <h2 className='text-4xl'>Services we provide</h2>

                </div>


                <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-5'>
                    {
                        services.map(service => <Service key={service._id} service={service}></Service>)
                    }
                </div>


            </div>

        </>
    );
};

export default Services;
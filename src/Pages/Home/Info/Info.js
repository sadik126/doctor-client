import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import contact from '../../../assets/icons/phone.svg';
import Card from './Card/Card';

const Info = () => {
    return (
        <>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-5' data-aos="fade-right">
                <Card cardtitle="Opening hours" bgcolour="bg-gradient-to-r from-orange-800 to-amber-500" img={clock}></Card>
                <Card cardtitle="Our locations" bgcolour="bg-zinc-900" img={marker}></Card>
                <Card cardtitle="Contact us" bgcolour="bg-gradient-to-r from-orange-800 to-amber-500" img={contact}></Card>
            </div>

        </>
    );
};

export default Info;
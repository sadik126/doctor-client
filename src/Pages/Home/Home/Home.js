import React, { useEffect } from 'react';
import Appointment from '../Appointment/Appointment';
import Banner from '../Banner/Banner';
import Dentalcare from '../Dentalcare/Dentalcare';
import Info from '../Info/Info';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import './Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (
        <div className='mx-5 banner'>
            <Banner></Banner>
            <Info ></Info>
            <Services ></Services>
            <Dentalcare></Dentalcare>
            <Appointment></Appointment>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;
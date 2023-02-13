import React from 'react';
import Banner from '../Banner/Banner';
import Info from '../Info/Info';
import './Home.css';

const Home = () => {
    return (
        <div className='mx-5 banner'>
            <Banner></Banner>
            <Info></Info>
        </div>
    );
};

export default Home;
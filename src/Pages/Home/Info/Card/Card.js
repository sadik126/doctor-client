import React from 'react';

const Card = ({ bgcolour, img, cardtitle }) => {
    return (
        <div class={`card lg:card-side ${bgcolour} shadow-xl`}>
            <figure className='p-5'><img src={img} alt="Album" /></figure>
            <div className="card-body text-white">
                <h2 className="card-title">{cardtitle}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>

            </div>
        </div>
    );
};

export default Card;
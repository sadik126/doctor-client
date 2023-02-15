import React from 'react';
import './Appointment.css';

const Appointmentoptions = ({ appointmentoptions }) => {
    const { name, slots } = appointmentoptions
    return (
        <div>
            <div className="card  shadow-xl">
                <div className="card-body mt-10">
                    <h2 className="text-xl font-bold text-center text-orange-700">{name}</h2>
                    <p className='text-center'>{slots.length > 0 ? slots[0] : 'Try another day'}</p>
                    <p className='text-center'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Appointmentoptions;
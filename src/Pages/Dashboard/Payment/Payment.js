import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cardpayment from './Cardpayment';

const Payment = () => {
    const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_PK}`);
    console.log(stripePromise)
    const booking = useLoaderData();
    console.log(booking)
    return (
        <div>
            <h3 className="text-3xl">Payment for {booking.treatment}</h3>
            <p className="text-xl">Please pay <strong>${booking.price}</strong> for the appointment on {booking.appointmentDate}</p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <Cardpayment booking={booking}></Cardpayment>
                </Elements>

            </div>

        </div>
    );
};

export default Payment;
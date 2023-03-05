import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useNavigation } from 'react-day-picker';
import { useLoaderData } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import Cardpayment from './Cardpayment';

const Payment = () => {
    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

    const booking = useLoaderData();

    // const navigation = useNavigation();

    // if (navigation.state === "loading") {
    //     return <Loading></Loading>
    // }

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
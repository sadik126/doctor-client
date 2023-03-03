import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const Cardpayment = () => {
    const [cardError, setcardError] = useState('')
    const stripe = useStripe()
    const elements = useElements();
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setcardError(error.message)
        } else {
            setcardError('')
        }

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-success mt-10' type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
            <p className="text-red-600">{cardError}</p>

        </div>
    );
};

export default Cardpayment;
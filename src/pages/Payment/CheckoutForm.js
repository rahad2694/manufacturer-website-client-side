import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ orderDetails }) => {
    const { orderValue, name, email } = orderDetails;
    // console.log(orderValue)
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [paymentDone, setPaymentDone] = useState('');

    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ orderValue }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [orderValue]);

    const handleSubmit = async (e) => {
        e.preventDefault();


        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        // console.log('paisis')
        setCardError(error?.message || '');
        setSuccess('');
        //confirm card oayment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email,
                    },
                },
            },
        );
        if (intentError) {
            setSuccess('');
            setCardError(intentError.message);
        } else {
            setCardError('');
            setPaymentDone(paymentIntent);
            console.log(paymentIntent);
            setSuccess('Congrats! Payment Done');
        }

        if (!stripe || elements) {
            return;
        }
    }

    // console.log(clientSecret);
    return (
        <div>
            {!(paymentDone?.status==="succeeded")  && <form onSubmit={handleSubmit}>
            <h2 className="card-title my-3">Enter Card Details</h2>
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
                <button className='btn btn-success btn-sm mt-8 px-8 hover:text-white' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>}
            {cardError && <p className='text-xs text-red-500 mt-2'>{cardError}</p>}
            {success && <>
                <p className='text-xl text-green-500 mt-2'>{success}</p>
                <p className='text-xs text-green-500 mt-2'>Ref: {paymentDone.id}</p>
            </>}
        </div >
    );
};

export default CheckoutForm;
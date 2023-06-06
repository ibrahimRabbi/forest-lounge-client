import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useContext, useState } from 'react';
import { Context } from '../../context/AuthContext';







const CheckoutForm = ({ totalAmount }) => {

    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(Context)
    const [error, setError] = useState('')
    const [clientSecret, setClientSecret] = useState('')

     
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
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
            setError(error.message)
        } else {
            setError('')
            console.log('[PaymentMethod]', paymentMethod);
        }


        const { paymentIntent, error: cardError } = await stripe.confirmCardPayment(
              clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayname || 'unknown' ,
                       email: user?.email || 'anonymouse'
                },
            },
            },
        );
        if (cardError) {
          setError(cardError.message)
        } else {
            setError('')
            console.log('[paymentIntent]', paymentIntent);
        }
   
    };

useEffect(() => {
    fetch('http://localhost:5000/create-payment-intent', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ totalAmount })
    })
        .then(res => res.json())
        .then(res => {
            setClientSecret(res.clientSecret)
        })
}, [totalAmount])


return (
    <form className='w-full' onSubmit={handleSubmit}>
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
        <button className='btn' type="submit" disabled={!stripe || !clientSecret}>
            Pay
        </button>
        <p className='text-red-600'>{error}</p>
    </form>
);
};

export default CheckoutForm



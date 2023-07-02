import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
//import { useEffect, useState } from "react";
import "./common.css"

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    //const [clientSecret, setClientSecret] = useState('')
    //console.log(clientSecret)
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }


        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
        }
    };

    // useEffect(() => {
    //     if (price > 0) {
    //         fetch("https://forest-lounge-server.vercel.app/create-payment-intent", {
    //             method: "POST",
    //             headers: { "Content-Type": "application/json" },
    //             body: JSON.stringify({ price }),
    //         })
    //             .then((res) => res.json())
    //             .then((data) => {
    //                 console.log(data)
    //                 setClientSecret(data.clientSecret)
    //             });
    //     }
    // }, [price]);


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
            <button className='btn-sm btn bg-green-500' type="submit" disabled={!stripe}>
                Pay
            </button>
        </form>
    );
};

export default CheckoutForm
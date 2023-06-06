import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";
import CheckoutForm from "./CheckOut";
const stripePromise = loadStripe('import.meta.env.STRIPE_PUBLISH_KEY');
 


const Payment = () => {
    
    const location = useLocation()
  const price= location.state.total 
        return (
            <Elements stripe={stripePromise}>
                <CheckoutForm totalAmount={price} />
            </Elements>
        );
    };
 

export default Payment;
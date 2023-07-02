import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./PaymentForm";
import { useLocation } from "react-router-dom";



const stripePromise = loadStripe('pk_test_51NFaHHHYxG7WJPCTk0y79QmctbWnn8Q2zwqMbAsbPFLk8dCWhGi4I1K8009zXtNnfn9lFdcC9vzudTOvo1s7JV3W00xwgxC3Ju');
const Payment = () => {
    const location = useLocation()
   const amount= location.state?.total
    return (
        <div className="w-full">
            <Elements stripe={stripePromise}>
                <CheckoutForm price={amount} />
            </Elements>
        </div>
    );
};

export default Payment;




 
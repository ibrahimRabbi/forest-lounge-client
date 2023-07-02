import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Context } from "../context/AuthContext";
import { useToasts } from 'react-toast-notifications';
import useCoustom from "../utility/CoustomHook";



const OrderCard = ({ obj }) => {

    const { recipe, image, name, price, _id } = obj;
    const { user } = useContext(Context)
    const navigate = useNavigate()
    const location = useLocation()
    const { addToast } = useToasts()
    const { refetch } = useCoustom()




    const cartHandler = () => {
        if (user) {
            const data = { itemId: _id, email: user.email, price, name, image }
            fetch('https://forest-lounge-server.vercel.app/orderData', {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(res => {
                    refetch()
                    if (res.insertedId) {
                        addToast(`${name} added to cart`, { appearance: 'success', autoDismiss: true, });
                    }
                })
        } else {
            Swal.fire({
                title: 'you are not sign in',
                text: "Sign in first then you will add to cart",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sign In'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/signin', { state: { from: location } })
                }
            })
        }
    }
    return (
        <div className="card w-96 glass  ">
            <figure><img src={image} alt="car!" /></figure>
            <div className="text-slate-50 text-xl p-4 absolute top-5 right-5 badge badge-lg bg-red-700">${price}</div>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={cartHandler} className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default OrderCard;
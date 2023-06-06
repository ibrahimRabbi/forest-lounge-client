import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { PacmanLoader } from "react-spinners";
import { Context } from "../context/AuthContext";
 
const PrivertRoute = ({ children }) => {
    const { user, loading } = useContext(Context)
    const locationHistory = useLocation()
    
    if (loading) {
        return <div className="py-36 ">
            <PacmanLoader className="mx-auto" color="#047c0e" />
        </div>
    }
    if (user) {
       return children
    }
   

    return <Navigate to='/signin' state={{from :locationHistory}} replace/>
};

export default PrivertRoute;
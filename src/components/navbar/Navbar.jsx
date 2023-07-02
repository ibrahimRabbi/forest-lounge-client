import LazyLoad from "react-lazy-load";
import { HiShoppingCart } from "react-icons/hi2";
import { Link} from "react-router-dom";
import { useContext } from "react";
import { Context } from "../context/AuthContext";
import useCoustom from "../utility/CoustomHook";

 

const Navber = () => {

    const { user,logOut } = useContext(Context)
     const {orderData,users} = useCoustom()
    const finding = users.find(v => v?.email === user?.email)


    
    const signOutHandler = () => {
        logOut()
    }
    
    return (
        <section>
            <nav className="bg-green-800 bg-opacity-80 fixed z-10 w-full mx-auto">
                <div className="navbar w-[90%] mx-auto">

                    <div className="navbar-start ">

                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>

                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <Link to='/manu'><li>Our Manu</li></Link> 
                                <li>hello</li>
                                <li>hello</li>
                                <li>hello</li>
                            </ul>
                        </div>

                        <div className="flex items-center gap-2">
                            <LazyLoad>
                                <img width={70} src="../../../public/logo.png" alt="" />
                            </LazyLoad> 
                            <Link className="text-yellow-100 normal-case flex flex-col  text-start text-md mt-3">Forest <span className="relative -top-3 text-xl">Lounge</span></Link>
                        </div>

                    </div>




                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu gap-3 menu-horizontal text-slate-50 text-md font-semibold">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='manu'>Our Manu</Link></li>
                            <li><Link to='order'>Order</Link></li>
                            <div>
                                {
                                    (user && finding?.role) ? <>
                                        <li><Link to='/dashboard'>Dashboard</Link></li>
                                    </> : <>
                                            <li className="text-2xl">
                                                <Link to='/dashboard' className="indicator">
                                                    <span className="indicator-item badge badge-secondary">{orderData?.length || 0}</span>
                                                    <HiShoppingCart />
                                                </Link>
                                            </li>
                                    </>
                                }
                            </div>
                        </ul>
                    </div>



                    <div className="navbar-end">
                        {
                            user ? <div className="flex justify-center items-center gap-2"> 
                                <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
                                    <div className="avatar">
                                        <div className="w-14 rounded-full">
                                            <img className="rounded-full w-full" src={user.photoURL} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <button onClick={signOutHandler} className="btn bg-green-500 border-0">Sign Out</button>
                            </div>
                                : <Link to='/signin' className="btn bg-green-500 border-0">Sign In</Link>
                        }
                    </div>


                </div>
            </nav>
             
       </section>
    );
};

export default Navber;
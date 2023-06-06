import { GiShoppingCart } from 'react-icons/gi'
import { FcCalendar } from 'react-icons/fc'
import { IoHome } from 'react-icons/io5'
import { GoListUnordered, GoMail } from 'react-icons/go'
import { MdPayment } from 'react-icons/md'
import { VscPreview } from 'react-icons/vsc'
import { FaShoppingBag, FaUsers} from 'react-icons/fa'
import { ImSpoonKnife } from 'react-icons/im'
import { MdManageHistory } from 'react-icons/md'


import LazyLoad from 'react-lazy-load';
import { Link, Outlet } from 'react-router-dom';
import useCoustom from '../utility/CoustomHook';
import { useContext } from 'react'
import { Context } from '../context/AuthContext'
 




const DashBoardManu = () => {
    const { orderData, users} = useCoustom();
    const {user} = useContext(Context)
    const finding = users.find(v => v?.email === user?.email)
    


  
  

    return (
         <section className='w-[95%]'>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

                <div className="drawer-content flex flex-col items-center justify-center">                   
                     <Outlet/>
                </div>
                
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80  bg-green-700 text-slate-50 font-semibold">
                        <li>
                            <Link to='/' className="flex items-center gap-2">
                                <LazyLoad>
                                    <img width={70} src="../../../public/logo.png" alt="" />
                                </LazyLoad>
                                <h1 className="text-yellow-100 normal-case flex flex-col  text-start text-md mt-3">Forest <span className="relative -top-3 text-xl">Lounge</span></h1>
                            </Link>
                        </li>
                        { finding?.role ? <>
                            <li><Link to='adminHome'><IoHome className='text-2xl' />Admin home</Link></li>
                            <li><Link to='addItems'><ImSpoonKnife className='text-2xl' />Add Items</Link></li>
                            <li><Link to='manageItems'><GoListUnordered className='text-2xl' />Manage Items</Link></li>
                            <li><Link to='allUser'><FaUsers className='text-2xl' />All User</Link></li>
                            <li><Link to=''><MdManageHistory className='text-2xl' />Manage Bookings</Link></li>
                        </> : <>
                                <li><Link to=''><IoHome className='text-2xl' /> User home</Link></li>
                                <li><Link to='cart'><GiShoppingCart className='text-2xl' />Cart <div className="badge badge-secondary">{orderData.length}</div></Link></li>
                                <li><Link to='reservation'><FcCalendar className='text-2xl' />reservation</Link></li>
                                <li><Link to='paymentHistory'><MdPayment className='text-2xl' />Payment History</Link></li>
                                <li><Link to='review'><VscPreview className='text-2xl' />Add Review</Link></li>
                        </>}
                        
                        <div className='divider'></div>

                        <li><Link to='/'><IoHome className='text-2xl'/>home</Link></li>
                        <li><Link to='/manu'><GoListUnordered className='text-2xl'/>Manu</Link></li>
                        <li><Link to='/order'><FaShoppingBag className='text-2xl'/>Shop</Link></li>
                        <li><Link to='/order'><GoMail className='text-2xl'/>Contact Us</Link></li>
                                            

                    </ul>

                </div>
            </div>
         </section>
    );
};

export default DashBoardManu;
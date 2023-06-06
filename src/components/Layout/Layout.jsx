 import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';
import Navber from '../navbar/Navbar';

const Layout = () => {
    return (
        <div className='bg-slate-100'>
            <Navber />
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;
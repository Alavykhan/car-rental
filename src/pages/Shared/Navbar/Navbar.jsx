import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '/rentbd-nav.png'
import { RiArrowRightUpLine } from "react-icons/ri";
import { AuthContext } from '../../../providers/AuthProviders';
const Navbar = () => {
    const {user, logOut}=useContext(AuthContext);
    const handleLogout=()=>{
        logOut()
        .then(result=>console.log(result))
        .catch(error=>console.log(error))
    }
    return (
        <div>
            <div className="navbar bg-base-100 md:px-16 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                       <li><Link to='/'>Home</Link></li>     
                       <li><Link to='cars'>Cars</Link></li>
                       <li><Link to='mybookings'>Bookings</Link></li>
                    </ul>
                    </div>
                    <Link to='/'><img src={logo} alt="logo" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='cars'>Cars</Link></li>
                       <li><Link to='mybookings'>Bookings</Link></li>
                    </ul>
                </div>
                <div className="navbar-end ">
                    {
                        user?.email? <><p className='text-white pr-3'>{user?.displayName}</p> <img className='rounded-full w-12 mr-3' src={user?.photoURL} alt="" /> <button onClick={handleLogout} className="btn text-white">Logout <RiArrowRightUpLine /></button></> :
                        <Link to='login' className="btn text-white">Login <RiArrowRightUpLine /></Link>
        
                    }
                </div>
                </div>
        </div>
    );
};

export default Navbar;
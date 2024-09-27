import React from 'react';
import { Link } from 'react-router-dom';
import logo from '/rentbd-nav.png'
import { RiArrowRightUpLine } from "react-icons/ri";
const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 px-16">
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
                       <li><Link to=''>Cars</Link></li>
                       <li><Link to=''>Bookings</Link></li>
                       <li><Link to=''>Contacts</Link></li>
                    </ul>
                    </div>
                    <Link to='/'><img src={logo} alt="logo" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    <li><Link to=''>Cars</Link></li>
                       <li><Link to=''>Bookings</Link></li>
                       <li><Link to=''>Contacts</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Sign In <RiArrowRightUpLine /></a>
                </div>
                </div>
        </div>
    );
};

export default Navbar;
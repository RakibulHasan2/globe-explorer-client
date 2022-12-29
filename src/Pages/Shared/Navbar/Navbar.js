import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHiking,FaHome } from 'react-icons/fa';
import './Navbar.css'
const Navbar = () => {
    const [stateRouteName, setStateRouteName] = useState('home')
    const setRouteInSession = (route_name) => {
        setStateRouteName(route_name)
    }
    const menuItems = <React.Fragment>
        {/* <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/blog">Blog</Link></li> */}
    </React.Fragment>
    return (
        // <div className="navbar bg-base-100 flex justify-evenly">
        //     <div className="navbar-start">
        //         <div className="dropdown">
        //             <label tabIndex={0} className="btn btn-ghost lg:hidden">
        //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        //             </label>
        //             <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        //                 {menuItems}
        //             </ul>
        //         </div>
        //         <Link to="/" className="btn btn-ghost font-bold text-4xl text-green-900 normal-case">Globe Explorers <FaHiking></FaHiking></Link>
        //     </div>
        //     <div className="navbar-center hidden lg:flex">
        //         <ul className="menu menu-horizontal p-0">
        //             {menuItems}
        //         </ul>
        //     </div>
        //     <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
        //         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        //     </label>
        // </div>
        <div className={`${stateRouteName === 'home' ? 'header-custom-style-home' : 'header-custom-style'}`}>
            <h2 className='mt-3 font-bold flex text-4xl'> <FaHiking className='text-green-800 mr-4'></FaHiking> Globe Explorers</h2>
            <nav className='mt-6'>
                <Link to='/home' className='px-4' onClick={() => setRouteInSession('home')} >Home</Link>
                <Link to='/about'  className='px-4' onClick={() => setRouteInSession('about')}>About </Link>
                <Link to='/shop'  className='px-4' onClick={() => setRouteInSession('shop')}>Shop</Link>
                <Link to='/packages'  className='px-4' onClick={() => setRouteInSession()}>Packages</Link>
                <Link to='/login'  className='px-4' onClick={() => setRouteInSession()}>Login</Link>
                <Link to='/signup'  className='px-4' onClick={() => setRouteInSession()}>SignUp</Link>
            </nav>
        </div>
    );
};

export default Navbar;
import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider'
const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <div className="navbar bg-base-200">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a href='/'>Home</a></li>
                            <li><a href='/services'>Services</a></li>
                            <li><a href='/review'>Customer Reviews</a></li>
                            <li><a href='/blog'>Blog</a></li>
                        </ul>
                    </div>
                    <a href='/' className="btn btn-ghost normal-case text-xl">Home Cleaning Service</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><a href='/'>Home</a></li>
                        <li><a href='/services'>Services</a></li>
                        <li><a href='/review'>Customer Reviews</a></li>
                        <li><a href='/blog'>Blog</a></li>
                        <li><a href='/faq'>FAQ</a></li>
                    </ul>
                </div>
                <>
                    {
                        user?.email ?
                            <>
                                < div className="">
                                    <a href='/myreview' className="btn">My Reviews</a>
                                </div>
                                < div className=''>
                                    <a href='/addservice' className="btn">Add Service</a>
                                </div>
                                < div className="navbar-end">
                                    <button onClick={handleLogOut} className="btn btn-primary">Logout</button>
                                </div>
                            </>
                            :
                            < div className="navbar-end">
                                <a href='/login' className="btn btn-primary">Login</a>
                            </div>
                    }
                </>
            </div>
        </div >
    );
};

export default Header;
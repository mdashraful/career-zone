import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='flex flex-col md:flex-row items-center md:justify-between gap-2'>
            <div>
                <Link to='/'>
                    <h5 className='text-4xl font-extrabold'>CareerZone</h5>
                </Link>
            </div>
            <div className='text-xl text-center'>
                <NavLink to="/statistics" className={({ isActive }) =>
                    isActive ? "active px-5" : "px-5 hover:text-primary"
                }>Statistics</NavLink>
                <NavLink to="/applied-jobs" className={({ isActive }) =>
                    isActive ? "active px-5" : "px-5 hover:text-primary"
                }>Applied Jobs</NavLink>
                <NavLink to="/blog" className={({ isActive }) =>
                    isActive ? "active px-5" : "px-5 hover:text-primary"
                }>Blog</NavLink>
            </div>
            <div>
                <button className='btn-primary hover:bg-secondary'>Star Applying</button>
            </div>
        </div>
    );
};

export default Header;
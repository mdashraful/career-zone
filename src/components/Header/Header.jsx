import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex flex-col md:flex-row items-center md:justify-between gap-2'>
            <div>
                <Link to='/'>
                    <h5 className='text-4xl font-extrabold'>CareerZone</h5>
                </Link>
            </div>
            <div className='text-xl'>
                <NavLink to="/statistics" className='px-5'>Statistics</NavLink>
                <NavLink to="/applied-jobs" className='px-5'>Applied Jobs</NavLink>
                <NavLink to="/blog" className='px-5'>Blog</NavLink>
            </div>
            <div>
                <button className='btn-primary'>Star Applying</button>
            </div>
        </div>
    );
};

export default Header;
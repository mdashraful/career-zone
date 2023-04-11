import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className='flex flex-col md:flex-row items-center md:justify-between gap-2'>
            <div>
                <Link to='/'>
                    <h5 className='text-4xl font-extrabold'>CareerZone</h5>
                </Link>
            </div>
            <div className='text-xl'>
                <a href="/statistics" className='px-5'>Statistics</a>
                <a href="/applied-jobs" className='px-5'>Applied Jobs</a>
                <a href="/blog" className='px-5'>Blog</a>
            </div>
            <div>
                <button className='btn-primary'>Star Applying</button>
            </div>
        </div>
    );
};

export default Header;
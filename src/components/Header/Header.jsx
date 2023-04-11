import React from 'react';


const Header = () => {
    return (
        <div className='flex flex-col md:flex-row items-center md:justify-between gap-2'>
            <div>
                <h5 className='text-3xl font-extrabold'>CareerZone</h5>
            </div>
            <div className='text-xl'>
                <a href="/statistics" className='px-5'>Statistics</a>
                <a href="/statistics" className='px-5'>Applied Jobs</a>
                <a href="/blog" className='px-5'>Blog</a>
            </div>
            <div>
                <button className='px-7 py-5 bg-primary text-white rounded-lg'>Star Applying</button>
            </div>
        </div>
    );
};

export default Header;
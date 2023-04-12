import React from 'react';

const Banner = () => {
    return (
        <div className='pt-10 flex flex-col md:flex-row gap-12 items-center justify-between text-center md:text-start'>
            <div>
                <h1 className='text-7xl font-extrabold'>
                    One Step<br />Closer To Your<span className='block text-primary'>Dream Job</span>
                </h1>
                <p className='mt-6'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it.
                    <br />
                    Manage all your job application from start to finish.</p>
                <button className='btn-primary mt-8 hover:bg-secondary'>Get Started</button>
            </div>
            <div>
                <img className='h-full w-full' src="/hardy.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;
import React from 'react';

const SinglePageBanner = ({ children }) => {
    return (
        <div className='h-56 flex items-center justify-center'>
            <h1 className='text-3xl font-bold'>{children}</h1>
        </div>
    );
};

export default SinglePageBanner;
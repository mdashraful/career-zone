import React from 'react';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='container md:px-24 px-5 m-auto py-12'>
            <Header />
            <Outlet />
        </div>
    );
};

export default Root;
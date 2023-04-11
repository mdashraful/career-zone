import React from 'react';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';
import Banner from './components/Banner/Banner';
import toast, { Toaster } from "react-hot-toast";

const Root = () => {
    return (
        <div className=''>
            <div className='bg-gray-50 md:px-24 px-5 m-auto pt-12'>
                <Header />
                <Banner />
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
            </div>
            <Outlet />
        </div>
    );
};

export default Root;
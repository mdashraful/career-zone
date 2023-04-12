import React from 'react';
import Header from './components/Header/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
import Banner from './components/Banner/Banner';
import toast, { Toaster } from "react-hot-toast";
import { JobsContext } from './components/Home/Home';
import Footer from './components/Footer/Footer';

const Root = () => {
    const jobs = useLoaderData();
    // console.log(jobs);
    return (
        <JobsContext.Provider value={jobs}>
            <div className=''>
                <div className='bg-indigo-50 md:px-24 px-5 m-auto pt-12'>
                    <Header />

                    <Toaster
                        position="top-center"
                        reverseOrder={false}
                    />
                </div>
                <Outlet />
                <Footer />
            </div>
        </JobsContext.Provider>

    );
};

export default Root;
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div className='md:px-24 px-5 m-auto py-28'>
            <div className='text-center mb-7'>
                <h2 className='text-5xl font-bold mb-3'>Job Category List</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='columns-1 md:columns-2 lg:columns-4 gap-4'>
                <div className='bg-gray-50 p-8 rounded-md'>
                    <div className='mb-5 '>
                        <img className='bg-gray-100 p-2 rounded' src="/public/Icons/accounts-1.png" alt="" />
                    </div>
                    <div>
                        <h6 className='font-bold text-xl mb-1'>300 Jobs Available</h6>
                        <p>300 Jobs Available</p>
                    </div>
                </div>

                <div className='bg-gray-50 p-8 rounded-md'>
                    <div className='mb-5'>
                        <img className='bg-gray-100 p-2 rounded' src="/public/Icons/business-1.png" alt="" />
                    </div>
                    <div>
                        <h6 className='font-bold text-xl mb-1'>Creative Design</h6>
                        <p>100+ Jobs Available</p>
                    </div>
                </div>

                <div className='bg-gray-50 p-8 rounded-md'>
                    <div className='mb-5'>
                        <img className='bg-gray-100 p-2 rounded' src="/public/Icons/chip-1.png" alt="" />
                    </div>
                    <div>
                        <h6 className='font-bold text-xl mb-1'>Marketing & Sales</h6>
                        <p>150 Jobs Available</p>
                    </div>
                </div>

                <div className='bg-gray-50 p-8 rounded-md'>
                    <div className='mb-5'>
                        <img className='bg-gray-100 p-2 rounded' src="/public/Icons/social-media-1.png" alt="" />
                    </div>
                    <div>
                        <h6 className='font-bold text-xl mb-1'>Engineering Job</h6>
                        <p>224 Jobs Available</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
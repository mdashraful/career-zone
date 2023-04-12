import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";


const AppliedJob = ({ appliedJob }) => {
    const { id, logo, jobTitle, companyName, jobType, location, salary, duration, description, responsibility, education, experiences, contact } = appliedJob;
    return (
        <div>
            <div className='border rounded-md p-4 md:flex items-center justify-between gap-5 mb-5'>
                <div className='flex items-center gap-5'>
                    <div className='h-48 rounded-md w-48 flex items-center justify-center bg-gray-50'>
                        <img src={logo} alt="" />
                    </div>
                    <div>
                        <h5 className='text-2xl font-bold'>{jobTitle}</h5>
                        <p>{companyName}</p>
                        <div className='my-4 flex gap-3'>
                            <span className='text-primary rounded border py-2 px-3 border-primary'>{jobType}</span>
                            <span className='text-primary rounded border py-2 px-3 border-primary'>{duration}</span>
                        </div>
                        <div className='my-2 flex gap-3'>
                            <div className='md:flex items-center justify-center'>
                                <MapPinIcon className="h-6 w-6 me-1 text-gray-500" />{location}
                            </div>
                            <div className='md:flex items-center justify-center'>
                                <CurrencyDollarIcon className="h-6 w-6 me-1 text-gray-500" />{salary}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-center'>
                    <button className='btn-primary me-5'>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default AppliedJob;
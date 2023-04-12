import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { Link } from 'react-router-dom';


const AppliedJob = ({ appliedJob }) => {
    const { id, logo, jobTitle, companyName, jobType, location, salary, duration, description, responsibility, education, experiences, contact } = appliedJob;
    return (
        <div>
            <div className='border rounded-md p-4 flex md:flex-row flex-col items-center justify-between gap-5 mb-5'>
                <div className='flex flex-col md:flex-row items-center justify-center gap-5'>
                    <div className='h-48 rounded-md w-48 flex items-center justify-center bg-gray-50'>
                        <img className='p-3' src={logo} alt="" />
                    </div>
                    <div className='text-center md:text-start'>
                        <h5 className='text-2xl font-bold'>{jobTitle}</h5>
                        <p>{companyName}</p>
                        <div className='my-4 flex justify-center md:justify-start gap-3'>
                            <span className='text-primary rounded border py-2 px-3 border-primary'>{jobType}</span>
                            <span className='text-primary rounded border py-2 px-3 border-primary'>{duration}</span>
                        </div>
                        <div className='my-2 md:flex gap-3'>
                            <div className='flex items-center justify-center mb-3 md:mb-0'>
                                <MapPinIcon className="h-6 w-6 me-1 text-gray-500" />{location}
                            </div>
                            <div className='flex items-center justify-center'>
                                <CurrencyDollarIcon className="h-6 w-6 me-1 text-gray-500" />{salary}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-center mb-4'>
                    <Link to={`/job-details/${id}`} className='btn-primary me-5' >View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default AppliedJob;
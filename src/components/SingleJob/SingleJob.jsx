import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { Link } from 'react-router-dom';

const SingleJob = ({ job }) => {

    return (
        <div>
            <div className='border-2 rounded-md p-5'>
                <div className='w-72 h-24'>
                    <img src={job.logo} className='w-full h-full' alt="" />
                </div>
                <div className='mt-8'>
                    <h5 className='mb-2 text-2xl font-bold'>{job.jobTitle}</h5>
                    <p>{job.companyName}</p>
                </div>
                <div className='my-4 md:flex gap-3'>
                    <span className='text-primary rounded border py-2 px-3 border-primary'>{job.jobType}</span>
                    <span className='text-primary rounded border py-2 px-3 border-primary'>{job.duration}</span>
                </div>
                <div className='my-2 flex gap-3'>
                    <div className='flex items-center justify-center'>
                        <MapPinIcon className="h-6 w-6 me-1 text-gray-500" />{job.location}
                    </div>
                    <div className='flex items-center justify-center'>
                        <CurrencyDollarIcon className="h-6 w-6 me-1 text-gray-500" />{job.salary}
                    </div>
                </div>

                <Link to={`/job-details/${job.id}`}><button className='btn-primary hover:bg-secondary mt-2'>View Details</button></Link>
            </div>
        </div>
    );
};

export default SingleJob;
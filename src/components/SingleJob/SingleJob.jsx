import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
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
                <div className='my-2 flex'>
                    <div>
                        <FontAwesomeIcon icon={faCoffee} />{job.location}
                    </div>
                    <div>
                        {job.salary}
                    </div>
                </div>

                <Link to={`/job-details/${job.id}`}><button className='btn-primary mt-2'>View Details</button></Link>
            </div>
        </div>
    );
};

export default SingleJob;
import React, { useContext } from 'react';
import { JobsContext } from '../Home/Home';
import SingleJob from '../SingleJob/SingleJob';

const FeaturedJobs = () => {
    const allJobs = useContext(JobsContext);

    return (
        <div className='md:px-24 px-5 m-auto pb-28'>
            <div className='text-center mb-7'>
                <h2 className='text-5xl font-bold mb-3'>Featured Jobs</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                {
                    allJobs.map((job) => <SingleJob key={job.id} job={job}></SingleJob>)
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;
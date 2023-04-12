import React, { useContext, useEffect, useState } from 'react';
import SinglePageBanner from '../SinglePageBanner/SinglePageBanner';
import { getAppliedJobs } from '../../utilities/fakedb';
import AppliedJob from '../AppliedJob/AppliedJob';
import { JobsContext } from '../Home/Home';

const AppliedJobs = () => {
    const [appliedAllJobs, setAppliedAllJob] = useState([]);
    const allJobs = useContext(JobsContext);
    const appliedJobs = getAppliedJobs();

    let allAppliedJobs = [];
    if (appliedJobs.length) {
        for (const id of appliedJobs) {
            const allApplied = allJobs.find((jobs) => jobs.id === id);
            allAppliedJobs.push(allApplied);
        }
        setAppliedAllJob(allAppliedJobs);
    }


    const handleFilter = (type) => {
        const filterApplied = [];
        if (type === 'remote') {

        } else if (type === 'onsite') {

        }

        console.log(filterApplied);
    }

    return (
        <div>
            <div className='bg-gray-50 md:px-24 px-5 m-auto'>
                <SinglePageBanner>Applied Jobs</SinglePageBanner>
            </div>
            <div className='md:px-24 px-5 m-auto py-28 '>
                <div className='text-right mb-3'>
                    <select className='border rounded p-3' onChange={(event) => handleFilter(event.target.value)}>
                        <option className='hidden'>Filter By </option>
                        <option value="remote">Remote</option>
                        <option value="onsite">Onside</option>
                    </select>
                </div>
                {
                    appliedAllJobs.length && appliedAllJobs.map((appliedJob, index) => <AppliedJob key={index} appliedJob={appliedJob}></AppliedJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;
import React, { useContext, useEffect, useState } from 'react';
import SinglePageBanner from '../SinglePageBanner/SinglePageBanner';
import { getAppliedJobs } from '../../utilities/fakedb';
import AppliedJob from '../AppliedJob/AppliedJob';
import { JobsContext } from '../Home/Home';
import toast, { Toaster } from "react-hot-toast";

const AppliedJobs = () => {
    const allJobs = useContext(JobsContext);
    const [appliedAllJobs, setAppliedAllJobs] = useState([]);
    const [appliedJobsArray, setAppliedJobsArray] = useState([]);
    const appliedJobs = getAppliedJobs();

    let matchData = [];
    useEffect(() => {
        if (appliedJobs.length > 0) {
            for (const id of appliedJobs) {
                const allApplied = allJobs.find((jobs) => jobs.id === id);
                matchData.push(allApplied);
            }
            setAppliedAllJobs(matchData);
            setAppliedJobsArray(matchData);
        } else {
            toast.error('You are not applied yet!')
        }
        // console.log(matchData);
    }, []);

    const handleFilter = (type) => {

        let filterApplied = [];
        if (type === 'Remote') {
            console.log(type);
            filterApplied = appliedJobsArray.filter((jobs) => jobs.jobType === 'Remote')
            setAppliedAllJobs(filterApplied);
        } else if (type === 'Onsite') {
            console.log(type);
            filterApplied = appliedJobsArray.filter((jobs) => jobs.jobType === 'Onsite')
            setAppliedAllJobs(filterApplied);
        }
        console.log(filterApplied);
    }

    return (
        <div>
            <div className='bg-indigo-50 md:px-24 px-5 m-auto'>
                <SinglePageBanner>Applied Jobs</SinglePageBanner>
            </div>
            <div className='md:px-24 px-5 m-auto py-28 '>
                <div className='text-right mb-3'>
                    <select className='border rounded p-3' onChange={(event) => handleFilter(event.target.value)}>
                        <option className='hidden'>Filter By </option>
                        <option value="Remote">Remote</option>
                        <option value="Onsite">Onside</option>
                    </select>
                </div>
                {
                    appliedAllJobs.length > 0 && appliedAllJobs.map((appliedJob, index) => <AppliedJob key={index} appliedJob={appliedJob}></AppliedJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;
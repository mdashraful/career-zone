import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

import { CurrencyDollarIcon, EnvelopeIcon, CalendarDaysIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";

import { handleToApply } from '../../utilities/utilities';
import SinglePageBanner from '../SinglePageBanner/SinglePageBanner';

const JobDetails = () => {
    const data = useLoaderData();
    // console.log(data);
    const { id, logo, jobTitle, companyName, jobType, location, salary, duration, description, responsibility, education, experiences, contact } = data;
    return (
        <div>
            <div className='bg-indigo-50 md:px-24 px-5 m-auto'>
                <SinglePageBanner>Job Details</SinglePageBanner>
            </div>
            <div className='md:px-24 px-5 m-auto py-28'>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
                    <div className="col-span-2">
                        <p className="text-gray-700 mb-5">
                            <span className="font-bold text-black">Job Description: </span>
                            {description}
                        </p>
                        <p className="text-gray-700 mb-5">
                            <span className="font-bold text-black">Job Responsibility: </span>{responsibility}
                        </p>
                        <div className="text-gray-700">
                            <p className="font-bold text-black mb-3">Educational Requirment: </p>
                            {education}
                        </div>
                        <div className="text-gray-700 mb-5">
                            <p className="font-bold text-black my-3">Experiences: </p>
                            {experiences}
                        </div>
                    </div>
                    <div className=''>
                        <div className="bg-sky-50 md:p-5 bg-indigo-50 rounded-md">
                            <h5 className="font-bold text-lg">Job Details</h5>
                            <hr className="my-5 border" />
                            <p className="flex gap-2 text-gray-600 mb-3"> <CurrencyDollarIcon className="h-6 w-6 text-primary" /> <span className="font-bold">Salary:</span>{salary} (Per Month)
                            </p>
                            <p className="flex gap-2 text-gray-600"><CalendarDaysIcon className="h-6 w-6 text-primary" /> <span className="font-bold">Job Title:</span>{jobTitle}</p>
                            <h5 className="font-bold text-lg mt-7">Contact Information</h5>
                            <hr className="my-5 border" />
                            <p className="flex gap-2 text-gray-600 mb-3"><PhoneIcon className="h-6 w-6 text-primary" /> <span className="font-bold">Phone: </span>{contact[0].phone}</p>
                            <p className="flex gap-2 text-gray-600 mb-3"><EnvelopeIcon className="h-6 w-6 text-primary" /> <span className="font-bold">Email: </span>{contact[1].email}</p>
                            <p className="flex gap-2 text-gray-600 "><MapPinIcon className="h-6 w-6 text-primary" /> <span className="font-bold">Address:</span>{location}</p>
                        </div>
                        <button onClick={() => handleToApply(id)} to='' className="btn-primary hover:bg-secondary w-full mt-3">Apply Now</button>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default JobDetails;
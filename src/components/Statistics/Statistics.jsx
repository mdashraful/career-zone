import React from 'react';
import { Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import SinglePageBanner from '../SinglePageBanner/SinglePageBanner';

const Statistics = () => {
    const data = [
        { name: 'Assignment 1', value: 60 },
        { name: 'Assignment 2', value: 60 },
        { name: 'Assignment 3', value: 58 },
        { name: 'Assignment 4', value: 60 },
        { name: 'Assignment 5', value: 60 },
        { name: 'Assignment 6', value: 60 },
        { name: 'Assignment 7', value: 60 },
    ];
    return (
        <div>
            <div className='bg-indigo-50 md:px-24 px-5 m-auto'>
                <SinglePageBanner>Job Details</SinglePageBanner>
            </div>
            <div className='md:px-24 px-5 m-auto py-28'>
                <div className='border' style={{ width: '100%', height: 300 }}>
                    <ResponsiveContainer>
                        <PieChart className='mx-auto'>
                            <Pie
                                dataKey="value"
                                startAngle={180}
                                endAngle={0}
                                data={data}
                                cx="50%"
                                cy="50%"
                                outerRadius={80}
                                fill="#8884d8"
                                label
                            />
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                    <p className='text-center mt-2'>Assignment Marks</p>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
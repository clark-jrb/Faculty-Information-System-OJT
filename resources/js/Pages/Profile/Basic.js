import React, { useState } from 'react';
import Profile from '../Profile';
import { usePage } from '@inertiajs/inertia-react';

export default function Basic(){
    const { 
        faculty_data
    } = usePage().props;
    
    return (
        <Profile>
            <div className="p-3 px-4 basic-content">
                <div className="title-info-content pb-2">
                    <p className="m-0">Basic Information</p>
                    
                </div>

                <div className='d-flex py-3'>
                    <div className="flex-fill w-25">
                        <p className="m-0 data-label">First Name:</p>
                        <p className="m-0 mt-1" style={{ fontSize: 'large' }}>{faculty_data.fname}</p>
                    </div>
                    <div className="flex-fill w-25">
                        <p className="m-0 data-label">Last Name:</p>
                        <p className="m-0 mt-1" style={{ fontSize: 'large' }}>{faculty_data.lname}</p>
                    </div>
                    <div className="flex-fill w-25">
                        <p className="m-0 data-label">Gender:</p>
                        <p className="m-0 mt-1" style={{ fontSize: 'large' }}>{faculty_data.gender}</p>
                    </div>
                    <div className="flex-fill w-25">
                        <p className="m-0 data-label">Age:</p>
                        <p className="m-0 mt-1" style={{ fontSize: 'large' }}>{faculty_data.age}</p>
                    </div>
                </div>

                <div className='d-flex py-3'>
                    <div className="flex-fill w-25">
                        <p className="m-0 data-label">Date of Birth:</p>
                        <p className="m-0 mt-1" style={{ fontSize: 'large' }}>{faculty_data.birth_date}</p>
                    </div>
                    <div className="flex-fill w-25">
                        <p className="m-0 data-label">Rank:</p>
                        <p className="m-0 mt-1" style={{ fontSize: 'large' }}>{faculty_data.position}</p>
                    </div>
                    <div className="flex-fill w-25">
                        <p className="m-0 data-label">Department:</p>
                        <p className="m-0 mt-1" style={{ fontSize: 'large' }}>{faculty_data.department}</p>
                    </div>
                    <div className="flex-fill w-25">
                        <p className="m-0 data-label">Specialization:</p>
                        <p className="m-0 mt-1" style={{ fontSize: 'large' }}>{faculty_data.specialization}</p>
                    </div>
                </div>
                
                
            </div>
        </Profile>
    )
}
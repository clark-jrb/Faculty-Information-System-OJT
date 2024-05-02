import React, { useState } from 'react';
import Profile from '../Profile';
import { usePage } from '@inertiajs/inertia-react';

export default function Basic(){
    const { 
        faculty_data
    } = usePage().props;
    
    return (
        <Profile>
            <div className="p-3 basic-content">
                <div className="title-info-content pb-2">
                    <p className="m-0">Basic Information</p>
                    
                </div>
                <p className="m-0">{faculty_data.fname}</p>
                <p className="m-0">{faculty_data.department}</p>
            </div>
        </Profile>
    )
}
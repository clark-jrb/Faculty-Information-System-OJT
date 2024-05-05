import React, { useEffect } from 'react';
import Profile from '../Profile';
import { usePage } from '@inertiajs/inertia-react';

export default function Extensions(){
    const {
        extension_data
    } = usePage().props;

    // useEffect(() => {
    //     console.log('extensions: ' + extension_data);
    // }, [extension_data]);

    return (
        <Profile>
            <div className="p-3 px-4 extensions-content">
                <div className="title-info-content pb-2">
                    <p className="m-0">Extensions</p>
                </div>
                {extension_data.map((ext, index) => (
                    <div className="p-3 d-flex" key={index} style={{ borderBottom: '#ccc 1px solid', position: 'relative' }}>
                        <div className="bg-data"></div>
                        <div className='w-50'>
                            <p className="m-0 py-1 ext-title">
                                <p className='m-0 data-label'>Extension Project Title:</p>
                                <span style={{ fontSize: 'large' }}>
                                    {ext.ext_title}
                                </span>
                            </p>
                            <p className="m-0 py-1">
                                <p className='m-0 data-label'>Duration: </p>
                                <span style={{ fontSize: 'large' }}>
                                    {ext.duration}
                                </span>
                            </p>
                        </div>
                        <div className='w-25'>
                            <p className="m-0 py-1" style={{ fontSize: 'large' }}>
                                <span style={{ fontSize: 'medium'}} className='data-label'>Team Lead:</span> 
                                <br />
                                {ext.lead}
                            </p>
                            <p className="m-0 py-1" style={{ fontSize: 'large' }}>
                                <span style={{ fontSize: 'medium'}} className='data-label'>Member(s):</span> 
                                <br />
                                {ext.member}
                            </p>
                        </div>
                        <div className='w-25'>
                            <p className="m-0 py-1">
                                <p className='m-0 data-label'>Sponsoring Dept: </p>
                                <span style={{ fontSize: 'large' }}>
                                    {ext.sponsor}
                                </span>
                            </p>
                            <p className="m-0 py-1">
                                <p className='m-0 data-label'>Beneficiaries: </p>
                                <span style={{ fontSize: 'large' }}>
                                    {ext.beneficiaries}
                                </span>
                            </p>
                        </div>
                        
                        
                    </div>
                ))}
            </div>
        </Profile>
    )
}
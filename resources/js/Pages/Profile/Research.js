import React, { useEffect } from 'react';
import Profile from '../Profile';
import { usePage } from '@inertiajs/inertia-react';

export default function Research(){
    const {
        research_data
    } = usePage().props;

    useEffect(() => {
        console.log('research' + research_data);
    }, [research_data]);

    return (
        <Profile>
            <div className="p-3 px-4 research-content">
                <div className="title-info-content-res pb-2">
                    <p className="m-0">Research Activities</p>
                </div>
                {research_data.map((res, index) => (
                    <div className="p-3" key={index} style={{ borderBottom: '#ccc 1px solid', position: 'relative' }}>
                        <div className="bg-data"></div>
                        <p className="m-0 py-1 res-title">{res.res_title}</p>
                        <p className="m-0 py-1">
                            <i className="fa-regular fa-calendar-check"></i> {res.duration}
                        </p>
                        <p className="m-0 py-1" style={{ fontSize: 'large' }}>
                            <span style={{ color: 'var(--grey)', fontSize: 'medium'}}>Researcher(s):</span> 
                            &nbsp;
                            {res.researcher}
                        </p>
                        <p className="m-0 py-1" style={{ fontSize: 'large' }}>{res.status}</p>
                    </div>
                ))}
            </div>
        </Profile>
    )
}
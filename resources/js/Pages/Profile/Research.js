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
            <div className="p-3 research-content">
                <div className="title-info-content pb-2">
                    <p className="m-0">Research</p>
                </div>
                {research_data.map((res, index) => (
                    <div key={index}>
                        <p className="m-0">{res.res_title}</p>
                        <p className="m-0">{res.status}</p>
                    </div>
                ))}
            </div>
        </Profile>
    )
}
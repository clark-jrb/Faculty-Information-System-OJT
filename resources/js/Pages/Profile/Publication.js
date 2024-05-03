import React, { useEffect } from 'react';
import Profile from '../Profile';
import { usePage } from '@inertiajs/inertia-react';

export default function Publications(){
    const {
        publication_data
    } = usePage().props;

    useEffect(() => {
        console.log('publications: ' + publication_data);
    }, [publication_data]);

    return (
        <Profile>
            <div className="p-3 px-4 publications-content">
                <div className="title-info-content pb-2">
                    <p className="m-0">Publications</p>
                </div>
                {publication_data.map((pub, index) => (
                    <div className="p-3" key={index} style={{ borderBottom: '#ccc 1px solid' }}>
                        <p className="m-0 py-1 res-title">{pub.proj_title}</p>
                        <p className="m-0 py-1" style={{ fontSize: 'large' }}>
                            <span style={{ color: 'var(--grey)', fontSize: 'medium'}}>Author(s):</span> 
                            &nbsp;
                            {pub.authors}
                        </p>
                        <p className="m-0 py-1">
                            <i className="fa-regular fa-calendar-check"></i> {pub.date}
                        </p>
                        <p className="m-0 py-1">
                            <i className="fa-solid fa-up-right-from-square"></i> {pub.doi}
                        </p>
                    </div>
                ))}
            </div>
        </Profile>
    )
}
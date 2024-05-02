import React, { useEffect } from 'react';
import Profile from '../Profile';
import { usePage } from '@inertiajs/inertia-react';

export default function Academic(){
    const {
        acadEduc_data,
        acadWork_data
    } = usePage().props;

    useEffect(() => {
        console.log('acad educ: ' + acadEduc_data);
    }, [acadEduc_data]);

    useEffect(() => {
        console.log('acad work: ' + acadWork_data);
    }, [acadWork_data]);

    return (
        <Profile>
            <div className="p-3 academic-content">
                <div className="title-info-content pb-2">
                    <p className="m-0">Academic</p>
                </div>
            </div>
        </Profile>
    )
}
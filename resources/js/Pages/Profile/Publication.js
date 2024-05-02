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
            <div className="p-3 publications-content">
                <div className="title-info-content pb-2">
                    <p className="m-0">Publications</p>
                </div>
            </div>
        </Profile>
    )
}
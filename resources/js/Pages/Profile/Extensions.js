import React, { useEffect } from 'react';
import Profile from '../Profile';
import { usePage } from '@inertiajs/inertia-react';

export default function Extensions(){
    const {
        extension_data
    } = usePage().props;

    useEffect(() => {
        console.log('extensions: ' + extension_data);
    }, [extension_data]);

    return (
        <Profile>
            <div className="p-3 extensions-content">
                <div className="title-info-content pb-2">
                    <p className="m-0">Extensions</p>
                </div>
            </div>
        </Profile>
    )
}
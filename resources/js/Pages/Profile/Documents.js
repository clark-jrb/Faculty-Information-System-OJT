import React, { useEffect } from 'react';
import Profile from '../Profile';
import { usePage } from '@inertiajs/inertia-react';

export default function Documents(props){
    const {
        document_data
    } = usePage().props;

    // useEffect(() => {
    //     console.log('document: ' + document_data);
    // }, [document_data]);

    return (
        <Profile auth={props.auth}>
            <div className="p-3 documents-content">
                <div className="title-info-content pb-2">
                    <p className="m-0">Documents</p>
                </div>
            </div>
        </Profile>
    )
}
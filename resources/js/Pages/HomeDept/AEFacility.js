import React from 'react';
import Authenticated from '@/Layouts/Authenticated';

export default function AEFacility(props) {
    return (
        <Authenticated auth={props.auth} errors={props.errors}>
            <div>
                <h1>Agricultural Extension</h1>
                <p>Welcome to the Agricultural Extension Department!</p>
            </div>
        </Authenticated>
    );
}
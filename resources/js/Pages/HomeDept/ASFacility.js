import React from 'react';
import Authenticated from '@/Layouts/Authenticated';

export default function ASFacility(props) {
    return (
        <Authenticated auth={props.auth} errors={props.errors}>
            <div>
                <h1>Animal Science</h1>
                <p>Welcome to the Animal Science Department!</p>
            </div>
        </Authenticated>
    );
}
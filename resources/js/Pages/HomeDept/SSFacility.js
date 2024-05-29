import React from 'react';
import Authenticated from '@/Layouts/Authenticated';

export default function SSFacility(props) {
    return (
        <Authenticated auth={props.auth} errors={props.errors}>
            <div>
                <h1>Soil Science</h1>
                <p>Welcome to the Soil Science Department!</p>
            </div>
        </Authenticated>
    );
}
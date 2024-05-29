import React from 'react';
import Authenticated from '@/Layouts/Authenticated';

export default function CSFacility(props) {
    return (
        <Authenticated auth={props.auth} errors={props.errors}>
            <div>
                <h1>Crop Science</h1>
                <p>Welcome to the Crop Science Department!</p>
            </div>
        </Authenticated>
    );
}
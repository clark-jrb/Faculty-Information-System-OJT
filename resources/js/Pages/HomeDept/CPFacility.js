import React from 'react';
import Authenticated from '@/Layouts/Authenticated';

export default function CPFacility(props) {
    return (
        <Authenticated auth={props.auth} errors={props.errors}>
            <div>
                <h1>Crop Protection</h1>
                <p>Welcome to the Crop Protection Department!</p>
            </div>
        </Authenticated>
    );
}
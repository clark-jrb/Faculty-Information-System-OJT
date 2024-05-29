import React from 'react';
import Authenticated from '@/Layouts/Authenticated';

export default function AMFacility(props) {
    return (
        <Authenticated auth={props.auth} errors={props.errors}>
            <div>
                <h1>Agri-Management</h1>
                <p>Welcome to the Agri-Management Department!</p>
            </div>
        </Authenticated>
    );
}
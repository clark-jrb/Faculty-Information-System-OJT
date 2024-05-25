import React from 'react';
import Profile from '../Profile';

export default function Trainings(props){
    return (
        <Profile auth={props.auth}>
            <div className="p-3 px-4 profile-info-content-child">
                <div className="title-info-content pb-2">
                    <p className="m-0">Trainings</p>
                </div>
            </div>
        </Profile>
    )
}
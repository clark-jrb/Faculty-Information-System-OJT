import React from 'react';

export default function Trainings(props){
    return (
        <Profile auth={props.auth}>
            <div className="p-3 trainings-content">
                <div className="title-info-content pb-2">
                    <p className="m-0">Trainings</p>
                </div>
            </div>
        </Profile>
    )
}
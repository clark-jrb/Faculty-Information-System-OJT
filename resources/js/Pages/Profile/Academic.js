import React, { useEffect } from 'react';
import Profile from '../Profile';
import { usePage } from '@inertiajs/inertia-react';

export default function Academic(){
    const {
        acadEduc_data,
        acadWork_data
    } = usePage().props;

    // useEffect(() => {
    //     console.log('acad educ: ' + acadEduc_data);
    // }, [acadEduc_data]);

    // useEffect(() => {
    //     console.log('acad work: ' + acadWork_data);
    // }, [acadWork_data]);

    return (
        <Profile>
            <div className="p-3 px-4 academic-content d-flex gap-5">
                <div className="acad-educ-content flex-fill w-50">
                    <div className="title-info-content-acad pb-2">
                        <p className="m-0">Education</p>
                    </div>
                    {acadEduc_data.map((educ, index) => (
                        <div className="p-3" key={index} style={{ borderBottom: '#ccc 1px solid', position: 'relative' }}>
                            <div className="bg-data"></div>
                            <div className="acad-row1">
                                <i className="fa-solid fa-graduation-cap" style={{ color: 'var(--light-green)' }}></i>
                                &nbsp;
                                <p className="m-0">{educ.degree}</p>
                            </div>
                            <div className="acad-row2">
                                <p className="m-0">{educ.institution}</p>
                            </div>
                            <div className="d-flex gap-3">
                                <div>
                                    <i className="fa-regular fa-calendar-check"></i>
                                    &nbsp;
                                    {educ.date}
                                </div>
                                <div>
                                    <i className="fa-solid fa-location-dot"></i>
                                    &nbsp;
                                    {educ.location}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="acad-work-content flex-fill w-50">
                    <div className="title-info-content-acad pb-2">
                        <p className="m-0">Work Experience</p>
                    </div>
                    {acadWork_data.map((work, index) => (
                        <div className="p-3" key={index} style={{ borderBottom: '#ccc 1px solid', position: 'relative' }}>
                            <div className="bg-data"></div>
                            <div className="acad-row1">
                                <p className="m-0">{work.position}</p>
                            </div>
                            <div className="acad-row2">
                                <p className="m-0">{work.location}</p>
                            </div>
                            <div className="d-flex gap-3">
                                <div>
                                    <i className="fa-regular fa-calendar-check"></i>
                                    &nbsp;
                                    {work.date}
                                </div>
                                <div>
                                    <i className="fa-solid fa-location-dot"></i>
                                    &nbsp;
                                    {work.work_loc}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Profile>
    )
}
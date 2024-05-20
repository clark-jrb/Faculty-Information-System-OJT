import React from 'react';

export default function Work ({ data, acadWork_data, setData, post }) {

    return (
        <div className="acad-work-content flex-fill w-50">
            <div className="title-info-content-acad pb-2">
                <p className="m-0">Work Experience</p>
                <div className='edit-profile-container ms-auto'>
                    <div className='d-flex gap-2 align-items-center'>
                        <button className='edit-profile p-1 px-2'>
                            <i className="fa-regular fa-plus"></i> Add
                        </button>
                    </div>
                </div>
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
    )
}
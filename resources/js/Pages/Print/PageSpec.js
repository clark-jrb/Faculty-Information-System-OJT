import React from 'react';
import '../../../../public/css/print.css'
import moment from 'moment';

const PageSpec = React.forwardRef(({ data, specify, basic }, ref) => (
    
    <div className='print-page-paper p-4' ref={ref}>
        {/* HEADER  */}
        <div className='print-header mb-3'>
            {specify === 'education' && (
                <h1>Background Education</h1>
            )}
            {specify === 'work' && (
                <h1>Work Experience</h1>
            )}
            {specify === 'research' && (
                <h1>Research Activities</h1>
            )}
            {specify === 'extensions' && (
                <h1>Extension Activities</h1>
            )}
            {specify === 'publications' && (
                <h1>Publications</h1>
            )}
            {specify === 'trainings' && (
                <h1>Relevant Training, Symposia, Seminar Attended/ Completed</h1>
            )}
        </div>

        {/* CONTENT  */}
        <div>
            {/* Background Education  */}
            {specify === 'education' && (
                <>
                    <div>
                        <div className='m-0 d-flex align-items-end gap-1 w-50'>
                            <span>Name:</span>
                            <span className='print-name px-2'>{basic.fname + ' ' + basic.mname.charAt(0)  + '.' + ' ' + basic.lname}</span>
                        </div>
                        <div className='m-0 d-flex align-items-end gap-1 w-50'>
                            <span>Rank: </span>
                            <span className='print-name px-2'>{basic.position}</span>
                        </div>
                        <div className='m-0 d-flex align-items-end gap-1 w-50'>
                            <span>Department: </span>
                            <span className='print-name px-2'>{basic.department}</span>
                        </div>
                    </div>
                    <div className='admin-line mt-4'></div>
                    {data.map((info, index) => (
                        <div key={index} className='page-spec-data pt-3'>
                            <p style={{ fontSize: 'x-large' }}>{info.degree}, {info.date}</p>
                            <p>{info.institution}, {info.location}</p>
                        </div>
                    ))}
                    
                </>
            )}
            {/* Work Experience */}
            {specify === 'work' && (
                <>
                    <div>
                        <div className='m-0 d-flex align-items-end gap-1 w-50'>
                            <span>Name:</span>
                            <span className='print-name px-2'>{basic.fname + ' ' + basic.mname.charAt(0)  + '.' + ' ' + basic.lname}</span>
                        </div>
                        <div className='m-0 d-flex align-items-end gap-1 w-50'>
                            <span>Rank: </span>
                            <span className='print-name px-2'>{basic.position}</span>
                        </div>
                        <div className='m-0 d-flex align-items-end gap-1 w-50'>
                            <span>Department: </span>
                            <span className='print-name px-2'>{basic.department}</span>
                        </div>
                    </div>
                    <div className='admin-line mt-4'></div>
                    {data.map((info, index) => (
                        <div key={index} className='page-spec-data pt-3'>
                            <p style={{ fontSize: 'x-large' }}>{info.position}</p>
                            <p>Duration: {moment(info.start_date).format('YYYY') + ' - ' + info.end_date}</p>
                            <p>{info.work_loc}, {info.location}</p>
                        </div>
                    ))}
                    
                </>
            )}
            {/* Research Activities  */}
            {specify === 'research' && (
                <>
                    <div>
                        <div className='m-0 d-flex align-items-end gap-1 w-50'>
                            <span>Name:</span>
                            <span className='print-name px-2'>{basic.fname + ' ' + basic.mname.charAt(0)  + '.' + ' ' + basic.lname}</span>
                        </div>
                        <div className='m-0 d-flex align-items-end gap-1 w-50'>
                            <span>Rank: </span>
                            <span className='print-name px-2'>{basic.position}</span>
                        </div>
                        <div className='m-0 d-flex align-items-end gap-1 w-50'>
                            <span>Department: </span>
                            <span className='print-name px-2'>{basic.department}</span>
                        </div>
                    </div>
                    <div className='admin-line mt-4'></div>
                    {data.map((info, index) => (
                        <div key={index} className='page-spec-data pt-3'>
                            <p style={{ fontSize: 'x-large' }}>{info.res_title}</p>
                            <p style={{ fontSize: 'large' }}>Researchers: {info.researcher}</p>
                            <p>{moment(info.start_date).format('YYYY') + ' - ' + info.end_date}, {info.status}</p>
                        </div>
                    ))}
                    
                </>
            )}
            {/* Extension Activities  */}
            {specify === 'extensions' && (
                <>
                    <div>
                        <div className='m-0 d-flex align-items-end gap-1 w-50'>
                            <span>Name:</span>
                            <span className='print-name px-2'>{basic.fname + ' ' + basic.mname.charAt(0)  + '.' + ' ' + basic.lname}</span>
                        </div>
                        <div className='m-0 d-flex align-items-end gap-1 w-50'>
                            <span>Rank: </span>
                            <span className='print-name px-2'>{basic.position}</span>
                        </div>
                        <div className='m-0 d-flex align-items-end gap-1 w-50'>
                            <span>Department: </span>
                            <span className='print-name px-2'>{basic.department}</span>
                        </div>
                    </div>
                    <div className='admin-line mt-4'></div>
                    {data.map((info, index) => (
                        <div key={index} className='page-spec-data pt-3'>
                            <p style={{ fontSize: 'x-large' }}>{info.ext_title}</p>
                            <p className='m-0'>Team Lead: {info.lead}</p>
                            <p>Member(s): {info.member}</p>
                            <p className='m-0' style={{ fontSize: 'large' }}>Sponsor(s): {info.sponsor}</p>
                            <p style={{ fontSize: 'large' }}>Beneficiaries: {info.beneficiaries}</p>
                            <p>Duration: {moment(info.start_date).format('YYYY') + ' - ' + info.end_date}</p>
                        </div>
                    ))}
                    
                </>
            )}
            {/* Publications  */}
            {specify === 'publications' && (
                <>
                    <div>
                        <div className='m-0 d-flex align-items-end gap-1 w-50'>
                            <span>Name:</span>
                            <span className='print-name px-2'>{basic.fname + ' ' + basic.mname.charAt(0)  + '.' + ' ' + basic.lname}</span>
                        </div>
                        <div className='m-0 d-flex align-items-end gap-1 w-50'>
                            <span>Rank: </span>
                            <span className='print-name px-2'>{basic.position}</span>
                        </div>
                        <div className='m-0 d-flex align-items-end gap-1 w-50'>
                            <span>Department: </span>
                            <span className='print-name px-2'>{basic.department}</span>
                        </div>
                    </div>
                    <div className='admin-line mt-4'></div>
                    {data.map((info, index) => (
                        <div key={index} className='page-spec-data pt-3'>
                            <p style={{ fontSize: 'x-large' }} className='m-0'>{info.proj_title}</p>
                            <p style={{ fontSize: 'large' }}>Author(s): {info.authors}</p>
                            <div className='d-flex'>
                                <p className='flex-fill w-50'>Date Published: {moment(info.date).format('MMMM YYYY')}</p>
                                {info.doi ? <p className='flex-fill w-50'>DOI: {info.doi}</p> : <></>}
                            </div>
                        </div>
                    ))}
                    
                </>
            )}
            {/* Trainings/ Seminars  */}
            {specify === 'trainings' && (
                <>
                    <div>
                        <div className='m-0 d-flex align-items-end gap-1 w-50'>
                            <span>Name:</span>
                            <span className='print-name px-2'>{basic.fname + ' ' + basic.mname.charAt(0)  + '.' + ' ' + basic.lname}</span>
                        </div>
                        <div className='m-0 d-flex align-items-end gap-1 w-50'>
                            <span>Rank: </span>
                            <span className='print-name px-2'>{basic.position}</span>
                        </div>
                        <div className='m-0 d-flex align-items-end gap-1 w-50'>
                            <span>Department: </span>
                            <span className='print-name px-2'>{basic.department}</span>
                        </div>
                    </div>
                    <div className='admin-line mt-4'></div>
                    {data.map((info, index) => (
                        <div key={index} className='page-spec-data pt-3'>
                            <p style={{ fontSize: 'large', fontWeight: 'bold' }} className='m-0'>{info.role}</p>
                            <p style={{ fontSize: 'large' }}>{info.title}</p>
                            <div className='d-flex gap-3'>
                                <p className='flex-fill w-50'>Location: {info.location}</p>
                                <p className='flex-fill w-50'>Date: {moment(info.start_date).format('MMMM DD, YYYY')} - {moment(info.end_date).format('MMMM DD, YYYY')}</p>
                            </div>
                        </div>
                    ))}
                    
                </>
            )}
        </div>
        
    </div>
));

export default PageSpec;
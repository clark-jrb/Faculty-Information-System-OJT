import React, { useEffect } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import agri_logo from '../../../public/images/agri_logo.png'
import NavLink from '@/Components/NavLink';
import { usePage } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';

export default function Profile(props) {
    const { 
        faculty_data
    } = usePage().props;

    // const handleGoBack = () => {
    //     Inertia.visit(route('faculties'))
    // }
    
    // useEffect(() => {
    //     console.log(faculty_data);
    // }, [faculty_data]);

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            // header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >

            <div className="profile-content pt-4">
                <div className="profile-container">
                    {/* <!-- Profile  --> */}
                    <div className="profile-section p-4">
                        {/* <div className='go-back-btn' onClick={() => handleGoBack()}>
                            <i className="fa-solid fa-arrow-left-long fa-xl"></i>
                        </div> */}
                        <div className="profile-pic-cont p-4">
                            <div className="first-layer p-2">
                                <div className="second-layer">
                                    <img src={`/images/faculty_images/${faculty_data.profile_pic}`} alt="profile picture" />
                                </div>
                            </div>
                        </div>
                        <div className="name-rank-cont pb-3">
                            <p className="m-0" style={{fontSize: "x-large", fontWeight: "bold"}}>
                                {faculty_data.fname + ' ' + faculty_data.lname}
                            </p>
                            <p className="m-0" style={{fontSize: "large"}}>{faculty_data.position}</p>
                        </div>
                        <div className="email-num-cont px-2 py-3">
                            <p className="m-0 pb-2">
                                {/* <i className="fa-regular fa-envelope fa-lg" style={{color: "var(--dark-green)"}}></i> */}
                                <i className="fa-solid fa-building-wheat" style={{ color: 'var(--dark-green)'}}></i>
                                &nbsp;&nbsp;{faculty_data.department}
                            </p>    
                            <p className="m-0 pb-2">
                                <i className="fa-regular fa-envelope fa-lg" style={{color: "var(--dark-green)"}}></i>
                                &nbsp;&nbsp;{faculty_data.email}
                            </p>    
                            <p className="m-0 pb-2">
                                <i className="fa-solid fa-phone fa-lg" style={{color: "var(--dark-green)"}}></i>
                                &nbsp;&nbsp;{faculty_data.contact_no}
                            </p>
                        </div>
                        {/* <div className="edit-profile-cont">
                            <button className="edit-profile-btn py-1">
                                <i className="fa-solid fa-pen-clip"></i>
                                Edit Profile
                            </button>
                        </div> */}
                        {/* <div className="print-data-cont">
                            <button className="print-data-btn py-1">
                                <i className="fa-solid fa-print"></i>
                                &nbsp;Print Data
                            </button>
                        </div> */}

                    </div>

                    {/* <!-- Profile Informations --> */}
                    {/* <div className="profile-info-section">
                        <div className="profile-ribbon">
                            <ul>
                                <li className={`basic-tab px-3 ${route().current('basic') ? 'active' : ''}`} id="basic">
                                    <NavLink href={route('basic', { id: faculty_data.id })}>
                                        <p className='m-0 p-2'>Basic</p>
                                    </NavLink>
                                </li>
                                <li className={`academic-tab px-3 ${route().current('academic') ? 'active' : ''}`} id="academic">
                                    <NavLink href={route('academic', { id: faculty_data.id })} >
                                        <p className='m-0 p-2'>Academic</p>
                                    </NavLink>
                                </li>
                                <li className={`publication-tab px-3 ${route().current('publication') ? 'active' : ''}`} id="publication">
                                    <NavLink href={route('publication', { id: faculty_data.id })} >
                                        <p className='m-0 p-2'>Publications</p>
                                    </NavLink>
                                </li>
                                <li className={`research-tab px-3 ${route().current('research') ? 'active' : ''}`} id="research">
                                    <NavLink href={route('research', { id: faculty_data.id })} >
                                        <p className='m-0 p-2'>Research</p>
                                    </NavLink>
                                </li>
                                <li className={`subject-tab px-3 ${route().current('extensions') ? 'active' : ''}`} id="subjects">
                                    <NavLink href={route('extensions', { id: faculty_data.id })} >
                                        <p className='m-0 p-2'>Extensions</p>
                                    </NavLink>
                                </li>
                                <li className={`subject-tab px-3 ${route().current('documents') ? 'active' : ''}`} id="subjects">
                                    <NavLink href={route('documents', { id: faculty_data.id })} >
                                        <p className='m-0 p-2'>Documents</p>
                                    </NavLink>
                                </li>
                                <li className="blank-tab"></li>
                            </ul>
                        </div>

                        <div className="profile-info-content">
                            {children}
                        </div>
                        <div className="agri-logo-cont">
                            <img src={agri_logo} alt="agri-logo"/>
                        </div>
                        
                    </div> */}
                </div>
            </div>
        </Authenticated>
    );
}

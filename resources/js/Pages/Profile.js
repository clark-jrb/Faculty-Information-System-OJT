import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import agri_logo from '../../../public/images/agri_logo.png'
import NavLink from '@/Components/NavLink';

export default function Profile({ children }) {
    return (
        <Authenticated
            // auth={props.auth}
            // errors={props.errors}
            // header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >

            <div className="profile-content pt-4">
                <div className="profile-container">
                    {/* <!-- Profile  --> */}
                    <div className="profile-section p-4">
                        <div className="profile-pic-cont p-4">
                            <div className="first-layer p-2">
                                <div className="second-layer"></div>
                            </div>
                        </div>
                        <div className="name-rank-cont pb-3">
                            <p className="m-0" style={{fontSize: "x-large", fontWeight: "bold"}}>Name</p>
                            <p className="m-0" style={{fontSize: "large"}}>Position</p>
                        </div>
                        <div className="email-num-cont px-2 py-3">
                            <p className="m-0 pb-2">
                                <i className="fa-regular fa-envelope" style={{color: "var(--dark-green)", fontSize: "large"}}></i>
                                &nbsp;Email
                            </p>    
                            <p className="m-0 pb-2">
                                <i className="fa-solid fa-phone" style={{color: "var(--dark-green)", fontSize: "large"}}></i>
                                &nbsp;Contact Number
                            </p>
                        </div>
                        <div className="edit-profile-cont">
                            <button className="edit-profile-btn py-1">
                                <i className="fa-solid fa-pen-clip"></i>
                                Edit Profile
                            </button>
                        </div>
                        <div className="print-data-cont">
                            <button className="print-data-btn py-1">
                                <i className="fa-solid fa-print"></i>
                                Print Data
                            </button>
                        </div>

                    </div>

                    {/* <!-- Profile Informations --> */}
                    <div className="profile-info-section">
                        <div className="profile-ribbon">
                            <ul>
                                <li className={`basic-tab px-3 ${route().current('basic') ? 'active' : ''}`} id="basic">
                                    <NavLink href={route('basic')}>
                                        <p className='m-0 p-2'>Basic</p>
                                    </NavLink>
                                </li>
                                <li className={`academic-tab px-3 ${route().current('academic') ? 'active' : ''}`} id="academic">
                                    <NavLink href={route('academic')} >
                                        <p className='m-0 p-2'>Academic</p>
                                    </NavLink>
                                </li>
                                <li className={`research-tab px-3 ${route().current('research') ? 'active' : ''}`} id="research">
                                    <NavLink href={route('research')} >
                                        <p className='m-0 p-2'>Research</p>
                                    </NavLink>
                                </li>
                                <li className={`subject-tab px-3 ${route().current('extensions') ? 'active' : ''}`} id="subjects">
                                    <NavLink href={route('extensions')} >
                                        <p className='m-0 p-2'>Extensions</p>
                                    </NavLink>
                                </li>
                                <li className={`subject-tab px-3 ${route().current('documents') ? 'active' : ''}`} id="subjects">
                                    <NavLink href={route('documents')} >
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
                        
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}

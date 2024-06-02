import React, { useEffect, useState } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import agri_logo from '../../../public/images/logos_bgs/agri_logo.png'
import NavLink from '@/Components/NavLink';
import { usePage, useForm } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';
import { Modal, Form } from 'react-bootstrap';
import Label from '@/Components/Label';

export default function Profile({ children, ...props }) {
    const { 
        faculty_data
    } = usePage().props;

    const [showEditPicModal, setShowEditPicModal] = useState(false);
    const [previewUrl, setPreviewUrl] = useState(null);

    const handleCloseEditPicModal = () => { setShowEditPicModal(false) }

    // form
    const { data, setData, post, processing} = useForm({
        profile_pic: faculty_data.profile_pic,
    })

    const handleUpdateProfPic = (e) => {
        e.preventDefault();
        try {
            console.log(data);
            post(route('update.profilePic', data));
            setShowEditPicModal(false)
            console.log('File uploaded successfully!');
        } catch (error) {
            console.error('Error uploading file:', error);
            // Optionally, you can notify the user about the error, or handle it in another way.
        }
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setData(prevState => ({
            ...prevState,
            profile_pic: file 
        }));
        if (file) {
            setPreviewUrl(URL.createObjectURL(file));
        }
    };

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
        >
            <Modal show={showEditPicModal} onHide={handleCloseEditPicModal} centered backdrop='static'>
                <Modal.Header className='educ-modal-head py-2'>
                    <div className="acf-title m-2 px-3" style={{ color: 'white' }}>
                        Edit Profile Picture
                    </div>
                    <button className='p-1 px-3 ms-auto' onClick={() => handleCloseEditPicModal()}>
                        <i className="fa-solid fa-xmark fa-xl"></i>
                    </button>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex w-100 justify-content-center">
                        <form onSubmit={handleUpdateProfPic}>
                            <div className="admin-profile-pic-update-cont p-3">
                                <div className="py-2 profile-image-cont">
                                    <Label forInput="profile-image" value="Profile Picture:" />

                                    <div className="d-flex justify-content-center py-2">
                                        {previewUrl ? 
                                            <img src={previewUrl} alt="Image Preview"/>
                                        :
                                            <img src={`/images/faculty_images/${data.profile_pic}`} alt="Faculty Profile" />
                                        }
                                    </div>

                                    <div className="add-field-container w-100 p-2">
                                        <Form.Control type="file" name="profile_pic" onChange={handleFileChange}/>
                                    </div>

                                    <div className="update-prof-btn px-2 d-flex align-items-center">
                                        <div className="ms-auto">
                                            <button type="submit" className="p-3 py-1" disabled={processing}>
                                                Update
                                            </button>
                                        </div>
                                    </div>

                                    {processing && (
                                        <>
                                        <p>Processing upload...</p>
                                        </>
                                    )}
                                </div>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>

            <div className="profile-content pt-4 px-4">
                <div className="profile-container">
                    {/* <!-- Profile  --> */}
                    <div className="profile-section p-4 shadow">
                        {/* <div className='go-back-btn' onClick={() => handleGoBack()}>
                            <i className="fa-solid fa-arrow-left-long fa-xl"></i>
                        </div> */}
                        <div className="profile-pic-cont p-4">
                            <div className="first-layer p-2">
                                <div className="second-layer" onClick={() => setShowEditPicModal(true)}>
                                    {faculty_data.profile_pic && (
                                        <img src={`/images/faculty_images/${faculty_data.profile_pic}`} alt="profile picture" />
                                    )}
                                    <div className='third-layer'>
                                        <i className="fa-solid fa-pen-to-square"></i>
                                    </div>
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
                            <p className="p-email m-0 pb-2">
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
                    <div className="profile-info-section shadow">
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
                                <li className={`publication-tab px-3 ${route().current('publication') ? 'active' : ''}`} id="publication">
                                    <NavLink href={route('publication')} >
                                        <p className='m-0 p-2'>Publications</p>
                                    </NavLink>
                                </li>
                                <li className={`research-tab px-3 ${route().current('research') ? 'active' : ''}`} id="research">
                                    <NavLink href={route('research')} >
                                        <p className='m-0 p-2'>Research</p>
                                    </NavLink>
                                </li>
                                <li className={`subject-tab px-3 ${route().current('extensions') ? 'active' : ''}`} id="extensions">
                                    <NavLink href={route('extensions')} >
                                        <p className='m-0 p-2'>Extension Activities</p>
                                    </NavLink>
                                </li>
                                <li className={`subject-tab px-3 ${route().current('trainings') ? 'active' : ''}`} id="trainings">
                                    <NavLink href={route('trainings')} >
                                        <p className='m-0 p-2'>Trainings/ Seminars</p>
                                    </NavLink>
                                </li>
                                <li className="blank-tab" style={{ cursor: 'default' }}></li>
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

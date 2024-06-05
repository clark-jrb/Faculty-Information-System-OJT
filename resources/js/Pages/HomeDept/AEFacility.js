import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Carousel } from 'react-bootstrap';
import { Inertia } from '@inertiajs/inertia';
import BackToTopButton from '@/Components/BackToTopButton';

export default function AEFacility(props) {
    const handleNext = () => {
        Inertia.visit(route('agri.management'))
    }
    return (
        <Authenticated 
            auth={props.auth} 
            errors={props.errors}
        >
            <div>
                {/* Department Background Section */}
                <div className="deptbgSection" style={{ backgroundImage: 'url("/images/logos_bgs/home_bg.jpg")' }}>
                    <div className="deptTextContainer">
                        <h1 className="deptText">AGRICULTURAL EXTENSION</h1>
                    </div>
                    <div className="bg-dark-opacity"></div>
                </div>
                
                {/* Logo Section */}
                <div className="logoSection">
                    <div className="logoContainer">
                        <img src="/images/dept_logo/agri_extension.png" alt="AE Logo" className="logo" />
                    </div>
                    <div className="fa-solid fa-circle-right nextButton" onClick={() => handleNext() }></div>
                </div>

                {/* Facility Section */}
                {/* Change className "facilitySection" to "altfacilitySection" 
                when facility are 2 or more to alternately position them */}
                <div className="facilitySection px-4">
                        <div className="imageBox">
                            <img src="/images/dept_previews/AEPreview1.jpg" alt="Image" className="preview-image" />
                        </div>
                        <div className="content">
                            <div className="text">
                                <h2>DAE Laboratory 1 & 2</h2>
                                <p>These serve as venues for practical and hands-on activities of the Agricultural Extension major students, such as conduct of extension communication activities, technology protocol demonstrations, and role playing of extension modalities/strategies like training, focus group discussion, key informant interviews, field/action research interviews, and development of knowledge products.</p>
                            </div>
                        </div>
                </div>
                <div className="carousel-container">
                    <div className="facility-carousel">
                        <Carousel>
                            <Carousel.Item className="carousel-item">
                                <div className="carousel-image-box">
                                    <img src="/images/deptpage_pics/AE/ae_lab1.jpg" alt="AE Facility 1"/>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item className="carousel-item">
                                <div className="carousel-image-box">
                                    <img src="/images/deptpage_pics/AE/ae_lab2.jpg" alt="AE Facility 2"/>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>

            <BackToTopButton/>
        </Authenticated>
    );
}

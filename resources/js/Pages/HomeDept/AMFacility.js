import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Carousel } from 'react-bootstrap';
import { Inertia } from '@inertiajs/inertia';
import BackToTopButton from '@/Components/BackToTopButton';

export default function AMFacility(props) {
    const handlePrevious = () => {
        Inertia.visit(route('agricultural.extension'))
    }
    const handleNext = () => {
        Inertia.visit(route('animal.science'))
    }
    
    return (
        <Authenticated 
            auth={props.auth} 
            errors={props.errors}
        >
            <div>
                {/* Department Background Section */}
                <div className="deptbgSection" style={{ backgroundImage: 'url("/images/home_bg.jpg")' }}>
                    <div className="deptTextContainer">
                        <h1 className="deptText">AGRI-MANAGEMENT</h1>
                    </div>
                </div>
                
                {/* Logo Section */}
                <div className="logoSection">
                    <div className="fa-solid fa-circle-left prevButton" onClick={() => handlePrevious() }></div>
                    <div className="logoContainer">
                        <img src="/images/dept_logo/agri_management.png" alt="AM Logo" className="logo" />
                    </div>
                    <div className="fa-solid fa-circle-right nextButton" onClick={() => handleNext() }></div>
                </div>

                {/* Facility Section */}
                {/* Change className "facilitySection" to "altfacilitySection" 
                when facility are 2 or more to alternately position them */}
                <div className="facilitySection">
                        <div className="imageBox">
                            <img src="/images/dept_previews/AMPreview1.jpg" alt="Image" className="preview-image" />
                        </div>
                        <div className="content">
                            <div className="text">
                                <h2>Agribusiness Computer Laboratory</h2>
                                <p>The computer laboratory is basically for instructional purposes, where statistical as well as economics and financial analyses can be illustrated to students using available software. It also provides services to students for data encoding and analyses whenever no classes are held in the room.</p>
                            </div>
                        </div>
                </div>
                <div className="carousel-container">
                    <div className="facility-carousel">
                        <Carousel>
                            <Carousel.Item className="carousel-item">
                                <div className="carousel-image-box">
                                    <img src="/images/deptpage_pics/AM/agribiz_lab1.jpg" alt="AM Facility 1"/>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item className="carousel-item">
                                <div className="carousel-image-box">
                                    <img src="/images/deptpage_pics/AM/agribiz_lab2.jpg" alt="AM Facility 2"/>
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
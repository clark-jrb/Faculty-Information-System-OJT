import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Carousel } from 'react-bootstrap';
import { Inertia } from '@inertiajs/inertia';
import BackToTopButton from '@/Components/BackToTopButton';

export default function CPFacility(props) {
    const handlePrevious = () => {
        Inertia.visit(route('animal.science'))
    }
    const handleNext = () => {
        Inertia.visit(route('crop.science'))
    }

    return (
        <Authenticated 
            auth={props.auth} 
            errors={props.errors}
        >
            <div>
                {/* Department Background Section */}
                <div className="deptbgSection" style={{ backgroundImage: 'url("/images/logos_bgs/home_bg.jpg")' }}>
                    <div className="bg-dark-opacity"></div>
                    <div className="deptTextContainer">
                        <h1 className="deptText">CROP PROTECTION</h1>
                    </div>
                </div>
                
                {/* Logo Section */}
                <div className="logoSection">
                    <div className="fa-solid fa-circle-left prevButton" onClick={() => handlePrevious() }></div>
                    <div className="logoContainer">
                        <img src="/images/dept_logo/crop_protect.png" alt="CP Logo" className="logo" />
                    </div>
                    <div className="fa-solid fa-circle-right nextButton" onClick={() => handleNext() }></div>
                </div>

                {/* Facility Section 1*/}
                <div className="facilitySection px-4">
                        <div className="imageBox">
                            <img src="/images/dept_previews/CPPreview1.jpg" alt="Image" className="preview-image" />
                        </div>
                        <div className="content">
                            <div className="text">
                                <h2>Plant Pathology Laboratory 1 & 2</h2>
                                <p>Laboratory classes for basic and major courses in Crop Protection are conducted in this room.</p>
                            </div>
                        </div>
                </div>
                <div className="carousel-container">
                    <div className="facility-carousel">
                        <Carousel>
                            <Carousel.Item className="carousel-item">
                                <div className="carousel-image-box">
                                    <img src="/images/deptpage_pics/CP/pp_lab1.jpg" alt="CP Facility 1"/>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
                {/* Facility Section 2*/}
                <div className="altfacilitySection px-4">
                        <div className="imageBox">
                            <img src="/images/dept_previews/CPPreview2.jpg" alt="Image" className="preview-image" />
                        </div>
                        <div className="content">
                            <div className="alttext">
                                <h2>Entomology Laboratory 1 & 2</h2>
                                <p>The Entomology Lab 1 is used for a class with a small group of students. On the other hand, Entomology Lab 2 can occupy a bigger class with 25-30 students. Both laboratory rooms have a storage room used for keeping the visual aids, insect collections and other instructional materials used for Crop Protection basic and major courses and serve as working areas for the laboratory classes of students enrolled in crop protection subjects.</p>
                            </div>
                        </div>
                </div>
                <div className="carousel-container">
                    <div className="facility-carousel">
                        <Carousel>
                            <Carousel.Item className="carousel-item">
                                <div className="carousel-image-box">
                                    <img src="/images/deptpage_pics/CP/ento_lab1.jpg" alt="CP Facility 1"/>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
                {/* Facility Section 3*/}
                <div className="facilitySection px-4">
                        <div className="imageBox">
                            <img src="/images/dept_previews/CPPreview3.jpg" alt="Image" className="preview-image" />
                        </div>
                        <div className="content">
                            <div className="text">
                                <h2>Insect Taxonomy Laboratory</h2>
                                <p>This room is provided to the students who are interested in the field of insect taxonomy. Inside the room is a faculty office, wall fans are available to provide comfort to students.</p>
                            </div>
                        </div>
                </div>
                <div className="carousel-container">
                    <div className="facility-carousel">
                        <Carousel>
                            <Carousel.Item className="carousel-item">
                                <div className="carousel-image-box">
                                    <img src="/images/deptpage_pics/CP/it_lab1.jpg" alt="CP Facility 1"/>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item className="carousel-item">
                                <div className="carousel-image-box">
                                    <img src="/images/deptpage_pics/CP/it_lab2.jpg" alt="CP Facility 2"/>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
                {/* Facility Section 4*/}
                <div className="altfacilitySection px-4">
                        <div className="imageBox">
                            <img src="/images/dept_previews/CPPreview4.jpg" alt="Image" className="preview-image" />
                        </div>
                        <div className="content">
                            <div className="alttext">
                                <h2>The Preparation Room</h2>
                                <p>This room caters the needs of the laboratory activities of students in the department. Such activities include preparation and sterilization of culture media, preparation of reagents and other materials, washing and sterilization of glassware, and issuance of microscopes.</p>
                            </div>
                        </div>
                </div>
                <div className="carousel-container">
                    <div className="facility-carousel">
                        <Carousel>
                            <Carousel.Item className="carousel-item">
                                <div className="carousel-image-box">
                                    <img src="/images/deptpage_pics/CP/pr1.jpg" alt="CP Facility 1"/>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item className="carousel-item">
                                <div className="carousel-image-box">
                                    <img src="/images/deptpage_pics/CP/pr2.jpg" alt="CP Facility 2"/>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item className="carousel-item">
                                <div className="carousel-image-box">
                                    <img src="/images/deptpage_pics/CP/pr3.jpg" alt="CP Facility 3"/>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
                {/* Facility Section 5*/}
                <div className="facilitySection px-4">
                        <div className="imageBox">
                            <img src="/images/dept_previews/CPPreview5.jpg" alt="Image" className="preview-image" />
                        </div>
                        <div className="content">
                            <div className="text">
                                <h2>Plant Health Clinic (PHC)</h2>
                                <p>Also known as Plant Pests and Diseases Clinic Surveillance Research Center (PPDCSRC), focuses on the holistic and multidisciplinary approach in plant health by ensuring the development of nature-positive, innovative, and sensible solutions to attain plant health and contribute to sustainable food systems.</p>
                            </div>
                        </div>
                </div>
                <div className="carousel-container">
                    <div className="facility-carousel">
                        <Carousel>
                            <Carousel.Item className="carousel-item">
                                <div className="carousel-image-box">
                                    <img src="/images/deptpage_pics/CP/phc1.jpg" alt="CP Facility 1"/>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item className="carousel-item">
                                <div className="carousel-image-box">
                                    <img src="/images/deptpage_pics/CP/phc2.jpg" alt="CP Facility 2"/>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item className="carousel-item">
                                <div className="carousel-image-box">
                                    <img src="/images/deptpage_pics/CP/phc3.jpg" alt="CP Facility 3"/>
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
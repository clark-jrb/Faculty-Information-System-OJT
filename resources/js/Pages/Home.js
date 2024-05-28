import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Authenticated from '@/Layouts/Authenticated';
import BackToTopButton from '@/Components/BackToTopButton';
import FacilityModal from '@/Components/FacilityModal';
import facility_details from '../../json/facility_details.json'
import facility_previews from '../../json/facility_previews.json'

export default function Home(props) {
    const icons = [
        { src: '/images/dept_logo/agri_extension.png', text: 'Agricultural Extension' },
        { src: '/images/dept_logo/agri_management.png', text: 'Agri-Management' },
        { src: '/images/dept_logo/animal_sci.png', text: 'Animal Science' },
        { src: '/images/dept_logo/crop_protect.png', text: 'Crop Protection' },
        { src: '/images/dept_logo/crop_sci.png', text: 'Crop Science' },
        { src: '/images/dept_logo/soil_sci.png', text: 'Soil Science' },
    ];

    // Modal Loop
    const facilities = [];
    for (let i = 1; i <= 30; i++) {
        const facility = {
            title: facility_details.title[i],
            images: [`/images/deptmodal_pics/sample${i}_1.jpg`, `/images/deptmodal_pics/sample${i}_2.jpg`,
            `/images/deptmodal_pics/sample${i}_3.jpg`],
            description: facility_details.description[i],
        };
        facilities.push(facility);
    }

    const [showModal, setShowModal] = useState(false);
    const [selectedFacility, setSelectedFacility] = useState(null);

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedFacility(null);
    };

    const handleOpenModal = (facility) => {
        setSelectedFacility(facility);
        setShowModal(true);
    };

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
        >
            <div>
                {/* Background Image Section */}
                <div className="backgroundSection" style={{ backgroundImage: 'url("/images/home_bg.jpg")' }}>
                    <div>
                        <div className='d-flex align-items-start'>
                            <img src="/images/clsu_logo.png" alt="University Logo" className="univLogo" />
                            <p className="univText text-start">Central Luzon State University</p>
                        </div>
                        <div className="collegeTextContainer">
                            <h1 className="collegeText">COLLEGE OF AGRICULTURE</h1>
                        </div>
                        <div className='w-100 d-flex'>
                            <p className="subText ms-auto mb-0 w-50">Dedicated to Equitable Growth and Sustainable Development</p>
                        </div>
                    </div>
                </div>
                
                {/* Icons Section */}
                <div className="iconsSection">
                    <div className="iconsHeader">
                        <h2 className='departmentTitle'>Departments</h2>
                    </div>
                    <div className="iconsContainer">
                        {icons.map((icon, index) => (
                            <div key={index} className="iconContainer">
                                <img src={icon.src} alt={`icon${index + 1}`} className="icon" />
                                <div className="line" />
                                <p className="iconText">{icon.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Facilities Section */}
            <div className="scrollableContainer">
                <div className="facilitiesSection">
                    <div className="facilitiesHeader">
                            <h2 className='facilitiesTitle'>Facilities</h2>
                    </div>
                    {/* Department Facilities */}
                    {facility_previews.map((department, deptIndex) => (
                        <div key={deptIndex}>
                            <div className={`${department.abbreviation}Header`}>
                                <h2 className={`${department.abbreviation}Title`}>{department.name}</h2>
                            </div>
                            {department.hasCarousel ? (
                                <Carousel>
                                    {department.facilities.map((facilityBatch, batchIndex) => (
                                        <Carousel.Item key={batchIndex}>
                                            <div className="facility-tables row">
                                                {facilityBatch.map((facility, index) => (
                                                    <div key={index} className="col-md-4">
                                                        <div className="facility-item">
                                                            <div className={`${department.abbreviation}-image-box`}>
                                                                <div className="image-overlay" onClick={() => handleOpenModal(facility.id)}></div>
                                                                <img src={facility.imgSrc} alt={facility.name} />
                                                                <p className="facility-text">{facility.name}</p>
                                                                <FacilityModal show={modalStates[facility.id]} handleClose={() => handleCloseModal(facility.id)} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                            ) : (
                                <div className='facilitiesContainer'>
                                    <div className={`${department.abbreviation}-facility-tables row`}>
                                        {department.facilities.map((facility, index) => (
                                            <div key={index} className="col-md-4">
                                                <div className="facility-item">
                                                    <div className={`${department.abbreviation}-image-box`}>
                                                        <div className="image-overlay" onClick={() => handleOpenModal(facility.id)}></div>
                                                        <img src={facility.imgSrc} alt={facility.name} />
                                                        <p className="facility-text">{facility.name}</p>
                                                        <FacilityModal show={modalStates[facility.id]} handleClose={() => handleCloseModal(facility.id)} />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer Section */}
            <div className="footer">
                <div className="footer-content">
                    <div className="footer-logo">
                        <img src="/images/agri_logo.png" alt="Logo" />
                    </div>
                    <div className="footer-text">
                        <span className="footer-text-college">The College of Agriculture</span> upholds the responsibility of providing quality education in agriculture and allied fields through its world-class facilities and competent faculty members and staff who are committed to continuously produce the necessary mechanism that aims to promote relevant agricultural education in the country.
                    </div>
                </div>
            </div>

            <BackToTopButton/>

        </Authenticated>
    );
}

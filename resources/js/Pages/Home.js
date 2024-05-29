import React, { useState, useEffect } from 'react';
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
    for (let i = 0; i < facility_details.length; i++) {
        const facility = {
            title: facility_details[i].title,
            description: facility_details[i].description,
            images: facility_details[i].images 
        };

        facilities.push(facility);
    }

    useEffect(() => {
        console.log(facilities[selectedFacility]);
        // facilities.forEach((facility, index) => {
        //     console.log(`Facility ${index + 1} Images:`, facility.images);
        // });
    }, [facilities]);

    const [showModal, setShowModal] = useState(false);
    const [selectedFacility, setSelectedFacility] = useState('');

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

import React, { useState } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import Modal1 from '@/Components/Modals/Modal1';
import Modal2 from '@/Components/Modals/Modal2';
import Modal3 from '@/Components/Modals/Modal3';

export default function Home(props) {
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);

    const handleCloseModal1 = () => {
        setShowModal1(false);
    };
    const handleOpenModal1 = () => setShowModal1(true);

    const handleCloseModal2 = () => setShowModal2(false);
    const handleOpenModal2 = () => setShowModal2(true);

    const handleCloseModal3 = () => setShowModal3(false);
    const handleOpenModal3 = () => setShowModal3(true);

    const icons = [
        { src: '/images/dept_logo/agri_extension.png', text: 'Agricultural Extension' },
        { src: '/images/dept_logo/agri_management.png', text: 'Agri-Management' },
        { src: '/images/dept_logo/animal_sci.png', text: 'Animal Science' },
        { src: '/images/dept_logo/crop_protect.png', text: 'Crop Protection' },
        { src: '/images/dept_logo/crop_sci.png', text: 'Crop Science' },
        { src: '/images/dept_logo/soil_sci.png', text: 'Soil Science' },
    ];

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
        >
            <div className="container">
                {/* Background Image Section */}
                <div className="backgroundSection" style={{ backgroundImage: 'url("/images/home_bg.jpg")' }}>
                    <div className="textContainer">
                        <img src="/images/clsu_logo.png" alt="University Logo" className="univLogo" />
                        <h1 className="univText">Central Luzon State University</h1>
                        <div className="collegeTextContainer">
                            
                            <h1 className="collegeText">COLLEGE OF AGRICULTURE</h1>
                        </div>
                        <h1 className="subText">Dedicated to Equitable Growth and Sustainable Development</h1>
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
            <div className="facilitiesSection">
                <div className="facilitiesHeader">
                        <h2 className='facilitiesTitle'>Facilities</h2>
                </div>
                <div className='facilitiesContainer'>
                    <div className="facility-tables row">
                        <div className="col-md-4">
                            <div className="facility-item">
                                <div className="image-box">
                                    <div className="image-overlay" onClick={handleOpenModal1}></div> 
                                    <img src="/images/facility1.jpg" alt="Facility 1"/>
                                    <p className="facility-text">Facility 1</p>
                                    <Modal1 show={showModal1} handleClose={handleCloseModal1} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="facility-item">
                                <div className="image-box">
                                    <div className="image-overlay" onClick={handleOpenModal2}></div> 
                                    <img src="/images/facility2.jpg" alt="Facility 2"/>
                                    <p className="facility-text">Facility 2</p>
                                    <Modal2 show={showModal2} handleClose={handleCloseModal2} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="facility-item">
                                <div className="image-box">
                                    <div className="image-overlay" onClick={handleOpenModal3}></div> 
                                    <img src="/images/facility3.jpg" alt="Facility 3"/>
                                    <p className="facility-text">Facility 3</p>
                                    <Modal3 show={showModal3} handleClose={handleCloseModal3} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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

        </Authenticated>
    );
}

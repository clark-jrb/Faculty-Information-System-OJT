import React, { useState } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import Modal1 from '@/Components/Modals/Modal1';
import Modal2 from '@/Components/Modals/Modal2';
import Modal3 from '@/Components/Modals/Modal3';
import BackToTopButton from '@/Components/BackToTopButton';
import { Carousel } from 'react-bootstrap';

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
            <div className="facilitiesSection">
                <div className="facilitiesHeader">
                        <h2 className='facilitiesTitle'>Facilities</h2>
                </div>
                {/* DAE */}
                <div>
                    <div className="AEHeader">
                        <h2 className='AETitle'>Agricultural Extension</h2>
                    </div>
                    <div className='facilitiesContainer'>
                        <div className="facility-tables row">
                            <div className="col-md-4">
                                <div className="facility-item">
                                    <div className="image-box">
                                        <div className="image-overlay" onClick={handleOpenModal1}></div> 
                                        <img src="/images/dept_previews/AE/ae_lab1.jpg" alt="Facility 1"/>
                                        <p className="facility-text">DAE Laboratory 1 & 2</p>
                                        <Modal1 show={showModal1} handleClose={handleCloseModal1} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* DAM */}
                <div>
                    <div className="AMHeader">
                        <h2 className='AMTitle'>Agri-Management</h2>
                    </div>
                    <div className='facilitiesContainer'>
                        <div className="facility-tables row">
                            <div className="col-md-4">
                                <div className="facility-item">
                                    <div className="image-box">
                                        <div className="image-overlay" onClick={handleOpenModal1}></div> 
                                        <img src="/images/dept_previews/AM/agribiz_lab1.jpg" alt="Facility 1"/>
                                        <p className="facility-text">Agribusiness Computer Laboratory</p>
                                        <Modal1 show={showModal1} handleClose={handleCloseModal1} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* DAS */}
                <div>
                    <div className="ASHeader">
                        <h2 className='ASTitle'>Animal Science</h2>
                    </div>
                    <Carousel>
                        <Carousel.Item>
                        <div className="facility-tables row">
                            <div className="col-md-4">
                                <div className="facility-item">
                                    <div className="image-box">
                                        <div className="image-overlay" onClick={handleOpenModal1}></div> 
                                        <img src="/images/dept_previews/AS/an_lab2.jpg" alt="Facility 1"/>
                                        <p className="facility-text">Animal Nutrition Laboratory</p>
                                        <Modal1 show={showModal1} handleClose={handleCloseModal1} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="facility-item">
                                    <div className="image-box">
                                        <div className="image-overlay" onClick={handleOpenModal1}></div> 
                                        <img src="/images/dept_previews/AS/anp_lab.jpg" alt="Facility 1"/>
                                        <p className="facility-text">Animal Anatomy and Physiology Laboratory</p>
                                        <Modal1 show={showModal1} handleClose={handleCloseModal1} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="facility-item">
                                    <div className="image-box">
                                        <div className="image-overlay" onClick={handleOpenModal1}></div> 
                                        <img src="/images/dept_previews/AS/bcmodule1.jpg" alt="Facility 1"/>
                                        <p className="facility-text">Beef Cattle and Sheep Module</p>
                                        <Modal1 show={showModal1} handleClose={handleCloseModal1} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Carousel.Item>
                        <Carousel.Item>
                        <div className="facility-tables row">
                        <div className="col-md-4">
                                <div className="facility-item">
                                    <div className="image-box">
                                        <div className="image-overlay" onClick={handleOpenModal1}></div> 
                                        <img src="/images/dept_previews/AS/mp_lab1.jpg" alt="Facility 1"/>
                                        <p className="facility-text">Meat Processing Laboratory</p>
                                        <Modal1 show={showModal1} handleClose={handleCloseModal1} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="facility-item">
                                    <div className="image-box">
                                        <div className="image-overlay" onClick={handleOpenModal1}></div> 
                                        <img src="/images/dept_previews/AS/pmodule1.jpg" alt="Facility 1"/>
                                        <p className="facility-text">Poultry Module I</p>
                                        <Modal1 show={showModal1} handleClose={handleCloseModal1} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="facility-item">
                                    <div className="image-box">
                                        <div className="image-overlay" onClick={handleOpenModal1}></div> 
                                        <img src="/images/dept_previews/AS/bpp1.jpg" alt="Facility 1"/>
                                        <p className="facility-text">Broiler Production Project</p>
                                        <Modal1 show={showModal1} handleClose={handleCloseModal1} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Carousel.Item>
                        <Carousel.Item>
                        <div className="facility-tables row">
                        <div className="col-md-4">
                                <div className="facility-item">
                                    <div className="image-box">
                                        <div className="image-overlay" onClick={handleOpenModal1}></div> 
                                        <img src="/images/dept_previews/AS/src1.jpg" alt="Facility 1"/>
                                        <p className="facility-text">Small Ruminant Center</p>
                                        <Modal1 show={showModal1} handleClose={handleCloseModal1} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="facility-item">
                                    <div className="image-box">
                                        <div className="image-overlay" onClick={handleOpenModal1}></div> 
                                        <img src="/images/dept_previews/AS/spp1.jpg" alt="Facility 1"/>
                                        <p className="facility-text">Swine Production Project</p>
                                        <Modal1 show={showModal1} handleClose={handleCloseModal1} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="facility-item">
                                    <div className="image-box">
                                        <div className="image-overlay" onClick={handleOpenModal1}></div> 
                                        <img src="/images/dept_previews/AS/fcp1.jpg" alt="Facility 1"/>
                                        <p className="facility-text">Free Range Chicken Module</p>
                                        <Modal1 show={showModal1} handleClose={handleCloseModal1} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
                {/* DCP */}
                <div>
                    <div className="CPHeader">
                        <h2 className='CPTitle'>Crop Protection</h2>
                    </div>
                    <Carousel>
                        <Carousel.Item>
                        <div className="facility-tables row">
                            <div className="col-md-4">
                                <div className="facility-item">
                                    <div className="image-box">
                                        <div className="image-overlay" onClick={handleOpenModal1}></div> 
                                        <img src="/images/dept_previews/CP/pp_lab.jpg" alt="Facility 1"/>
                                        <p className="facility-text">Plant Pathology Laboratory 1 & 2</p>
                                        <Modal1 show={showModal1} handleClose={handleCloseModal1} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="facility-item">
                                    <div className="image-box">
                                        <div className="image-overlay" onClick={handleOpenModal1}></div> 
                                        <img src="/images/dept_previews/CP/ento_lab1.jpg" alt="Facility 1"/>
                                        <p className="facility-text">Entomology Lab 1 & 2</p>
                                        <Modal1 show={showModal1} handleClose={handleCloseModal1} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="facility-item">
                                    <div className="image-box">
                                        <div className="image-overlay" onClick={handleOpenModal1}></div> 
                                        <img src="/images/dept_previews/CP/it_lab1.jpg" alt="Facility 1"/>
                                        <p className="facility-text">Insect Taxonomy Laboratory</p>
                                        <Modal1 show={showModal1} handleClose={handleCloseModal1} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Carousel.Item>
                        <Carousel.Item>
                        <div className="facility-tables row">
                        <div className="col-md-4">
                                <div className="facility-item">
                                    <div className="image-box">
                                        <div className="image-overlay" onClick={handleOpenModal1}></div> 
                                        <img src="/images/dept_previews/CP/pr1.jpg" alt="Facility 1"/>
                                        <p className="facility-text">The Preparation Room</p>
                                        <Modal1 show={showModal1} handleClose={handleCloseModal1} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="facility-item">
                                    <div className="image-box">
                                        <div className="image-overlay" onClick={handleOpenModal1}></div> 
                                        <img src="/images/dept_previews/CP/phc1.jpg" alt="Facility 1"/>
                                        <p className="facility-text">Plant Health Clinic</p>
                                        <Modal1 show={showModal1} handleClose={handleCloseModal1} />
                                    </div>
                                </div>
                            </div>
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
                        </div>
                        </Carousel.Item>
                        <Carousel.Item>
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
                                        <div className="image-overlay" onClick={handleOpenModal1}></div> 
                                        <img src="/images/facility1.jpg" alt="Facility 1"/>
                                        <p className="facility-text">Facility 1</p>
                                        <Modal1 show={showModal1} handleClose={handleCloseModal1} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
                {/* DCS */}
                <div>
                    <div className="CSHeader">
                        <h2 className='CSTitle'>Crop Science</h2>
                    </div>
                    <Carousel>
                        <Carousel.Item>
                        <div className="facility-tables row">
                            <div className="col-md-4">
                                <div className="facility-item">
                                    <div className="image-box">
                                        <div className="image-overlay" onClick={handleOpenModal1}></div> 
                                        <img src="/images/dept_previews/CS/lab111.jpg" alt="Facility 1"/>
                                        <p className="facility-text">Laboratory Rooms 111 & 112</p>
                                        <Modal1 show={showModal1} handleClose={handleCloseModal1} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="facility-item">
                                    <div className="image-box">
                                        <div className="image-overlay" onClick={handleOpenModal1}></div> 
                                        <img src="/images/dept_previews/CS/ph_lab1.jpg" alt="Facility 1"/>
                                        <p className="facility-text">Postharvest Laboratory</p>
                                        <Modal1 show={showModal1} handleClose={handleCloseModal1} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="facility-item">
                                    <div className="image-box">
                                        <div className="image-overlay" onClick={handleOpenModal1}></div> 
                                        <img src="/images/dept_previews/CS/tc_lab1.jpg" alt="Facility 1"/>
                                        <p className="facility-text">Tissue Culture Laboratory</p>
                                        <Modal1 show={showModal1} handleClose={handleCloseModal1} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Carousel.Item>
                        <Carousel.Item>
                        <div className="facility-tables row">
                            <div className="col-md-4">
                                <div className="facility-item">
                                    <div className="image-box">
                                        <div className="image-overlay" onClick={handleOpenModal1}></div> 
                                        <img src="/images/dept_previews/CS/vp_module1.jpg" alt="Facility 1"/>
                                        <p className="facility-text">Vegetable Production Module</p>
                                        <Modal1 show={showModal1} handleClose={handleCloseModal1} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="facility-item">
                                    <div className="image-box">
                                        <div className="image-overlay" onClick={handleOpenModal1}></div> 
                                        <img src="/images/dept_previews/CS/opp_module1.jpg" alt="Facility 1"/>
                                        <p className="facility-text">Ornamental Plant Production Module</p>
                                        <Modal1 show={showModal1} handleClose={handleCloseModal1} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="facility-item">
                                    <div className="image-box">
                                        <div className="image-overlay" onClick={handleOpenModal1}></div> 
                                        <img src="/images/dept_previews/CS/mopc_module1.jpg" alt="Facility 1"/>
                                        <p className="facility-text">Mixed Orchard and Plantation Crops Module</p>
                                        <Modal1 show={showModal1} handleClose={handleCloseModal1} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Carousel.Item>
                        <Carousel.Item>
                        <div className="facility-tables row">
                            <div className="col-md-4">
                                <div className="facility-item">
                                    <div className="image-box">
                                        <div className="image-overlay" onClick={handleOpenModal1}></div> 
                                        <img src="/images/dept_previews/CS/rp_module1.jpg" alt="Facility 1"/>
                                        <p className="facility-text">Rice Production Module</p>
                                        <Modal1 show={showModal1} handleClose={handleCloseModal1} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="facility-item">
                                    <div className="image-box">
                                        <div className="image-overlay" onClick={handleOpenModal1}></div> 
                                        <img src="/images/dept_previews/CS/rmc1.jpg" alt="Facility 1"/>
                                        <p className="facility-text">RM-CARES</p>
                                        <Modal1 show={showModal1} handleClose={handleCloseModal1} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="facility-item">
                                    <div className="image-box">
                                        <div className="image-overlay" onClick={handleOpenModal1}></div> 
                                        <img src="/images/dept_previews/CS/philscat1.jpg" alt="Facility 1"/>
                                        <p className="facility-text">PhilsCAT</p>
                                        <Modal1 show={showModal1} handleClose={handleCloseModal1} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
                {/* DSS */}
                <div>
                    <div className="SSHeader">
                        <h2 className='SSTitle'>Soil Science</h2>
                    </div>
                    <Carousel>
                        <Carousel.Item>
                        <div className="facility-tables row">
                            <div className="col-md-4">
                                <div className="facility-item">
                                    <div className="image-box">
                                        <div className="image-overlay" onClick={handleOpenModal1}></div> 
                                        <img src="/images/dept_previews/SS/lab103_1.jpg" alt="Facility 1"/>
                                        <p className="facility-text">Laboratory Rooms 1 & 2 - Rm 103 & 104</p>
                                        <Modal1 show={showModal1} handleClose={handleCloseModal1} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="facility-item">
                                    <div className="image-box">
                                        <div className="image-overlay" onClick={handleOpenModal1}></div> 
                                        <img src="/images/dept_previews/SS/smr106_1.jpg" alt="Facility 1"/>
                                        <p className="facility-text">Soil Museum</p>
                                        <Modal1 show={showModal1} handleClose={handleCloseModal1} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="facility-item">
                                    <div className="image-box">
                                        <div className="image-overlay" onClick={handleOpenModal1}></div> 
                                        <img src="/images/dept_previews/SS/sbb_lab1.jpg" alt="Facility 1"/>
                                        <p className="facility-text">Soil Biology and Biotechnology Laboratory</p>
                                        <Modal1 show={showModal1} handleClose={handleCloseModal1} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Carousel.Item>
                        <Carousel.Item>
                        <div className="facility-tables row">
                            <div className="col-md-4">
                                <div className="facility-item">
                                    <div className="image-box">
                                        <div className="image-overlay" onClick={handleOpenModal1}></div> 
                                        <img src="/images/dept_previews/SS/spta_lab1.jpg" alt="Facility 1"/>
                                        <p className="facility-text">Soil and Plant Tissue Analytical Laboratory</p>
                                        <Modal1 show={showModal1} handleClose={handleCloseModal1} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="facility-item">
                                    <div className="image-box">
                                        <div className="image-overlay" onClick={handleOpenModal1}></div> 
                                        <img src="/images/dept_previews/SS/gis_lab1.jpg" alt="Facility 1"/>
                                        <p className="facility-text">Geographic Information System (GIS) Laboratory</p>
                                        <Modal1 show={showModal1} handleClose={handleCloseModal1} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Carousel.Item>
                    </Carousel>
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

            <BackToTopButton/>

        </Authenticated>
    );
}

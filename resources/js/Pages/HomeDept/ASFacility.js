import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Carousel } from 'react-bootstrap';
import { Inertia } from '@inertiajs/inertia';
import BackToTopButton from '@/Components/BackToTopButton';

export default function ASFacility(props) {
    const handlePrevious = () => {
        Inertia.visit(route('agri.management'))
    }
    const handleNext = () => {
        Inertia.visit(route('crop.protection'))
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
                        <h1 className="deptText">ANIMAL SCIENCE</h1>
                    </div>
                </div>
                
                {/* Logo Section */}
                <div className="logoSection">
                    <div className="fa-solid fa-circle-left prevButton" onClick={() => handlePrevious() }></div>
                    <div className="logoContainer">
                        <img src="/images/dept_logo/animal_sci.png" alt="AS Logo" className="logo" />
                    </div>
                    <div className="fa-solid fa-circle-right nextButton" onClick={() => handleNext() }></div>
                </div>

                {/* Facility Section 1*/}
                <div className="facilitySection">
                        <div className="imageBox">
                            <img src="/images/dept_previews/ASPreview1.jpg" alt="Image" className="preview-image" />
                        </div>
                        <div className="content">
                            <div className="text">
                                <h2>Animal Nutrition Laboratory</h2>
                                <p>The laboratory supports the practical class works in animal science subjects. At present, it is equipped with facilities for moisture analysis, crude fat and feed microscopy. It has a set of weighing scales, feed mixers, stereoscopes and compound microscopes.</p>
                            </div>
                        </div>
                </div>
                <div className="carousel-container">
                    <div className="facility-carousel">
                        <Carousel>
                            <Carousel.Item className="carousel-item">
                                <div className="carousel-image-box">
                                    <img src="/images/deptpage_pics/AS/an_lab1.jpg" alt="AS Facility 1"/>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item className="carousel-item">
                                <div className="carousel-image-box">
                                    <img src="/images/deptpage_pics/AS/an_lab2.jpg" alt="AS Facility 2"/>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
                {/* Facility Section 2*/}
                <div className="altfacilitySection">
                        <div className="imageBox">
                            <img src="/images/dept_previews/ASPreview2.jpg" alt="Image" className="preview-image" />
                        </div>
                        <div className="content">
                            <div className="text">
                                <h2>Animal Anatomy and Physiology Laboratory</h2>
                                <p>The laboratory is a learning place for the different body systems and organs of domestic animals. Mounted skeleton and live specimens are available for demo in class.</p>
                            </div>
                        </div>
                </div>
                <div className="carousel-container">
                    <div className="facility-carousel">
                        <Carousel>
                            <Carousel.Item className="carousel-item">
                                <div className="carousel-image-box">
                                    <img src="/images/deptpage_pics/AS/aap_lab1.jpg" alt="AS Facility 1"/>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
                {/* Facility Section 3*/}
                <div className="facilitySection">
                        <div className="imageBox">
                            <img src="/images/dept_previews/ASPreview3.jpg" alt="Image" className="preview-image" />
                        </div>
                        <div className="content">
                            <div className="text">
                                <h2>Beef Cattle and Sheep Module</h2>
                                <p>The project occupies an area of about 40 hectares. It has a newly-constructed shed for animals, feedlot fattening and coral. The project is being operated as a breeding-fattening enterprise with 20 breeding cows which is used for instructional purposes.</p>
                            </div>
                        </div>
                </div>
                <div className="carousel-container">
                    <div className="facility-carousel">
                        <Carousel>
                            <Carousel.Item className="carousel-item">
                                <div className="carousel-image-box">
                                    <img src="/images/deptpage_pics/AS/bcmodule1.jpg" alt="AS Facility 1"/>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item className="carousel-item">
                                <div className="carousel-image-box">
                                    <img src="/images/deptpage_pics/AS/bcmodule2.jpg" alt="AS Facility 2"/>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
                {/* Facility Section 4*/}
                <div className="altfacilitySection">
                        <div className="imageBox">
                            <img src="/images/dept_previews/ASPreview4.jpg" alt="Image" className="preview-image" />
                        </div>
                        <div className="content">
                            <div className="text">
                                <h2>Meat Processing Laboratory</h2>
                                <p>The laboratory supports the activities in the subject Slaughter of Animals and Processing of their Products. It is provided with refrigerators, freezers, meat grinder, and cooking facilities/utensils.</p>
                            </div>
                        </div>
                </div>
                <div className="carousel-container">
                    <div className="facility-carousel">
                        <Carousel>
                            <Carousel.Item className="carousel-item">
                                <div className="carousel-image-box">
                                    <img src="/images/deptpage_pics/AS/mp_lab1.jpg" alt="AS Facility 1"/>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item className="carousel-item">
                                <div className="carousel-image-box">
                                    <img src="/images/deptpage_pics/AS/mp_lab2.jpg" alt="AS Facility 2"/>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
                {/* Facility Section 5*/}
                <div className="facilitySection">
                        <div className="imageBox">
                            <img src="/images/dept_previews/ASPreview5.jpg" alt="Image" className="preview-image" />
                        </div>
                        <div className="content">
                            <div className="text">
                                <h2>Poultry Module I</h2>
                                <p>The project supports laboratory activities in Poultry Production and student research. It is also one of the venues for in-campus major practice under poultry productionThe project occupies an area of about 0.70 hectares. It is engaged in the production of chicken eggs (6000 layers), and replacement pullets (3,000 per batch). The project supports laboratory activities in Poultry Production and student research. It is also one of the venues for in-campus major practice under poultry production.</p>
                            </div>
                        </div>
                </div>
                <div className="carousel-container">
                    <div className="facility-carousel">
                        <Carousel>
                            <Carousel.Item className="carousel-item">
                                <div className="carousel-image-box">
                                    <img src="/images/deptpage_pics/AS/pmodule1.jpg" alt="AS Facility 1"/>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item className="carousel-item">
                                <div className="carousel-image-box">
                                    <img src="/images/deptpage_pics/AS/pmodule2.jpg" alt="AS Facility 2"/>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item className="carousel-item">
                                <div className="carousel-image-box">
                                    <img src="/images/deptpage_pics/AS/pmodule3.jpg" alt="AS Facility 3"/>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
                {/* Facility Section 6*/}
                <div className="altfacilitySection">
                        <div className="imageBox">
                            <img src="/images/dept_previews/ASPreview6.jpg" alt="Image" className="preview-image" />
                        </div>
                        <div className="content">
                            <div className="text">
                                <h2>Broiler Production Project</h2>
                                <p>The project occupies an area of almost 2.0 hectares with tub tunnel ventilated houses with capacity of 50,000 heads per cycle. It is used primarily for in-campus major practice in poultry production.</p>
                            </div>
                        </div>
                </div>
                <div className="carousel-container">
                    <div className="facility-carousel">
                        <Carousel>
                            <Carousel.Item className="carousel-item">
                                <div className="carousel-image-box">
                                    <img src="/images/deptpage_pics/AS/bpp1.jpg" alt="AS Facility 1"/>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item className="carousel-item">
                                <div className="carousel-image-box">
                                    <img src="/images/deptpage_pics/AS/bpp2.jpg" alt="AS Facility 2"/>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item className="carousel-item">
                                <div className="carousel-image-box">
                                    <img src="/images/deptpage_pics/AS/bpp3.jpg" alt="AS Facility 3"/>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
                {/* Facility Section 7*/}
                <div className="facilitySection">
                        <div className="imageBox">
                            <img src="/images/dept_previews/ASPreview7.jpg" alt="Image" className="preview-image" />
                        </div>
                        <div className="content">
                            <div className="text">
                                <h2>Small Ruminant Center</h2>
                                <p>The small ruminant production project consists of various genotypes of goats and a few heads of island-born sheep. It is used primarily to support laboratory activities in Animal Science and as a venue for student research and major practice in small ruminant production.</p>
                            </div>
                        </div>
                </div>
                <div className="carousel-container">
                    <div className="facility-carousel">
                        <Carousel>
                            <Carousel.Item className="carousel-item">
                                <div className="carousel-image-box">
                                    <img src="/images/deptpage_pics/AS/src1.jpg" alt="AS Facility 1"/>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item className="carousel-item">
                                <div className="carousel-image-box">
                                    <img src="/images/deptpage_pics/AS/src2.jpg" alt="AS Facility 2"/>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item className="carousel-item">
                                <div className="carousel-image-box">
                                    <img src="/images/deptpage_pics/AS/src3.jpg" alt="AS Facility 3"/>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
                {/* Facility Section 8*/}
                <div className="altfacilitySection">
                        <div className="imageBox">
                            <img src="/images/dept_previews/ASPreview8.jpg" alt="Image" className="preview-image" />
                        </div>
                        <div className="content">
                            <div className="text">
                                <h2>Swine Production Project</h2>
                                <p>The project occupies an area of 0.50 hectare and is operated as a breeding-weanling-fattening enterprise, with 50 sow level. It supports the laboratory activities in Animal Science, and serves as venues for student research and in-campus major practice of swine production.</p>
                            </div>
                        </div>
                </div>
                <div className="carousel-container">
                    <div className="facility-carousel">
                        <Carousel>
                            <Carousel.Item className="carousel-item">
                                <div className="carousel-image-box">
                                    <img src="/images/deptpage_pics/AS/spp1.jpg" alt="AS Facility 1"/>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item className="carousel-item">
                                <div className="carousel-image-box">
                                    <img src="/images/deptpage_pics/AS/spp2.jpg" alt="AS Facility 2"/>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
                {/* Facility Section 9*/}
                <div className="facilitySection">
                        <div className="imageBox">
                            <img src="/images/dept_previews/ASPreview9.jpg" alt="Image" className="preview-image" />
                        </div>
                        <div className="content">
                            <div className="text">
                                <h2>Free Range Chicken Module</h2>
                                <p>The project consists of two different breeds of free range chicken (Rhode Island Red and Plymouth Rock) which primarily subsist on forage grasses and supplements of rice bran, occasional commercial feeds, and other alternative feed ingredients.</p>
                            </div>
                        </div>
                </div>
                <div className="carousel-container">
                    <div className="facility-carousel">
                        <Carousel>
                            <Carousel.Item className="carousel-item">
                                <div className="carousel-image-box">
                                    <img src="/images/deptpage_pics/AS/fcp1.jpg" alt="AS Facility 1"/>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item className="carousel-item">
                                <div className="carousel-image-box">
                                    <img src="/images/deptpage_pics/AS/fcp2.jpg" alt="AS Facility 2"/>
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
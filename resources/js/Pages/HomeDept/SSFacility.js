import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Carousel } from 'react-bootstrap';
import { Inertia } from '@inertiajs/inertia';
import BackToTopButton from '@/Components/BackToTopButton';

export default function SSFacility(props) {
    const handlePrevious = () => {
        Inertia.visit(route('crop.science'))
    }
    // const handleNext = () => {
    //     Inertia.visit(route('dept.name'))
    // }
    
    // Uncomment the function above to add new department

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
                        <h1 className="deptText">SOIL SCIENCE</h1>
                    </div>
                </div>
                
                {/* Logo Section */}
                <div className="logoSection">
                    <div className="fa-solid fa-circle-left prevButton" onClick={() => handlePrevious() }></div>
                    <div className="logoContainer">
                        <img src="/images/dept_logo/soil_sci.png" alt="SS Logo" className="logo" />
                    </div>
                    {/* <div className="fa-solid fa-circle-right nextButton" onClick={() => handleNext() }></div> */}
                    {/* Uncomment the code above to add new department */}
                </div>

                {/* Facility Section 1*/}
                <div className="facilitySection px-4">
                        <div className="imageBox">
                            <img src="/images/dept_previews/SSPreview1.jpg" alt="Image" className="preview-image" />
                        </div>
                        <div className="content">
                            <div className="text">
                                <h2>Laboratory Rooms 1 & 2 - Rm 103 & 104</h2>
                                <p>The two rooms are used for laboratory classes in Soil Science. All the laboratory experiments are conducted in these rooms for the basic soil science subjects, except for the field trials. Experiments on field are conducted at the experimental area (1.5 ha) and at the Compost Production Module area.</p>
                            </div>
                        </div>
                </div>
                <div className="carousel-container">
                    <div className="facility-carousel">
                        <Carousel>
                            <Carousel.Item className="carousel-item">
                                <div className="carousel-image-box">
                                    <img src="/images/deptpage_pics/SS/lab103_1.jpg" alt="SS Facility 1"/>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item className="carousel-item">
                                <div className="carousel-image-box">
                                    <img src="/images/deptpage_pics/SS/lab104_2.jpg" alt="SS Facility 2"/>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item className="carousel-item">
                                <div className="carousel-image-box">
                                    <img src="/images/deptpage_pics/SS/lab104_3.jpg" alt="SS Facility 3"/>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
                {/* Facility Section 2*/}
                <div className="altfacilitySection px-4">
                        <div className="imageBox">
                            <img src="/images/dept_previews/SSPreview2.jpg" alt="Image" className="preview-image" />
                        </div>
                        <div className="content">
                            <div className="alttext">
                                <h2>Soil Museum</h2>
                                <p>The museum is used particularly to showcase the different kinds of identified and classified rocks and minerals. Included in the museum are displays of ideal soil profiles in different soil orders found in the Philippines and other countries in Asia as well as samples of various soil structures and textures. The rocks and minerals serve as instructional materials for Soil Science subjects.</p>
                            </div>
                        </div>
                </div>
                <div className="carousel-container">
                    <div className="facility-carousel">
                        <Carousel>
                            <Carousel.Item className="carousel-item">
                                <div className="carousel-image-box">
                                    <img src="/images/deptpage_pics/SS/smr106_1.jpg" alt="SS Facility 1"/>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item className="carousel-item">
                                <div className="carousel-image-box">
                                    <img src="/images/deptpage_pics/SS/smr106_2.jpg" alt="SS Facility 2"/>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item className="carousel-item">
                                <div className="carousel-image-box">
                                    <img src="/images/deptpage_pics/SS/smr106_3.jpg" alt="SS Facility 3"/>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
                {/* Facility Section 3*/}
                <div className="facilitySection px-4">
                        <div className="imageBox">
                            <img src="/images/dept_previews/SSPreview3.jpg" alt="Image" className="preview-image" />
                        </div>
                        <div className="content">
                            <div className="text">
                                <h2>Soil Biology and Biotechnology Laboratory</h2>
                                <p>It is situated at the Central Laboratory of the College of Agriculture. This room is used for conducting laboratory classes in Soil Biology and Biotechnology (SOILS 3300) as well as a venue for students and faculty to perform their research and projects.</p>
                            </div>
                        </div>
                </div>
                <div className="carousel-container">
                    <div className="facility-carousel">
                        <Carousel>
                            <Carousel.Item className="carousel-item">
                                <div className="carousel-image-box">
                                    <img src="/images/deptpage_pics/SS/sbb_lab1.jpg" alt="SS Facility 1"/>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item className="carousel-item">
                                <div className="carousel-image-box">
                                    <img src="/images/deptpage_pics/SS/sbb_lab2.jpg" alt="SS Facility 2"/>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item className="carousel-item">
                                <div className="carousel-image-box">
                                    <img src="/images/deptpage_pics/SS/sbb_lab3.jpg" alt="SS Facility 3"/>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
                {/* Facility Section 4*/}
                <div className="altfacilitySection px-4">
                        <div className="imageBox">
                            <img src="/images/dept_previews/SSPreview4.jpg" alt="Image" className="preview-image" />
                        </div>
                        <div className="content">
                            <div className="alttext">
                                <h2>Soil and Plant Tissue Analytical Laboratory</h2>
                                <p>It is adjacent to the Soil Biology and Biotechnology Laboratory. This room is equipped with digital and analytical balances for weighing chemical reagents that are needed for soil and plant tissue analyses. A wooden cabinet can be found in this room where small laboratory tools for weighing and measurements are kept.</p>
                            </div>
                        </div>
                </div>
                <div className="carousel-container">
                    <div className="facility-carousel">
                        <Carousel>
                            <Carousel.Item className="carousel-item">
                                <div className="carousel-image-box">
                                    <img src="/images/deptpage_pics/SS/spta_lab1.jpg" alt="SS Facility 1"/>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item className="carousel-item">
                                <div className="carousel-image-box">
                                    <img src="/images/deptpage_pics/SS/spta_lab2.jpg" alt="SS Facility 2"/>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item className="carousel-item">
                                <div className="carousel-image-box">
                                    <img src="/images/deptpage_pics/SS/spta_lab3.jpg" alt="SS Facility 3"/>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
                {/* Facility Section 5*/}
                <div className="facilitySection px-4">
                        <div className="imageBox">
                            <img src="/images/dept_previews/SSPreview5.jpg" alt="Image" className="preview-image" />
                        </div>
                        <div className="content">
                            <div className="text">
                                <h2>Geographic Information System (GIS) Laboratory</h2>
                                <p>This room is equipped with a Smart TV with ready internet connection for class demonstration of the GIS mapping and application for the soil survey classes. It is equipped with a wall-mounted air conditioning system and chairs which are usually sufficient for soils science major students to conduct their GIS-related laboratory activities.</p>
                            </div>
                        </div>
                </div>
                <div className="carousel-container">
                    <div className="facility-carousel">
                        <Carousel>
                            <Carousel.Item className="carousel-item">
                                <div className="carousel-image-box">
                                    <img src="/images/deptpage_pics/SS/gis_lab1.jpg" alt="SS Facility 1"/>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item className="carousel-item">
                                <div className="carousel-image-box">
                                    <img src="/images/deptpage_pics/SS/gis_lab2.jpg" alt="SS Facility 2"/>
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
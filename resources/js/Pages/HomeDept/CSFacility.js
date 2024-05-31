import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Carousel } from 'react-bootstrap';
import { Inertia } from '@inertiajs/inertia';
import BackToTopButton from '@/Components/BackToTopButton';

export default function CSFacility(props) {
    const handlePrevious = () => {
        Inertia.visit(route('crop.protection'))
    }
    const handleNext = () => {
        Inertia.visit(route('soil.science'))
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
                        <h1 className="deptText">CROP SCIENCE</h1>
                    </div>
                </div>
                
                {/* Logo Section */}
                <div className="logoSection">
                    <div className="fa-solid fa-circle-left prevButton" onClick={() => handlePrevious() }></div>
                    <div className="logoContainer">
                        <img src="/images/dept_logo/crop_sci.png" alt="CS Logo" className="logo" />
                    </div>
                    <div className="fa-solid fa-circle-right nextButton" onClick={() => handleNext() }></div>
                </div>

                {/* Facility Section 1*/}
                <div className="facilitySection">
                        <div className="imageBox">
                            <img src="/images/dept_previews/CSPreview1.jpg" alt="Image" className="preview-image" />
                        </div>
                        <div className="content">
                            <div className="text">
                                <h2>Laboratory Rooms 111 and 112</h2>
                                <p>These laboratory rooms Laboratory Rooms serve as venues for the conduct of the following activities such as: weighing of plant samples, e.g.seed/grain samples; seed testing such as seed purity, germination, seed moisture, and seed vigor; and experiments on plant growth and development.</p>
                            </div>
                        </div>
                </div>
                <div className="carousel-container">
                    <div className="facility-carousel">
                        <Carousel>
                            <Carousel.Item className="carousel-item">
                                <div className="carousel-image-box">
                                    <img src="/images/deptpage_pics/CS/lab112_1.jpg" alt="CS Facility 1"/>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item className="carousel-item">
                                <div className="carousel-image-box">
                                    <img src="/images/deptpage_pics/CS/lab112_2.jpg" alt="CS Facility 2"/>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item className="carousel-item">
                                <div className="carousel-image-box">
                                    <img src="/images/deptpage_pics/CS/lab112_3.jpg" alt="CS Facility 3"/>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
                {/* Facility Section 2*/}
                <div className="altfacilitySection">
                        <div className="imageBox">
                            <img src="/images/dept_previews/CSPreview2.jpg" alt="Image" className="preview-image" />
                        </div>
                        <div className="content">
                            <div className="text">
                                <h2>Postharvest Laboratory</h2>
                                <p>Postharvest Laboratory is a specialized laboratory catering the conduct of researches and experiments on the storability of major perishables commodities mainly fruits and vegetables.</p>
                            </div>
                        </div>
                </div>
                <div className="carousel-container">
                    <div className="facility-carousel">
                        <Carousel>
                            <Carousel.Item className="carousel-item">
                                <div className="carousel-image-box">
                                    <img src="/images/deptpage_pics/CS/ph_lab1.jpg" alt="CS Facility 1"/>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item className="carousel-item">
                                <div className="carousel-image-box">
                                    <img src="/images/deptpage_pics/CS/ph_lab2.jpg" alt="CS Facility 2"/>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
                {/* Facility Section 3*/}
                <div className="facilitySection">
                        <div className="imageBox">
                            <img src="/images/dept_previews/CSPreview3.jpg" alt="Image" className="preview-image" />
                        </div>
                        <div className="content">
                            <div className="text">
                                <h2>Tissue Culture Laboratory</h2>
                                <p>Tissue Culture Laboratory is a specialized laboratory in which asexual propagation, through tissue culture, of major high value crops especially banana is being done.</p>
                            </div>
                        </div>
                </div>
                <div className="carousel-container">
                    <div className="facility-carousel">
                        <Carousel>
                            <Carousel.Item className="carousel-item">
                                <div className="carousel-image-box">
                                    <img src="/images/deptpage_pics/CS/tc_lab1.jpg" alt="CS Facility 1"/>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item className="carousel-item">
                                <div className="carousel-image-box">
                                    <img src="/images/deptpage_pics/CS/tc_lab2.jpg" alt="CS Facility 2"/>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item className="carousel-item">
                                <div className="carousel-image-box">
                                    <img src="/images/deptpage_pics/CS/tc_lab3.jpg" alt="CS Facility 3"/>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
                {/* Facility Section 4*/}
                <div className="altfacilitySection">
                        <div className="imageBox">
                            <img src="/images/dept_previews/CSPreview4.jpg" alt="Image" className="preview-image" />
                        </div>
                        <div className="content">
                            <div className="text">
                                <h2>Vegetable Production Module</h2>
                                <p>The vegetable production module has an area of almost 2.2 hectares planted with different kinds of lowland vegetables such as tomato, eggplant, pepper, luffa, mungbean, bitter gourd and stringbeans. The area is used by students for actual performance of exercises on the cultural management practices of each crop and venue for the major practice in vegetable production.</p>
                            </div>
                        </div>
                </div>
                <div className="carousel-container">
                    <div className="facility-carousel">
                        <Carousel>
                            <Carousel.Item className="carousel-item">
                                <div className="carousel-image-box">
                                    <img src="/images/deptpage_pics/CS/vp_module1.jpg" alt="CS Facility 1"/>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item className="carousel-item">
                                <div className="carousel-image-box">
                                    <img src="/images/deptpage_pics/CS/vp_module2.jpg" alt="CS Facility 2"/>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
                {/* Facility Section 5*/}
                <div className="facilitySection">
                        <div className="imageBox">
                            <img src="/images/dept_previews/CSPreview5.jpg" alt="Image" className="preview-image" />
                        </div>
                        <div className="content">
                            <div className="text">
                                <h2>Ornamental Plant Production Module</h2>
                                <p>Various plant collections in the module serve as instructional materials. The plants serve as guides in the identification of ornamental plants. Students also perform hands-on preparation of soil mixture, potting/repotting of ornamental plants, and vegetable/asexual plant propagation - marcotting, grafting, and stem/leaf cutting.</p>
                            </div>
                        </div>
                </div>
                <div className="carousel-container">
                    <div className="facility-carousel">
                        <Carousel>
                            <Carousel.Item className="carousel-item">
                                <div className="carousel-image-box">
                                    <img src="/images/deptpage_pics/CS/opp_module1.jpg" alt="CS Facility 1"/>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item className="carousel-item">
                                <div className="carousel-image-box">
                                    <img src="/images/deptpage_pics/CS/opp_module2.jpg" alt="CS Facility 2"/>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
                {/* Facility Section 6*/}
                <div className="altfacilitySection">
                        <div className="imageBox">
                            <img src="/images/dept_previews/CSPreview6.jpg" alt="Image" className="preview-image" />
                        </div>
                        <div className="content">
                            <div className="text">
                                <h2>Mixed Orchard and Plantation Crops Module</h2>
                                <p>The area is planted and maintained with different fruit trees like mango, rambutan, cacao, coffee, lanzones, and chico. The orchard serves as an instructional area, where students taking-up Fruits and Plantation Crops (HORT 3310) and Practices in Crop Production (CRSCI 1105) perform different actual hands-on cultural management practices such as maintenance and asexual propagation. It also serves as a germplasm collection for identification and propagation.</p>
                            </div>
                        </div>
                </div>
                <div className="carousel-container">
                    <div className="facility-carousel">
                        <Carousel>
                            <Carousel.Item className="carousel-item">
                                <div className="carousel-image-box">
                                    <img src="/images/deptpage_pics/CS/mopc_module1.jpg" alt="CS Facility 1"/>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item className="carousel-item">
                                <div className="carousel-image-box">
                                    <img src="/images/deptpage_pics/CS/mopc_module2.jpg" alt="CS Facility 2"/>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item className="carousel-item">
                                <div className="carousel-image-box">
                                    <img src="/images/deptpage_pics/CS/mopc_module3.jpg" alt="CS Facility 3"/>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
                {/* Facility Section 7*/}
                <div className="facilitySection">
                        <div className="imageBox">
                            <img src="/images/dept_previews/CSPreview7.jpg" alt="Image" className="preview-image" />
                        </div>
                        <div className="content">
                            <div className="text">
                                <h2>Rice Production Module</h2>
                                <p>During the dry season the land area for rice production reaches to about 8 hectares. Inbred and Hybrid varieties of palay and sometimes traditional varieties like pigmented and glutinous rice are planted in the module. The module employs conventional ways of farming, from land preparation to harvesting.</p>
                            </div>
                        </div>
                </div>
                <div className="carousel-container">
                    <div className="facility-carousel">
                        <Carousel>
                            <Carousel.Item className="carousel-item">
                                <div className="carousel-image-box">
                                    <img src="/images/deptpage_pics/CS/rp_module1.jpg" alt="CS Facility 1"/>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item className="carousel-item">
                                <div className="carousel-image-box">
                                    <img src="/images/deptpage_pics/CS/rp_module2.jpg" alt="CS Facility 2"/>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item className="carousel-item">
                                <div className="carousel-image-box">
                                    <img src="/images/deptpage_pics/CS/rp_module3.jpg" alt="CS Facility 3"/>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
                {/* Facility Section 8*/}
                <div className="altfacilitySection">
                        <div className="imageBox">
                            <img src="/images/dept_previews/CSPreview8.jpg" alt="Image" className="preview-image" />
                        </div>
                        <div className="content">
                            <div className="text">
                                <h2>RM-CARES</h2>
                                <p>Also known as Ramon Magsaysay Center for Agricultural Resources and Environment Studies, it leads in the pursuit of environmentally sustainable and best practice technologies in waste and resource management and organic farming in CLSU and in the region. It undertakes rigorous capacity building of all the stakeholders including students through training and immersions to build their competencies and consciousness in organic farming practices.</p>
                            </div>
                        </div>
                </div>
                <div className="carousel-container">
                    <div className="facility-carousel">
                        <Carousel>
                            <Carousel.Item className="carousel-item">
                                <div className="carousel-image-box">
                                    <img src="/images/deptpage_pics/CS/rmc1.jpg" alt="CS Facility 1"/>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item className="carousel-item">
                                <div className="carousel-image-box">
                                    <img src="/images/deptpage_pics/CS/rmc2.jpg" alt="CS Facility 2"/>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item className="carousel-item">
                                <div className="carousel-image-box">
                                    <img src="/images/deptpage_pics/CS/rmc3.jpg" alt="CS Facility 3"/>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
                {/* Facility Section 9*/}
                <div className="facilitySection">
                        <div className="imageBox">
                            <img src="/images/dept_previews/CSPreview9.jpg" alt="Image" className="preview-image" />
                        </div>
                        <div className="content">
                            <div className="text">
                                <h2>PhilsCAT</h2>
                                <p>Philippine-Sino Center For Agricultural Technology or PhilSCAT, focuses on appropriate aspects of agricultural mechanization, hybrid rice and biogas technologies through research, development, capability building and knowledge management.</p>
                            </div>
                        </div>
                </div>
                <div className="carousel-container">
                    <div className="facility-carousel">
                        <Carousel>
                            <Carousel.Item className="carousel-item">
                                <div className="carousel-image-box">
                                    <img src="/images/deptpage_pics/CS/philscat1.jpg" alt="CS Facility 1"/>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item className="carousel-item">
                                <div className="carousel-image-box">
                                    <img src="/images/deptpage_pics/CS/philscat2.jpg" alt="CS Facility 2"/>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item className="carousel-item">
                                <div className="carousel-image-box">
                                    <img src="/images/deptpage_pics/CS/philscat3.jpg" alt="CS Facility 3"/>
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
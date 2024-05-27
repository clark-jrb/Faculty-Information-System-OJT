import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Authenticated from '@/Layouts/Authenticated';
import BackToTopButton from '@/Components/BackToTopButton';
import FacilityModal from '@/Components/FacilityModal';

export default function Home(props) {
    const icons = [
        { src: '/images/dept_logo/agri_extension.png', text: 'Agricultural Extension' },
        { src: '/images/dept_logo/agri_management.png', text: 'Agri-Management' },
        { src: '/images/dept_logo/animal_sci.png', text: 'Animal Science' },
        { src: '/images/dept_logo/crop_protect.png', text: 'Crop Protection' },
        { src: '/images/dept_logo/crop_sci.png', text: 'Crop Science' },
        { src: '/images/dept_logo/soil_sci.png', text: 'Soil Science' },
    ];

    const [showModal, setShowModal] = useState(false);
    const [selectedFacility, setSelectedFacility] = useState(null);

    const handleCloseModal = () => setShowModal(false);
    const handleOpenModal = (facility) => {
        setSelectedFacility(facility);
        setShowModal(true);
    };

    const uniqueTitles = [
        "DAE Laboratory 1 & 2",
        "Agribusiness Computer Laboratory",
        "Animal Nutrition Laboratory",
        "Animal Anatomy and Physiology",
        "Beef Cattle and Sheep Module",
        "Meat Processing Laboratory",
        "Poultry Module I",
        "Broiler Production Project",
        "Small Ruminant Center",
        "Swine Production Project",
        "Free Range Chicken Module",
        "Plant Pathology Laboratory 1 & 2",
        "Entomology Laboratory 1 & 2",
        "Insect Taxonomy Laboratory",
        "The Preparation Room",
        "Plant Health Clinic (PHC)",
        "Laboratory Rooms 111 and 112",
        "Postharvest Laboratory",
        "Tissue Culture Laboratory",
        "Vegetable Production Module",
        "Ornamental Plant Production Module",
        "Mixed Orchard and Plantation Crops Module",
        "Rice Production Module",
        "RM-CARES",
        "PhilsCAT",
        "Laboratory Rooms 1 & 2 - Rm 103 & 104",
        "Soil Museum",
        "Soil Biology and Biotechnology Laboratory",
        "Soil and Plant Tissue Analytical Laboratory",
        "Geographic Information System (GIS) Laboratory",
    ];

    const uniqueDescriptions = [
        "These serve as venues for practical and hands-on activities of the Agricultural Extension major students, such as conduct of extension communication activities, technology protocol demonstrations, and role playing of extension modalities/strategies like training, focus group discussion, key informant interviews, field/action research interviews, and development of knowledge products.",
        "The computer laboratory is basically for instructional purposes, where statistical as well as economics and financial analyses can be illustrated to students using available software. It also provides services to students for data encoding and analyses whenever no classes are held in the room.",
        "The laboratory supports the practical class works in animal science subjects. At present, it is equipped with facilities for moisture analysis, crude fat and feed microscopy. It has a set of weighing scales, feed mixers, stereoscopes and compound microscopes.",
        "The laboratory is a learning place for the different body systems and organs of domestic animals. Mounted skeleton and live specimens are available for demo in class.",
        "The project occupies an area of about 40 hectares. It has a newly-constructed shed for animals, feedlot fattening and coral. The project is being operated as a breeding-fattening enterprise with 20 breeding cows which is used for instructional purposes.",
        "The laboratory supports the activities in the subject Slaughter of Animals and Processing of their Products. It is provided with refrigerators, freezers, meat grinder, and cooking facilities/utensils.",
        "The project supports laboratory activities in Poultry Production and student research. It is also one of the venues for in-campus major practice under poultry productionThe project occupies an area of about 0.70 hectares. It is engaged in the production of chicken eggs (6000 layers), and replacement pullets (3,000 per batch). The project supports laboratory activities in Poultry Production and student research. It is also one of the venues for in-campus major practice under poultry production.",
        "The project occupies an area of almost 2.0 hectares with tub tunnel ventilated houses with capacity of 50,000 heads per cycle. It is used primarily for in-campus major practice in poultry production.",
        "The small ruminant production project consists of various genotypes of goats and a few heads of island-born sheep. It is used primarily to support laboratory activities in Animal Science and as a venue for student research and major practice in small ruminant production.",
        "The project occupies an area of 0.50 hectare and is operated as a breeding-weanling-fattening enterprise, with 50 sow level. It supports the laboratory activities in Animal Science, and serves as venues for student research and in-campus major practice of swine production .",
        "The project consists of two different breeds of free range chicken (Rhode Island Red and Plymouth Rock) which primarily subsist on forage grasses and supplements of rice bran, occasional commercial feeds, and other alternative feed ingredients.",
        "Laboratory classes for basic and major courses in Crop Protection are conducted in this room.",
        "The Entomology Lab 1 is used for a class with a small group of students. On the other hand, Entomology Lab 2 can occupy a bigger class with 25-30 students. Both laboratory rooms have a storage room used for keeping the visual aids, insect collections and other instructional materials used for Crop Protection basic and major courses and serve as working areas for the laboratory classes of students enrolled in crop protection subjects.",
        "This room is provided to the students who are interested in the field of insect taxonomy. Inside the room is a faculty office, wall fans are available to provide comfort to students.",
        "This room caters the needs of the laboratory activities of students in the department. Such activities include preparation and sterilization of culture media, preparation of reagents and other materials, washing and sterilization of glassware, and issuance of microscopes.",
        "Also known as Plant Pests and Diseases Clinic Surveillance Research Center (PPDCSRC), focuses on the holistic and multidisciplinary approach in plant health by ensuring the development of nature-positive, innovative, and sensible solutions to attain plant health and contribute to sustainable food systems.",
        "These laboratory rooms Laboratory Rooms serve as venues for the conduct of the following activities such as: weighing of plant samples, e.g.seed/grain samples; seed testing such as seed purity, germination, seed moisture, and seed vigor; and experiments on plant growth and  development.",
        "Postharvest Laboratory is a specialized laboratory catering the conduct of researches and experiments on the storability of major perishables commodities mainly fruits and vegetables.",
        "Tissue Culture Laboratory is a specialized laboratory in which asexual propagation, through tissue culture, of major high value crops especially banana is being done.",
        "The vegetable production module has an area of almost 2.2 hectares planted with different kinds of lowland vegetables such as tomato, eggplant, pepper, luffa, mungbean, bitter gourd and stringbeans. The area is used by students for actual performance of exercises on the cultural management practices of each crop and venue for the major practice in vegetable production.",
        "Various plant collections in the module serve as instructional materials. The plants serve as guides in the identification of ornamental plants. Students also perform hands-on preparation of soil mixture, potting/repotting of ornamental plants, and vegetable/asexual plant propagation (marcotting, grafting, and stem/leaf cutting).",
        "The area is planted and maintained with different fruit trees like mango, rambutan, cacao, coffee, lanzones, and chico. The orchard serves as an instructional area, where students taking-up Fruits and Plantation Crops (HORT 3310) and Practices in Crop Production (CRSCI 1105) perform different actual hands-on cultural management practices such as maintenance and asexual propagation. It also serves as a germplasm collection for identification and propagation.",
        "During the dry season the land area for rice production reaches to about 8 hectares. Inbred and Hybrid varieties of palay and sometimes traditional varieties like pigmented and glutinous rice are planted in the module. The module employs conventional ways of farming, from land preparation to harvesting.",
        "Also known as Ramon Magsaysay  Center for Agricultural Resources and Environment Studies, it leads in the pursuit of environmentally sustainable and best practice technologies in waste and resource management and organic farming in CLSU and in the region. It undertakes rigorous capacity building of all the stakeholders including students through training and immersions to build their competencies and consciousness in organic farming practices.",
        "PhilSCAT focuses on appropriate aspects of agricultural mechanization, hybrid rice and biogas technologies through research, development, capability building and knowledge management.",
        "The two rooms are used for laboratory classes in Soil Science. All the laboratory experiments are conducted in these rooms for the basic soil science subjects, except for the field trials. Experiments on field are conducted at the experimental area (1.5 ha) and at the Compost Production Module area.",
        "The museum is used particularly to showcase the different kinds of identified and classified rocks and minerals.Included in the museum are displays of ideal soil profiles in different soil orders found in the Philippines and other countries in Asia as well as samples of various soil structures and textures. The rocks and minerals serve as instructional materials for Soil Science subjects.",
        "It is situated at the Central Laboratory of the College of Agriculture. This room is used for conducting laboratory classes in Soil Biology and Biotechnology (SOILS 3300) as well as a venue for students and faculty to perform their research and projects.",
        "It is adjacent to the Soil Biology and Biotechnology Laboratory. This room is equipped with digital and analytical balances for weighing chemical reagents that are needed for soil and plant tissue analyses. A wooden cabinet can be found in this room where small laboratory tools for weighing and measurements are kept.",
        "This room is equipped with a Smart TV with ready internet connection for class demonstration of the GIS mapping and application for the soil survey classes. It is equipped with a wall-mounted air conditioning system and chairs which are usually sufficient for soils science major students to conduct their GIS-related laboratory activities.",
    ];

    const facilities = [];
    for (let i = 1; i <= 30; i++) {
        const facility = {
            title: uniqueTitles[i],
            images: [`/images/sample${i}_1.jpg`, `/images/sample${i}_2.jpg`, `/images/sample${i}_3.jpg`],
            description: uniqueDescriptions[i % uniqueDescriptions.length],
        };
        facilities.push(facility);
    }

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
                    {/* DAE */}
                    <div>
                        <div className="AEHeader">
                            <h2 className='AETitle'>Agricultural Extension</h2>
                        </div>
                        <div className='facilitiesContainer'>
                            <div className="DAE-facility-tables row">
                                <div className="col-md-4">
                                    <div className="facility-item">
                                        <div className="DAE-image-box">
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
                            <div className="DAM-facility-tables row">
                                <div className="col-md-4">
                                    <div className="facility-item">
                                        <div className="DAM-image-box">
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

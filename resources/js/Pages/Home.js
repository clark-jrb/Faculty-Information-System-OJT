import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import BackToTopButton from '@/Components/BackToTopButton';
import { InertiaLink } from '@inertiajs/inertia-react';

export default function Home(props) {
    const icons = [
        { src: '/images/dept_logo/agri_extension.png', text: 'Agricultural Extension', link: 'agricultural.extension'},
        { src: '/images/dept_logo/agri_management.png', text: 'Agri-Management', link: 'agri.management' },
        { src: '/images/dept_logo/animal_sci.png', text: 'Animal Science', link: 'animal.science' },
        { src: '/images/dept_logo/crop_protect.png', text: 'Crop Protection', link: 'crop.protection' },
        { src: '/images/dept_logo/crop_sci.png', text: 'Crop Science', link: 'crop.science' },
        { src: '/images/dept_logo/soil_sci.png', text: 'Soil Science', link: 'soil.science' },
    ];

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
        >
            <div>
                {/* Background Image Section */}
                <div className="backgroundSection" style={{ backgroundImage: 'url("/images/logos_bgs/home_bg.jpg")' }}>
                    <div className="bg-dark-opacity"></div>
                    <div style={{ zIndex: '2' }}>
                        <div className='d-flex align-items-start'>
                            <img src="/images/logos_bgs/clsu_logo.png" alt="University Logo" className="univLogo" />
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
                                <InertiaLink href={route(icon.link)}>
                                    <img src={icon.src} alt={`icon${index + 1}`} className="icon" />
                                </InertiaLink>
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
                        <img src="/images/logos_bgs/agri_logo.png" alt="Logo" />
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

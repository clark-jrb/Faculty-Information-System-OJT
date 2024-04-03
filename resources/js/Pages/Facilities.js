import React, { useState } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import facility1 from '../../../public/images/facility1.jpg'
import facility2 from '../../../public/images/facility2.jpg'
import facility3 from '../../../public/images/facility3.jpg'
import Modal1 from '@/Components/Modals/Modal1';
import Modal2 from '@/Components/Modals/Modal2';
import Modal3 from '@/Components/Modals/Modal3';

export default function Facilities(props) {
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

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
        >
            <div className="lists-content pt-4">
                <div className="lists-container px-4 pt-3">
                    
                    <div className="title-filters-legend py-1 d-flex">
                        <div className="facility-title">
                            <p className="m-0">Facilities</p>
                        </div>
                    </div>

                    <div className="facility-tables row">
                        <div className="col-md-4">
                            <div className="facility-item">
                                <div className="image-box">
                                    <div className="image-overlay" onClick={handleOpenModal1}></div> 
                                    <img src={facility1} alt="Facility 1"/>
                                    <p className="facility-text">Facility 1</p>
                                    <Modal1 show={showModal1} handleClose={handleCloseModal1} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="facility-item">
                                <div className="image-box">
                                    <div className="image-overlay" onClick={handleOpenModal2}></div> 
                                    <img src={facility2} alt="Facility 2"/>
                                    <p className="facility-text">Facility 2</p>
                                    <Modal2 show={showModal2} handleClose={handleCloseModal2} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="facility-item">
                                <div className="image-box">
                                    <div className="image-overlay" onClick={handleOpenModal3}></div> 
                                    <img src={facility3} alt="Facility 3"/>
                                    <p className="facility-text">Facility 3</p>
                                    <Modal3 show={showModal3} handleClose={handleCloseModal3} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Authenticated>
    );
}

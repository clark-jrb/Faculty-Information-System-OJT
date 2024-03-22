import React, { useState } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import sample1 from '../../../public/images/sample1.jpg'
import sample2 from '../../../public/images/sample2.jpg'
import sample3 from '../../../public/images/sample3.jpg'
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
                                <div className="image-box"  >
                                    <div class="image-overlay" onClick={handleOpenModal1}></div> 
                                    <img src={facility1} alt="Facility 1"/>
                                    <p className="facility-text">Facility 1</p>
                                    <Modal1 show={showModal1} handleClose={handleCloseModal1} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="facility-item">
                                <div className="image-box" data-image="/img/facility2.jpg" data-id="exampleModal2">
                                    <button onClick={handleOpenModal2} className='btn btn-primary'>Open Modal</button>
                                    <Modal2 show={showModal2} handleClose={handleCloseModal2} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="facility-item">
                                <div className="image-box" data-image="/img/facility3.jpg" data-id="exampleModal3">
                                    <button onClick={handleOpenModal3} className='btn btn-primary'>Open Modal</button>
                                    <Modal3 show={showModal3} handleClose={handleCloseModal3} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- 1 --> */}
            {/* <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel1">Facility 1</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body">
                            <div id="carouselExampleControls1" className="carousel slide">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={sample1} className="d-block w-100" alt="Facility 1"/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={sample2} className="d-block w-100" alt="Facility 2"/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={sample3} className="d-block w-100" alt="Facility 3"/>
                                    </div>
                                </div>
                                <a className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </a>
                                <a className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </a>
                            </div>
                        </div>

                        <div className="facility-info text-center">
                            <h6>Title: Facility 1</h6>
                            <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porta nisl vel ex condimentum, non fermentum magna congue. Sed venenatis lorem vitae quam consequat, id malesuada velit fringilla.</p>
                            <p>Location: 123 Example Street, City, Country</p>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* <!-- 2 --> */}
            {/* <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel2">Facility 2</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div id="carouselExampleControls2" className="carousel slide">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={sample2} className="d-block w-100" alt="Facility 1"/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={sample3} className="d-block w-100" alt="Facility 2"/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={sample1} className="d-block w-100" alt="Facility 3"/>
                                    </div>
                                </div>
                                <a className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </a>
                                <a className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </a>
                            </div>
                        </div>
                        <div className="facility-info text-center">
                            <h6>Title: Facility 2</h6>
                            <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porta nisl vel ex condimentum, non fermentum magna congue. Sed venenatis lorem vitae quam consequat, id malesuada velit fringilla.</p>
                            <p>Location: 123 Example Street, City, Country</p>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* <!-- 3 --> */}
            {/* <div className="modal fade" id="exampleModal3" tabIndex="-1" aria-labelledby="exampleModalLabel3" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel3">Facility 3</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div id="carouselExampleControls3" className="carousel slide">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={sample3} className="d-block w-100" alt="Facility 1"/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={sample1} className="d-block w-100" alt="Facility 2"/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={sample2} className="d-block w-100" alt="Facility 3"/>
                                    </div>
                                </div>
                                <a className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </a>
                                <a className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </a>
                            </div>
                        </div>
                        <div className="facility-info text-center">
                            <h6>Title: Facility 3</h6>
                            <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porta nisl vel ex condimentum, non fermentum magna congue. Sed venenatis lorem vitae quam consequat, id malesuada velit fringilla.</p>
                            <p>Location: 123 Example Street, City, Country</p>
                        </div>
                    </div>
                </div>
            </div> */}
        </Authenticated>
    );
}

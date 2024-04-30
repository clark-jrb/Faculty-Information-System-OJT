import React from 'react';
import { Modal, Carousel } from 'react-bootstrap';
import sample1 from '../../../../public/images/sample1.jpg'
import sample2 from '../../../../public/images/sample2.jpg'
import sample3 from '../../../../public/images/sample3.jpg'

export default function Modal3 ({ show, handleClose }) {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton className="modal-header">
                <Modal.Title className="modal-title">Facility 3</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Carousel>
                    <Carousel.Item className="carousel-item">
                        <img
                            className="d-block w-100 carousel-image"
                            src={sample3}
                            alt="Facility 1"
                        />
                    </Carousel.Item>
                    <Carousel.Item className="carousel-item">
                        <img
                            className="d-block w-100 carousel-image"
                            src={sample1}
                            alt="Facility 2"
                        />
                    </Carousel.Item>
                    <Carousel.Item className="carousel-item">
                        <img
                            className="d-block w-100 carousel-image"
                            src={sample2}
                            alt="Facility 3"
                        />
                    </Carousel.Item>
                </Carousel>
                <div className="facility-info text-center">
                    <h6>Title: Facility 3</h6>
                    <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porta nisl vel ex condimentum, non fermentum magna congue. Sed venenatis lorem vitae quam consequat, id malesuada velit fringilla.</p>
                    <p>Location: 123 Example Street, City, Country</p>
                </div>
            </Modal.Body>

        </Modal>
        
    );
};


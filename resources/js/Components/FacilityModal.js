import React from 'react';
import { Modal, Carousel } from 'react-bootstrap';

export default function FacilityModal({ show, handleClose, facility }) {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton className="modal-header">
                <Modal.Title className="modal-title">{facility.title}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Carousel>
                    {/* {facility && 
                    facility.images.map((image, index) => (
                        <Carousel.Item key={index} className="carousel-item">
                            <img
                                className="d-block w-100 carousel-image"
                                src={image}
                                alt={`Facility ${index + 1}`}
                            />
                        </Carousel.Item>
                    ))} */}
                </Carousel>
                <div className="facility-info text-center">
                    <h6>Title: {facility.title}</h6>
                    <p>Description: {facility.description}</p>
                </div>
            </Modal.Body>

        </Modal>
    );
};
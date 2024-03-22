import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function Modal2 ({ show, handleClose }) {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Facility 2</Modal.Title>
                {/* <h5 className="modal-title" id="exampleModalLabel1">Facility 1</h5> */}
            </Modal.Header>

            <Modal.Body>
                <p>Modal content goes here.</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
        
    );
};


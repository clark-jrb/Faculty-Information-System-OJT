import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const MyModal = ({ show, handleClose }) => {
    return (
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Modal Title</Modal.Title>
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

export default MyModal;

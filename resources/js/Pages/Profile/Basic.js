import React, { useState } from 'react';
import Profile from '../Profile';
import MyModal from '@/Components/Modal';

export default function Basic(){
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => setShowModal(false);
    const handleOpenModal = () => setShowModal(true);
    return (
        <Profile>
            <div className="p-3 basic-content">
                <div className="title-info-content pb-2">
                    <p className="m-0">Basic Information</p>
                </div>

                <div>
                    <button onClick={handleOpenModal} className='btn btn-primary'>Open Modal</button>
                    <MyModal show={showModal} handleClose={handleCloseModal} />
                </div>
            </div>
        </Profile>
    )
}
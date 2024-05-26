import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { addField, handleFieldChange } from '@/utils/forms';
import Label from '@/Components/Label';
import { Form } from 'react-bootstrap';
import { Inertia } from '@inertiajs/inertia';

export default function Work ({ data, acadWork_data, setData, post }) {
    const [showModalWork, setShowModalWork] = useState(false);
    const [showModalWorkUpd, setShowModalWorkUpd] = useState(false);
    const [showModalDel, setShowModalDel] = useState(false);
    const [selectedID, setSelectedID] = useState(null);
    const [selectedData, setSelectedData] = useState({
        academic_work: []
    });

    // handlel change fields
        const handleAddWorkField = () => {
            addField(
                'academic_work',
                { position: '', institution: '', date: '', location: '' },
                setData,
                data
            );
        };

        const handleWorkChange = (e, index) => {
            handleFieldChange(
                'academic_work',
                e,
                index,
                setData,
                data
            );
        };

        const handleWorkUpdateChange = (e, index) => {
            handleFieldChange(
                'academic_work',
                e,
                index,
                setSelectedData,
                selectedData
            );
        };

    
    // for handle submit buttons
        const handleWorkSubmit = (e) => {
            e.preventDefault();
            // console.log(data);
            post(route('add.work', data))
            setShowModalWork(false)

            setData(({
                academic_work: [{ 
                    position: '', 
                    institution: '', 
                    date: '', 
                    location: ''
                }],
            }))
        };

        const handleUpdWorkSubmit = (e) => {
            e.preventDefault();
            // console.log(selectedData);
            Inertia.post(route('update.work', selectedData))

            setShowModalWorkUpd(false)
        };

        const handleDelete = () => {
            Inertia.delete(route('destroy.work', { id: selectedID }))
            setShowModalDel(false)
        }

    // For close modals
        const handleCloseModalWork = () => { 
            setShowModalWork(false) 
        }
        
        const handleCloseModalDel = () => { setShowModalDel(false) }

        const handleCloseModalWorkUpd = () => { 
            setShowModalWorkUpd(false) 
        }


    // for select data by ID
        const handleSelectIdEduc = (e) => {
            setSelectedID(e)
            setShowModalWorkUpd(true)
        }

    // find specific data
        const selectWork = acadWork_data.find(work => work.id === selectedID)

    // runs every time whenever selectedEduc changes
        useEffect(() => {
            if (selectWork) {
                setSelectedData({
                    academic_work: [{
                        id: selectWork.id,
                        position: selectWork.position,
                        institution: selectWork.work_loc,
                        date: selectWork.date,
                        location: selectWork.location
                    }]
                });
            }
        }, [selectWork]);

    // confirm delete if delete btn is selected
        const handleConfirmDel = (id) => {
            setSelectedID(id)
            setShowModalDel(true)
        }

    return (
        <>
            {/* ADD MODAL  */}
            <Modal className="academic-modal" show={showModalWork} onHide={handleCloseModalWork} centered size='xl'>
                    <Modal.Header className='educ-modal-head py-2'>
                        <div className="acf-title m-2 px-3" style={{ color: 'white' }}>
                            Add Work Experience
                        </div>
                        <button className='p-1 px-3 ms-auto' onClick={() => handleCloseModalWork()}>
                            <i className="fa-solid fa-xmark fa-xl"></i>
                        </button>
                    </Modal.Header>
                <form onSubmit={handleWorkSubmit}>
                    <Modal.Body>
                        {data.academic_work.map((academicWork, index) => (
                            <div className="acad-educ-flex d-flex py-2" key={index}>
                                <div className="flex-fill p-2">
                                    <Label forInput="institution" value="Institution/School:" />
                                    <Form.Control
                                        type="text"
                                        name="institution"
                                        placeholder="Institution/School"
                                        value={academicWork.institution}
                                        onChange={(e) => handleWorkChange(e, index)}
                                        required
                                    />
                                </div>

                                <div className="flex-fill p-2">
                                    <Label forInput="location" value="Location:" />
                                    <Form.Control
                                        type="text"
                                        name="location"
                                        placeholder="Location"
                                        value={academicWork.location}
                                        onChange={(e) => handleWorkChange(e, index)}
                                        required
                                    />
                                </div>

                                <div className="flex-fill p-2">
                                    <Label forInput="date" value="Year Graduated:" />
                                    <Form.Control   
                                        type="text"
                                        name="date"
                                        placeholder="YYYY"
                                        value={academicWork.date}
                                        onChange={(e) => handleWorkChange(e, index)}
                                        required
                                    />
                                </div>

                                <div className="flex-fill p-2">
                                    <Label forInput="position" value="Position:" />
                                    <Form.Control
                                        type="text"
                                        name="position"
                                        placeholder="Position"
                                        value={academicWork.position}
                                        onChange={(e) => handleWorkChange(e, index)}
                                        required
                                    />
                                </div>

                                <div className="remove-field-btn flex-fill p-2 d-flex align-items-end ">
                                    {data.academic_work.length > 1 && ( // Only render the remove button if the academic background is not empty
                                        <button type="button" className="px-2 py-1" onClick={() => setData(prevData => ({
                                        ...prevData,
                                        academic_work: prevData.academic_work.filter((_, i) => i !== index),
                                        }))}>
                                            <i className="fa-solid fa-minus"></i>
                                        </button>
                                    )}
                                </div>
                                
                            </div>
                        ))}
                        {/* Add button */}
                        <div className="add-field-container w-100 px-2">
                            <button type="button" className="add-field-btn w-100 py-2" onClick={handleAddWorkField}>
                                <i className="fa-solid fa-plus"></i> Add work experience
                            </button>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className='add-btn p-1 px-2' type='submit'>
                            <i className="fa-regular fa-plus"></i> Add
                        </button>
                    </Modal.Footer>
                </form>
            </Modal>

            {/* UPDATE MODAL  */}
            <Modal className="academic-modal" show={showModalWorkUpd} onHide={handleCloseModalWorkUpd} centered size='xl' backdrop='static'>
                    <Modal.Header className='educ-modal-head py-2'>
                        <div className="acf-title m-2 px-3" style={{ color: 'white' }}>
                            Edit Work Experience
                        </div>
                        <button className='p-1 px-3 ms-auto' onClick={() => handleCloseModalWorkUpd()}>
                            <i className="fa-solid fa-xmark fa-xl"></i>
                        </button>
                    </Modal.Header>
                <form onSubmit={handleUpdWorkSubmit}>
                    <Modal.Body>
                        {selectedData.academic_work.map((academicWork, index) => (
                            <div className="acad-educ-flex d-flex py-2" key={index}>
                                <div className="flex-fill p-2">
                                    <Label forInput="institution" value="Institution/School:" />
                                    <Form.Control
                                        type="text"
                                        name="institution"
                                        placeholder="Institution/School"
                                        value={academicWork.institution}
                                        onChange={(e) => handleWorkUpdateChange(e, index)}
                                    />
                                </div>

                                <div className="flex-fill p-2">
                                    <Label forInput="location" value="Location:" />
                                    <Form.Control
                                        type="text"
                                        name="location"
                                        placeholder="Location"
                                        value={academicWork.location}
                                        onChange={(e) => handleWorkUpdateChange(e, index)}
                                    />
                                </div>

                                <div className="flex-fill p-2">
                                    <Label forInput="date" value="Year Graduated:" />
                                    <Form.Control   
                                        type="text"
                                        name="date"
                                        placeholder="YYYY"
                                        value={academicWork.date}
                                        onChange={(e) => handleWorkUpdateChange(e, index)}
                                    />
                                </div>

                                <div className="flex-fill p-2">
                                    <Label forInput="position" value="Position:" />
                                    <Form.Control
                                        type="text"
                                        name="position"
                                        placeholder="Position"
                                        value={academicWork.position}
                                        onChange={(e) => handleWorkUpdateChange(e, index)}
                                    />
                                </div>
                                
                            </div>
                        ))}
                    </Modal.Body>
                    <Modal.Footer>
                        <button className='add-btn p-1 px-2' type='submit' style={{ fontSize: 'small' }}>
                            <i className="fa-regular fa-pen-to-square"></i> Update
                        </button>
                    </Modal.Footer>
                </form>
            </Modal>

            {/* DELETE MODAL  */}
            <Modal show={showModalDel} onHide={handleCloseModalDel} centered backdrop='static'>
                <Modal.Body>
                    Are you sure you want to delete this?
                </Modal.Body>
                <Modal.Footer>
                    <div className="d-flex w-100 justify-content-center align-items-center gap-3">
                        <button className='yes-btn p-1 px-3' onClick={() => handleDelete()}>Yes</button>
                        <button className='no-btn p-1 px-3' onClick={() => handleCloseModalDel()}>No</button>
                    </div>
                </Modal.Footer>
            </Modal>

            <div className="acad-work-content flex-fill w-50">
                <div className="title-info-content-acad pb-2">
                    <p className="m-0">
                        Work Experience
                        &nbsp;
                        {acadWork_data.length > 0 ? '' : 
                        <>
                            <i className="fa-solid fa-circle-exclamation fa-sm" style={{ color: 'var(--yellow)'}}></i>
                        </>}
                    </p>
                    <div className='edit-profile-container ms-auto'>
                        <div className='d-flex gap-2 align-items-center'>
                            <button className='edit-profile p-1 px-2' onClick={() => setShowModalWork(true)}>
                                <i className="fa-regular fa-plus"></i> Add
                            </button>
                        </div>
                    </div>
                </div>
                <div className="datas-content-container">
                    {acadWork_data.map((work, index) => (
                        <div className="p-3" key={index} style={{ borderBottom: '#ccc 1px solid', position: 'relative' }}>
                            <div className="bg-data"></div>

                            <div className='for-edit-btn d-flex flex-column'>
                                <button className='edit-educ-btn p-1 px-2' onClick={() => handleSelectIdEduc(work.id)}>
                                    <i className="fa-regular fa-pen-to-square fa-lg"></i>
                                </button>
                                <button className='p-1 px-2' onClick={() => handleConfirmDel(work.id)}>
                                    <i className="fa-solid fa-trash-can fa-lg"></i>
                                </button>
                            </div>

                            <div className="acad-row1">
                                <p className="m-0">{work.position}</p>
                            </div>

                            <div className="acad-row2 py-2">
                                <p className="m-0">{work.work_loc}</p>
                            </div>

                            <div className="d-flex gap-3">
                                <div>
                                    <i className="fa-regular fa-calendar-check"></i>
                                    &nbsp;
                                    {work.date}
                                </div>
                                <div>
                                    <i className="fa-solid fa-location-dot"></i>
                                    &nbsp;
                                    {work.location}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
                
            </div>
        </>
        
    )
}
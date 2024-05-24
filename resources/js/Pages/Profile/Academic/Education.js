import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { addField, handleFieldChange } from '@/utils/forms';
import Label from '@/Components/Label';
import { Form } from 'react-bootstrap';
import { Inertia } from '@inertiajs/inertia';

export default function Education ({ data, acadEduc_data, setData, post }) {

    const [showModalEduc, setShowModalEduc] = useState(false);
    const [showModalEducUpd, setShowModalEducUpd] = useState(false);
    const [showModalDel, setShowModalDel] = useState(false);
    const [selectedID, setSelectedID] = useState(null);
    const [selectedData, setSelectedData] = useState({
        academic_educ: []
    });

    // handlel change fields
        const handleAddEducField = () => {
            addField(
                'academic_educ',
                { degree: '', institution: '', date: '', location: '' },
                setData,
                data
            );
        };

        const handleEducChange = (e, index) => {
            handleFieldChange(
                'academic_educ',
                e,
                index,
                setData,
                data
            );
        };

        const handleEducUpdateChange = (e, index) => {
            handleFieldChange(
                'academic_educ',
                e,
                index,
                setSelectedData,
                selectedData
            );
        };

    // for handle submit buttons
        const handleEducSubmit = (e) => {
            e.preventDefault();
            // console.log(data);
            post(route('add.educ', data))
            setShowModalEduc(false)

            setData(({
                academic_educ: [{ 
                    degree: '', 
                    institution: '', 
                    date: '', 
                    location: ''
                }],
            }))
        };

        const handleUpdEducSubmit = (e) => {
            e.preventDefault();
            console.log(selectedData);
            Inertia.post(route('update.educ', selectedData))

            setShowModalEducUpd(false)
        };

        const handleDelete = () => {
            Inertia.delete(route('destroy.educ', { id: selectedID }))
            setShowModalDel(false)
        }

    // For close modals
        const handleCloseModalEduc = () => { 
            setShowModalEduc(false) 
        }
        
        const handleCloseModalDel = () => { setShowModalDel(false) }

        const handleCloseModalEducUpd = () => { 
            setShowModalEducUpd(false) 
        }

    // for select data by ID
        const handleSelectIdEduc = (e) => {
            setSelectedID(e)
            setShowModalEducUpd(true)
        }

    // find specific data
        const selectEduc = acadEduc_data.find(educ => educ.id === selectedID)

    // runs every time whenever selectedEduc changes
        useEffect(() => {
            if (selectEduc) {
                setSelectedData({
                    academic_educ: [{
                        id: selectEduc.id,
                        degree: selectEduc.degree,
                        institution: selectEduc.institution,
                        date: selectEduc.date,
                        location: selectEduc.location
                    }]
                });
            }
        }, [selectEduc]);

    // confirm delete if delete btn is selected
        const handleConfirmDel = (id) => {
            setSelectedID(id)
            setShowModalDel(true)
        }

    return (
        <>
            {/* ADD MODAL  */}
            <Modal className="academic-modal" show={showModalEduc} onHide={handleCloseModalEduc} centered size='xl'>
                    <Modal.Header className='educ-modal-head py-2'>
                        <div className="acf-title m-2 px-3" style={{ color: 'white' }}>
                            Add Background Education
                        </div>
                        <button className='p-1 px-3 ms-auto' onClick={() => handleCloseModalEduc()}>
                            <i className="fa-solid fa-xmark fa-xl"></i>
                        </button>
                    </Modal.Header>
                <form onSubmit={handleEducSubmit}>
                    <Modal.Body>
                        {data.academic_educ.map((academicEduc, index) => (
                            <div className="acad-educ-flex d-flex py-2" key={index}>
                                <div className="flex-fill p-2">
                                    <Label forInput="institution" value="Institution/School:" />
                                    <Form.Control
                                        type="text"
                                        name="institution"
                                        placeholder="Institution/School"
                                        value={academicEduc.institution}
                                        onChange={(e) => handleEducChange(e, index)}
                                        required
                                    />
                                </div>

                                <div className="flex-fill p-2">
                                    <Label forInput="location" value="Location:" />
                                    <Form.Control
                                        type="text"
                                        name="location"
                                        placeholder="Location"
                                        value={academicEduc.location}
                                        onChange={(e) => handleEducChange(e, index)}
                                        required
                                    />
                                </div>

                                <div className="flex-fill p-2">
                                    <Label forInput="date" value="Year Graduated:" />
                                    <Form.Control   
                                        type="text"
                                        name="date"
                                        placeholder="YYYY"
                                        value={academicEduc.date}
                                        onChange={(e) => handleEducChange(e, index)}
                                        required
                                    />
                                </div>

                                <div className="flex-fill p-2">
                                    <Label forInput="degree" value="Degree/Masteral/Doctorate Title:" />
                                    <Form.Control
                                        type="text"
                                        name="degree"
                                        placeholder="ex. MS in Crop Protection"
                                        value={academicEduc.degree}
                                        onChange={(e) => handleEducChange(e, index)}
                                        required
                                    />
                                </div>

                                <div className="remove-field-btn flex-fill p-2 d-flex align-items-end ">
                                    {data.academic_educ.length > 1 && ( // Only render the remove button if the academic background is not empty
                                        <button type="button" className="px-2 py-1" onClick={() => setData(prevData => ({
                                        ...prevData,
                                        academic_educ: prevData.academic_educ.filter((_, i) => i !== index),
                                        }))}>
                                            <i className="fa-solid fa-minus"></i>
                                        </button>
                                    )}
                                </div>
                                
                            </div>
                        ))}
                        {/* Add button */}
                        <div className="add-field-container w-100 px-2">
                            <button type="button" className="add-field-btn w-100 py-2" onClick={handleAddEducField}>
                                <i className="fa-solid fa-plus"></i> Add background education
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
            <Modal className="academic-modal" show={showModalEducUpd} onHide={handleCloseModalEducUpd} centered size='xl' backdrop='static'>
                    <Modal.Header className='educ-modal-head py-2'>
                        <div className="acf-title m-2 px-3" style={{ color: 'white' }}>
                            Edit Background Education
                        </div>
                        <button className='p-1 px-3 ms-auto' onClick={() => handleCloseModalEducUpd()}>
                            <i className="fa-solid fa-xmark fa-xl"></i>
                        </button>
                    </Modal.Header>
                <form onSubmit={handleUpdEducSubmit}>
                    <Modal.Body>
                        {selectedData.academic_educ.map((academicEduc, index) => (
                            <div className="acad-educ-flex d-flex py-2" key={index}>
                                <div className="flex-fill p-2">
                                    <Label forInput="institution" value="Institution/School:" />
                                    <Form.Control
                                        type="text"
                                        name="institution"
                                        placeholder="Institution/School"
                                        value={academicEduc.institution}
                                        onChange={(e) => handleEducUpdateChange(e, index)}
                                    />
                                </div>

                                <div className="flex-fill p-2">
                                    <Label forInput="location" value="Location:" />
                                    <Form.Control
                                        type="text"
                                        name="location"
                                        placeholder="Location"
                                        value={academicEduc.location}
                                        onChange={(e) => handleEducUpdateChange(e, index)}
                                    />
                                </div>

                                <div className="flex-fill p-2">
                                    <Label forInput="date" value="Year Graduated:" />
                                    <Form.Control   
                                        type="text"
                                        name="date"
                                        placeholder="YYYY"
                                        value={academicEduc.date}
                                        onChange={(e) => handleEducUpdateChange(e, index)}
                                    />
                                </div>

                                <div className="flex-fill p-2">
                                    <Label forInput="degree" value="Degree/Masteral/Doctorate Title:" />
                                    <Form.Control
                                        type="text"
                                        name="degree"
                                        placeholder="ex. MS in Crop Protection"
                                        value={academicEduc.degree}
                                        onChange={(e) => handleEducUpdateChange(e, index)}
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

            {/* CONTENT  */}
            <div className="acad-educ-content flex-fill w-50">
                <div className="title-info-content-acad pb-2">
                    <p className="m-0">
                        Education
                        &nbsp;
                        {acadEduc_data.length > 0 ? '' : 
                        <>
                            <i className="fa-solid fa-circle-exclamation fa-sm" style={{ color: 'var(--yellow)'}}></i>
                        </>}
                    </p>
                    
                    <div className='edit-profile-container ms-auto'>
                        <div className='d-flex gap-2 align-items-center'>
                            <button className='edit-profile p-1 px-2' onClick={() => setShowModalEduc(true)}>
                                <i className="fa-regular fa-plus"></i> Add
                            </button>
                        </div>
                    </div>
                    
                </div>
                <div className="datas-content-container">
                    {acadEduc_data.map((educ, index) => (
                        <div className="p-3" key={index} style={{ borderBottom: '#ccc 1px solid', position: 'relative' }}>
                            <div className="bg-data"></div>

                            <div className='for-edit-btn d-flex flex-column'>
                                <button className='edit-educ-btn p-1 px-2' onClick={() => handleSelectIdEduc(educ.id)}>
                                    <i className="fa-regular fa-pen-to-square fa-lg"></i>
                                </button>
                                <button className='p-1 px-2' onClick={() => handleConfirmDel(educ.id)}>
                                    <i className="fa-solid fa-trash-can"></i>
                                </button>
                            </div>
                            
                            <div className="acad-row1">
                                <i className="fa-solid fa-graduation-cap" style={{ color: 'var(--light-green)' }}></i>
                                &nbsp;
                                <p className="m-0">{educ.degree}</p>
                            </div>

                            <div className="acad-row2 py-2">
                                <p className="m-0">{educ.institution}</p>
                            </div>

                            <div className="d-flex gap-3">
                                <div className='w-25'>
                                    <i className="fa-regular fa-calendar-check"></i>
                                    &nbsp;
                                    {educ.date}
                                </div>
                                <div className='w-75'>
                                    <i className="fa-solid fa-location-dot"></i>
                                    &nbsp;
                                    {educ.location}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
        </>
    )
}
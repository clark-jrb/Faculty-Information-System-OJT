import React, { useState, useEffect } from 'react';
import Profile from '../Profile';
import { usePage } from '@inertiajs/inertia-react';
import { Modal } from 'react-bootstrap';
import { addField, handleFieldChange } from '@/utils/forms';
import Label from '@/Components/Label';
import { Form } from 'react-bootstrap';
import { useForm } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';

export default function Publications(props){
    // data fetch
    const {
        publication_data
    } = usePage().props;

    // states
    const [showModalEduc, setShowAddModal] = useState(false);
    const [showUpdModal, setShowUpdModal] = useState(false);
    const [showDelModal, setShowDelModal] = useState(false);
    const [selectedID, setSelectedID] = useState(null);
    const [selectedData, setSelectedData] = useState({
        publications: []
    });

    // form
    const { data, setData, post, processing} = useForm({
        publications: [{
            proj_title: '',
            date: '',
            authors: '',
            doi: ''
        }]
    })

    // handlel change fields
        // for add field
        const handleAddWorkField = () => {
            addField(
                'publications',
                { proj_title: '', authors: '', date: '', doi: '' },
                setData,
                data
            );
        };
        // for add
        const handleAddChange = (e, index) => {
            handleFieldChange(
                'publications',
                e,
                index,
                setData,
                data
            );
        };
        // for update
        const handleUpdateChange = (e, index) => {
            handleFieldChange(
                'publications',
                e,
                index,
                setSelectedData,
                selectedData
            );
        };

    // for handle submit buttons
        // add
        const handleAddSubmit = (e) => {
            e.preventDefault();
            console.log(data);
            post(route('add.pub', data))
            setShowAddModal(false)

            setData(({
                publications: [{
                    proj_title: '',
                    date: '',
                    authors: '',
                    doi: ''
                }]
            }))
        };

        // update
        const handleUpdSubmit = (e) => {
            e.preventDefault();
            console.log(selectedData);
            Inertia.post(route('update.pub', selectedData))
            
            setShowUpdModal(false)
        };

        // delete
        const handleDelete = () => {
            Inertia.delete(route('destroy.pub', { id: selectedID }))

            setShowDelModal(false)
        }

    // For close modals
        // for add
        const handleCloseAddModal = () => { 
            setShowAddModal(false) 
        }
        // for update
        const handleCloseUpdModal = () => { 
            setShowUpdModal(false) 
        }
        // for delete
        const handleCloseDelModal = () => { setShowDelModal(false) }

    // for select data by ID
    const handleSelectId = (e) => {
        setSelectedID(e)

        setShowUpdModal(true)
    }

    // find specific data
    const selectSpec = publication_data.find(data => data.id === selectedID)

    // runs every time whenever selectedEduc changes
        useEffect(() => {
            if (selectSpec) {
                setSelectedData({
                    publications: [{
                        id: selectSpec.id,
                        proj_title: selectSpec.proj_title,
                        authors: selectSpec.authors,
                        date: selectSpec.date,
                        doi: selectSpec.doi
                    }]
                });
            }
        }, [selectSpec]);

    // confirm delete if delete btn is selected
    const handleConfirmDel = (id) => {
        setSelectedID(id)
        setShowDelModal(true)
    }

    return (
        <Profile auth={props.auth}>
            {/* ADD MODAL  */}
            <Modal className='profile-modal' show={showModalEduc} onHide={handleCloseAddModal} centered size='xl'>
                    <Modal.Header className='educ-modal-head py-2'>
                        <div className="acf-title m-2 px-3" style={{ color: 'white' }}>
                            Add Publication
                        </div>
                        <button className='p-1 px-3 ms-auto' onClick={() => handleCloseAddModal()}>
                            <i className="fa-solid fa-xmark fa-xl"></i>
                        </button>
                    </Modal.Header>
                <form onSubmit={handleAddSubmit}>
                    <Modal.Body>
                        {data.publications.map((academicEduc, index) => (
                            <div className="publications-flex d-flex py-2" key={index}>

                                <div className="flex-fill d-flex p-2 gap-3">
                                    <div className="flex-fill w-75">
                                        <Label forInput="proj_title" value="Title:" />
                                        <Form.Control
                                            type="text"
                                            name="proj_title"
                                            placeholder="Title"
                                            value={academicEduc.proj_title}
                                            onChange={(e) => handleAddChange(e, index)}
                                            required
                                        />
                                    </div>
                                    <div className="flex-fill w-25">
                                        <Label forInput="date" value="Date Published:" />
                                        <Form.Control
                                            type="text"
                                            name="date"
                                            placeholder="ex. March 2020"
                                            value={academicEduc.date}
                                            onChange={(e) => handleAddChange(e, index)}
                                            required
                                        />
                                    </div>
                                </div>
                                
                                <div className="flex-fill d-flex p-2 gap-3">
                                    <div className="flex-fill w-25">
                                        <Label forInput="doi" value="DOI:" />
                                        <Form.Control   
                                            type="text"
                                            name="doi"
                                            placeholder="DOI"
                                            value={academicEduc.doi}
                                            onChange={(e) => handleAddChange(e, index)}
                                        />
                                    </div>
                                    <div className="flex-fill w-75">
                                        <Label forInput="authors" value="Authors:" />
                                        <Form.Control
                                            as="textarea"
                                            type="text"
                                            name="authors"
                                            placeholder="ex. Dr. John Doe, JM Cruz, Mr. Juan Dela Cruz (required to put ,)"
                                            value={academicEduc.authors}
                                            onChange={(e) => handleAddChange(e, index)}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="remove-field-btn flex-fill p-2 d-flex align-items-end ">
                                    {data.publications.length > 1 && ( // Only render the remove button if the academic background is not empty
                                        <button type="button" className="px-2 py-1 ms-auto" onClick={() => setData(prevData => ({
                                        ...prevData,
                                        publications: prevData.publications.filter((_, i) => i !== index),
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
                                <i className="fa-solid fa-plus"></i> Add publication
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
            <Modal show={showUpdModal} onHide={handleCloseUpdModal} centered size='xl' backdrop='static'>
                    <Modal.Header className='educ-modal-head py-2'>
                        <div className="acf-title m-2 px-3" style={{ color: 'white' }}>
                            Edit Publication
                        </div>
                        <button className='p-1 px-3 ms-auto' onClick={() => handleCloseUpdModal()}>
                            <i className="fa-solid fa-xmark fa-xl"></i>
                        </button>
                    </Modal.Header>
                <form onSubmit={handleUpdSubmit}>
                    <Modal.Body>
                        {selectedData.publications.map((pub, index) => (
                            <div className="publications-flex d-flex py-2" key={index}>
                                <div className="flex-fill d-flex p-2 gap-3">
                                    <div className="flex-fill w-75">
                                        <Label forInput="proj_title" value="Title:" />
                                        <Form.Control
                                            type="text"
                                            name="proj_title"
                                            placeholder="Title"
                                            value={pub.proj_title}
                                            onChange={(e) => handleUpdateChange(e, index)}
                                        />
                                    </div>
                                    <div className="flex-fill w-25">
                                        <Label forInput="date" value="Date Published:" />
                                        <Form.Control
                                            type="text"
                                            name="date"
                                            placeholder="ex. March 2020"
                                            value={pub.date}
                                            onChange={(e) => handleUpdateChange(e, index)}
                                        />
                                    </div>
                                </div>
                                
                                <div className="flex-fill d-flex p-2 gap-3">
                                    <div className="flex-fill w-25">
                                        <Label forInput="doi" value="DOI:" />
                                        <Form.Control   
                                            type="text"
                                            name="doi"
                                            placeholder="DOI"
                                            value={pub.doi}
                                            onChange={(e) => handleUpdateChange(e, index)}
                                        />
                                    </div>
                                    <div className="flex-fill w-75">
                                        <Label forInput="authors" value="Authors:" />
                                        <Form.Control
                                            as="textarea"
                                            type="text"
                                            name="authors"
                                            placeholder="ex. Dr. John Doe, JM Cruz, Mr. Juan Dela Cruz (required to put ,)"
                                            value={pub.authors}
                                            onChange={(e) => handleUpdateChange(e, index)}
                                        />
                                    </div>
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
            <Modal show={showDelModal} onHide={handleCloseDelModal} centered backdrop='static'>
                <Modal.Body>
                    Are you sure you want to delete this?
                </Modal.Body>
                <Modal.Footer>
                    <div className="d-flex w-100 justify-content-center align-items-center gap-3">
                        <button className='yes-btn p-1 px-3' onClick={() => handleDelete()}>Yes</button>
                        <button className='no-btn p-1 px-3' onClick={() => handleCloseDelModal()}>No</button>
                    </div>
                </Modal.Footer>
            </Modal>

            {/* CONTENT  */}
            <div className="p-3 px-4 profile-info-content-child">
                <div className="title-info-content pb-2">
                    <p className="m-0">
                        Publications
                        &nbsp;
                        {publication_data.length > 0 ? '' : 
                        <>
                            <i className="fa-solid fa-circle-exclamation fa-sm" style={{ color: 'var(--yellow)'}}></i>
                        </>}
                    </p>
                    <div className='edit-profile-container ms-auto'>
                        <div className='d-flex gap-2 align-items-center'>
                            <button className='edit-profile p-1 px-2' onClick={() => setShowAddModal(true)}>
                                <i className="fa-regular fa-plus"></i> Add
                            </button>
                        </div>
                    </div>
                </div>
                <div className='datas-content-container'>
                    {publication_data.map((pub, index) => (
                        <div className="p-3" key={index} style={{ borderBottom: '#ccc 1px solid', position: 'relative' }}>
                            <div className="bg-data"></div>

                            <div className='for-edit-btn d-flex flex-column'>
                                <button className='edit-educ-btn p-1 px-2' onClick={() => handleSelectId(pub.id)}>
                                    <i className="fa-regular fa-pen-to-square fa-lg"></i>
                                </button>
                                <button className='p-1 px-2' onClick={() => handleConfirmDel(pub.id)}>
                                    <i className="fa-solid fa-trash-can fa-lg"></i>
                                </button>
                            </div>

                            <p className="m-0 py-1 res-title" style={{ width: '95%' }}>{pub.proj_title}</p>

                            <p className="m-0 py-1" style={{ fontSize: 'large' }}>
                                <i className="fa-regular fa-calendar-check fa-xs"></i>
                                &nbsp;
                                <span style={{ fontSize: 'medium' }}>
                                    Date Published:
                                </span>
                                &nbsp;
                                {pub.date}
                            </p>

                            <p className="m-0 py-1" style={{ fontSize: 'large', width: '95%' }}>
                                {/* <i className="fa-solid fa-users fa-xs"></i> */}
                                {/* &nbsp; */}
                                <span style={{ color: 'var(--grey)', fontSize: 'medium' }}>Author(s):</span> 
                                &nbsp;
                                {pub.authors}
                            </p>

                            <p className="m-0 py-1" style={{ fontSize: 'large' }}>
                                <i className="fa-solid fa-up-right-from-square fa-xs"></i>
                                &nbsp;
                                <span style={{ fontSize: 'medium' }}>
                                    DOI:
                                </span>
                                &nbsp;
                                {pub.doi}
                            </p>
                        </div>
                    ))}
                </div>
                
            </div>
        </Profile>
    )
}
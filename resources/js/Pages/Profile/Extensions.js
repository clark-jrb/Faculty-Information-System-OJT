import React, { useEffect, useState } from 'react';
import Profile from '../Profile';
import { usePage } from '@inertiajs/inertia-react';
import { Modal } from 'react-bootstrap';
import { addField, handleFieldChange } from '@/utils/forms';
import Label from '@/Components/Label';
import { Form } from 'react-bootstrap';
import { useForm } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import moment from 'moment';

export default function Extensions(props){
    // data fetch
    const {
        extension_data
    } = usePage().props;

    // states
    const [showModalEduc, setShowAddModal] = useState(false);
    const [showUpdModal, setShowUpdModal] = useState(false);
    const [showDelModal, setShowDelModal] = useState(false);
    const [selectedID, setSelectedID] = useState(null);
    const [selectedData, setSelectedData] = useState({
        extensions: []
    });

    // form
    const { data, setData, post, processing} = useForm({
        extensions: [{
            ext_title: '',
            start_date: '',
            end_date: '',
            lead: '',
            member: '',
            sponsor: '',
            beneficiaries: ''
        }]
    })

    // handle change fields
        // for add field
        const handleAddWorkField = () => {
            addField(
                'extensions',
                {
                    ext_title: '',
                    start_date: '',
                    end_date: '',
                    lead: '',
                    member: '',
                    sponsor: '',
                    beneficiaries: ''
                },
                setData,
                data
            );
        };
        // for add
        const handleAddChange = (e, index) => {
            handleFieldChange(
                'extensions',
                e,
                index,
                setData,
                data
            );
        };
        // for update
        const handleUpdateChange = (e, index) => {
            handleFieldChange(
                'extensions',
                e,
                index,
                setSelectedData,
                selectedData
            );
        };

        // for date
        const handleDateChange = (date, index) => {

            const addDate = data.extensions.map((ext, i) => {
                if (i === index) {
                    return {
                        ...ext,
                        start_date: date
                    };
                }
                return ext;
            });

            console.log(addDate);
            setData('extensions', addDate);
        };

        // for update date change
        const handleUpdateDateChange = (date, index) => {

            const updateDate = selectedData.extensions.map((ext, i) => {
                if (i === index) {
                    return {
                        ...ext,
                        start_date: date
                    };
                }
                return ext;
            });

            console.log(updateDate);
            setSelectedData(prevData => ({
                ...prevData,
                extensions: updateDate
            }));
        };

    // for handle submit buttons
        // add
        const handleAddSubmit = (e) => {
            e.preventDefault();
            // console.log(data);
            post(route('add.ext', data))
            setShowAddModal(false)

            setData(({
                extensions: [{
                    ext_title: '',
                    start_date: '',
                    end_date: '',
                    lead: '',
                    member: '',
                    sponsor: '',
                    beneficiaries: ''
                }]
            }))
        };

        // update
        const handleUpdSubmit = (e) => {    
            e.preventDefault();
            // console.log(selectedData);
            Inertia.post(route('update.ext', selectedData))
            
            setShowUpdModal(false)
        };

        // delete
        const handleDelete = () => {
            Inertia.delete(route('destroy.ext', { id: selectedID }))

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
    const selectSpec = extension_data.find(data => data.id === selectedID)

    // runs every time whenever selectedEduc changes
        useEffect(() => {
            if (selectSpec) {
                setSelectedData({
                    extensions: [{
                        id: selectSpec.id,
                        ext_title: selectSpec.ext_title,
                        start_date: selectSpec.start_date,
                        end_date: selectSpec.end_date,
                        lead: selectSpec.lead,
                        member: selectSpec.member,
                        sponsor: selectSpec.sponsor,
                        beneficiaries: selectSpec.beneficiaries
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
            <Modal show={showModalEduc} onHide={handleCloseAddModal} centered size='xl'>
                    <Modal.Header className='educ-modal-head py-2'>
                        <div className="acf-title m-2 px-3" style={{ color: 'white' }}>
                            Add Extension Activity
                        </div>
                        <button className='p-1 px-3 ms-auto' onClick={() => handleCloseAddModal()}>
                            <i className="fa-solid fa-xmark fa-xl"></i>
                        </button>
                    </Modal.Header>
                <form onSubmit={handleAddSubmit}>
                    <Modal.Body>
                        {data.extensions.map((ext, index) => (
                            <div className="publications-flex d-flex py-2" key={index}>

                                <div className="flex-fill d-flex p-2 gap-3">
                                    <div className="flex-fill w-50">
                                        <Label forInput="ext_title" value="Extension Project Title:" />
                                        <textarea
                                            type="text"
                                            name="ext_title"
                                            className='form-admin w-100'
                                            placeholder="Title"
                                            value={ext.ext_title}
                                            onChange={(e) => handleAddChange(e, index)}
                                            required
                                        />
                                    </div>
                                    <div className="flex-fill w-25">
                                        <Label forInput="lead" value="Lead Faculty:" />
                                        <input
                                            type="text"
                                            name="lead"
                                            className='form-admin w-100'
                                            placeholder="Lead Faculty"
                                            value={ext.lead}
                                            onChange={(e) => handleAddChange(e, index)}
                                            required
                                        />
                                    </div>
                                    <div className="flex-fill w-25">
                                        <Label forInput="start_date" value="Start Date:" />
                                        <ReactDatePicker 
                                            className="form-admin w-100"
                                            name="start_date" 
                                            placeholderText="ex. 2001"
                                            selected={ext.start_date}
                                            showYearPicker
                                            dateFormat="yyyy"
                                            onChange={(date) => {handleDateChange(date, index)}}
                                            isClearable 
                                            required
                                        />
                                        <Label forInput="end_date" value="End Date:" />
                                        <input   
                                            type="text"
                                            name="end_date"
                                            className='form-admin w-100'
                                            placeholder="ex. 2001 or Present"
                                            value={ext.end_date}
                                            onChange={(e) => handleAddChange(e, index)}
                                            required
                                        />
                                    </div>
                                </div>
                                
                                <div className="flex-fill d-flex p-2 gap-3">
                                    <div className="flex-fill w-25">
                                        <Label forInput="beneficiaries" value="Beneficiaries (e.g. farmers, professionals, organization):" />
                                        <input   
                                            type="text"
                                            name="beneficiaries"
                                            className='form-admin w-100'
                                            placeholder="Beneficiaries"
                                            value={ext.beneficiaries}
                                            onChange={(e) => handleAddChange(e, index)}
                                            required
                                        />
                                    </div>
                                    <div className="flex-fill w-25">
                                        <Label forInput="sponsor" value="Sponsoring Department(s):" />
                                        <input   
                                            type="text"
                                            as="textarea"
                                            name="sponsor"
                                            className='form-admin w-100'
                                            placeholder="Sponsor(s) (required to put , if more than one)"
                                            value={ext.sponsor}
                                            onChange={(e) => handleAddChange(e, index)}
                                            required
                                        />
                                    </div>
                                    <div className="flex-fill w-50">
                                        <Label forInput="member" value="Team Members:" />
                                        <textarea
                                            as="textarea"
                                            type="text"
                                            name="member"
                                            className='form-admin w-100'
                                            placeholder="ex. Dr. John Doe, JM Cruz, Mr. Juan Dela Cruz (required to put ,)"
                                            value={ext.member}
                                            onChange={(e) => handleAddChange(e, index)}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="remove-field-btn flex-fill p-2 d-flex align-items-end ">
                                    {data.extensions.length > 1 && ( // Only render the remove button if the academic background is not empty
                                        <button type="button" className="px-2 py-1 ms-auto" onClick={() => setData(prevData => ({
                                        ...prevData,
                                        extensions: prevData.extensions.filter((_, i) => i !== index),
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
                            Edit Extention Activity
                        </div>
                        <button className='p-1 px-3 ms-auto' onClick={() => handleCloseUpdModal()}>
                            <i className="fa-solid fa-xmark fa-xl"></i>
                        </button>
                    </Modal.Header>
                <form onSubmit={handleUpdSubmit}>
                    <Modal.Body>
                        {selectedData.extensions.map((ext, index) => (
                            <div className="publications-flex d-flex py-2" key={index}>
                                <div className="flex-fill d-flex p-2 gap-3">
                                    <div className="flex-fill w-50">
                                        <Label forInput="ext_title" value="Extension Project Title:" />
                                        <Form.Control
                                            type="text"
                                            name="ext_title"
                                            placeholder="Title"
                                            value={ext.ext_title}
                                            onChange={(e) => handleUpdateChange(e, index)}
                                        />
                                    </div>
                                    <div className="flex-fill w-25">
                                        <Label forInput="lead" value="Lead Faculty:" />
                                        <Form.Control
                                            type="text"
                                            name="lead"
                                            placeholder="Lead Faculty"
                                            value={ext.lead}
                                            onChange={(e) => handleUpdateChange(e, index)}
                                        />
                                    </div>
                                    <div className="flex-fill w-25">
                                        <Label forInput="duration" value="Duration:" />
                                        <ReactDatePicker 
                                            className="form-admin w-100"
                                            name="start_date" 
                                            placeholderText="ex. 2001"
                                            selected={ext.start_date}
                                            showYearPicker
                                            dateFormat="yyyy"
                                            onChange={(date) => {handleUpdateDateChange(date, index)}}
                                            isClearable 
                                            required
                                        />
                                        <Label forInput="end_date" value="End Date:" />
                                        <input   
                                            type="text"
                                            name="end_date"
                                            className='form-admin w-100'
                                            placeholder="ex. 2001 or Present"
                                            value={ext.end_date}
                                            onChange={(e) => handleUpdateChange(e, index)}
                                            required
                                        />
                                    </div>
                                </div>
                                
                                <div className="flex-fill d-flex p-2 gap-3">
                                    <div className="flex-fill w-25">
                                        <Label forInput="beneficiaries" value="Beneficiaries (e.g. farmers, professionals, organization):" />
                                        <Form.Control   
                                            type="text"
                                            name="beneficiaries"
                                            placeholder="Beneficiaries"
                                            value={ext.beneficiaries}
                                            onChange={(e) => handleUpdateChange(e, index)}
                                        />
                                    </div>
                                    <div className="flex-fill w-25">
                                        <Label forInput="sponsor" value="Sponsoring Department(s):" />
                                        <Form.Control   
                                            type="text"
                                            as="textarea"
                                            name="sponsor"
                                            placeholder="Sponsor(s) (required to put , if more than one)"
                                            value={ext.sponsor}
                                            onChange={(e) => handleUpdateChange(e, index)}
                                        />
                                    </div>
                                    <div className="flex-fill w-50">
                                        <Label forInput="member" value="Team Members:" />
                                        <Form.Control
                                            as="textarea"
                                            type="text"
                                            name="member"
                                            placeholder="ex. Dr. John Doe, JM Cruz, Mr. Juan Dela Cruz (required to put ,)"
                                            value={ext.member}
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
                        Extension Activities
                        &nbsp;
                        {extension_data.length > 0 ? '' : 
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
                {extension_data.map((ext, index) => (
                    <div className="p-3 d-flex" key={index} style={{ borderBottom: '#ccc 1px solid', position: 'relative' }}>
                        <div className="bg-data"></div>

                        <div className='for-edit-btn d-flex flex-column'>
                            <button className='edit-educ-btn p-1 px-2' onClick={() => handleSelectId(ext.id)}>
                                <i className="fa-regular fa-pen-to-square fa-lg"></i>
                            </button>
                            <button className='p-1 px-2' onClick={() => handleConfirmDel(ext.id)}>
                                <i className="fa-solid fa-trash-can fa-lg"></i>
                            </button>
                        </div>

                        <div className='w-50'>
                            <div className="m-0 py-1 ext-title">
                                <p className='m-0 data-label'>Extension Project Title:</p>
                                <span style={{ fontSize: 'large', fontWeight: 'bold' }}>
                                    {ext.ext_title}
                                </span>
                            </div>
                            <p className="m-0 py-1" style={{ fontSize: 'large' }}>
                                <span style={{ fontSize: 'medium'}} className='data-label'>Member(s):</span> 
                                <br />
                                {ext.member}
                            </p>
                        </div>

                        <div className='w-25'>
                            <p className="m-0 py-1" style={{ fontSize: 'large' }}>
                                <span style={{ fontSize: 'medium'}} className='data-label'>Team Lead:</span> 
                                <br />
                                {ext.lead}
                            </p>
                            <div className="m-0 py-1">
                                <p className='m-0 data-label'>Duration: </p>
                                <span style={{ fontSize: 'large' }}>
                                    {moment(ext.start_date).format('YYYY') + '-' + moment(ext.end_date).format('YYYY')}
                                </span>
                            </div>
                        </div>

                        <div style={{ width: "20%" }}>
                            <div className="m-0 py-1">
                                <p className='m-0 data-label'>Sponsoring Dept: </p>
                                <span style={{ fontSize: 'large' }}>
                                    {ext.sponsor}
                                </span>
                            </div>
                            <div className="m-0 py-1">
                                <p className='m-0 data-label'>Beneficiaries: </p>
                                <span style={{ fontSize: 'large' }}>
                                    {ext.beneficiaries}
                                </span>
                            </div>
                        </div>
                        
                    </div>
                ))}
            </div>
        </Profile>
    )
}
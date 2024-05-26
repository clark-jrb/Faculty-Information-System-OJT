import React, { useState, useEffect } from 'react';
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

export default function Trainings(props){
    // data fetch
    const {
        trainings_data
    } = usePage().props;

    const [showModalEduc, setShowAddModal] = useState(false);
    const [showUpdModal, setShowUpdModal] = useState(false);
    const [showDelModal, setShowDelModal] = useState(false);
    const [selectedID, setSelectedID] = useState(null);
    const [selectedData, setSelectedData] = useState({
        trainings: []
    });

    // form
    const { data, setData, post, processing} = useForm({
        trainings: [{
            title: '',
            start_date: '',
            end_date: '',
            role: '',
            location: ''
        }]
    })

    // handlel change fields
        // for add field
        const handleAddField = () => {
            addField(
                'trainings',
                { title: '', role: '',  start_date: '', end_date: '', location: '' },
                setData,
                data
            );
        };
        // for add
        const handleAddChange = (e, index) => {
            handleFieldChange(
                'trainings',
                e,
                index,
                setData,
                data
            );
        };
        // for update
        const handleUpdateChange = (e, index) => {
            handleFieldChange(
                'trainings',
                e,
                index,
                setSelectedData,
                selectedData
            );
        };
        // for date
        const handleDateChange = (dates, index) => {
            // const convertedDate = moment(date).format('YYYY-MM-DD')
            const [start, end] = dates;

            const updateDate = data.trainings.map((training, i) => {
                if (i === index) {
                    return {
                        ...training,
                        start_date: start,
                        end_date: end
                    };
                }
                return training;
            });

            console.log(updateDate);
            setData('trainings', updateDate);
        };
        
    // for handle submit buttons
        // add
        const handleAddSubmit = (e) => {
            e.preventDefault();
            console.log(data);
            post(route('add.train', data))
            setShowAddModal(false)

            setData(({
                trainings: [{
                    title: '',
                    start_date: '',
                    end_date: '',
                    role: '',
                    location: ''
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
    const selectSpec = trainings_data.find(data => data.id === selectedID)

    // runs every time whenever selectedEduc changes
        useEffect(() => {
            if (selectSpec) {
                setSelectedData({
                    trainings: [{
                        id: selectSpec.id,
                        title: selectSpec.title,
                        location: selectSpec.location,
                        start_date: selectSpec.start_date,
                        end_date: selectSpec.end_date,
                        role: selectSpec.role
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
                            Add Training/ Seminar
                        </div>
                        <button className='p-1 px-3 ms-auto' onClick={() => handleCloseAddModal()}>
                            <i className="fa-solid fa-xmark fa-xl"></i>
                        </button>
                    </Modal.Header>
                <form onSubmit={handleAddSubmit}>
                    <Modal.Body>
                        {data.trainings.map((train, index) => (
                            <div className="publications-flex d-flex py-2" key={index}>

                                <div className="flex-fill d-flex p-2 gap-3">
                                    <div className="flex-fill w-75">
                                        <Label forInput="title" value="Title:" />
                                        <Form.Control
                                            type="text"
                                            name="title"
                                            placeholder="Title"
                                            value={train.title}
                                            onChange={(e) => handleAddChange(e, index)}
                                            required
                                        />
                                    </div>
                                    <div className="flex-fill w-25">
                                        <Label forInput="date" value="Date: (start date - end date)" />
                                        {/* <Form.Control
                                            type="text"
                                            name="date"
                                            placeholder="Date"
                                            value={train.date}
                                            onChange={(e) => handleAddChange(e, index)}
                                            required
                                        /> */}
                                        <ReactDatePicker 
                                            // className="date-picker"
                                            name="dates" 
                                            // placeholderText="MM/DD/YYYY"
                                            selectsRange={true}
                                            // selected={train.date}
                                            startDate={train.start_date}
                                            endDate={train.end_date}
                                            onChange={(dates) => {handleDateChange(dates, index)}}
                                            isClearable 
                                            required
                                        />
                                    </div>
                                </div>
                                
                                <div className="flex-fill d-flex p-2 gap-3">
                                    <div className="flex-fill w-25">
                                        <Label forInput="role" value="Role:" />
                                        <Form.Control   
                                            type="text"
                                            name="role"
                                            placeholder="Role"
                                            value={train.role}
                                            onChange={(e) => handleAddChange(e, index)}
                                        />
                                    </div>
                                    <div className="flex-fill w-75">
                                        <Label forInput="location" value="Location:" />
                                        <Form.Control
                                            type="text"
                                            name="location"
                                            placeholder="Location"
                                            value={train.location}
                                            onChange={(e) => handleAddChange(e, index)}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="remove-field-btn flex-fill p-2 d-flex align-items-end ">
                                    {data.trainings.length > 1 && ( // Only render the remove button if the academic background is not empty
                                        <button type="button" className="px-2 py-1 ms-auto" onClick={() => setData(prevData => ({
                                        ...prevData,
                                        trainings: prevData.trainings.filter((_, i) => i !== index),
                                        }))}>
                                            <i className="fa-solid fa-minus"></i>
                                        </button>
                                    )}
                                </div>
                                
                            </div>
                        ))}
                        {/* Add button */}
                        <div className="add-field-container w-100 px-2">
                            <button type="button" className="add-field-btn w-100 py-2" onClick={handleAddField}>
                                <i className="fa-solid fa-plus"></i> Add Training/ Seminar
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

            
            <div className="p-3 px-4 profile-info-content-child">
                <div className="title-info-content pb-2">
                    <p className="m-0">
                        Trainings
                        &nbsp;
                        {trainings_data.length > 0 ? '' : 
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
                    {trainings_data.map((train, index) => (
                        <div className="p-3 d-flex" key={index} style={{ borderBottom: '#ccc 1px solid', position: 'relative' }}>
                            <div className="bg-data"></div>
                            {/* EDIT BUTTONS  */}
                            <div className='for-edit-btn d-flex flex-column'>
                                <button className='edit-educ-btn p-1 px-2' onClick={() => handleSelectId(train.id)}>
                                    <i className="fa-regular fa-pen-to-square fa-lg"></i>
                                </button>
                                <button className='p-1 px-2' onClick={() => handleConfirmDel(train.id)}>
                                    <i className="fa-solid fa-trash-can fa-lg"></i>
                                </button>
                            </div>

                            <div className="w-50">
                                <p className="m-0 py-1" style={{ width: '95%' }}>
                                    <span style={{ fontSize: 'medium' }}>
                                        Role:
                                    </span>
                                    &nbsp;
                                    <span className='res-title'>
                                        {train.role}
                                    </span>
                                </p>

                                <p className="m-0 py-1" style={{ fontSize: 'large', width: '95%' }}>
                                    <i className="fa-solid fa-location-dot fa-sm"></i>
                                    &nbsp;
                                    <span style={{ color: 'var(--grey)', fontSize: 'medium' }}>Location:</span> 
                                    &nbsp;
                                    {train.location}
                                </p>

                                <p className="m-0 py-1" style={{ fontSize: 'large' }}>
                                    <i className="fa-regular fa-calendar-check fa-sm"></i>
                                    &nbsp;
                                    <span style={{ fontSize: 'medium' }}>
                                        Date:
                                    </span>
                                    &nbsp;
                                    {moment(train.start_date).format('MMM DD') + ' - ' + moment(train.end_date).format('MMM DD, YYYY')}
                                </p>
                            </div>

                            <div style={{ width: '40%' }}>
                                <p className="m-0 py-1" style={{ fontSize: 'large' }}>
                                    Title:
                                    &nbsp;
                                    {train.title}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </Profile>
    )
}
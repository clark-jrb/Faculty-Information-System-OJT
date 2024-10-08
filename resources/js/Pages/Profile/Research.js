import React, { useEffect, useState } from 'react';
import Profile from '../Profile';
import { usePage } from '@inertiajs/inertia-react';
import { Modal } from 'react-bootstrap';
import { addField, handleFieldChange } from '@/utils/forms';
import Label from '@/Components/Label';
import { Form } from 'react-bootstrap';
import { useForm } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';
import moment from 'moment';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

export default function Research(props){
    // data fetch
    const {
        research_data
    } = usePage().props;

    // states
    const [showModalEduc, setShowAddModal] = useState(false);
    const [showUpdModal, setShowUpdModal] = useState(false);
    const [showDelModal, setShowDelModal] = useState(false);
    const [selectedID, setSelectedID] = useState(null);
    const [selectedData, setSelectedData] = useState({
        research: []
    });

    // form
    const { data, setData, post, processing} = useForm({
        research: [{
            title: '',
            status: '',
            start_date: '',
            end_date: '',
            researchers: ''
        }]
    })

    // handlel change fields
        // for add field
        const handleAddWorkField = () => {
            addField(
                'research',
                { title: '', status: '', start_date: '', end_date: '', researchers: '' },
                setData,
                data
            );
        };
        // for add
        const handleAddChange = (e, index) => {
            handleFieldChange(
                'research',
                e,
                index,
                setData,
                data
            );
        };
        // for update
        const handleUpdateChange = (e, index) => {
            handleFieldChange(
                'research',
                e,
                index,
                setSelectedData,
                selectedData
            );
        };

        // for date
        const handleDateChange = (date, index) => {

            const addDate = data.research.map((res, i) => {
                if (i === index) {
                    return {
                        ...res,
                        start_date: date
                    };
                }
                return res;
            });

            console.log(addDate);
            setData('research', addDate);
        };
        // for update date change
        const handleUpdateDateChange = (date, index) => {

            const updateDate = selectedData.research.map((res, i) => {
                if (i === index) {
                    return {
                        ...res,
                        start_date: date,
                    };
                }
                return res;
            });

            console.log(updateDate);
            setSelectedData(prevData => ({
                ...prevData,
                research: updateDate
            }));
        };

    // for handle submit buttons
        // add
        const handleAddSubmit = (e) => {
            e.preventDefault();
            console.log(data);
            post(route('add.res', data))
            setShowAddModal(false)

            setData(({
                research: [{
                    title: '',
                    status: '',
                    duration: '',
                    researchers: ''
                }]
            }))
        };

        // update
        const handleUpdSubmit = (e) => {
            e.preventDefault();
            // console.log(selectedData);
            Inertia.post(route('update.res', selectedData))
            
            setShowUpdModal(false)
        };

        // delete
        const handleDelete = () => {
            Inertia.delete(route('destroy.res', { id: selectedID }))

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
    const selectSpec = research_data.find(data => data.id === selectedID)

    // runs every time whenever selectedEduc changes
        useEffect(() => {
            if (selectSpec) {
                setSelectedData({
                    research: [{
                        id: selectSpec.id,
                        title: selectSpec.res_title,
                        status: selectSpec.status,
                        start_date: selectSpec.start_date,
                        end_date: selectSpec.end_date,
                        researchers: selectSpec.researcher
                    }]
                });
            }
        }, [selectSpec]);

    // confirm delete if delete btn is selected
    const handleConfirmDel = (id) => {
        setSelectedID(id)
        setShowDelModal(true)
    }

    // to print
    const handlePrint = () => {
        Inertia.get(route('faculty.print', { toPrint: 'research' }))
    }

    return (
        <Profile auth={props.auth}>
            {/* ADD MODAL  */}
            <Modal show={showModalEduc} onHide={handleCloseAddModal} centered size='xl'>
                    <Modal.Header className='educ-modal-head py-2'>
                        <div className="acf-title m-2 px-3" style={{ color: 'white' }}>
                            Add Research Activity
                        </div>
                        <button className='p-1 px-3 ms-auto' onClick={() => handleCloseAddModal()}>
                            <i className="fa-solid fa-xmark fa-xl"></i>
                        </button>
                    </Modal.Header>
                <form onSubmit={handleAddSubmit}>
                    <Modal.Body>
                        {data.research.map((res, index) => (
                            <div className="publications-flex d-flex py-2" key={index}>

                                <div className="flex-fill d-flex p-2 gap-3">
                                    <div className="flex-fill w-75">
                                        <Label forInput="title" value="Research Title:" />
                                        <input
                                            type="text"
                                            name="title"
                                            className="form-admin w-100"
                                            placeholder="Research Title"
                                            value={res.title}
                                            onChange={(e) => handleAddChange(e, index)}
                                            required
                                        />
                                    </div>
                                    <div className="flex-fill w-25">
                                        <Label forInput="status" value="Status:" />
                                        <select
                                            type="text"
                                            name="status"
                                            className="form-admin w-100"
                                            value={res.status}
                                            onChange={(e) => handleAddChange(e, index)}
                                            required
                                        >
                                            <option disabled value="">Status</option>
                                            <option value="On Going">On going</option>
                                            <option value="Complete">Complete</option>
                                        </select>
                                    </div>
                                </div>
                                
                                <div className="flex-fill d-flex p-2 gap-3">
                                    <div className="flex-fill w-25">
                                        <Label forInput="duration" value="Start date:" />
                                        <ReactDatePicker 
                                            className="form-admin w-100"
                                            name="start_date" 
                                            placeholderText="ex. 2001"
                                            selected={res.start_date}
                                            showYearPicker
                                            dateFormat="yyyy"
                                            onChange={(date) => {handleDateChange(date, index)}}
                                            isClearable 
                                            required
                                        />
                                    </div>

                                    <div className="flex-fill">
                                        <Label forInput="end_date" value="End Date:" />
                                        <input
                                            className='form-admin w-100'
                                            type="text"
                                            name="end_date"
                                            placeholder="ex. 2007 or Present"
                                            value={res.end_date}
                                            onChange={(e) => handleAddChange(e, index)}
                                        />
                                    </div>

                                    <div className="flex-fill w-75">
                                        <Label forInput="researchers" value="Researcher(s):" />
                                        <input
                                            as="textarea"
                                            type="text"
                                            name="researchers"
                                            className="form-admin w-100"
                                            placeholder="ex. Dr. John Doe, Ms. Jane Doe, JM Cruz, Mr. Juan Dela Cruz"
                                            value={res.researchers}
                                            onChange={(e) => handleAddChange(e, index)}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="remove-field-btn flex-fill p-2 d-flex align-items-end ">
                                    {data.research.length > 1 && ( // Only render the remove button if the academic background is not empty
                                        <button type="button" className="px-2 py-1 ms-auto" onClick={() => setData(prevData => ({
                                        ...prevData,
                                        research: prevData.research.filter((_, i) => i !== index),
                                        }))}>
                                            <i className="fa-solid fa-minus"></i>
                                        </button>
                                    )}
                                </div>
                                
                            </div>
                        ))}
                        {/* Add button */}
                        <div className="add-field-container w-100 p-2">
                            <button type="button" className="add-field-btn w-100 py-2" onClick={handleAddWorkField}>
                                <i className="fa-solid fa-plus"></i> Add research activity
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
                            Edit Research Activity
                        </div>
                        <button className='p-1 px-3 ms-auto' onClick={() => handleCloseUpdModal()}>
                            <i className="fa-solid fa-xmark fa-xl"></i>
                        </button>
                    </Modal.Header>
                <form onSubmit={handleUpdSubmit}>
                    <Modal.Body>
                        {selectedData.research.map((res, index) => (
                            <div className="publications-flex d-flex py-2" key={index}>
                                <div className="flex-fill d-flex p-2 gap-3">
                                    <div className="flex-fill w-75">
                                        <Label forInput="title" value="Research Title:" />
                                        <input
                                            type="text"
                                            name="title"
                                            className='form-admin w-100'
                                            placeholder="Research Title"
                                            value={res.title}
                                            onChange={(e) => handleUpdateChange(e, index)}
                                        />
                                    </div>
                                    <div className="flex-fill w-25">
                                        <Label forInput="status" value="Status:" />
                                        <select
                                            type="text"
                                            name="status"
                                            className='form-admin w-100'
                                            value={res.status}
                                            onChange={(e) => handleUpdateChange(e, index)}
                                        >
                                            <option disabled value="">Status</option>
                                            <option value="On Going">On going</option>
                                            <option value="Complete">Complete</option>
                                        </select>
                                    </div>
                                </div>
                                
                                <div className="flex-fill d-flex p-2 gap-3">
                                    <div className="flex-fill w-25">
                                        <Label forInput="start_date" value="Start Date:" />
                                        <ReactDatePicker 
                                            className="form-admin w-100"
                                            name="start_date" 
                                            placeholderText="ex. 2001"
                                            selected={res.start_date}
                                            showYearPicker
                                            dateFormat="yyyy"
                                            onChange={(date) => {handleUpdateDateChange(date, index)}}
                                            isClearable 
                                            required
                                        />
                                    </div>

                                    <div className="flex-fill">
                                        <Label forInput="end_date" value="End Date:" />
                                        <input
                                            className='form-admin w-100'
                                            type="text"
                                            name="end_date"
                                            placeholder="ex. 2007 or Present"
                                            value={res.end_date}
                                            onChange={(e) => handleUpdateChange(e, index)}
                                        />
                                    </div>

                                    <div className="flex-fill w-75">
                                        <Label forInput="researchers" value="Researcher(s):" />
                                        <input
                                            as="textarea"
                                            type="text"
                                            name="researchers"
                                            className='form-admin w-100'
                                            placeholder="ex. Dr. John Doe, Ms. Jane Doe, JM Cruz, Mr. Juan Dela Cruz"
                                            value={res.researchers}
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
                <div className="title-info-content-res pb-2">
                    <p className="m-0">
                        Research Activities
                        &nbsp;
                        {research_data.length > 0 ? '' : 
                        <>
                            <i className="fa-solid fa-circle-exclamation fa-sm" style={{ color: 'var(--yellow)'}}></i>
                        </>}
                    </p>
                    <div className='edit-profile-container ms-auto gap-2'>
                        <div style={{ fontSize: 'medium' }}>
                            <button className='go-back-btn ms-auto px-2 py-1' onClick={handlePrint}>
                                <i className="fa-solid fa-print fa-sm"></i> Print
                            </button>
                        </div>
                        <div className='d-flex gap-2 align-items-center'>
                            <button className='edit-profile p-1 px-2' onClick={() => setShowAddModal(true)}>
                                <i className="fa-regular fa-plus"></i> Add
                            </button>
                        </div>
                    </div>
                </div>
                <div className='datas-content-container'>
                    {research_data.map((res, index) => (
                        <div className="p-3" key={index} style={{ borderBottom: '#ccc 1px solid', position: 'relative' }}>
                            <div className="bg-data"></div>

                            <div className='for-edit-btn d-flex flex-column'>
                                <button className='edit-educ-btn p-1 px-2' onClick={() => handleSelectId(res.id)}>
                                    <i className="fa-regular fa-pen-to-square fa-lg"></i>
                                </button>
                                <button className='p-1 px-2' onClick={() => handleConfirmDel(res.id)}>
                                    <i className="fa-solid fa-trash-can fa-lg"></i>
                                </button>
                            </div>

                            <p className="m-0 py-1 res-title">{res.res_title}</p>

                            <p className="m-0 py-1" style={{ fontSize: 'large' }}>
                                <i className="fa-regular fa-calendar-check fa-xs"></i>
                                &nbsp;
                                <span style={{ fontSize: 'medium' }}>
                                    Duration:
                                </span> 
                                &nbsp;
                                {moment(res.start_date).format('YYYY') + '-' + res.end_date}
                            </p>

                            <p className="m-0 py-1" style={{ fontSize: 'large' }}>
                                <span style={{ color: 'var(--grey)', fontSize: 'medium'}}>Researcher(s):</span> 
                                &nbsp;
                                {res.researcher}
                            </p>

                            <p className="m-0 py-1" style={{ fontSize: 'large' }}>{res.status}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Profile>
    )
}
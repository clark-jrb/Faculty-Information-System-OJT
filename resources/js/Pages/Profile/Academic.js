import React, { useState, useEffect } from 'react';
import Profile from '../Profile';
import { usePage } from '@inertiajs/inertia-react';
import { Modal } from 'react-bootstrap';
import { useForm } from '@inertiajs/inertia-react';
import { addField, handleFieldChange } from '@/utils/forms';
import Label from '@/Components/Label';
import { Form } from 'react-bootstrap';

export default function Academic(){
    const {
        acadEduc_data,
        acadWork_data
    } = usePage().props;

    const [showModalEduc, setShowModalEduc] = useState(false);
    const [showModalEducUpd, setShowModalEducUpd] = useState(false);
    const [selectedID, setSelectedID] = useState(null);
    const [selectedEducData, setSelectedEducData] = useState([]);

    const { data, setData, post, processing } = useForm({
        academic_educ: [{ 
            degree: '', 
            institution: '', 
            educ_date: '', 
            educ_location: ''
        }],
    })

    const handleAddEducField = () => {
        addField(
            'academic_educ',
            { degree: '', institution: '', educ_date: '', educ_location: '' },
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

    const handleEducSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        post(route('add.educ', data))
        setShowModalEduc(false)
        setData({
            academic_educ: [{ 
                degree: '', 
                institution: '', 
                educ_date: '', 
                educ_location: ''
            }]
        })
    };

    const handleUpdEducSubmit = (e) => {
        e.preventDefault();
        console.log(selectedEducData);
        post(route('add.educ', selectedEducData))
        setShowModalEduc(false)
        setData({
            academic_educ: [{ 
                degree: '', 
                institution: '', 
                educ_date: '', 
                educ_location: ''
            }]
        })
    };

    // useEffect(() => {
    //     console.log(acadEduc_data[1]);
    // }, [acadEduc_data]);

    // useEffect(() => {
    //     console.log('acad work: ' + acadWork_data);
    // }, [acadWork_data]);

    const handleCloseModalEduc = () => { setShowModalEduc(false) }
    const handleCloseModalEducUpd = () => { setShowModalEducUpd(false) }

    const handleSelectIdEduc = (e) => {
        setSelectedID(e)
        setShowModalEducUpd(true)
    }

    useEffect(() => {
        const selectEduc = acadEduc_data.find(educ => educ.id === selectedID)
        setSelectedEducData(selectEduc)
    }, [selectedID]);

    // useEffect(() => {
    //     console.log(selectedEducData);
    // }, [selectedEducData]);

    return (
        <Profile>
            {/* ADD MODAL  */}
            <Modal className="academic-modal" show={showModalEduc} onHide={handleCloseModalEduc} centered size='xl'>
                <form onSubmit={handleEducSubmit}>
                    <Modal.Header className='educ-modal-head' closeButton>
                        <div className="acf-title m-2 px-3" style={{ color: 'white' }}>
                            Add Background Education
                        </div>
                    </Modal.Header>
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
                                    />
                                </div>

                                <div className="flex-fill p-2">
                                    <Label forInput="location" value="Location:" />
                                    <Form.Control
                                        type="text"
                                        name="educ_location"
                                        placeholder="Location"
                                        value={academicEduc.educ_location}
                                        onChange={(e) => handleEducChange(e, index)}
                                    />
                                </div>

                                <div className="flex-fill p-2">
                                    <Label forInput="educ_date" value="Year Graduated:" />
                                    <Form.Control   
                                        type="text"
                                        name="educ_date"
                                        placeholder="YYYY"
                                        value={academicEduc.educ_date}
                                        onChange={(e) => handleEducChange(e, index)}
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
                                <i className="fa-solid fa-plus"></i> Add education background
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
            <Modal className="academic-modal" show={showModalEducUpd} onHide={handleCloseModalEducUpd} centered size='xl'>
                <form onSubmit={handleEducSubmit}>
                    <Modal.Header className='educ-modal-head' closeButton>
                        <div className="acf-title m-2 px-3" style={{ color: 'white' }}>
                            Add Background Education
                        </div>
                    </Modal.Header>
                    <Modal.Body>
                        {acadEduc_data
                            .filter((academicEduc) => academicEduc.id === selectedID)
                            .map((academicEduc, index) => (
                            <div className="acad-educ-flex d-flex py-2" key={index}>
                                <p>{academicEduc.id}</p>
                                <div className="flex-fill p-2">
                                    <Label forInput="institution" value="Institution/School:" />
                                    <Form.Control
                                        type="text"
                                        name="institution"
                                        placeholder="Institution/School"
                                        value={academicEduc.institution}
                                        onChange={(e) => handleEducChange(e, index)}
                                    />
                                </div>

                                <div className="flex-fill p-2">
                                    <Label forInput="location" value="Location:" />
                                    <Form.Control
                                        type="text"
                                        name="educ_location"
                                        placeholder="Location"
                                        value={academicEduc.location}
                                        onChange={(e) => handleEducChange(e, index)}
                                    />
                                </div>

                                <div className="flex-fill p-2">
                                    <Label forInput="educ_date" value="Year Graduated:" />
                                    <Form.Control   
                                        type="text"
                                        name="educ_date"
                                        placeholder="YYYY"
                                        value={academicEduc.date}
                                        onChange={(e) => handleEducChange(e, index)}
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
                                    />
                                </div>
                            </div>
                        ))}
                    </Modal.Body>
                    <Modal.Footer>
                        <button className='add-btn p-1 px-2' type='submit'>
                            <i className="fa-regular fa-plus"></i> Add
                        </button>
                    </Modal.Footer>
                </form>
            </Modal>
            {/* CONTENT  */}
            <div className="p-3 px-4 academic-content d-flex gap-5">
                {/* EDUCATION  */}
                <div className="acad-educ-content flex-fill w-50">
                    <div className="title-info-content-acad pb-2">
                        <p className="m-0">Education</p>
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
                                <button className='edit-profile p-1 px-2' onClick={() => handleSelectIdEduc(educ.id)}>
                                    <i className="fa-regular fa-pen-to-square"></i>
                                </button>
                                <div className="acad-row1">
                                    <i className="fa-solid fa-graduation-cap" style={{ color: 'var(--light-green)' }}></i>
                                    &nbsp;
                                    <p className="m-0">{educ.degree}</p>
                                </div>
                                <div className="acad-row2">
                                    <p className="m-0">{educ.institution}</p>
                                </div>
                                <div className="d-flex gap-3">
                                    <div>
                                        <i className="fa-regular fa-calendar-check"></i>
                                        &nbsp;
                                        {educ.date}
                                    </div>
                                    <div>
                                        <i className="fa-solid fa-location-dot"></i>
                                        &nbsp;
                                        {educ.location}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                </div>
                
                {/* WORK EXPERIENCE  */}
                <div className="acad-work-content flex-fill w-50">
                    <div className="title-info-content-acad pb-2">
                        <p className="m-0">Work Experience</p>
                        <div className='edit-profile-container ms-auto'>
                            <div className='d-flex gap-2 align-items-center'>
                                <button className='edit-profile p-1 px-2'>
                                    <i className="fa-regular fa-plus"></i> Add
                                </button>
                            </div>
                        </div>
                    </div>
                    {acadWork_data.map((work, index) => (
                        <div className="p-3" key={index} style={{ borderBottom: '#ccc 1px solid', position: 'relative' }}>
                            <div className="bg-data"></div>
                            <div className="acad-row1">
                                <p className="m-0">{work.position}</p>
                            </div>
                            <div className="acad-row2">
                                <p className="m-0">{work.location}</p>
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
                                    {work.work_loc}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Profile>
    )
}
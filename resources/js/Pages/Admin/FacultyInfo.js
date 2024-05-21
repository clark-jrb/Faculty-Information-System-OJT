import React, { useState, useEffect } from "react";
import NavLink from "@/Components/NavLink";
import { Form } from "react-bootstrap";
import { useForm, usePage, InertiaLink } from "@inertiajs/inertia-react";
import 'react-datepicker/dist/react-datepicker.css'
import AdminAuthenticated from "@/Layouts/AdminAuthenticated";
import { useNotifContext } from "@/Contexts/Notification";
import BasicInfo from "./Fields/BasicInfo";
import Academic from "./Fields/Academic";
import ResearchActivities from "./Fields/ResearchActivities";
import Publications from "./Fields/Publications";
import Extensions from "./Fields/Extensions";
import Documents from "./Fields/Documents";
import Label from "@/Components/Label";
import { handleFieldChange } from "@/utils/forms";

export default function FacultyInfo({ children }) {
    const { 
        faculty_data,
        acadEduc_data,
        acadWork_data,
        research_data,
        publication_data,
        extention_data,
        document_data
    } = usePage().props;

    const AcadEducData = acadEduc_data.map(item => ({
        id: item.id,
        degree: item.degree,
        institution: item.institution,
        educ_date: item.date,
        educ_location: item.location
    }));

    // console.log(AcadEducData);

    const AcadWorkData = acadWork_data.map(item => ({
        id: item.id,
        work_position: item.position,
        work_institution: item.location,
        work_location: item.work_loc,
        work_date: item.date
    }));

    const ResearchActData = research_data.map(item => ({
        title: item.res_title,
        status: item.status,
        duration: item.duration,
        researchers: item.researcher
    }));

    const PublicationData = publication_data.map(item => ({
        proj_title: item.proj_title,
        proj_date: item.date,
        authors: item.authors,
        doi: item.doi
    }));

    const ExtActData = extention_data.map(item => ({
        ext_title: item.ext_title,
        ext_duration: item.duration,
        lead_faculty: item.lead,
        members: item.member,
        sponsor: item.sponsor,
        beneficiaries: item.beneficiaries
    }));

    const DocumentData = document_data.map(item => ({
        doc_id: item.id,
        label: item.label,
        file_name: item.file_name
    }));

    const { data, setData, post, processing, errors, reset } = useForm({
        fname: faculty_data.fname,
        mname: faculty_data.mname,
        lname: faculty_data.lname,
        gender: faculty_data.gender,
        birth_date: faculty_data.birth_date,
        age: faculty_data.age,
        department: faculty_data.department,
        position: faculty_data.position,
        high_degree: faculty_data.high_degree,
        role: faculty_data.role,
        specialization: faculty_data.specialization,
        email: faculty_data.email,
        contact_no: faculty_data.contact_no,
        // profile_pic: faculty_data.profile_pic,
        academic_educ: AcadEducData,
        academic_work: AcadWorkData,
        research: ResearchActData,
        publications: PublicationData,
        extensions: ExtActData,
        // documents: DocumentData
    });

    const { data: profilePicData, setData: setProfPicData, post: postProfPicData, processing: profilePicProcess } = useForm({
        profile_pic: faculty_data.profile_pic
    })

    const { data: filesData, setData: setFilesData, post: postFilesData, processing: filesProcess } = useForm({
        documents: DocumentData
    })

    const { data: addFilesData, setData: setAddFilesData, post: postAddFilesData, processing: addFilesProcess } = useForm({
        faculty_id: '',
        label: '',
        file_name: null
    })



    const [fileInput, setFileInput] = useState(false)
    const [updatePF, setUpdatePF] = useState(true);
    const [removeUpdatePF, setRemoveUpdatePF] = useState(false);
    const [showProfileUpdBtn, setShowProfileUpdBtn] = useState(false);
    const [addFileCont, setAddFileCont] = useState(false);
    const [fileData, setFileData] = useState([]);

    const handleRemoveUpdate = () => {
        setRemoveUpdatePF(false)
        setFileInput(false)
        setUpdatePF(true)
        setShowProfileUpdBtn(false)
    }

    const handleAddUpdatePF = () => {
        setRemoveUpdatePF(true)
        setFileInput(true)
        setUpdatePF(false)
    }

    const { updateNotif, updateMessage } = useNotifContext()

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setProfPicData(prevState => ({
            ...prevState,
            profile_pic: file 
        }));
        setShowProfileUpdBtn(true)
    };

    const handleValueOnFileChange = (e) => {
        const { value } = e.target;
        setAddFilesData(prevState => ({
            ...prevState,
            faculty_id: faculty_data.faculty_id,
            label: value
        }));
    };

    const handleAddFileChange = (e) => {
        const file = e.target.files[0];
        setAddFilesData(prevState => ({
            ...prevState,
            file_name: file
        }));
    };

    const handleAddFileSubmit = (e) => {
        e.preventDefault()
        console.log(addFilesData);
        postAddFilesData(`/admin/addDocument/${faculty_data.faculty_id}`, addFilesData);
        setAddFileCont(false)
    }

    const handleUpdateProfPic = (e) => {
        e.preventDefault();
        try {
            // console.log(profilePicData);
            postProfPicData(`/admin/updateProfilePic/${faculty_data.faculty_id}`, profilePicData);
            console.log('File uploaded successfully!');
        } catch (error) {
            console.error('Error uploading file:', error);
            // Optionally, you can notify the user about the error, or handle it in another way.
        }
        setShowProfileUpdBtn(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        // post(`/admin/update/${faculty_data.id}`, data)

        updateNotif(true); 
        updateMessage('Faculty Updated!')
        setTimeout(() => {
            updateNotif(false); // Hides the notification
            updateMessage(''); // Clears the message
        }, 5000); 
    };

    // useEffect(() => {
    //     console.log(faculty_data.map(data => data.fname));
    // }, [faculty_data]);

    return (
        <AdminAuthenticated>
            <div className="admin-create-faculty-cont m-4">
                {/* HEADER  */}
                <div className="d-flex align-items-center">
                    <NavLink href={route('admin.faculties')}>
                        <div className="admin-create-cont-title">
                            <p className="m-0">Faculties/&nbsp;</p>
                        </div>
                    </NavLink>
                    <div className="admin-faculty-cont-title">
                        <p className="m-0">{faculty_data.fname + ' ' + faculty_data.lname}</p>
                    </div>
                </div>
                {/* FIELDS  */}
                <div className="d-flex gap-3">
                    <div className="admin-create-fields mt-2 w-75">
                        <form onSubmit={handleSubmit}>
                        {/* BASIC FIELDS */}
                            <div className="acf-title my-3 px-3">
                                Basic Information
                            </div>
                            <BasicInfo 
                                data={data} 
                                setData={setData} 
                                profile_pic={faculty_data.profile_pic}
                                faculty_id={faculty_data.faculty_id}
                            />
                        {/* ACADEMIC FIELDS */}
                            <div className="acf-title my-3 px-3">
                                Academic
                            </div>
                            <Academic data={data} setData={setData}/>
                        {/* RESEARCH FIELDS  */}
                            <div className="acf-title my-3 px-3">
                                Research
                            </div>
                            <ResearchActivities data={data} setData={setData}/>
                        {/* PUBLICATIONS FIELDS  */}
                            <div className="acf-title my-3 px-3">
                                Publications
                            </div>
                            <Publications data={data} setData={setData}/>
                        {/* EXTENSION ACTIVITIES  */}
                            <div className="acf-title my-3 px-3">
                                Extension Activities
                            </div>
                            <Extensions data={data} setData={setData}/>
                        {/* DOCUMENTS  */}
                            {/* <div className="acf-title my-3 px-3">
                                Documents &#40;certificates etc.&#41; &#40;Not Required&#41; 
                            </div>
                            <Documents data={data} setData={setData}/> */}
                        {/* SUBMIT BUTTON  */}
                            {/* <div className="admin-add-faculty d-flex justify-content-end py-3">
                                <button className="p-3 py-2" type="submit" disabled={processing}>Update faculty</button>
                            </div> */}
                        </form>
                    </div>
                    <div className="admin-faculty-files-panel w-25 mt-2">
                        <div className="acf-title my-3 px-3">
                            Profile Picture
                        </div>
                        {/* Profile Picture  */}
                        <form onSubmit={handleUpdateProfPic}>
                            <div className="admin-profile-pic-update-cont p-3">
                                <div className="py-2 profile-image-cont">
                                    <Label forInput="profile-image" value="Profile Picture:" />

                                    <div className="d-flex justify-content-center py-2">
                                        <img src={`/images/faculty_images/${faculty_data.profile_pic}`} alt="Faculty Profile" />
                                    </div>
                                    {/* {fileInput && (
                                        <>
                                        <div className="add-field-container w-100 p-2">
                                            <Form.Control type="file" name="profile_pic" onChange={handleFileChange}/>
                                        </div>
                                        {showProfileUpdBtn && (
                                            <>
                                            <div className="update-prof-btn px-2 d-flex align-items-center">
                                                <div className="ms-auto">
                                                    <button type="submit" className="p-3 py-1" disabled={profilePicProcess}>
                                                        Update
                                                    </button>
                                                </div>
                                            </div>
                                            </>
                                        )}
                                        {profilePicProcess && (
                                            <>
                                            <p>Processing upload...</p>
                                            </>
                                        )}
                                        </>
                                    )}

                                    {updatePF && (
                                        <div className="update-btn-container w-100 px-2">
                                            <button type="button" className="add-field-btn w-100 py-2" onClick={handleAddUpdatePF}
                                            disabled={processing}>
                                                <i className="fa-solid fa-square-pen"></i> Edit profile picture
                                            </button>
                                        </div>
                                    )}
                                    
                                    {removeUpdatePF && (
                                        <div className="remove-update-container w-100 p-2">
                                            <button type="button" className="add-field-btn w-100 py-2" onClick={handleRemoveUpdate}>
                                                <i className="fa-solid fa-xmark"></i> Cancel Edit
                                            </button>
                                        </div>
                                    )} */}
                                </div>
                            </div>
                        </form>
                        {/* Documents */}
                        <div className="acf-title my-3 px-3">
                            Files <span className="in-parenthesis">(certificates etc.)</span>
                        </div>
                        {DocumentData.map((file, index) => (
                            <div className="admin-file-update-cont p-3 mb-3" key={index}>
                                <form>
                                    <div className="file-image-cont py-2">
                                        <Label forInput="file-image" value={file.label + ":"} />
                                    </div>
                                    <p>{file.file_name}</p>
                                    <div className="d-flex align-items-center">
                                        <div className="delete-doc-btn ms-auto">
                                            <InertiaLink
                                                method="delete"
                                                href={route('admin.deleteDocument', { id: file.doc_id })} 
                                                className="py-1 px-2"
                                                as="button"
                                            >
                                                Delete
                                            </InertiaLink>
                                        </div>
                                    </div>
                                    
                                </form>
                            </div>
                        ))}

                        {/* {addFileCont && 
                        <>
                            <div className="admin-file-update-cont p-3">
                                <form onSubmit={handleAddFileSubmit}>
                                    <div className="pt-3">
                                        <Label forInput="label" value="Image Label:" />
                                        <Form.Control
                                            type="text"
                                            name="label"
                                            placeholder="Label"
                                            value={addFilesData.label === null ? undefined : addFilesData.label}
                                            onChange={(e) => handleValueOnFileChange(e)}
                                        />
                                    </div>
                                    <div className="pt-3">
                                        <Label forInput="file_name" value="Upload Image (.png, .jpg, .jpeg)" />
                                        <Form.Control
                                            type="file"
                                            name="file_name"
                                            onChange={(e) => handleAddFileChange(e)}
                                        />
                                    </div>
                                    <div className="add-file-btn pt-3 d-flex align-items-center">
                                        <div className="ms-auto d-flex align-items-center gap-2">
                                            <div className="flex-fill">
                                                <button type="submit" className="p-3 py-1">Add</button>
                                            </div>
                                            <div className="cancel-add-btn flex-fill">
                                                <button type="button" className="p-3 py-1" onClick={() => setAddFileCont(false)}>Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </>
                        } */}

                        {/* <div className="add-field-container w-100 py-2">
                            <button type="button" className="add-field-btn w-100 py-2" onClick={() => setAddFileCont(true)}>
                                <i className="fa-regular fa-image"></i> Add Image
                            </button>
                        </div> */}
                    </div>  
                </div>
            </div>
        </AdminAuthenticated>
    )
}
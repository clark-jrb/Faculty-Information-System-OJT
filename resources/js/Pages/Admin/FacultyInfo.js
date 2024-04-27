import React, { useState } from "react";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Form, Modal } from "react-bootstrap";
import { useForm, usePage } from "@inertiajs/inertia-react";
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

    const [fileInput, setFileInput] = useState(false)
    const [updatePF, setUpdatePF] = useState(true);
    const [removeUpdatePF, setRemoveUpdatePF] = useState(false);
    const [showProfileUpdBtn, setShowProfileUpdBtn] = useState(false);

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
        label: item.label,
        file_name: item.file_name
    }));

    const { data, setData, post, processing, errors, reset } = useForm({
        fname: faculty_data.fname,
        lname: faculty_data.lname,
        gender: faculty_data.gender,
        birth_date: faculty_data.birth_date,
        age: faculty_data.age,
        department: faculty_data.department,
        position: faculty_data.position,
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
        documents: DocumentData
    });

    const { data: profilePicData, setData: setProfPicData, post: postProfPicData, processing: profilePicProcess } = useForm({
        profile_pic: faculty_data.profile_pic
    })

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setProfPicData(prevState => ({
            ...prevState,
            profile_pic: file 
        }));
        setShowProfileUpdBtn(true)
    };

    const handleUpdateProfPic = (e) => {
        e.preventDefault();
        try {
            // console.log(profilePicData);
            postProfPicData(`/admin/updateProfilePic/${faculty_data.id}`, profilePicData);
            console.log('File uploaded successfully!');
            setShowProfileUpdBtn(false);
        } catch (error) {
            console.error('Error uploading file:', error);
            // Optionally, you can notify the user about the error, or handle it in another way.
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        post(`/admin/update/${faculty_data.id}`, data)

        updateNotif(true); 
        updateMessage('Faculty Updated!')
        setTimeout(() => {
            updateNotif(false); // Hides the notification
            updateMessage(''); // Clears the message
        }, 5000); 
    };

    return (
        <AdminAuthenticated>
            <div className="admin-create-faculty-cont m-4">
                {/* HEADER  */}
                <div className="d-flex align-items-center">
                    <NavLink href={route('admin.departments')}>
                        <div className="admin-create-cont-title">
                            <p className="m-0">Faculties/&nbsp;</p>
                        </div>
                    </NavLink>
                    <div className="admin-faculty-cont-title">
                        <p className="m-0">{faculty_data.fname + ' ' + faculty_data.lname}</p>
                    </div>
                    <div className="go-to-files-btn ms-auto">
                        <ResponsiveNavLink href={route('admin.files')} as="button">
                            Go to files
                        </ResponsiveNavLink>
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
                                faculty_id={faculty_data.id}
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
                            <div className="admin-add-faculty d-flex justify-content-end py-3">
                                <button className="p-3 py-2" type="submit">Update faculty</button>
                            </div>
                        </form>
                    </div>
                    <div className="admin-faculty-files-panel w-25 mt-2">
                        <div className="acf-title my-3 px-3">
                            Files
                        </div>
                        <form onSubmit={handleUpdateProfPic}>
                            <div className="admin-profile-pic-update-cont p-3">
                                <div className="py-2 profile-image-cont">
                                    <Label forInput="profile-image" value="Profile Picture:" />

                                    <div className="d-flex justify-content-center py-2">
                                        <img src={`/images/faculty_images/${faculty_data.profile_pic}`} alt="Faculty Profile" />
                                    </div>
                                    {fileInput && (
                                        <>
                                        <div className="add-field-container w-100 p-2">
                                            <Form.Control type="file" name="profile_pic" onChange={handleFileChange}/>
                                        </div>
                                        {showProfileUpdBtn && (
                                            <>
                                            <div className="update-prof-btn px-2 d-flex align-items-center">
                                                <div className="ms-auto">
                                                    <button type="submit" className="p-3 py-1">
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
                                    )}
                                </div>
                            </div>
                        </form>
                    </div>  
                </div>
            </div>
        </AdminAuthenticated>
    )
}
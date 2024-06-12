import React, { useState, useEffect } from "react";
import NavLink from "@/Components/NavLink";
import { useForm, usePage } from "@inertiajs/inertia-react";
import 'react-datepicker/dist/react-datepicker.css'
import AdminAuthenticated from "@/Layouts/AdminAuthenticated";
import { useNotifContext } from "@/Contexts/Notification";
import BasicInfo from "./Fields/BasicInfo";
import Academic from "./Fields/Academic";
import ResearchActivities from "./Fields/ResearchActivities";
import Publications from "./Fields/Publications";
import Extensions from "./Fields/Extensions";
import Trainings from "./Fields/Trainings";
import Label from "@/Components/Label";
import { Inertia } from "@inertiajs/inertia";
import { useFilterDataContext } from "@/Contexts/FilterData";

export default function FacultyInfo({ children }) {
    const { 
        faculty_data,
        acadEduc_data,
        acadWork_data,
        research_data,
        publication_data,
        extention_data,
        trainings_data
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
        work_institution: item.work_loc,
        work_location: item.location,
        start_date: item.start_date,
        end_date: item.end_date
    }));

    const ResearchActData = research_data.map(item => ({
        title: item.res_title,
        status: item.status,
        start_date: item.start_date,
        end_date: item.end_date,
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
        start_date: item.start_date,
        end_date: item.end_date,
        lead_faculty: item.lead,
        members: item.member,
        sponsor: item.sponsor,
        beneficiaries: item.beneficiaries
    }));

    const TrainingsData = trainings_data.map(item => ({
        doc_id: item.id,
        title: item.title,
        role: item.role,
        location: item.location,
        start_date: item.start_date,
        end_date: item.end_date,
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
        trainings: TrainingsData
    });

    const { data: profilePicData, setData: setProfPicData, post: postProfPicData, processing: profilePicProcess } = useForm({
        profile_pic: faculty_data.profile_pic
    })

    const { handleToPrint, specific, toPrint, handleResetSpecific } = useFilterDataContext()
    

    const { updateNotif, updateMessage } = useNotifContext()

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

    const handleRedirectToPrint = () => {
        Inertia.get('/admin/printSpec', specific)
    }

    useEffect(() => {
        handleResetSpecific()
    }, []);

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

                    <div className="ms-auto d-flex w-50 gap-2 align-items-center">
                        <Label forInput="select-to-print" value="Print:" />
                        <select 
                            name="select-to-print"
                            type="text"
                            className="form-select-admin w-50" 
                            value={toPrint}
                            onChange={(e) => handleToPrint(e, faculty_data.faculty_id)}
                        >
                            <option disabled value="">Select to print</option>
                            <option value="education">Education</option>
                            <option value="work">Work Experience</option>
                            <option value="research">Research Activities</option>
                            <option value="extensions">Extension Activities</option>
                            <option value="publications">Publications</option>
                            <option value="trainings">Trainings/ Seminars</option>
                        </select>
                        <div className="px-2">
                            {toPrint === 'education' && 
                                <button className="print-btn py-1 px-2" onClick={() => handleRedirectToPrint()}>
                                    <i className="fa-solid fa-print fa-sm"></i>&nbsp;Print Education
                                </button>}
                            {toPrint === 'work' && 
                                <button className="print-btn py-1 px-2" onClick={() => handleRedirectToPrint()}>
                                    <i className="fa-solid fa-print fa-sm"></i>&nbsp;Print Work Experience
                                </button>}
                            {toPrint === 'research' && 
                                <button className="print-btn py-1 px-2" onClick={() => handleRedirectToPrint()}>
                                    <i className="fa-solid fa-print fa-sm"></i>&nbsp;Print Research Activities
                                </button>}
                            {toPrint === 'extensions' && 
                                <button className="print-btn py-1 px-2" onClick={() => handleRedirectToPrint()}>
                                    <i className="fa-solid fa-print fa-sm"></i>&nbsp;Print Extension Activities
                                </button>}
                            {toPrint === 'publications' && 
                                <button className="print-btn py-1 px-2" onClick={() => handleRedirectToPrint()}>
                                    <i className="fa-solid fa-print fa-sm"></i>&nbsp;Print Publications
                                </button>}
                            {toPrint === 'trainings' && 
                                <button className="print-btn py-1 px-2" onClick={() => handleRedirectToPrint()}>
                                    <i className="fa-solid fa-print fa-sm"></i>&nbsp;Print Trainings/ Seminars
                                </button>}
                        </div>
                        
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
                            {AcadEducData.length > 0 ? 
                            <>
                            <div className="acf-title my-3 px-3 mt-4">
                                Academic
                            </div>
                            <Academic data={data} setData={setData}/>
                            </> : <></>}
                        {/* RESEARCH FIELDS  */}
                            {ResearchActData.length > 0 ? 
                            <>
                            <div className="acf-title my-3 px-3 mt-4">
                                Research Activities
                            </div>
                            <ResearchActivities data={data} setData={setData}/>
                            </> : <></>}
                        {/* PUBLICATIONS FIELDS  */}
                            {PublicationData.length > 0 ? 
                            <>
                            <div className="acf-title my-3 px-3 mt-4">
                                Publications
                            </div>
                            <Publications data={data} setData={setData}/>
                            </> : <></>}
                        {/* EXTENSION ACTIVITIES  */}
                            {ExtActData.length > 0 ?
                            <>
                            <div className="acf-title my-3 px-3 mt-4">
                                Extension Activities
                            </div>
                            <Extensions data={data} setData={setData}/>
                            </> : <></>}
                        {/* TRAININGS/ SEMINARS */}
                            {TrainingsData.length > 0 ? 
                            <>
                            <div className="acf-title my-3 px-3 mt-4">
                                Trainings/ Seminars Attended
                            </div>
                            <Trainings data={data} setData={setData}/>
                            </> : <></>}
                        </form>
                    </div>
                    <div className="admin-faculty-files-panel w-25 mt-2">
                        <div className="acf-title my-3 px-3">
                            Profile Picture
                        </div>
                        {/* Profile Picture  */}
                        <form onSubmit={handleUpdateProfPic}>
                            <div className="admin-profile-pic-update-cont p-3 shadow-sm">
                                <div className="p-2 profile-image-cont">
                                    <Label forInput="profile-image" value="Profile Picture:" />

                                    <div className="d-flex justify-content-center py-2">
                                        <img src={`/images/faculty_images/${faculty_data.profile_pic}`} alt="Faculty Profile" />
                                    </div>
                                </div>
                            </div>
                        </form>

                    </div>  
                </div>
            </div>
        </AdminAuthenticated>
    )
}
import React from "react";
import { Form } from "react-bootstrap";
import Label from "@/Components/Label";
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
import Documents from "./Fields/Documents";

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
        doi: item.doi,
        cover_page: item.cover
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
        profile_pic: faculty_data.profile_pic,
        academic_educ: AcadEducData,
        academic_work: AcadWorkData,
        research: ResearchActData,
        publications: PublicationData,
        extensions: ExtActData,
        documents: DocumentData
    });

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
                <div className="d-flex">
                    <NavLink href={route('admin.departments')}>
                        <div className="admin-create-cont-title">
                            <p className="m-0">Faculties/&nbsp;</p>
                        </div>
                    </NavLink>
                    <div className="admin-faculty-cont-title">
                        <p className="m-0">{faculty_data.fname + ' ' + faculty_data.lname}</p>
                    </div>
                </div>
                {/* FIELDS  */}
                <div className="admin-create-fields mt-2">
                    <form onSubmit={handleSubmit}>
                    {/* BASIC FIELDS */}
                        <div className="acf-title my-3 px-3">
                            Basic Information
                        </div>
                        <BasicInfo data={data} setData={setData}/>
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
                        <div className="acf-title my-3 px-3">
                            Documents &#40;certificates etc.&#41; &#40;Not Required&#41; 
                        </div>
                        <Documents data={data} setData={setData}/>
                    {/* SUBMIT BUTTON  */}
                        <div className="admin-add-faculty d-flex justify-content-end py-3">
                            <button className="p-3 py-2" type="submit">Update faculty</button>
                        </div>
                    </form>
                </div>  
            </div>
        </AdminAuthenticated>
    )
}
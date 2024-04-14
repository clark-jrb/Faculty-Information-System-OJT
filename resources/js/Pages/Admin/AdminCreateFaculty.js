import React from "react";
import { Form } from "react-bootstrap";
import Label from "@/Components/Label";
import NavLink from "@/Components/NavLink";
import { useForm } from "@inertiajs/inertia-react";
import 'react-datepicker/dist/react-datepicker.css'
import AdminAuthenticated from "@/Layouts/AdminAuthenticated";
import { useNotifContext } from "@/Contexts/Notification";
import BasicInfo from "./Fields/BasicInfo";
import Academic from "./Fields/Academic";
import ResearchActivities from "./Fields/ResearchActivities";
import Publications from "./Fields/Publications";
import Extensions from "./Fields/Extensions";

export default function AdminFaculties({ children }) {

    const { updateNotif, updateMessage } = useNotifContext()

    const { data, setData, post, processing, errors, reset } = useForm({
        fname: '',
        lname: '',
        gender: '',
        birth_date: '',
        age: '',
        department: '',
        position: '',
        role: '',
        specialization: '',
        email: '',
        contact_no: '',
        profile_pic: '',
        academic_educ: [{ 
            degree: '', 
            institution: '', 
            educ_date: '', 
            educ_location: ''
        }],
        academic_work: [{
            work_position: '',
            work_institution: '',
            work_location: '',
            work_date: ''
        }],
        research: [{
            title: '',
            status: '',
            duration: '',
            researchers: ''
        }],
        publications: [{
            proj_title: '',
            proj_date: '',
            authors: '',
            doi: '',
            cover_page: ''
        }],
        extensions: [{
            ext_title: '',
            ext_duration: '',
            lead_faculty: '',
            members: '',
            sponsor: '',
            beneficiaries: ''
        }]
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        post('/admin/store', data)

        updateNotif(true); 
        updateMessage('Faculty Added!')
        setTimeout(() => updateNotif(false), 5000); 
        setTimeout(() => updateMessage(''), 5000); 
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
                        <p className="m-0">Create</p>
                    </div>
                </div>
                {/* FIELDS  */}
                <div className="admin-create-fields mt-2">
                    <form onSubmit={handleSubmit}>
                    {/* BASIC FIELDS */}
                        <div className="acf-title py-2">
                            Basic Information
                        </div>
                        <BasicInfo data={data} setData={setData}/>
                    {/* ACADEMIC FIELDS */}
                        <div className="acf-title py-2">
                            Academic
                        </div>
                        <Academic data={data} setData={setData}/>
                    {/* RESEARCH FIELDS  */}
                        <div className="acf-title py-2">
                            Research
                        </div>
                        <ResearchActivities data={data} setData={setData}/>
                    {/* PUBLICATIONS FIELDS  */}
                        <div className="acf-title py-2">
                            Publications
                        </div>
                        <Publications data={data} setData={setData}/>
                    {/* EXTENSION ACTIVITIES  */}
                        <div className="acf-title py-2">
                            Extension Activities
                        </div>
                        <Extensions data={data} setData={setData}/>
                    {/* DOCUMENTS  */}
                        <div className="create-documents-fields">
                            <div className="acf-title py-2">
                                Documents
                            </div>
                        </div>
                    {/* SUBMIT BUTTON  */}
                        <button className="btn btn-success" type="submit">Add</button>
                    </form>
                </div>
            </div>
        </AdminAuthenticated>
    )
}
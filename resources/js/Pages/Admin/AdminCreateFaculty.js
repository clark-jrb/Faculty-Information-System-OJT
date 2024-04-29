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
import Documents from "./Fields/Documents";

export default function AdminCreateFaculty({ children }) {

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
            doi: ''
        }],
        extensions: [{
            ext_title: '',
            ext_duration: '',
            lead_faculty: '',
            members: '',
            sponsor: '',
            beneficiaries: ''
        }],
        documents: [{
            label: '',
            file_name: ''
        }]
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        post('/admin/store', data)

        updateNotif(true); 
        updateMessage('Faculty Added!')
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
                        <p className="m-0">Create</p>
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
                        <div className="admin-add-faculty d-flex justify-content-end py-3 w-75">
                            <button className="p-3 py-2" type="submit">Create faculty</button>
                        </div>
                    </form>
                </div>  
            </div>
        </AdminAuthenticated>
    )
}
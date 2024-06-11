import React, { useEffect } from "react";
import { Form } from "react-bootstrap";
import Label from "@/Components/Label";
import { addField, handleFieldChange } from "@/utils/forms";
import moment from "moment";

export default function Academic({ data, setData }) {
    const handleAddEducField = () => {
        addField(
            'academic_educ',
            { degree: '', institution: '', educ_date: '', educ_location: '' },
            setData,
            data
        );
    };

    const handleAddWorkField = () => {
        addField(
            'academic_work',
            { work_position: '', work_institution: '', work_date: '', work_location: '' },
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

    const handleWorkChange = (e, index) => {
        handleFieldChange(
            'academic_work',
            e,
            index,
            setData,
            data
        );
    };

    return (
        <div className={`create-academic-fields shadow-sm ${route().current('admin.create') ? 'w-75' : 'w-100'}`}>
    {/* Education  */}
            <div className="acf-title-sub p-3">
                Education
            </div>
            {data.academic_educ.map((academicEduc, index) => (
                <div className="acad-flex p-3 shadow-sm" key={index}>
                    <div className="flex-fill d-flex">
                        <div className="flex-fill p-2 w-50">
                            <Label forInput="institution" value="Institution/School:" />
                            {academicEduc.institution}
                        </div>

                        <div className="flex-fill p-2 w-25">
                            <Label forInput="educ_date" value="Year Graduated:" />
                            {academicEduc.educ_date}
                        </div>
                    </div>
                    
                    <div className="flex-fill d-flex">
                        <div className="flex-fill p-2 w-50">
                            <Label forInput="location" value="Location:" />
                            {academicEduc.educ_location}
                        </div>

                        <div className="flex-fill p-2 w-25">
                            <Label forInput="degree" value="Degree/Masteral/Doctorate Title:" />
                            {academicEduc.degree}
                        </div>
                    </div>
                    
                </div>
            ))}
            
    {/* Work Experience  */}
            <div className="acf-title-sub p-3 pt-5">
                Work Experience
            </div>
            {data.academic_work.map((academicWork, index) => (
                <div className="acad-flex p-3 shadow-sm" key={index}>
                    <div className="d-flex flex-fill">
                        <div className="flex-fill p-2 w-50">
                            <Label forInput="work_institution" value="Institution/Organization:" />
                            {academicWork.work_institution}
                        </div>

                        <div className="flex-fill p-2 w-25">
                            <Label forInput="work_date" value="Date:" />
                            {moment(academicWork.start_date).format('YYYY') + '-' + academicWork.end_date}
                        </div>
                    </div>

                    <div className="d-flex flex-fill">
                        <div className="flex-fill p-2 w-50">
                            <Label forInput="location" value="Work location:" />
                            {academicWork.work_location}
                        </div>

                        <div className="flex-fill p-2 w-25">
                            <Label forInput="work_position" value="Position:" />
                            {academicWork.work_position}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
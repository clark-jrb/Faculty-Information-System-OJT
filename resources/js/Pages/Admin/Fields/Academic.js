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
        <div className={`create-academic-fields ${route().current('admin.create') ? 'w-75' : 'w-100'} p-3`}>
    {/* Education  */}
            <div className="acf-title my-2 px-3">
                Education
            </div>
            {data.academic_educ.map((academicEduc, index) => (
                <div className="acad-flex py-2" key={index}>
                    <div className="flex-fill d-flex">
                        <div className="flex-fill p-2 w-50">
                            <Label forInput="institution" value="Institution/School:" />
                            <input
                                type="text"
                                name="institution"
                                className="form-admin w-100"
                                placeholder="Institution/School"
                                value={academicEduc.institution}
                                // onChange={(e) => handleEducChange(e, index)}
                                readOnly
                            />
                        </div>

                        <div className="flex-fill p-2">
                            <Label forInput="educ_date" value="Year Graduated:" />
                            <input   
                                type="text"
                                name="educ_date"
                                className="form-admin w-100"
                                placeholder="YYYY"
                                value={academicEduc.educ_date}
                                // onChange={(e) => handleEducChange(e, index)}
                                readOnly
                            />
                        </div>
                    </div>
                    
                    <div className="flex-fill d-flex">
                        <div className="flex-fill p-2 w-50">
                            <Label forInput="location" value="Location:" />
                            <input
                                type="text"
                                name="educ_location"
                                className="form-admin w-100"
                                placeholder="Location"
                                value={academicEduc.educ_location}
                                // onChange={(e) => handleEducChange(e, index)}
                                readOnly
                            />
                        </div>

                        <div className="flex-fill p-2">
                            <Label forInput="degree" value="Degree/Masteral/Doctorate Title:" />
                            <input
                                type="text"
                                name="degree"
                                className="form-admin w-100"
                                placeholder="ex. MS in Crop Protection"
                                value={academicEduc.degree}
                                // onChange={(e) => handleEducChange(e, index)}
                                readOnly
                            />
                        </div>
                    </div>
                    

                    {/* <div className="remove-field-btn flex-fill p-2 d-flex align-items-end ">
                        {data.academic_educ.length > 1 && ( // Only render the remove button if the academic background is not empty
                            <button type="button" className="px-2 py-1" onClick={() => setData(prevData => ({
                            ...prevData,
                            academic_educ: prevData.academic_educ.filter((_, i) => i !== index),
                            }))}>
                                <i className="fa-solid fa-minus"></i>
                            </button>
                        )}
                    </div> */}
                    
                </div>
            ))}
            {/* Add button */}
            {/* <div className="add-field-container w-100 px-2">
                <button type="button" className="add-field-btn w-100 py-2" onClick={handleAddEducField}>
                    <i className="fa-solid fa-plus"></i> Add education background
                </button>
            </div> */}
            
    {/* Work Experience  */}
            <div className="acf-title my-2 px-3 mt-3">
                Work Experience
            </div>
            {data.academic_work.map((academicWork, index) => (
                <div className="acad-flex py-2" key={index}>
                    <div className="d-flex flex-fill">
                        <div className="flex-fill p-2 w-50">
                            <Label forInput="work_institution" value="Institution/Organization:" />
                            <input
                                type="text"
                                name="work_institution"
                                className="form-admin w-100"
                                placeholder="Institution/Organization"
                                value={academicWork.work_institution}
                                // onChange={(e) => handleWorkChange(e, index)}
                                readOnly
                            />
                        </div>

                        <div className="flex-fill p-2">
                            <Label forInput="work_date" value="Date:" />
                            <input   
                                type="text"
                                name="work_date"
                                className="form-admin w-100"
                                placeholder="YYYY-(YYYY/Present)"
                                value={moment(academicWork.start_date).format('YYYY') + '-' + academicWork.end_date}
                                // onChange={(e) => handleWorkChange(e, index)}
                                readOnly
                            />
                        </div>
                    </div>

                    <div className="d-flex flex-fill">
                        <div className="flex-fill p-2 w-50">
                            <Label forInput="location" value="Work location:" />
                            <input
                                type="text"
                                name="work_location"
                                className="form-admin w-100"
                                placeholder="Work location"
                                value={academicWork.work_location}
                                // onChange={(e) => handleWorkChange(e, index)}
                                readOnly
                            />
                        </div>

                        <div className="flex-fill p-2">
                            <Label forInput="work_position" value="Position:" />
                            <input
                                type="text"
                                name="work_position"
                                className="form-admin w-100"
                                placeholder="Position"
                                value={academicWork.work_position}
                                // onChange={(e) => handleWorkChange(e, index)}
                                readOnly
                            />
                        </div>
                    </div>
                    
                    {/* <div className="remove-field-btn flex-fill p-2 d-flex align-items-end ">
                        {data.academic_work.length > 1 && ( // Only render the remove button if the academic background is not empty
                            <button type="button" className="px-2 py-1" onClick={() => setData(prevData => ({
                            ...prevData,
                            academic_work: prevData.academic_work.filter((_, i) => i !== index),
                            }))}>
                                <i className="fa-solid fa-minus"></i>
                            </button>
                        )}
                    </div> */}
                    
                </div>
            ))}

            {/* Add field button */}
            {/* <div className="add-field-container w-100 px-2">
                <button type="button" className="add-field-btn w-100 py-2" onClick={handleAddWorkField}>
                    <i className="fa-solid fa-plus"></i> Add work experience
                </button>
            </div> */}
        </div>
    )
}
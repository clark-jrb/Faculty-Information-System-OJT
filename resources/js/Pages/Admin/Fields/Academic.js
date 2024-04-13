import React from "react";
import { Form } from "react-bootstrap";
import Label from "@/Components/Label";
import { addField, handleFieldChange } from "@/utils/forms";

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
        <div className="create-academic-fields w-100 p-3">
    {/* Education  */}
            <div className="acf-title py-2">
                Education
            </div>
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
                    <i className="fa-solid fa-plus"></i> Add another education background
                </button>
            </div>
            
    {/* Work Experience  */}
            <div className="acf-title py-2">
                Work Experience
            </div>
            <div className="acad-work-flex d-flex py-2"></div>
            {data.academic_work.map((academicWork, index) => (
                <div className="acad-work-flex d-flex py-2" key={index}>
                    <div className="flex-fill p-2">
                        <Label forInput="work_institution" value="Institution/Organization:" />
                        <Form.Control
                            type="text"
                            name="work_institution"
                            placeholder="Institution/Organization"
                            value={academicWork.work_institution}
                            onChange={(e) => handleWorkChange(e, index)}
                        />
                    </div>

                    <div className="flex-fill p-2">
                        <Label forInput="location" value="Work location:" />
                        <Form.Control
                            type="text"
                            name="work_location"
                            placeholder="Work location"
                            value={academicWork.work_location}
                            onChange={(e) => handleWorkChange(e, index)}
                        />
                    </div>

                    <div className="flex-fill p-2">
                        <Label forInput="work_date" value="Date:" />
                        <Form.Control   
                            type="text"
                            name="work_date"
                            placeholder="YYYY-(YYYY/Present)"
                            value={academicWork.work_date}
                            onChange={(e) => handleWorkChange(e, index)}
                        />
                    </div>

                    <div className="flex-fill p-2">
                        <Label forInput="work_position" value="Position:" />
                        <Form.Control
                            type="text"
                            name="work_position"
                            placeholder="Position"
                            value={academicWork.work_position}
                            onChange={(e) => handleWorkChange(e, index)}
                        />
                    </div>

                    <div className="remove-field-btn flex-fill p-2 d-flex align-items-end ">
                        {data.academic_work.length > 1 && ( // Only render the remove button if the academic background is not empty
                            <button type="button" className="px-2 py-1" onClick={() => setData(prevData => ({
                            ...prevData,
                            academic_work: prevData.academic_work.filter((_, i) => i !== index),
                            }))}>
                                <i className="fa-solid fa-minus"></i>
                            </button>
                        )}
                    </div>
                    
                </div>
            ))}

            {/* Add field button */}
            <div className="add-field-container w-100 px-2">
                <button type="button" className="add-field-btn w-100 py-2" onClick={handleAddWorkField}>
                    <i className="fa-solid fa-plus"></i> Add another work experience
                </button>
            </div>
        </div>
    )
}
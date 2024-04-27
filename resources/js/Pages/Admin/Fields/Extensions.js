import React from "react";
import { Form } from "react-bootstrap";
import Label from "@/Components/Label";
import { addField, handleFieldChange } from "@/utils/forms";

export default function Extensions({ data, setData }) {

    const handleAddField = () => {
        addField(
            'extensions',
            { ext_title: '', ext_duration: '', lead_faculty: '', members: '', sponsor: '',          beneficiaries: '' },
            setData,
            data
        )
    };

    const handleChange = (e, index) => {
        handleFieldChange(
            'extensions',
            e,
            index,
            setData,
            data
        )
    };

    return (
        <div className={`create-extensions-fields ${route().current('admin.create') ? 'w-75' : 'w-100'} p-3`}>
            {data.extensions.map((ext, index) => (
                <div className="extensions-flex d-flex py-2" key={index}>

                    <div className="flex-fill d-flex p-2 gap-3">
                        <div className="flex-fill w-50">
                            <Label forInput="ext_title" value="Extension Project Title:" />
                            <Form.Control
                                type="text"
                                name="ext_title"
                                placeholder="Title"
                                value={ext.ext_title}
                                onChange={(e) => handleChange(e, index)}
                            />
                        </div>
                        <div className="flex-fill w-25">
                            <Label forInput="lead_faculty" value="Lead Faculty:" />
                            <Form.Control
                                type="text"
                                name="lead_faculty"
                                placeholder="Lead Faculty"
                                value={ext.lead_faculty}
                                onChange={(e) => handleChange(e, index)}
                            />
                        </div>
                        <div className="flex-fill w-25">
                            <Label forInput="ext_duration" value="Duration:" />
                            <Form.Control
                                type="text"
                                name="ext_duration"
                                placeholder="ex. 2 Years or On Going/Complete"
                                value={ext.ext_duration}
                                onChange={(e) => handleChange(e, index)}
                            />
                        </div>
                    </div>
                    
                    <div className="flex-fill d-flex p-2 gap-3">
                        <div className="flex-fill w-25">
                            <Label forInput="beneficiaries" value="Beneficiaries (e.g. farmers, professionals, organization):" />
                            <Form.Control   
                                type="text"
                                name="beneficiaries"
                                placeholder="Beneficiaries"
                                value={ext.beneficiaries}
                                onChange={(e) => handleChange(e, index)}
                            />
                        </div>
                        <div className="flex-fill w-25">
                            <Label forInput="sponsor" value="Sponsoring Department(s):" />
                            <Form.Control   
                                type="text"
                                as="textarea"
                                name="sponsor"
                                placeholder="Sponsor(s) (required to put , if more than one)"
                                value={ext.sponsor}
                                onChange={(e) => handleChange(e, index)}
                            />
                        </div>
                        <div className="flex-fill w-50">
                            <Label forInput="members" value="Team Members:" />
                            <Form.Control
                                as="textarea"
                                type="text"
                                name="members"
                                placeholder="ex. Dr. John Doe, JM Cruz, Mr. Juan Dela Cruz (required to put ,)"
                                value={ext.members}
                                onChange={(e) => handleChange(e, index)}
                            />
                        </div>
                    </div>

                    <div className="remove-field-btn flex-fill p-2 d-flex justify-content-end">
                        {data.extensions.length > 1 && ( // Only render the remove button if the academic background is not empty
                            <button type="button" className="px-2 py-1" onClick={() => setData(prevData => ({
                            ...prevData,
                            extensions: prevData.extensions.filter((_, i) => i !== index),
                            }))}>
                                <i className="fa-solid fa-minus"></i>
                            </button>
                        )}
                    </div>
                    
                </div>
            ))}

            {/* Add field button */}
            <div className="add-field-container w-100 px-2">
                <button type="button" className="add-field-btn w-100 py-2" onClick={handleAddField}>
                    <i className="fa-solid fa-plus"></i> Add another extension activity
                </button>
            </div>
        </div>
    )
}
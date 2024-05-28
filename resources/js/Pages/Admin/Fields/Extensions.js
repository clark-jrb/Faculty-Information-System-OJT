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
                            <textarea
                                type="text"
                                name="ext_title"
                                className="form-admin w-100"
                                placeholder="Title"
                                value={ext.ext_title}
                                // onChange={(e) => handleChange(e, index)}
                                readOnly
                            />
                        </div>
                        <div className="flex-fill w-25">
                            <Label forInput="lead_faculty" value="Lead Faculty:" />
                            <input
                                type="text"
                                name="lead_faculty"
                                className="form-admin w-100"
                                placeholder="Lead Faculty"
                                value={ext.lead_faculty}
                                // onChange={(e) => handleChange(e, index)}
                                readOnly
                            />
                        </div>
                        <div className="flex-fill w-25">
                            <Label forInput="ext_duration" value="Duration:" />
                            <input
                                type="text"
                                name="ext_duration"
                                className="form-admin w-100"
                                placeholder="ex. 2 Years or On Going/Complete"
                                value={ext.ext_duration}
                                // onChange={(e) => handleChange(e, index)}
                                readOnly
                            />
                        </div>
                    </div>
                    
                    <div className="flex-fill d-flex p-2 gap-3">
                        <div className="flex-fill w-25">
                            <Label forInput="beneficiaries" value="Beneficiaries (e.g. farmers, professionals, organization):" />
                            <input   
                                type="text"
                                name="beneficiaries"
                                className="form-admin w-100"
                                placeholder="Beneficiaries"
                                value={ext.beneficiaries}
                                // onChange={(e) => handleChange(e, index)}
                                readOnly
                            />
                        </div>
                        <div className="flex-fill w-25">
                            <Label forInput="sponsor" value="Sponsoring Department(s):" />
                            <textarea  
                                type="text"
                                name="sponsor"
                                className="form-admin w-100"
                                placeholder="Sponsor(s) (required to put , if more than one)"
                                value={ext.sponsor}
                                // onChange={(e) => handleChange(e, index)}
                                readOnly
                            />
                        </div>
                        <div className="flex-fill w-50">
                            <Label forInput="members" value="Team Members:" />
                            <textarea
                                type="text"
                                name="members"
                                className="form-admin w-100"
                                placeholder="ex. Dr. John Doe, JM Cruz, Mr. Juan Dela Cruz (required to put ,)"
                                value={ext.members}
                                // onChange={(e) => handleChange(e, index)}
                                readOnly
                            />
                        </div>
                    </div>

                    {/* <div className="remove-field-btn flex-fill p-2 d-flex justify-content-end">
                        {data.extensions.length > 1 && ( // Only render the remove button if the academic background is not empty
                            <button type="button" className="px-2 py-1" onClick={() => setData(prevData => ({
                            ...prevData,
                            extensions: prevData.extensions.filter((_, i) => i !== index),
                            }))}>
                                <i className="fa-solid fa-minus"></i>
                            </button>
                        )}
                    </div> */}
                    
                </div>
            ))}

            {/* Add field button */}
            {/* <div className="add-field-container w-100 px-2">
                <button type="button" className="add-field-btn w-100 py-2" onClick={handleAddField}>
                    <i className="fa-solid fa-plus"></i> Add extension activity
                </button>
            </div> */}
        </div>
    )
}
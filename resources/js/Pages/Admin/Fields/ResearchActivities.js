import React from "react";
import { Form } from "react-bootstrap";
import Label from "@/Components/Label";
import { addField, handleFieldChange } from "@/utils/forms";
import moment from "moment";

export default function ResearchActivities({ data, setData }) {

    const handleAddRAField = () => {
        addField(
            'research',
            { title: '', status: '', duration: '', researchers: '' },
            setData,
            data
        )
    };

    const handleResActChange = (e, index) => {
        handleFieldChange(
            'research',
            e,
            index,
            setData,
            data
        )
    };

    return (
        <div className={`create-research-fields ${route().current('admin.create') ? 'w-75' : 'w-100'} p-3`}>
            {data.research.map((res, index) => (
                <div className="research-flex d-flex py-2" key={index}>
                    <div className="flex-fill d-flex p-2 gap-3">
                        <div className="flex-fill w-75">
                            <Label forInput="title" value="Research Title:" />
                            <textarea
                                type="text"
                                name="title"
                                className="form-admin w-100"
                                placeholder="Research Title"
                                value={res.title}
                                // onChange={(e) => handleResActChange(e, index)}
                                readOnly
                            />
                        </div>
                        <div className="flex-fill w-25">
                            <Label forInput="status" value="Status:" />
                            <select
                                type="text"
                                name="status"
                                className="form-admin w-100"
                                value={res.status}
                                // onChange={(e) => handleResActChange(e, index)}
                                readOnly
                            >
                                <option disabled value="">Status</option>
                                <option value="On Going">On going</option>
                                <option value="Complete">Complete</option>
                            </select>
                        </div>
                    </div>
                    
                    <div className="flex-fill d-flex p-2 gap-3">
                        <div className="flex-fill w-25">
                            <Label forInput="duration" value="Duration:" />
                            <input   
                                type="text"
                                name="duration"
                                className="form-admin w-100"
                                placeholder="ex. 3 Years or YYYY-YYYY"
                                value={moment(res.start_date).format('YYYY') + '-' + res.end_date}
                                // onChange={(e) => handleResActChange(e, index)}
                                readOnly
                            />
                        </div>
                        <div className="flex-fill w-75">
                            <Label forInput="researchers" value="Researcher(s):" />
                            <input
                                as="textarea"
                                type="text"
                                name="researchers"
                                className="form-admin w-100"
                                placeholder="ex. Dr. John Doe, Ms. Jane Doe, JM Cruz, Mr. Juan Dela Cruz"
                                value={res.researchers}
                                // onChange={(e) => handleResActChange(e, index)}
                                readOnly
                            />
                        </div>
                    </div>

                    {/* <div className="remove-field-btn flex-fill p-2 d-flex justify-content-end">
                        {data.research.length > 1 && ( // Only render the remove button if the academic background is not empty
                            <button type="button" className="px-2 py-1" onClick={() => setData(prevData => ({
                            ...prevData,
                            research: prevData.research.filter((_, i) => i !== index),
                            }))}>
                                <i className="fa-solid fa-minus"></i>
                            </button>
                        )}
                    </div> */}
                    
                </div>
            ))}

            {/* Add field button */}
            {/* <div className="add-field-container w-100 px-2">
                <button type="button" className="add-field-btn w-100 py-2" onClick={handleAddRAField}>
                    <i className="fa-solid fa-plus"></i> Add research activity
                </button>
            </div> */}
        </div>
    )
}
import React from "react";
import { Form } from "react-bootstrap";
import Label from "@/Components/Label";
import { addField, handleFieldChange } from "@/utils/forms";

export default function Documents({ data, setData }) {

    const handleAddRAField = () => {
        addField(
            'documents',
            { label: '', file_name: '' },
            setData,
            data
        )
    };

    const handleResActChange = (e, index) => {
        handleFieldChange(
            'documents',
            e,
            index,
            setData,
            data
        )
    };

    return (
        <div className="create-documents-fields w-75 p-3">
            {data.documents.map((doc, index) => (
                <div className="documents-flex d-flex py-2" key={index}>
                    <div className="flex-fill d-flex p-2 gap-3">
                        <div className="flex-fill">
                            <Label forInput="label" value="Document Label:" />
                            <Form.Control
                                type="text"
                                name="label"
                                placeholder="Label"
                                value={doc.label}
                                onChange={(e) => handleResActChange(e, index)}
                            />
                        </div>
                        <div className="flex-fill">
                            <Label forInput="file_name" value="Upload document (.png, .jpg, .jpeg)" />
                            <Form.Control type="file" name="file_name"/>
                        </div>
                    </div>

                    <div className="remove-field-btn flex-fill p-2 d-flex align-items-end">
                        {data.documents.length > 1 && ( // Only render the remove button if the academic background is not empty
                            <button type="button" className="px-2 py-1" onClick={() => setData(prevData => ({
                            ...prevData,
                            documents: prevData.documents.filter((_, i) => i !== index),
                            }))}>
                                <i className="fa-solid fa-minus"></i>
                            </button>
                        )}
                    </div>
                    
                </div>
            ))}

            {/* Add field button */}
            <div className="add-field-container w-100 px-2">
                <button type="button" className="add-field-btn w-100 py-2" onClick={handleAddRAField}>
                    <i className="fa-solid fa-plus"></i> Add another research activity
                </button>
            </div>
        </div>
    )
}
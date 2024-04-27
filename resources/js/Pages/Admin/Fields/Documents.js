import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Label from "@/Components/Label";
import { addField, handleFieldChange } from "@/utils/forms";

export default function Documents({ data, setData }) {
    const [fileData, setFileData] = useState([]); // State to hold file data

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

    const handleFileChange = (e, index) => {
        const files = e.target.files;
        const newFileData = [...fileData];
        newFileData[index] = files[0];
        setFileData(newFileData);
        // Optionally, update the document state with file name
        handleFieldChange(
            'documents',
            { target: { name: 'file_name', value: files[0] } },
            index,
            setData,
            data
        );
    };

    return (
        <div className="create-documents-fields w-100 p-3">
            {data.documents.map((doc, index) => (
                <div className="documents-flex d-flex py-2" key={index}>
                    <div className="flex-fill d-flex p-2 gap-3">
                        <div className="flex-fill">
                            <Label forInput="label" value="Document Label:" />
                            <Form.Control
                                type="text"
                                name="label"
                                placeholder="Label"
                                value={doc.label === null ? undefined : doc.label}
                                onChange={(e) => handleResActChange(e, index)}
                            />
                        </div>
                        <div className="flex-fill">
                            <Label forInput="file_name" value="Upload document (.png, .jpg, .jpeg)" />
                            <Form.Control
                                type="file"
                                name="file_name"
                                onChange={(e) => handleFileChange(e, index)}
                            />
                        </div>
                    </div>

                    <div className="remove-field-btn flex-fill p-2 d-flex align-items-end">
                        {data.documents.length > 1 && (
                            <button
                                type="button"
                                className="px-2 py-1"
                                onClick={() =>
                                    setData((prevData) => ({
                                        ...prevData,
                                        documents: prevData.documents.filter((_, i) => i !== index),
                                    }))
                                }
                            >
                                <i className="fa-solid fa-minus"></i>
                            </button>
                        )}
                    </div>
                </div>
            ))}

            {/* Add field button */}
            <div className="add-field-container w-100 px-2">
                <button type="button" className="add-field-btn w-100 py-2" onClick={handleAddRAField}>
                    <i className="fa-solid fa-plus"></i> Add another document
                </button>
            </div>
        </div>
    );
}
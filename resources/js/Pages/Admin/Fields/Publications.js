import React from "react";
import { Form } from "react-bootstrap";
import Label from "@/Components/Label";
import { addField, handleFieldChange } from "@/utils/forms";
import moment from "moment";

export default function Publications({ data, setData }) {

    const handleAddField = () => {
        addField(
            'publications',
            { proj_title: '', proj_date: '', doi: '', authors: '' },
            setData,
            data
        )
    };

    const handleChange = (e, index) => {
        handleFieldChange(
            'publications',
            e,
            index,
            setData,
            data
        )
    };

    return (
        <div className={`create-publications-fields ${route().current('admin.create') ? 'w-75' : 'w-100'} p-3`}>
            {data.publications.map((pub, index) => (
                <div className="publications-flex d-flex py-2" key={index}>
                    <div className="flex-fill d-flex p-2 gap-3">
                        <div className="flex-fill w-75">
                            <Label forInput="proj_title" value="Title:" />
                            <textarea
                                type="text"
                                name="proj_title"
                                className="form-admin w-100"
                                placeholder="Title"
                                value={pub.proj_title}
                                // onChange={(e) => handleChange(e, index)}
                                readOnly
                            />
                        </div>
                        <div className="flex-fill w-25">
                            <Label forInput="proj_date" value="Date Published:" />
                            <input
                                type="text"
                                name="proj_date"
                                className="form-admin w-100"
                                placeholder="ex. March 2020"
                                value={moment(pub.proj_date).format('MMMM YYYY')}
                                // onChange={(e) => handleChange(e, index)}
                                readOnly
                            />
                        </div>
                    </div>
                    
                    <div className="flex-fill d-flex p-2 gap-3">
                        <div className="flex-fill w-25">
                            <Label forInput="doi" value="DOI:" />
                            <input   
                                type="text"
                                name="doi"
                                className="form-admin w-100"
                                placeholder="DOI"
                                value={pub.doi}
                                // onChange={(e) => handleChange(e, index)}
                                readOnly
                            />
                        </div>
                        <div className="flex-fill w-75">
                            <Label forInput="authors" value="Authors:" />
                            <textarea
                                type="text"
                                name="authors"
                                className="form-admin w-100"
                                placeholder="ex. Dr. John Doe, JM Cruz, Mr. Juan Dela Cruz (required to put ,)"
                                value={pub.authors}
                                // onChange={(e) => handleChange(e, index)}
                                readOnly
                            />
                        </div>
                    </div>

                    {/* <div className="remove-field-btn flex-fill p-2 d-flex justify-content-end">
                        {data.publications.length > 1 && ( // Only render the remove button if the academic background is not empty
                            <button type="button" className="px-2 py-1" onClick={() => setData(prevData => ({
                            ...prevData,
                            publications: prevData.publications.filter((_, i) => i !== index),
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
                    <i className="fa-solid fa-plus"></i> Add publication
                </button>
            </div> */}
        </div>
    )
}
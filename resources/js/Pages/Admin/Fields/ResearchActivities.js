import React from "react";
import { Form } from "react-bootstrap";
import Label from "@/Components/Label";

export default function ResearchActivities({ data, setData }) {
    return (
        <div className="create-research-fields w-100 p-3">
            {data.research.map((res, index) => (
                <div className="research-flex d-flex py-2" key={index}>
                    <div className="flex-fill d-flex p-2 gap-3">
                        <div className="flex-fill w-75">
                            <Label forInput="title" value="Research Title:" />
                            <Form.Control
                                type="text"
                                name="title"
                                placeholder="Research Title"
                                value={res.title}
                                onChange={(e) => handleEducChange(e, index)}
                            />
                        </div>
                        <div className="flex-fill w-25">
                            <Label forInput="status" value="Status:" />
                            <Form.Control
                                type="text"
                                name="status"
                                placeholder="Status"
                                value={res.status}
                                onChange={(e) => handleEducChange(e, index)}
                            />
                        </div>
                    </div>
                    
                    <div className="flex-fill d-flex p-2 gap-3">
                        <div className="flex-fill w-25">
                            <Label forInput="duration" value="Duration:" />
                            <Form.Control   
                                type="text"
                                name="duration"
                                placeholder="ex. 3 Years/ YYYY-YYYY"
                                value={res.duration}
                                onChange={(e) => handleEducChange(e, index)}
                            />
                        </div>
                        <div className="flex-fill w-75">
                            <Label forInput="researchers" value="Researcher(s):" />
                            <Form.Control
                                as="textarea"
                                type="text"
                                name="researchers"
                                placeholder="ex. Dr. John Doe, Ms. Jane Doe, JM Cruz, Mr. Juan Dela Cruz"
                                value={res.researchers}
                                onChange={(e) => handleEducChange(e, index)}
                            />
                        </div>
                    </div>

                    <div className="remove-field-btn flex-fill p-2 d-flex align-items-end ">
                        {!res.isEmpty && ( // Only render the remove button if the academic background is not empty
                            <button type="button" className="px-2 py-1" onClick={() => setData(prevData => ({
                            ...prevData,
                            research: prevData.research.filter((_, i) => i !== index),
                            }))}>
                                <i className="fa-solid fa-minus"></i>
                            </button>
                        )}
                    </div>
                    
                </div>
            ))}
        </div>
    )
}
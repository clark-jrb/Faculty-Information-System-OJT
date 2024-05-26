import React from "react";
import { Form } from "react-bootstrap";
import Label from "@/Components/Label";
import ReactDatePicker from "react-datepicker";

export default function Trainings({ data, setData }) {

    return (
        <div className={`create-extensions-fields ${route().current('admin.create') ? 'w-75' : 'w-100'} p-3`}>
            {data.trainings.map((train, index) => (
                <div className="extensions-flex d-flex py-2" key={index}>

                    <div className="flex-fill d-flex p-2 gap-3">
                        <div className="flex-fill w-75">
                            <Label forInput="title" value="Title:" />
                            <Form.Control
                                as="textarea"
                                type="text"
                                name="title"
                                placeholder="Title"
                                value={train.title}
                                // onChange={(e) => handleAddChange(e, index)}
                                readOnly
                            />
                        </div>
                        <div className="flex-fill w-25">
                            <Label forInput="date" value="Date: (start date - end date)" />
                            <ReactDatePicker 
                                // className="date-picker"
                                name="dates" 
                                // placeholderText="MM/DD/YYYY"
                                selectsRange={true}
                                // selected={train.date}
                                startDate={train.start_date}
                                endDate={train.end_date}
                                // isClearable 
                                readOnly
                            />
                        </div>
                    </div>
                    
                    <div className="flex-fill d-flex p-2 gap-3">
                        <div className="flex-fill w-25">
                            <Label forInput="role" value="Role:" />
                            <Form.Control   
                                type="text"
                                name="role"
                                placeholder="Role"
                                value={train.role}
                                // onChange={(e) => handleAddChange(e, index)}
                                readOnly
                            />
                        </div>
                        <div className="flex-fill w-75">
                            <Label forInput="location" value="Location:" />
                            <Form.Control
                                type="text"
                                name="location"
                                placeholder="Location"
                                value={train.location}
                                // onChange={(e) => handleAddChange(e, index)}
                                readOnly
                            />
                        </div>
                    </div>
                    
                </div>
            ))}
        </div>
    )
}
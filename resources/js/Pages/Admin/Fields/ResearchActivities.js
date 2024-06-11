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
        <div className={`create-research-fields shadow-sm ${route().current('admin.create') ? 'w-75' : 'w-100'}`}>
            {data.research.map((res, index) => (
                <div className="research-flex d-flex p-3 shadow-sm" key={index}>
                    <div className="flex-fill d-flex p-2 gap-3">
                        <div className="flex-fill w-75">
                            <Label forInput="title" value="Research Title:" />
                            {res.title}
                        </div>
                        <div className="flex-fill w-25">
                            <Label forInput="status" value="Status:" />
                            {res.status}
                        </div>
                    </div>
                    
                    <div className="flex-fill d-flex p-2 gap-3">
                        <div className="flex-fill w-75">
                            <Label forInput="researchers" value="Researcher(s):" />
                            {res.researchers}
                        </div>
                        <div className="flex-fill w-25">
                            <Label forInput="duration" value="Duration:" />
                            {moment(res.start_date).format('YYYY') + '-' + res.end_date}
                        </div>
                    </div>
                    
                </div>
            ))}
        </div>
    )
}
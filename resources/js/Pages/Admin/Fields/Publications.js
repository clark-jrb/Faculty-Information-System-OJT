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
        <div className={`create-publications-fields shadow-sm ${route().current('admin.create') ? 'w-75' : 'w-100'}`}>
            {data.publications.map((pub, index) => (
                <div className="publications-flex d-flex p-3 shadow-sm" key={index}>
                    <div className="flex-fill d-flex p-2 gap-3">
                        <div className="flex-fill w-75">
                            <Label forInput="proj_title" value="Title:" />
                            {pub.proj_title}
                        </div>
                        <div className="flex-fill w-25">
                            <Label forInput="proj_date" value="Date Published:" />
                            {moment(pub.proj_date).format('MMMM YYYY')}
                        </div>
                    </div>
                    
                    <div className="flex-fill d-flex p-2 gap-3">
                        <div className="flex-fill w-75">
                            <Label forInput="authors" value="Authors:" />
                            {pub.authors}
                        </div>
                        <div className="flex-fill w-25">
                            <Label forInput="doi" value="DOI:" />
                            {pub.doi}
                        </div>
                    </div>
                    
                </div>
            ))}
        </div>
    )
}
import React from "react";
import { Form } from "react-bootstrap";
import Label from "@/Components/Label";
import moment from "moment";

export default function Trainings({ data }) {

    return (
        <div className={`create-extensions-fields shadow-sm ${route().current('admin.create') ? 'w-75' : 'w-100'}`}>
            {data.trainings.map((train, index) => (
                <div className="extensions-flex d-flex p-3 shadow-sm" key={index}>

                    <div className="flex-fill d-flex p-2 gap-3">
                        <div className="flex-fill w-75">
                            <Label forInput="title" value="Title:" />
                            {train.title}
                        </div>
                        <div className="flex-fill w-25">
                            <Label forInput="date" value="Date: (start - end date)" />
                            {moment(train.start_date).format('MMMM DD YYYY') + ' - ' + moment(train.end_date).format('MMMM DD YYYY')}
                        </div>
                    </div>
                    
                    <div className="flex-fill d-flex p-2 gap-3">
                        <div className="flex-fill w-25">
                            <Label forInput="role" value="Role:" />
                            {train.role}
                        </div>
                        <div className="flex-fill w-75">
                            <Label forInput="location" value="Location:" />
                            {train.location}
                        </div>
                    </div>
                    
                </div>
            ))}
        </div>
    )
}
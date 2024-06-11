import React from "react";
import Label from "@/Components/Label";
import moment from "moment";

export default function Extensions({ data, setData }) {

    return (
        <div className={`create-extensions-fields shadow-sm ${route().current('admin.create') ? 'w-75' : 'w-100'}`}>
            {data.extensions.map((ext, index) => (
                <div className="extensions-flex d-flex p-3 shadow-sm" key={index}>

                    <div className="flex-fill d-flex p-2 gap-3">
                        <div className="flex-fill w-50">
                            <Label forInput="ext_title" value="Extension Project Title:" />
                            {ext.ext_title}
                        </div>
                        <div className="flex-fill w-25">
                            <Label forInput="lead_faculty" value="Lead Faculty:" />
                            {ext.lead_faculty}
                        </div>
                        <div className="flex-fill w-25">
                            <Label forInput="ext_duration" value="Duration:" />
                            {moment(ext.start_date).format('YYYY') + ' - ' + ext.end_date}
                        </div>
                    </div>
                    
                    <div className="flex-fill d-flex p-2 gap-3">
                        <div className="flex-fill w-25">
                            <Label forInput="beneficiaries" value="Beneficiaries:" />
                            {ext.beneficiaries}
                        </div>
                        <div className="flex-fill w-25">
                            <Label forInput="sponsor" value="Sponsoring Department(s):" />
                            {ext.sponsor}
                        </div>
                        <div className="flex-fill w-50">
                            <Label forInput="members" value="Team Members:" />
                            {ext.members}
                        </div>
                    </div>
                    
                </div>
            ))}
        </div>
    )
}
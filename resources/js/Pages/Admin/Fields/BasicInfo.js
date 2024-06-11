import React, { useState, useEffect } from "react";
import moment from "moment";
import Label from "@/Components/Label";
import specializations_ae from '../../../../json/specializations_ae.json'
import specializations_am from '../../../../json/specializations_am.json'
import specializations_as from '../../../../json/specializations_as.json'
import specializations_cs from '../../../../json/specializations_cs.json'
import specializations_cp from '../../../../json/specializations_cp.json'
import specializations_ss from '../../../../json/specializations_ss.json'


export default function BasicInfo({ data, setData, profile_pic, faculty_id }) {
    const [startDate, setStartDate] = useState(data.birth_date);
    const [selectedItems, setSelectedItems] = useState([]);
    const [specToMap, setSpecToMap] = useState([]);
    const [profilePic, setProfilePic] = useState(data.profile_pic || null);

    useEffect(() => {
        let specToMap;

        setSelectedItems([]);
        switch (data.department) {
            case 'Agricultural Extension':
                specToMap = specializations_ae;
                break;
            case 'Agri-Management':
                specToMap = specializations_am;
                break;
            case 'Animal Science':
                specToMap = specializations_as;
                break;
            case 'Crop Protection':
                specToMap = specializations_cp;
                break;
            case 'Crop Science':
                specToMap = specializations_cs;
                break;
            case 'Soil Science':
                specToMap = specializations_ss;
                break;
            default:
                specToMap = [];
        }
        setSpecToMap(specToMap);
    }, [data.department]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleDateChange = (date) => {
        setStartDate(date); // Update the state for ReactDatePicker
        const convertedDate = moment(date).format('YYYY-MM-DD')
        setData(prevState => ({
            ...prevState,
            birth_date: convertedDate // Update the 'birth_date' field in the 'data' object directly with the selected date
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setData(prevState => ({
                ...prevState,
                profile_pic: file 
            }));
            setProfilePic(file);
            console.log('its a file');
        } else {
            setData(prevState => ({
                ...prevState,
                profile_pic: data.profilePic 
            }));
            console.log('its a string');
        }
    };

    // useEffect(() => {
    //     console.log(data);
    // }, [data]);

    return (
        <div className={`create-basic-fields shadow-sm ${route().current('admin.create') ? 'w-75' : 'w-100'} p-3`}>
        {/* Full Name / Gender  */}
            <div className="basic-flex d-flex py-2">
                <div className="flex-fill p-2">
                    <Label forInput="fname" value="First Name:" />
                    {data.fname}
                </div>
                <div className="flex-fill p-2">
                    <Label forInput="mname" value="Middle Name:" />
                    {data.mname}
                </div>
                <div className="flex-fill p-2">
                    <Label forInput="lname" value="Last Name:" />
                    {data.lname}
                </div>
            </div>
        {/* Email / Contact / Age  */}
            <div className="basic-flex d-flex py-2">
                <div className="w-25 p-2">
                    <Label forInput="gender" value="Gender:" />
                    {data.gender}
                </div>
                <div className="w-50 p-2">
                    <Label forInput="email" value="Email:" />
                    {data.email}
                </div>
                <div className="w-25 p-2">
                    <Label forInput="contact" value="Contact:" />
                    {data.contact_no}
                </div>
            </div>
        {/* Birth / Role / Rank  */}
            <div className="basic-flex d-flex py-2">
                
                <div className="p-2 w-25">
                    <Label forInput="age" value="Age:" />
                    {data.age}
                </div>
                <div className="p-2 w-50">
                    <Label forInput="date" value="Date of Birth: " />
                    {moment(data.birth_date).format('LL')}
                </div>
                <div className="p-2 w-25">
                    <Label forInput="role" value="Role:" />
                    {data.role}
                </div>
            </div>
        {/* Department / Specialization  */}
            <div className="basic-flex d-flex py-2">
                <div className="p-2 w-50">
                    <Label forInput="department" value="Department:" />
                    {data.department}
                    
                </div>
                <div className="p-2 w-50">
                    <Label forInput="specialization" value="Specialization:" />
                    {data.specialization}
                </div>
            </div>
        {/* Upload Profile Image / Highest Degree  */}
                <div className="basic-flex d-flex py-2" style={{ borderBottom: "none" }}>
                    <div className="p-2 w-50">
                        <Label forInput="rank" value="Rank:" />
                        {data.position}
                    </div>

                    <div className="p-2 w-25">
                        <Label forInput="high_degree" value="Highest Degree:" />
                        {data.high_degree}
                    </div>
                </div>
        </div>
    )
}
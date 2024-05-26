import React, { useState, useEffect } from "react";
import moment from "moment";
import { Form } from "react-bootstrap";
import Label from "@/Components/Label";
import ReactDatePicker from "react-datepicker";
import specializations_ae from '../../../../json/specializations_ae.json'
import specializations_am from '../../../../json/specializations_am.json'
import specializations_as from '../../../../json/specializations_as.json'
import specializations_cs from '../../../../json/specializations_cs.json'
import specializations_cp from '../../../../json/specializations_cp.json'
import specializations_ss from '../../../../json/specializations_ss.json'
import faculty_ranks from '../../../../json/faculty_ranks.json'


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
        <div className={`create-basic-fields ${route().current('admin.create') ? 'w-75' : 'w-100'} p-3`}>
        {/* Full Name / Gender  */}
            <div className="basic1-flex d-flex py-2">
                <div className="flex-fill p-2">
                    <Label forInput="fname" value="First Name:" />
                    <input
                        type="text"
                        name="fname"
                        className="form-admin w-100" 
                        placeholder="First Name"
                        value={data.fname}
                        // onChange={(e) => handleChange(e)}
                        readOnly
                    />
                </div>
                <div className="flex-fill p-2">
                    <Label forInput="mname" value="Middle Name:" />
                    <input
                        type="text"
                        name="mname"
                        className="form-admin w-100" 
                        placeholder="Middle Name"
                        value={data.mname}
                        // onChange={(e) => handleChange(e)}
                        readOnly
                    />
                </div>
                <div className="flex-fill p-2">
                    <Label forInput="lname" value="Last Name:" />
                    <input
                        type="text"
                        name="lname"
                        className="form-admin w-100" 
                        placeholder="Last Name"
                        value={data.lname}
                        // onChange={(e) => handleChange(e)}
                        readOnly
                    />
                </div>

            </div>
        {/* Email / Contact / Age  */}
            <div className="basic2-flex d-flex py-2">
                <div className="flex-fill p-2">
                    <Label forInput="gender" value="Gender:" />
                    <select
                        type="text"
                        name="gender"
                        className="form-select-admin w-100" 
                        value={data.gender}
                        // onChange={(e) => handleChange(e)}
                        readOnly
                    >
                        <option disabled value="">Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div className="flex-fill p-2">
                    <Label forInput="email" value="Email:" />
                    <input
                        type="text"
                        name="email"
                        className="form-admin w-100"
                        placeholder="Email"
                        value={data.email}
                        // onChange={(e) => handleChange(e)}
                        readOnly
                    />
                </div>
                <div className="flex-fill p-2">
                    <Label forInput="contact" value="Contact:" />
                    <input
                        type="text"
                        name="contact_no"
                        className="form-admin w-100"
                        placeholder="Contact"
                        value={data.contact_no}
                        // onChange={(e) => handleChange(e)}
                        readOnly
                    />
                </div>
            </div>
        {/* Birth / Role / Rank  */}
            <div className="basic3-flex d-flex py-2">
                
                <div className="p-2">
                    <Label forInput="age" value="Age:" />
                    <input
                        id="age"
                        type="text"
                        name="age"
                        className="form-admin"
                        placeholder="Age"
                        value={data.age}
                        // onChange={(e) => handleChange(e)}
                        readOnly
                    />
                </div>
                <div className="p-2">
                    <Label forInput="date" value="Date of Birth: MM/DD/YYYY" />
                    <ReactDatePicker 
                        className="form-admin"
                        name="birth_date"
                        placeholderText="MM/DD/YYYY"
                        selected={startDate}
                        // onChange={handleDateChange}
                        readOnly
                    />
                </div>
                <div className="p-2 w-50">
                    <Label forInput="role" value="Role:" />
                    <select
                        type="text"
                        name="role"
                        className="form-select-admin w-100" 
                        value={data.role}
                        // onChange={(e) => handleChange(e)}
                        readOnly
                    >
                        <option disabled value="">Role</option>
                        <option value="College Dean">College Dean</option>
                        <option value="Department Head">Department Head</option>
                        <option value="Faculty">Faculty</option>
                    </select>
                </div>
            </div>
        {/* Department / Specialization  */}
            <div className="basic3-flex d-flex py-2">
                <div className="p-2 w-50">
                    <Label forInput="department" value="Department:" />
                    <select
                        type="text"
                        name="department"
                        className="form-select-admin w-100" 
                        value={data.department}
                        // onChange={(e) => handleChange(e)}
                        readOnly
                    >
                        <option disabled value="">Department</option>
                        <option value="Agricultural Extension">Agricultural Extension</option>
                        <option value="Agri-Management">Agri-Management</option>
                        <option value="Animal Science">Animal Science</option>
                        <option value="Crop Protection">Crop Protection</option>
                        <option value="Crop Science">Crop Science</option>
                        <option value="Soil Science">Soil Science</option>
                    </select>
                    
                    
                </div>
                <div className="p-2 w-50">
                    <Label forInput="specialization" value="Specialization:" />
                    <input
                        type="text"
                        name="specialization"
                        className="form-admin w-100"
                        placeholder="specialization"
                        value={data.specialization}
                        // onChange={(e) => handleChange(e)}
                        readOnly
                    />
                </div>
            </div>
        {/* Upload Profile Image / Highest Degree  */}
                <div className="basic4-flex d-flex py-2">
                    <div className="p-2 w-50">
                        <Label forInput="rank" value="Rank:" />
                        <select
                            type="text" 
                            name="position"
                            className="form-select-admin w-100" 
                            value={data.position}
                            // onChange={(e) => handleChange(e)}
                            readOnly
                        >
                            <option disabled value="">Rank</option>
                            {faculty_ranks.map((rank) => (
                                <option key={rank.id} value={rank.rank}>{rank.rank}</option>
                            ))}
                        </select>
                    </div>

                    <div className="p-2 w-25">
                        <Label forInput="high_degree" value="Highest Degree:" />
                        <select
                            type="text"
                            name="high_degree"
                            className="form-select-admin w-100" 
                            value={data.high_degree}
                            // onChange={(e) => handleChange(e)}
                            readOnly
                            >
                            <option disabled value="">Degree</option>
                            <option value="doctoral">Doctoral</option>
                            <option value="masteral">Masteral</option>
                            <option value="bachelor">Bachelor</option>
                        </select>
                    </div>

                    {/* {route().current('admin.create') ? <>
                    <div className="profile-pic-cont w-75 p-2">
                        <Label forInput="profile_pic" value="Upload profile picture &#40;Optional&#41;:" />
                        <input type="file" name="profile_pic" onChange={handleFileChange}/> */}
                        {/* {profilePic && <p className="m-0 py-2">Selected file: {profilePic.name || profilePic}</p>} */}
                    {/* </div>
                    </> : <></>} */}
                </div>
        </div>
    )
}
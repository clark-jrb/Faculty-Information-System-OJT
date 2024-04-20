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


export default function BasicInfo({ data, setData }) {
    const [startDate, setStartDate] = useState(data.birth_date);
    const [selectedItems, setSelectedItems] = useState([]);
    const [specToMap, setSpecToMap] = useState([]);

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

    useEffect(() => {
        // Split the specialization string into an array
        const selectedSpecializations = data.specialization.split(',').map(spec => spec.trim());
        setSelectedItems(selectedSpecializations);
    }, [data.specialization]);

    const handleCheckboxChange = (e) => {
        const value = e.target.value;
        let updatedSpecializations;

        if (e.target.checked) {
            // If checkbox is checked, add the value to the selectedItems array
            updatedSpecializations = [...selectedItems, value];
        } else {
            // If checkbox is unchecked, remove the value from the selectedItems array
            updatedSpecializations = selectedItems.filter(item => item !== value);
        }

        // Update the 'specializations' field in the 'data' object
        const updatedData = {
            ...data,
            specialization: updatedSpecializations.join(', ')
        };

        // Update the state of selectedItems
        setSelectedItems(updatedSpecializations);
        // Update form data using setData()
        setData(updatedData);
    };

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

    return (
        <div className="create-basic-fields w-75 p-3">
{/* Full Name / Gender  */}
            <div className="basic1-flex d-flex py-2">
                <div className="flex-fill p-2">
                    <Label forInput="fname" value="First Name:" />
                    <Form.Control
                        type="text"
                        name="fname"
                        placeholder="First Name"
                        value={data.fname}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="flex-fill p-2">
                    <Label forInput="lname" value="Last Name:" />
                    <Form.Control
                        type="text"
                        name="lname"
                        placeholder="Last Name"
                        value={data.lname}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="flex-fill p-2">
                    <Label forInput="gender" value="Gender:" />
                    <Form.Select
                        type="text"
                        name="gender"
                        value={data.gender}
                        onChange={(e) => handleChange(e)}
                    >
                        <option disabled value="">Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </Form.Select>
                </div>
            </div>
{/* Email / Contact / Age  */}
            <div className="basic2-flex d-flex py-2">
                <div className="flex-fill p-2">
                    <Label forInput="email" value="Email:" />
                    <Form.Control
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={data.email}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="flex-fill p-2">
                    <Label forInput="contact" value="Contact:" />
                    <Form.Control
                        type="text"
                        name="contact_no"
                        placeholder="Contact"
                        value={data.contact_no}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="flex-fill p-2">
                    <Label forInput="age" value="Age:" />
                    <Form.Control
                        id="age"
                        type="text"
                        name="age"
                        placeholder="Age"
                        value={data.age}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
            </div>
{/* Birth / Role / Rank  */}
            <div className="basic3-flex d-flex py-2">
                <div className="flex-fill p-2">
                    <Label forInput="date" value="Date of Birth: " />
                    <ReactDatePicker 
                        className="date-picker"
                        name="birth_date" 
                        placeholderText="MM/DD/YYYY"
                        selected={startDate}
                        onChange={handleDateChange}
                        isClearable 
                    />
                </div>
                <div className="flex-fill p-2">
                    <Label forInput="role" value="Role:" />
                    <Form.Select
                        type="text"
                        name="role"
                        value={data.role}
                        onChange={(e) => handleChange(e)}
                    >
                        <option disabled value="">Role</option>
                        <option value="College Dean">College Dean</option>
                        <option value="Department Head">Department Head</option>
                        <option value="Faculty">Faculty</option>
                    </Form.Select>
                </div>
                <div className="flex-fill p-2">
                    <Label forInput="rank" value="Rank:" />
                    <Form.Select
                        type="text" 
                        name="position"
                        value={data.position}
                        onChange={(e) => handleChange(e)}
                    >
                        <option disabled value="">Rank</option>
                        <option value="Instructor I">Instructor I</option>
                        <option value="Associate Professor I">Associate Professor I</option>
                        <option value="Assist Professor I">Assist Professor I</option>
                        <option value="Professor I">Professor I</option>
                    </Form.Select>
                </div>
            </div>
{/* Department / Specialization  */}
            <div className="basic3-flex d-flex py-2">
                <div className="flex-fill p-2">
                    <Label forInput="department" value="Department:" />
                    <Form.Select
                        type="text"
                        name="department"
                        value={data.department}
                        onChange={(e) => handleChange(e)}
                    >
                        <option disabled value="">Department</option>
                        <option value="Agricultural Extension">Agricultural Extension</option>
                        <option value="Agri-Management">Agri-Management</option>
                        <option value="Animal Science">Animal Science</option>
                        <option value="Crop Protection">Crop Protection</option>
                        <option value="Crop Science">Crop Science</option>
                        <option value="Soil Science">Soil Science</option>
                    </Form.Select>
                </div>
                <div className="flex-fill p-2">
                    <Label forInput="special" value="Specialization:" />
                    {specToMap.map((item) => (
                        <div key={item.id} className="mb-3">
                            <Form.Check // prettier-ignore
                                type="checkbox"
                                name="specialization"
                                id={`default-${item.id}`}
                                label={item.label}
                                value={item.value}
                                onChange={handleCheckboxChange}
                                checked={selectedItems.includes(item.value)}
                            />
                        </div>
                    ))}
                </div>
            </div>
{/* Upload Profile Image  */}
            <div className="basic4-flex py-2">
                <div className="profile-pic-cont">
                    <Label forInput="profile-pic" value="Upload profile picture &#40;Optional&#41;:" />
                    <Form.Control type="file" name="profile-pic"/>
                </div>
            </div>
        </div>
    )
}
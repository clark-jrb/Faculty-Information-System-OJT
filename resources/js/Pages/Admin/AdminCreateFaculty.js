import React, { useState, useEffect } from "react";
import AdminAuthenticated from "@/Layouts/AdminAuthenticated";
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import NavLink from "@/Components/NavLink";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import { Form } from "react-bootstrap";
import ReactDatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import specializations_ae from '../../../json/specializations_ae.json'
import specializations_am from '../../../json/specializations_am.json'
import specializations_as from '../../../json/specializations_as.json'
import specializations_cs from '../../../json/specializations_cs.json'
import specializations_cp from '../../../json/specializations_cp.json'
import specializations_ss from '../../../json/specializations_ss.json'
import { join } from "lodash";
import { useForm } from "@inertiajs/inertia-react";
import moment from "moment";

export default function AdminFaculties({ children }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        fname: '',
        lname: '',
        gender: '',
        birth_date: '',
        age: '',
        department: '',
        position: '',
        role: '',
        specializaion: '',
        email: '',
        contact_no: '',
        profile_pic: ''
    });

    const [startDate, setStartDate] = useState(null);
    const [selectedItems, setSelectedItems] = useState([]);
    const [selectedDept, setSelectedDept] = useState('');
    const [selectedGender, setSelectedGender] = useState('');
    const [selectedRank, setSelectedRank] = useState('');
    const [selectedRole, setSelectedRole] = useState('');
    const [specializaions, setSpecializaions] = useState('');
    const [specToMap, setSpecToMap] = useState([]);

    useEffect(() => {
        setSpecializaions(selectedItems.join(', '))
    }, [selectedItems]);

    useEffect(() => {
        let specToMap;
        switch (selectedDept) {
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
    }, [selectedDept]);


    const handleCheckboxChange = (e) => {
        const value = e.target.value;
        if (e.target.checked) {
          // If checkbox is checked, add the value to the selectedItems array
            setSelectedItems([...selectedItems, value]);
        } else {
            // If checkbox is unchecked, remove the value from the selectedItems array
            setSelectedItems(selectedItems.filter(item => item !== value));
        }
    };

    const handleSelectDept = (e) => {
        setSelectedDept(e.target.value);
    };

    const handleSelectGender = (e) => {
        setSelectedGender(e.target.value);
    };

    const handleSelectRole = (e) => {
        setSelectedRole(e.target.value);
    };

    const handleSelectRank = (e) => {
        setSelectedRank(e.target.value);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Inertia.post('/form', formData);
        console.log(data);
    };

    useEffect(() => {
        console.log(moment(startDate).format('L'));
    }, [startDate]);
    return (
        <AdminAuthenticated>
            <div className="admin-create-faculty-cont m-4">
                {/* HEADER  */}
                <div className="d-flex">
                    <NavLink href={route('admin.departments')}>
                        <div className="admin-create-cont-title">
                            <p className="m-0">Faculties/&nbsp;</p>
                        </div>
                    </NavLink>
                    <div className="admin-faculty-cont-title">
                        <p className="m-0">Create</p>
                    </div>
                </div>
                {/* FIELDS  */}
                <div className="admin-create-fields mt-2">
                    <form onSubmit={handleSubmit}>
                        {/* BASIC FIELDS */}
                        <div className="acf-title py-2">
                            Basic Information
                        </div>
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
                                    <Label forInput="date" value="Date of Birth:" />
                                    <ReactDatePicker name="birth_date" selected={startDate} isClearable />
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
                                        <option value=">Instructor I">Instructor I</option>
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
                                        value={selectedDept}
                                        onChange={handleSelectDept}
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
                                    {/* <Form name="special"> */}
                                        {specToMap.map((item) => (
                                            <div key={item.id} className="mb-3">
                                                <Form.Check // prettier-ignore
                                                    type="checkbox"
                                                    id={`default-${item.id}`}
                                                    label={item.label}
                                                    value={item.value}
                                                    onChange={handleCheckboxChange}
                                                />
                                            </div>
                                        ))}
                                    {/* </Form> */}
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

                        <div className="create-academic-fields">
                            <div className="acf-title py-2">
                                Academic
                            </div>
                        </div>

                        <div className="create-research-fields">
                            <div className="acf-title py-2">
                                Research
                            </div>
                        </div>

                        <div className="create-extensions-fields">
                            <div className="acf-title py-2">
                                Extension Activities
                            </div>
                        </div>

                        <div className="create-documents-fields">
                            <div className="acf-title py-2">
                                Documents
                            </div>
                        </div>
                        <button className="btn btn-success" type="submit">Add</button>
                    </form>
                </div>
            </div>
        </AdminAuthenticated>
    )
}
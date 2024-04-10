import React, { useState, useEffect } from "react";
import moment from "moment";
import { Form } from "react-bootstrap";
import Label from "@/Components/Label";
import NavLink from "@/Components/NavLink";
import ReactDatePicker from "react-datepicker";
import { useForm } from "@inertiajs/inertia-react";
import 'react-datepicker/dist/react-datepicker.css'
import AdminAuthenticated from "@/Layouts/AdminAuthenticated";
import specializations_ae from '../../../json/specializations_ae.json'
import specializations_am from '../../../json/specializations_am.json'
import specializations_as from '../../../json/specializations_as.json'
import specializations_cs from '../../../json/specializations_cs.json'
import specializations_cp from '../../../json/specializations_cp.json'
import specializations_ss from '../../../json/specializations_ss.json'
import { useNotifContext } from "@/Contexts/Notification";

export default function AdminFaculties({ children }) {
    const [startDate, setStartDate] = useState(new Date());
    const [selectedItems, setSelectedItems] = useState([]);
    const [specToMap, setSpecToMap] = useState([]);
    const { updateNotif, updateMessage } = useNotifContext()

    const { data, setData, post, processing, errors, reset } = useForm({
        fname: '',
        lname: '',
        gender: '',
        birth_date: '',
        age: '',
        department: '',
        position: '',
        role: '',
        specialization: '',
        email: '',
        contact_no: '',
        profile_pic: '',
        academic_educ: [{ 
            degree: '', 
            institution: '', 
            educ_date: '', 
            educ_location: ''
        }],
        academic_work: [{
            work_position: '',
            work_institution: '',
            work_location: '',
            work_date: ''
        }]
    });

    const handleAddEducField = () => {
        setData((prevData) => ({
            ...prevData,
            academic_educ: [...prevData.academic_educ, { 
                degree: '', 
                institution: '', 
                educ_date: '', 
                educ_location: '' 
            }],
        }));
    };

    const handleAddWorkField = () => {
        setData((prevData) => ({
            ...prevData,
            academic_work: [...prevData.academic_work, { 
                work_position: '', 
                work_institution: '', 
                work_date: '', 
                work_location: '' 
            }],
        }));
    };

    const handleEducChange = (e, index) => {
        const { name, value } = e.target;
        const educData = { ...data };
        educData.academic_educ[index][name] = value;
        setData(educData);
    };

    const handleWorkChange = (e, index) => {
        const { name, value } = e.target;
        const workData = { ...data };
        workData.academic_work[index][name] = value;
        setData(workData);
    };

    useEffect(() => {
        let specToMap;
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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        post('/admin/store', data)

        updateNotif(true); 
        updateMessage('Faculty Added!')
        setTimeout(() => updateNotif(false), 5000); 
        setTimeout(() => updateMessage(''), 5000); 
    };

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
                                    <Label forInput="date" value="Date of Birth: &#40;MM-DD-YYYY&#41;" />
                                    <ReactDatePicker 
                                        name="birth_date" 
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
            {/* ACADEMIC FIELDS */}
                        <div className="acf-title py-2">
                            Academic
                        </div>
                        <div className="create-academic-fields w-100 p-3">
                {/* Education  */}
                            <div className="acf-title py-2">
                                Education
                            </div>
                            {data.academic_educ.map((academicEduc, index) => (
                                <div className="acad-educ-flex d-flex py-2" key={index}>
                                    <div className="flex-fill p-2">
                                        <Label forInput="institution" value="Institution/School:" />
                                        <Form.Control
                                            type="text"
                                            name="institution"
                                            placeholder="Institution/School"
                                            value={academicEduc.institution}
                                            onChange={(e) => handleEducChange(e, index)}
                                        />
                                    </div>

                                    <div className="flex-fill p-2">
                                        <Label forInput="location" value="Location:" />
                                        <Form.Control
                                            type="text"
                                            name="educ_location"
                                            placeholder="Location"
                                            value={academicEduc.educ_location}
                                            onChange={(e) => handleEducChange(e, index)}
                                        />
                                    </div>

                                    <div className="flex-fill p-2">
                                        <Label forInput="educ_date" value="Year Graduated:" />
                                        <Form.Control   
                                            type="text"
                                            name="educ_date"
                                            placeholder="YYYY"
                                            value={academicEduc.educ_date}
                                            onChange={(e) => handleEducChange(e, index)}
                                        />
                                    </div>

                                    <div className="flex-fill p-2">
                                        <Label forInput="degree" value="Degree/Masteral/Doctorate Title:" />
                                        <Form.Control
                                            type="text"
                                            name="degree"
                                            placeholder="ex. MS in Crop Protection"
                                            value={academicEduc.degree}
                                            onChange={(e) => handleEducChange(e, index)}
                                        />
                                    </div>

                                    <div className="remove-field-btn flex-fill p-2 d-flex align-items-end ">
                                        {!academicEduc.isEmpty && ( // Only render the remove button if the academic background is not empty
                                            <button type="button" className="px-2 py-1" onClick={() => setData(prevData => ({
                                            ...prevData,
                                            academic_educ: prevData.academic_educ.filter((_, i) => i !== index),
                                            }))}>
                                                <i className="fa-solid fa-minus"></i>
                                            </button>
                                        )}
                                    </div>
                                    
                                </div>
                            ))}
                            {/* Add button */}
                            <div className="add-field-container w-100 px-2">
                                <button type="button" className="add-field-btn w-100 py-2" onClick={handleAddEducField}>
                                    <i className="fa-solid fa-plus"></i> Add Another
                                </button>
                            </div>
                            
                {/* Work Experience  */}
                            <div className="acf-title py-2">
                                Work Experience
                            </div>
                            <div className="acad-work-flex d-flex py-2"></div>
                            {data.academic_work.map((academicWork, index) => (
                                <div className="acad-work-flex d-flex py-2" key={index}>
                                    <div className="flex-fill p-2">
                                        <Label forInput="work_institution" value="Institution/Organization:" />
                                        <Form.Control
                                            type="text"
                                            name="work_institution"
                                            placeholder="Institution/Organization"
                                            value={academicWork.work_institution}
                                            onChange={(e) => handleWorkChange(e, index)}
                                        />
                                    </div>

                                    <div className="flex-fill p-2">
                                        <Label forInput="location" value="Work location:" />
                                        <Form.Control
                                            type="text"
                                            name="work_location"
                                            placeholder="Work location"
                                            value={academicWork.work_location}
                                            onChange={(e) => handleWorkChange(e, index)}
                                        />
                                    </div>

                                    <div className="flex-fill p-2">
                                        <Label forInput="work_date" value="Date:" />
                                        <Form.Control   
                                            type="text"
                                            name="work_date"
                                            placeholder="YYYY-(YYYY/Present)"
                                            value={academicWork.work_date}
                                            onChange={(e) => handleWorkChange(e, index)}
                                        />
                                    </div>

                                    <div className="flex-fill p-2">
                                        <Label forInput="work_position" value="Position:" />
                                        <Form.Control
                                            type="text"
                                            name="work_position"
                                            placeholder="Position"
                                            value={academicWork.work_position}
                                            onChange={(e) => handleWorkChange(e, index)}
                                        />
                                    </div>

                                    <div className="remove-field-btn flex-fill p-2 d-flex align-items-end ">
                                        {!academicWork.isEmpty && ( // Only render the remove button if the academic background is not empty
                                            <button type="button" className="px-2 py-1" onClick={() => setData(prevData => ({
                                            ...prevData,
                                            academic_work: prevData.academic_work.filter((_, i) => i !== index),
                                            }))}>
                                                <i className="fa-solid fa-minus"></i>
                                            </button>
                                        )}
                                    </div>
                                    
                                </div>
                            ))}

                            {/* Add button */}
                            <div className="add-field-container w-100 px-2">
                                <button type="button" className="add-field-btn w-100 py-2" onClick={handleAddWorkField}>
                                    <i className="fa-solid fa-plus"></i> Add Another
                                </button>
                            </div>
                        </div>
            {/* RESEARCH FIELDS  */}
                        <div className="create-research-fields">
                            <div className="acf-title py-2">
                                Research
                            </div>
                        </div>
            {/* EXTENSION ACTIVITIES  */}
                        <div className="create-extensions-fields">
                            <div className="acf-title py-2">
                                Extension Activities
                            </div>
                        </div>
            {/* DOCUMENTS  */}
                        <div className="create-documents-fields">
                            <div className="acf-title py-2">
                                Documents
                            </div>
                        </div>
                {/* SUBMIT BUTTON  */}
                        <button className="btn btn-success" type="submit">Add</button>
                    </form>
                </div>
            </div>
        </AdminAuthenticated>
    )
}
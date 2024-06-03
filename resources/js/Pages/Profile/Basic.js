import React, { useState, useEffect } from 'react';
import Profile from '../Profile';
import { usePage } from '@inertiajs/inertia-react';
import { Form } from "react-bootstrap";
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import moment from "moment";
import faculty_ranks from '../../../json/faculty_ranks.json'
import { useForm } from '@inertiajs/inertia-react';

export default function Basic(props){
    const { 
        faculty_data
    } = usePage().props;

    // useEffect(() => {
    //     console.log(props.auth);
    // }, [props]);

    const { data, setData, post, processing, errors, reset } = useForm({
        fname: faculty_data.fname,
        mname: faculty_data.mname,
        lname: faculty_data.lname,
        gender: faculty_data.gender,
        birth_date: faculty_data.birth_date,
        age: faculty_data.age,
        department: faculty_data.department,
        position: faculty_data.position,
        high_degree: faculty_data.high_degree,
        role: faculty_data.role,
        specialization: faculty_data.specialization,
        email: faculty_data.email,
        contact_no: faculty_data.contact_no
    })

    const [edit, setEdit] = useState(false);
    const [startDate, setStartDate] = useState(faculty_data.birth_date);

    const handleEdit = (e) => {
        setEdit(e)
    }

    const handleDateChange = (date) => {
        setStartDate(date); // Update the state for ReactDatePicker
        const convertedDate = moment(date).format('YYYY-MM-DD')
        setData(prevState => ({
            ...prevState,
            birth_date: convertedDate // Update the 'birth_date' field in the 'data' object directly with the selected date
        }));
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
        // console.log(data);
        post(route('update.basic', data))
    };

    useEffect(() => {
        if (!processing) {
            setEdit(false);
        }
    }, [processing]);
    
    return (
        <Profile auth={props.auth}>
            <div className="p-3 px-4 profile-info-content-child">
                <form onSubmit={handleSubmit}>
                    <div className="title-info-content pb-2">
                        <p className="m-0">Basic Information</p>
                        <div className='edit-profile-container ms-auto'>
                            {edit ? 
                                <div className='d-flex gap-2 align-items-center'>
                                    <button className='edit-profile p-1 px-2' type='submit'>
                                        <i className="fa-regular fa-pen-to-square"></i> Update
                                    </button>
                                    <button className='cancel-btn p-1 px-2' onClick={() => handleEdit(false)}>
                                        <i className="fa-solid fa-xmark"></i> Cancel
                                    </button>
                                </div> : 
                                <button className='edit-profile p-1 px-2' onClick={() => handleEdit(true)}>
                                    <i className="fa-regular fa-pen-to-square"></i> Edit
                                </button>
                            }
                        </div>
                    </div>
                    {/* LINE 1 */}
                    <div className='d-flex p-3 gap-3' style={{ position: 'relative' }}>
                        <div className="bg-data"></div>
                        {/* FIRST NAME */}
                        <div className="flex-fill w-25">
                            <p className="m-0 data-label">First Name:</p>
                            {edit ? 
                            <>
                                <input
                                    type="text"
                                    name="fname"
                                    className="form-admin w-100"
                                    placeholder="first name"
                                    value={data.fname}
                                    onChange={(e) => handleChange(e)}
                                    required
                                />
                            </> : 
                            <>
                                <p className="m-0 mt-1 basic-value">{faculty_data.fname}</p>
                            </>}
                        </div>
                        {/* MIDDLE NAME */}
                        <div className="flex-fill w-25">
                            <p className="m-0 data-label">Middle Name:</p>
                            {edit ? 
                            <>
                                <input 
                                    type="text" 
                                    name='mname' 
                                    className="form-admin w-100"
                                    placeholder="middle name"
                                    value={data.mname}
                                    onChange={(e) => handleChange(e)}
                                    required
                                />
                            </> : 
                            <>
                                <p className="m-0 mt-1 basic-value">{faculty_data.mname}</p>
                            </>}
                        </div>
                        {/* LAST NAME */}
                        <div className="flex-fill w-25">
                            <p className="m-0 data-label">Last Name:</p>
                            {edit ? 
                            <>
                                <input 
                                    type="text" 
                                    name='lname' 
                                    className="form-admin w-100"
                                    placeholder="last name"
                                    value={data.lname}
                                    onChange={(e) => handleChange(e)}
                                    required
                                />
                            </> : 
                            <>
                                <p className="m-0 mt-1 basic-value">{faculty_data.lname}</p>
                            </>}
                        </div>
                        {/* GENDER */}
                        <div className="flex-fill w-25">
                            <p className="m-0 data-label">
                                Gender:
                                &nbsp;
                                {data.gender ? '' : 
                                <>
                                    <i className="fa-solid fa-circle-exclamation" style={{ color: 'var(--yellow)'}}></i>
                                </>}
                            </p>
                            {edit ? 
                            <>
                                <select
                                    type="text"
                                    name="gender"
                                    className="form-admin w-100"
                                    value={data.gender}
                                    onChange={(e) => handleChange(e)}
                                    required
                                >
                                    <option disabled value="">Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </> : 
                            <>
                                <p className="m-0 mt-1 basic-value">{faculty_data.gender}</p>
                            </>} 
                        </div>
                    </div>
                    {/* LINE 2 */}
                    <div className='d-flex p-3 gap-3' style={{ position: 'relative' }}>
                        <div className="bg-data"></div>
                        {/* DATE OF BIRTH  */}
                        <div className="flex-fill w-25">
                            <p className="m-0 data-label">
                                Date of Birth:
                                &nbsp;
                                {data.birth_date ? '' : 
                                <>
                                    <i className="fa-solid fa-circle-exclamation" style={{ color: 'var(--yellow)'}}></i>
                                </>}
                            </p>
                            {edit ? 
                            <>
                                <ReactDatePicker 
                                    className="form-admin w-100"
                                    name="birth_date" 
                                    placeholderText="MM/DD/YYYY"
                                    selected={startDate}
                                    onChange={handleDateChange}
                                    isClearable 
                                    required
                                />
                            </> : 
                            <>
                                <p className="m-0 mt-1 basic-value">{moment(faculty_data.birth_date).format('LL')}</p>
                            </>}
                        </div>
                        {/* AGE */}
                        <div className="flex-fill w-25">
                            <p className="m-0 data-label">
                                Age:
                                &nbsp;
                                {data.birth_date ? '' : 
                                <>
                                    <i className="fa-solid fa-circle-exclamation" style={{ color: 'var(--yellow)'}}></i>
                                </>}
                            </p>
                            {edit ? 
                            <>
                                <input 
                                    type="text" 
                                    name='age' 
                                    className="form-admin w-100"
                                    placeholder="age"
                                    value={data.age}
                                    onChange={(e) => handleChange(e)}
                                    required
                                />
                            </> : 
                            <>
                                <p className="m-0 mt-1 basic-value">{faculty_data.age}</p>
                            </>}
                        </div>
                        {/* CONTACT NUMBER */}
                        <div className="flex-fill w-25">
                            <p className="m-0 data-label">
                                Contact Number:
                                &nbsp;
                                {data.birth_date ? '' : 
                                <>
                                    <i className="fa-solid fa-circle-exclamation" style={{ color: 'var(--yellow)'}}></i>
                                </>}
                            </p>
                            {edit ? 
                            <>
                                <input
                                    type="text" 
                                    name="contact_no"
                                    className="form-admin w-100"
                                    value={data.contact_no}
                                    placeholder="contact number"
                                    onChange={(e) => handleChange(e)}
                                    required
                                />
                            </> : 
                            <>
                                <p className="m-0 mt-1 basic-value">{faculty_data.contact_no}</p>
                            </>}
                        </div>
                        {/* EMAIL */}
                        <div className="flex-fill w-25">
                            <p className="m-0 data-label">Email:</p>
                            {edit ? 
                            <>
                                <input 
                                    type="email" 
                                    name='email' 
                                    className="form-admin w-100"
                                    placeholder="email"
                                    value={data.email}
                                    onChange={(e) => handleChange(e)}
                                    required
                                />
                            </> : 
                            <>
                                <p className="p-email m-0 mt-1 basic-value">{faculty_data.email}</p>
                            </>}
                        </div>
                    </div>
                    {/* LINE 3 */}
                    <div className='d-flex p-3 gap-3' style={{ position: 'relative' }}>
                        <div className="bg-data"></div>
                        {/* RANK */}
                        <div className="flex-fill w-25">
                            <p className="m-0 data-label">
                                Rank:
                                &nbsp;
                                {data.position ? '' : 
                                <>
                                    <i className="fa-solid fa-circle-exclamation" style={{ color: 'var(--yellow)'}}></i>
                                </>}
                            </p>
                            {edit ? 
                            <>
                                <select
                                    type="text" 
                                    name="position"
                                    className="form-admin w-100"
                                    value={data.position}
                                    onChange={(e) => handleChange(e)}
                                    required
                                >
                                    <option disabled value="">Rank</option>
                                    {faculty_ranks.map((rank) => (
                                        <option key={rank.id} value={rank.rank}>{rank.rank}</option>
                                    ))}
                                </select>
                            </> : 
                            <>
                                <p className="m-0 mt-1 basic-value">{faculty_data.position}</p>
                            </>}
                        </div>
                        {/* SPECIALIZATION */}
                        <div className="flex-fill w-25">
                            <p className="m-0 data-label">
                                Specialization:
                                &nbsp;
                                {data.specialization ? '' : 
                                <>
                                    <i className="fa-solid fa-circle-exclamation" style={{ color: 'var(--yellow)'}}></i>
                                </>}
                            </p>
                            {edit ? 
                            <>
                                <input 
                                    type="text" 
                                    name='specialization' 
                                    className="form-admin w-100"
                                    placeholder="specialization"
                                    value={data.specialization}
                                    onChange={(e) => handleChange(e)}
                                    required
                                />
                            </> : 
                            <>
                                <p className="m-0 mt-1 basic-value">{faculty_data.specialization}</p>
                            </>}
                        </div>
                        {/* HIGHEST DEGREE */}
                        <div className="flex-fill w-25">
                            <p className="m-0 data-label">
                                Highest Degree:
                                &nbsp;
                                {data.high_degree ? '' : 
                                <>
                                    <i className="fa-solid fa-circle-exclamation" style={{ color: 'var(--yellow)'}}></i>
                                </>}
                            </p>
                            {edit ? 
                            <>
                                <select
                                    type="text"
                                    name="high_degree"
                                    className="form-admin w-100"
                                    value={data.high_degree}
                                    onChange={(e) => handleChange(e)}
                                    required
                                    >
                                    <option disabled value="">Degree</option>
                                    <option value="postdoc">Post Doctoral</option>
                                    <option value="doctoral">Doctoral</option>
                                    <option value="masteral">Masteral</option>
                                    <option value="bachelor">Bachelor</option>
                                </select>
                            </> : 
                            <>
                                <p className="m-0 mt-1 basic-value">
                                    {faculty_data.high_degree === 'postdoc' && (
                                        'Post Doctoral'
                                    )}
                                    {faculty_data.high_degree === 'doctoral' && (
                                        'Doctoral'
                                    )}
                                    {faculty_data.high_degree === 'masteral' && (
                                        'Masteral'
                                    )}
                                    {faculty_data.high_degree === 'bachelor' && (
                                        'Bachelor'
                                    )}
                                </p>
                            </>}
                        </div>
                        {/* ROLE */}
                        <div className="flex-fill w-25">
                            <p className="m-0 data-label">
                                Role:
                                &nbsp;
                                {data.role ? '' : 
                                <>
                                    <i className="fa-solid fa-circle-exclamation" style={{ color: 'var(--yellow)'}}></i>
                                </>}
                            </p>
                            {edit ?
                            <>
                                <select
                                    type="text"
                                    name="role"
                                    className="form-admin w-100"
                                    value={data.role}
                                    onChange={(e) => handleChange(e)}
                                    required
                                >
                                    <option disabled value="">Role</option>
                                    <option value="College Dean">College Dean</option>
                                    <option value="Department Head">Department Head</option>
                                    <option value="Faculty">Faculty</option>
                                </select>
                            </> : 
                            <>
                                <p className="m-0 mt-1 basic-value">{faculty_data.role}</p>
                            </>}
                        </div>
                    </div>
                    {/* LINE 4 */}
                    <div className='d-flex p-3' style={{ position: 'relative' }}>
                        <div className="bg-data"></div>
                        {/* DEPARMENT */}
                        <div className="flex-fill w-25">
                            <p className="m-0 data-label">Department:</p>
                            {edit ? 
                            <>
                                <select
                                    type="text"
                                    name="department"
                                    className="form-admin w-25"
                                    value={data.department}
                                    onChange={(e) => handleChange(e)}
                                    required
                                >
                                    <option disabled value="">Department</option>
                                    <option value="Agricultural Extension">Agricultural Extension</option>
                                    <option value="Agri-Management">Agri-Management</option>
                                    <option value="Animal Science">Animal Science</option>
                                    <option value="Crop Protection">Crop Protection</option>
                                    <option value="Crop Science">Crop Science</option>
                                    <option value="Soil Science">Soil Science</option>
                                </select>
                            </> : 
                            <>
                                <p className="m-0 mt-1 basic-value">{faculty_data.department}</p>
                            </>}
                        </div>
                    </div>
                </form>
                
            </div>
        </Profile>
    )
}
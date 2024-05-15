import React, { useState, useEffect } from 'react';
import Profile from '../Profile';
import { usePage } from '@inertiajs/inertia-react';
import { Form } from "react-bootstrap";
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import moment from "moment";
import faculty_ranks from '../../../json/faculty_ranks.json'

export default function Basic(){
    const { 
        faculty_data
    } = usePage().props;

    const [edit, setEdit] = useState(false);
    const [startDate, setStartDate] = useState(new Date());

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
    
    return (
        <Profile>
            <div className="p-3 px-4 basic-content">
                <div className="title-info-content pb-2">
                    <p className="m-0">Basic Information</p>
                    <div className='edit-profile-container ms-auto'>
                        {edit ? 
                            <div className='d-flex gap-2 align-items-center'>
                                <button className='edit-profile p-1 px-2'>
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

                <div className='d-flex p-3' style={{ position: 'relative' }}>
                    <div className="bg-data"></div>
                    <div className="flex-fill w-25">
                        <p className="m-0 data-label">First Name:</p>
                        {edit ? 
                        <>
                            <input
                                type="text"
                                name="fname"
                                placeholder="first name"
                                value={faculty_data.fname}
                                // onChange={(e) => handleChange(e)}
                                required
                            />
                        </> : 
                        <>
                            <p className="m-0 mt-1" style={{ fontSize: 'large' }}>{faculty_data.fname}</p>
                        </>}
                    </div>
                    <div className="flex-fill w-25">
                        <p className="m-0 data-label">Middle Name:</p>
                        {edit ? 
                        <>
                            <input 
                                type="text" 
                                name='mname' 
                                placeholder="middle name"
                                value={faculty_data.mname}
                                required
                            />
                        </> : 
                        <>
                            <p className="m-0 mt-1" style={{ fontSize: 'large' }}>{faculty_data.mname}</p>
                        </>}
                    </div>
                    <div className="flex-fill w-25">
                        <p className="m-0 data-label">Last Name:</p>
                        {edit ? 
                        <>
                            <input 
                                type="text" 
                                name='lname' 
                                placeholder="last name"
                                value={faculty_data.lname}
                                required
                            />
                        </> : 
                        <>
                            <p className="m-0 mt-1" style={{ fontSize: 'large' }}>{faculty_data.lname}</p>
                        </>}
                    </div>
                    <div className="flex-fill w-25">
                        <p className="m-0 data-label">Gender:</p>
                        {edit ? 
                        <>
                            <select
                                type="text"
                                name="gender"
                                value={faculty_data.gender}
                                // onChange={(e) => handleChange(e)}
                                className='w-50'
                                required
                            >
                                <option disabled value="">Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </> : 
                        <>
                            <p className="m-0 mt-1" style={{ fontSize: 'large' }}>{faculty_data.gender}</p>
                        </>} 
                    </div>
                </div>

                <div className='d-flex p-3' style={{ position: 'relative' }}>
                    <div className="bg-data"></div>
                    <div className="flex-fill w-25">
                        <p className="m-0 data-label">Date of Birth:</p>
                        {edit ? 
                        <>
                            <ReactDatePicker 
                                // className="date-picker"
                                name="birth_date" 
                                placeholderText="MM/DD/YYYY"
                                selected={startDate}
                                onChange={handleDateChange}
                                isClearable 
                                required
                            />
                        </> : 
                        <>
                            <p className="m-0 mt-1" style={{ fontSize: 'large' }}>{faculty_data.birth_date}</p>
                        </>}
                    </div>
                    <div className="flex-fill w-25">
                        <p className="m-0 data-label">Age:</p>
                        {edit ? 
                        <>
                            <input 
                                type="text" 
                                name='age' 
                                placeholder="age"
                                value={faculty_data.age}
                                required
                            />
                        </> : 
                        <>
                            <p className="m-0 mt-1" style={{ fontSize: 'large' }}>{faculty_data.age}</p>
                        </>}
                    </div>
                    <div className="flex-fill w-25">
                        <p className="m-0 data-label">Email:</p>
                        {edit ? 
                        <>
                            <input 
                                type="email" 
                                name='email' 
                                placeholder="email"
                                value={faculty_data.email}
                                required
                            />
                        </> : 
                        <>
                            <p className="m-0 mt-1" style={{ fontSize: 'large' }}>{faculty_data.email}</p>
                        </>}
                    </div>
                    <div className="flex-fill w-25">
                        <p className="m-0 data-label">Department:</p>
                        {edit ? 
                        <>
                            <select
                                type="text"
                                name="department"
                                value={faculty_data.department}
                                // onChange={(e) => handleChange(e)}
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
                            <p className="m-0 mt-1" style={{ fontSize: 'large' }}>{faculty_data.department}</p>
                        </>}
                    </div>
                </div>

                <div className='d-flex p-3' style={{ position: 'relative' }}>
                    <div className="bg-data"></div>
                    <div className="flex-fill w-25">
                        <p className="m-0 data-label">Rank:</p>
                        {edit ? 
                        <>
                            <select
                                type="text" 
                                name="position"
                                value={faculty_data.position}
                                // onChange={(e) => handleChange(e)}
                                required
                            >
                                <option disabled value="">Rank</option>
                                {faculty_ranks.map((rank) => (
                                    <option key={rank.id} value={rank.rank}>{rank.rank}</option>
                                ))}
                            </select>
                        </> : 
                        <>
                            <p className="m-0 mt-1" style={{ fontSize: 'large' }}>{faculty_data.position}</p>
                        </>}
                    </div>
                    <div className="flex-fill w-25">
                        <p className="m-0 data-label">Specialization:</p>
                        {edit ? 
                        <>
                            <input 
                                type="text" 
                                name='specialization' 
                                placeholder="specialization"
                                value={faculty_data.specialization}
                                required
                            />
                        </> : 
                        <>
                            <p className="m-0 mt-1" style={{ fontSize: 'large' }}>{faculty_data.specialization}</p>
                        </>}
                    </div>
                    <div className="flex-fill w-25">
                        <p className="m-0 data-label">Highest Degree:</p>
                        {edit ? 
                        <>
                            <select
                                type="text"
                                name="high_degree"
                                value={faculty_data.high_degree}
                                // onChange={(e) => handleChange(e)}
                                className='w-50'
                                required
                                >
                                <option disabled value="">Degree</option>
                                <option value="doctoral">Doctoral</option>
                                <option value="masteral">Masteral</option>
                                <option value="bachelor">Bachelor</option>
                            </select>
                        </> : 
                        <>
                            <p className="m-0 mt-1" style={{ fontSize: 'large' }}>{faculty_data.high_degree}</p>
                        </>}
                    </div>
                    <div className="flex-fill w-25">
                        <p className="m-0 data-label">Role:</p>
                        {edit ?
                        <>
                            <select
                                type="text"
                                name="role"
                                value={faculty_data.role}
                                // onChange={(e) => handleChange(e)}
                                className='w-75'
                                required
                            >
                                <option disabled value="">Role</option>
                                <option value="College Dean">College Dean</option>
                                <option value="Department Head">Department Head</option>
                                <option value="Faculty">Faculty</option>
                            </select>
                        </> : 
                        <>
                            <p className="m-0 mt-1" style={{ fontSize: 'large' }}>{faculty_data.role}</p>
                        </>}
                    </div>
                </div>
                
                
            </div>
        </Profile>
    )
}
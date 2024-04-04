import React, { useState } from "react";
import AdminAuthenticated from "@/Layouts/AdminAuthenticated";
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import NavLink from "@/Components/NavLink";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import { Form } from "react-bootstrap";
import ReactDatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'

export default function AdminFaculties({ children }) {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <AdminAuthenticated>
            <div className="admin-create-faculty-cont m-4">
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

                <div className="admin-create-fields">
                    <form onSubmit="">
                        <div className="create-basic-fields w-75 p-3">
                            <div className="basic1-flex d-flex">
                                <div className="flex-fill p-2">
                                    <Label forInput="fname" value="First Name:" />
                                    <Form.Control
                                        type="text"
                                        name="fname"
                                        placeholder="First Name"
                                    />
                                </div>
                                <div className="flex-fill p-2">
                                    <Label forInput="lname" value="Last Name:" />
                                    <Form.Control
                                        type="text"
                                        name="lname"
                                        placeholder="Last Name"
                                    />
                                </div>
                                <div className="flex-fill p-2">
                                    <Label forInput="gender" value="Gender:" />
                                    <Form.Select
                                        type="text"
                                        name="gender"
                                    >
                                        <option disabled selected>Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </Form.Select>
                                </div>
                            </div>

                            <div className="basic2-flex d-flex">
                                <div className="flex-fill p-2">
                                    <Label forInput="email" value="Email:" />
                                    <Form.Control
                                        type="text"
                                        name="email"
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="flex-fill p-2">
                                    <Label forInput="contact" value="Contact:" />
                                    <Form.Control
                                        type="text"
                                        name="contact"
                                        placeholder="Contact"
                                    />
                                </div>
                                <div className="flex-fill p-2">
                                    <Label forInput="age" value="Age:" />
                                    <Form.Control
                                        id="age"
                                        type="text"
                                        name="age"
                                        placeholder="Age"
                                    />
                                </div>
                            </div>

                            <div className="basic3-flex d-flex">
                                <div className="flex-fill p-2">
                                    <Label forInput="date" value="Date of Birth:" />
                                    <ReactDatePicker name="date" selected={startDate} onChange={(date) => setStartDate(date)}/>
                                </div>
                                <div className="flex-fill p-2">
                                    <Label forInput="role" value="Role:" />
                                    <Form.Select
                                        type="text"
                                        name="role"
                                    >
                                        <option disabled selected>Role</option>
                                        <option value="male">College Dean</option>
                                        <option value="female">Department Head</option>
                                        <option value="female">Faculty</option>
                                    </Form.Select>
                                </div>
                                <div className="flex-fill p-2">
                                    <Label forInput="rank" value="Rank:" />
                                    <Form.Select
                                        type="text" 
                                        name="rank"
                                    >
                                        <option disabled selected>Rank</option>
                                        <option value="male">Instructor I</option>
                                        <option value="female">Associate Professor I</option>
                                        <option value="female">Assist Professor I</option>
                                        <option value="female">Professor I</option>
                                    </Form.Select>
                                </div>
                            </div>

                            
                            
                            
                            
                        </div>
                        <div className="create-academic-fields"></div>
                        <div className="create-research-fields"></div>
                        <div className="create-extensions-fields"></div>
                        <div className="create-documents-fields"></div>
                    </form>
                </div>
            </div>
        </AdminAuthenticated>
    )
}
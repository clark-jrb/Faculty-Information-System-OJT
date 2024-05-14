import React, { useEffect, useState } from 'react';
import Button from '@/Components/Button';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import { Dropdown } from 'react-bootstrap';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        // name: '',
        fname: '',
        mname: '',
        lname: '',
        email: '',
        role: 'faculty',
        department: '',
        password: '',
        password_confirmation: '',
    });

    const [selectedDept, setSelectedDept] = useState('');

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        const { name, value } = event.target;
        setData(name, value);
    };

    const handleDeptChange = (e) => {
        setSelectedDept(e);
        setData('department', e); // Update form data with selected role
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <Guest>
            <Head title="Register" />

            <ValidationErrors errors={errors} />

            <form onSubmit={submit}>
                <div className="mt-3">
                    <Label forInput="fname" value="First Name" />
                    <input 
                        type="text" 
                        name="fname"
                        value={data.fname}
                        autoComplete="fname"
                        className="input-cred-box my-1" 
                        onChange={onHandleChange}
                        placeholder="first name"
                        required
                    />
                </div>

                <div className="mt-3">
                    <Label forInput="mname" value="Middle Name" />
                    <input 
                        type="text" 
                        name="mname"
                        value={data.mname}
                        autoComplete="mname"
                        className="input-cred-box my-1" 
                        onChange={onHandleChange}
                        placeholder="middle name"
                        required
                    />
                </div>

                <div className="mt-3">
                    <Label forInput="lname" value="Last Name" />
                    <input 
                        type="text" 
                        name="lname"
                        value={data.lname}
                        autoComplete="lname"
                        className="input-cred-box my-1" 
                        onChange={onHandleChange}
                        placeholder="last name"
                        required
                    />
                </div>

                <div className="mt-3">
                    <Label forInput="email" value="Email" />
                    
                    <input 
                        type="email" 
                        name="email"
                        value={data.email}
                        className="input-cred-box my-1" 
                        autoComplete="username"
                        onChange={onHandleChange}
                        placeholder="Email"
                        required
                    />
                </div>

                <div className="for-dropdown-cont mt-3">
                    <Label forInput="dept" value="Department" />

                    <Dropdown onSelect={handleDeptChange}>
                        <Dropdown.Toggle variant="success" id="dropdown-basic" className='px-3 w-100'>
                            {selectedDept || 'Select Department'}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item eventKey="Agricultural Extension">Agricultural Extension</Dropdown.Item>
                            <Dropdown.Item eventKey="Agri-Management">Agri-Management</Dropdown.Item>
                            <Dropdown.Item eventKey="Animal Science">Animal Science</Dropdown.Item>
                            <Dropdown.Item eventKey="Crop Protection">Crop Protection</Dropdown.Item>
                            <Dropdown.Item eventKey="Crop Science">Crop Science</Dropdown.Item>
                            <Dropdown.Item eventKey="Soil Science">Soil Science</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

                <div className="mt-3">
                    <Label forInput="password" value="Password" />

                    <input 
                        type="password" 
                        name="password"
                        value={data.password}
                        className="input-cred-box my-1" 
                        autoComplete="new-password"
                        onChange={onHandleChange}
                        placeholder="Password"
                        required
                    />
                </div>

                <div className="mt-3">
                    <Label forInput="password_confirmation" value="Confirm Password" />

                    <input 
                        type="password" 
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="input-cred-box my-1" 
                        autoComplete="new-password"
                        onChange={onHandleChange}
                        placeholder="Confirm password"
                        required
                    />
                </div>

                <div className="other-link-cont flex items-center justify-end mt-3 gap-3">
                    <Link href={route('login')} className="underline text-sm text-gray-600 hover:text-gray-900">
                        Already registered?
                    </Link>

                    <button type='submit' className='py-1 px-3'>
                        Register
                    </button>
                </div>
            </form>
        </Guest>
    );
}

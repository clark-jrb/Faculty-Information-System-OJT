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
        name: '',
        email: '',
        role: '',
        password: '',
        password_confirmation: '',
    });

    const [selectedRole, setSelectedRole] = useState('');

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const handleRoleChange = (eventKey) => {
        setSelectedRole(eventKey);
        setData('role', eventKey); // Update form data with selected role
    };

    useEffect(() => {
        console.log('Selected role: ' + selectedRole);
    }, [selectedRole]);

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <Guest>
            <Head title="Register" />

            <ValidationErrors errors={errors} />

            <form onSubmit={submit}>
                <div>
                    <Label forInput="name" value="Name" />

                    {/* <Input
                        type="text"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    /> */}
                    <input 
                        type="text" 
                        name="name"
                        value={data.name}
                        autoComplete="name"
                        className="input-cred-box my-1" 
                        onChange={onHandleChange}
                        placeholder="Name"
                        required
                    />
                </div>

                <div className="mt-4">
                    <Label forInput="email" value="Email" />

                    {/* <Input
                        type="email"
                        name="email"
                        value={data.email}
                        autoComplete="username"
                        className="mt-1 block w-full"
                        handleChange={onHandleChange}
                        placeholder="Email"
                        required
                    /> */}
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

                <div className="for-dropdown-cont mt-4">
                    <Label forInput="role" value="Role" />

                    <Dropdown onSelect={handleRoleChange}>
                        <Dropdown.Toggle variant="success" id="dropdown-basic" className='px-3'>
                            {selectedRole || 'Select Role'}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item eventKey="admin">Admin</Dropdown.Item>
                            <Dropdown.Item eventKey="viewer">Viewer</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

                <div className="mt-4">
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

                <div className="mt-4">
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

                <div className="other-link-cont flex items-center justify-end mt-4 gap-3">
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

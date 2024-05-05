import React, { useEffect } from 'react';
import Button from '@/Components/Button';
import Checkbox from '@/Components/Checkbox';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <Guest>
            <Head title="Log in" />

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <ValidationErrors errors={errors} />

            <form onSubmit={submit}>
                <div>
                    <Label forInput="email" value="Email" />

                    <input 
                        type="text" 
                        name="email"
                        value={data.email}
                        className="input-cred-box my-1" 
                        onChange={onHandleChange}
                        placeholder="Email"
                    />
                </div>

                <div className="mt-4">
                    <Label forInput="password" value="Password" />

                    <input 
                        type="password" 
                        name="password"
                        value={data.password}
                        className="input-cred-box my-1" 
                        onChange={onHandleChange}
                        placeholder="Password"
                    />
                </div>

                <div className="other-link-cont block mt-4">
                    <label className="flex items-center">
                        <Checkbox name="remember" value={data.remember} handleChange={onHandleChange} />

                        <span className="ml-2 text-sm">Remember me</span>
                    </label>
                </div>

                <div className="other-link-cont flex items-center justify-end mt-4 gap-3">
                    {processing === true ? 
                    <>
                    <div className='flex-fill d-flex justify-content-center py-2'>
                        <i className="fa-solid fa-spinner fa-spin fa-xl"></i>
                    </div>
                    </> : 
                    <>
                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="underline text-sm hover:text-gray-900"
                        >
                            Forgot your password?
                        </Link>
                    )}

                    <button type='submit' className='py-1 px-3'>
                        Log in
                    </button>
                    </>}
                </div>
            </form>
        </Guest>
    );
}

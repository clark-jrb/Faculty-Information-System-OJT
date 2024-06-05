import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import agri_logo from '../../../public/images/agri_logo.png'

export default function Welcome(props) {
    return (
        <>
            <Head title="Welcome" />
            <div className="welcome-content d-flex justify-content-center align-items-center">
                <div className='welcome-actions-cont d-flex shadow'>
                    <div className='welcome-logo-cont p-3'>
                        <img src={agri_logo} alt="agri_logo"/>
                    </div>
                    <div className='d-flex align-items-center p-4'>
                        <div className='action-buttons-cont gap-1'>
                            {props.auth.user ? (
                                <Link href={route('dashboard')}>
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <div className="w-100">
                                        <p>Welcome to CAg <br /> Faculty Information System</p>
                                    </div>

                                    <div className='welcome-link-btn w-100'>
                                        <Link href={route('login')} as='button' className='py-1'> 
                                            Log in
                                        </Link>
                                    </div>

                                    <div>
                                        <p className='m-0'>or</p>
                                    </div>

                                    <div className='welcome-link-btn w-100'>
                                        <Link href={route('register')} as='button' className='py-1'>
                                            Register
                                        </Link>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </>
    );
}

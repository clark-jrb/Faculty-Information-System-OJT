import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';

export default function Welcome(props) {
    return (
        <>
            <Head title="Welcome" />
            <div className="welcome-content d-flex justify-content-center align-items-center">
                <div className="action-buttons-cont py-3">
                    {props.auth.user ? (
                        <Link href={route('dashboard')}>
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <div className='welcome-link-btn w-75'>
                                <Link href={route('login')} as='button' className='py-1'> 
                                    Log in
                                </Link>
                            </div>

                            <div className='welcome-link-btn w-75'>
                                <Link href={route('register')} as='button' className='py-1'>
                                    Register
                                </Link>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

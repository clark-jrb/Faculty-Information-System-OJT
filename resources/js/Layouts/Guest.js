import React from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/inertia-react';

export default function Guest({ children }) {
    return (
        <div className="guest-content min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
            {/* <div>
                <Link href="/">
                    <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                </Link>
            </div> */}

            <div className="form-container w-full sm:max-w-md mt-6 px-6 py-4 shadow-md overflow-hidden">
                {children}
            </div>
        </div>
    );
}

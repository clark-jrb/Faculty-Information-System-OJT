import React from 'react';
import { Link } from '@inertiajs/inertia-react';

export default function ResponsiveNavLink({ method = 'get', as = 'a', href, active = false, children }) {
    return (
        <Link
            method={method}
            as={as}
            href={href}
            className='p-1 px-3'
        >
            {children}
        </Link>
    );
}

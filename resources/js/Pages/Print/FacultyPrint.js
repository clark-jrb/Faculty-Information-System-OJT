import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { usePage } from '@inertiajs/inertia-react';

export default function FacultyPrint(props) {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
        >

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">Print data here</div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}

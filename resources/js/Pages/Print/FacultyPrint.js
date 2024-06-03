import React, { useEffect, useRef } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { usePage } from '@inertiajs/inertia-react';
import FacultyPrintPage from './FacultyPrintPage';
import { Inertia } from '@inertiajs/inertia';
import { useReactToPrint } from 'react-to-print';

export default function FacultyPrint(props) {
    const {
        faculty_data,
        basic_info,
        type
    } = usePage().props;

    const componentRef = useRef();

    const handleGoBack = () => {
        Inertia.visit(route('basic'))
    }

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'CAg Faculties'
    });

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
        >

            <div className='faculty-print-content d-flex align-items-center p-4 flex-column'>
                <div className=" w-75 d-flex align-items-center py-2 mb-2" style={{ marginTop: '60px' }}>
                    <button className='go-back-btn px-2 py-1' onClick={handleGoBack}>
                        <i className="fa-solid fa-arrow-left"></i> Go back
                    </button>
                    <button className='go-back-btn ms-auto px-2 py-1' onClick={handlePrint}>
                        <i className="fa-solid fa-print fa-sm"></i> Print
                    </button>
                </div>
                {/* <div className='faculty-print-container w-75 shadow'>
                    print here
                </div> */}
                <div className="w-75">
                    <FacultyPrintPage ref={componentRef} data={faculty_data} type={type} basic={basic_info}/>
                </div>
            </div>
        </Authenticated>
    );
}

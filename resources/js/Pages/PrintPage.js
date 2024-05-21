import React, { useRef, useEffect } from 'react';
import AdminAuthenticated from '@/Layouts/AdminAuthenticated';
import { useReactToPrint } from 'react-to-print';
import Print from './Print';
import { usePage } from '@inertiajs/inertia-react';
import '../../../public/css/print.css'

export default function PrintPage() {
    const {
        faculty_data
    } = usePage().props;

    const componentRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'CAg Faculties'
    });

    // useEffect(() => {
    //     console.log(faculty_data);
    // }, [faculty_data]);

    return (
        <AdminAuthenticated>
            <div className='h-100'>
                <div className="print-btn-cont px-4 w-75 d-flex align-items-center py-2 mb-2">
                    <button className='ms-auto px-2 py-1' onClick={handlePrint}>
                        <i className="fa-solid fa-print"></i> Print
                    </button>
                </div>

                <div className="px-4 w-75">
                    <Print ref={componentRef} data={faculty_data}/>
                </div>
            </div>
        </AdminAuthenticated>
    )
}
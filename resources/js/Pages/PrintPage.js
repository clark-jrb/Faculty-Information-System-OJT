import React, { useRef, useEffect } from 'react';
import AdminAuthenticated from '@/Layouts/AdminAuthenticated';
import { useReactToPrint } from 'react-to-print';
import Print from './Print';
import { usePage } from '@inertiajs/inertia-react';
import '../../../public/css/print.css'
import { Inertia } from '@inertiajs/inertia';
import { useFilterDataContext } from '@/Contexts/FilterData';

export default function PrintPage() {
    const {
        faculty_data
    } = usePage().props;
    const { handleResetFilter } = useFilterDataContext()

    const componentRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'CAg Faculty Members'
    });

    const handleGoBack = () => {
        Inertia.visit(route('admin.faculties'))
        handleResetFilter()
    }

    // useEffect(() => {
    //     console.log(faculty_data);
    // }, [faculty_data]);

    return (
        <AdminAuthenticated>
            <div className='h-100'>
                <div className="px-4 w-75 d-flex align-items-center py-2 mb-2">
                    <button className='go-back-btn px-2 py-1' onClick={handleGoBack}>
                        <i className="fa-solid fa-arrow-left"></i> Go back
                    </button>
                    <button className='go-back-btn ms-auto px-2 py-1' onClick={handlePrint}>
                        <i className="fa-solid fa-print fa-sm"></i> Print
                    </button>
                </div>

                <div className="px-4 w-75">
                    <Print ref={componentRef} data={faculty_data}/>
                </div>
            </div>
        </AdminAuthenticated>
    )
}
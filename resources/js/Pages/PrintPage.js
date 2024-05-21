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
            <div>
                Print page here
                <button className="btn btn-primary" onClick={handlePrint}>Print</button>

                <div className="px-4">
                    <Print ref={componentRef} data={faculty_data}/>
                </div>
            </div>
        </AdminAuthenticated>
    )
}
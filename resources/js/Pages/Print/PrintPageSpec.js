import React, { useEffect, useState, useRef } from 'react';
import AdminAuthenticated from '@/Layouts/AdminAuthenticated';
import { usePage } from '@inertiajs/inertia-react';
import { useFilterDataContext } from '@/Contexts/FilterData';
import PageSpec from './PageSpec';
import { useReactToPrint } from 'react-to-print';
import { Inertia } from '@inertiajs/inertia';

export default function PrintPageSpec() {
    const {
        faculty_data,
        basic_info
    } = usePage().props;

    const { specific } = useFilterDataContext()

    // useEffect(() => {
    //     console.log(faculty_data);
    // }, [faculty_data]);

    const componentRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'CAg Faculties'
    }); 

    const handleGoBack = () => {
        Inertia.visit(route('admin.faculty.show', { id: specific.faculty_id}))
    }

    useEffect(() => {
        console.log(basic_info.fname);
    }, [basic_info]);

    return (
        <AdminAuthenticated>
            <div className='h-100'>
                <div className="mx-4 w-75 d-flex align-items-center py-2 mb-2">
                    <button className='go-back-btn px-2 py-1' onClick={handleGoBack}>
                        <i className="fa-solid fa-arrow-left"></i> Go back
                    </button>
                    <button className='go-back-btn ms-auto px-2 py-1' onClick={handlePrint}>
                        <i className="fa-solid fa-print fa-sm"></i> Print
                    </button>
                </div>

                <div className="mx-4 p-4 w-75 shadow" style={{ backgroundColor: 'white' }}>
                    <PageSpec ref={componentRef} data={faculty_data} specify={specific.toPrint} basic={basic_info}/>
                </div>
            </div>
        </AdminAuthenticated>
    )
}
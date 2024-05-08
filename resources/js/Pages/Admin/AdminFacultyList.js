import React, { useEffect } from 'react';
import AdminFaculties from './AdminFaculties';
import { usePage } from '@inertiajs/inertia-react';
import { useEditContext } from '@/Contexts/EditButtons';
import { InertiaLink } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

export default function AdminFacultyList() {
    const {
        faculty_data
    } = usePage().props;

    const { checked } = useEditContext()

    const handleRowClick = (id) => {
        Inertia.visit(route('admin.faculty.show', { id: id }));
    }

    // useEffect(() => {
    //     console.log(faculty_data.fd_agricultural_extension);
    // }, [faculty_data]);

    return (
        <AdminFaculties>
            <div className='lists-of-faculties flex-fill'>
                {/* Agricultural Extension Table  */}
                <div className="admin-dept-ae-title">
                    <p>Agricultural Extension</p>
                </div>
                <div className="agri-dept-ae-table-cont mb-3">
                    {faculty_data.fd_agricultural_extension.length === 0 ? (
                        <div className="d-flex justify-content-center align-items-center h-100">
                            <p className="m-0">No data to show</p>
                        </div>
                    ) : (
                        <table className="admin-table">
                            <thead>
                                <tr>
                                    <th scope="col" className="p-3 pb-2">#</th>
                                    <th scope="col" className="p-3 pb-2 tb-fullname">Full Name</th>
                                    <th scope="col" className="p-3 pb-2">Role</th>
                                    <th scope="col" className="p-3 pb-2">Rank</th>
                                </tr>
                            </thead>
                            <tbody>
                                {faculty_data.fd_agricultural_extension.map((faculty, index) => (
                                    <tr 
                                        key={index}
                                        onClick={() => checked ? null : handleRowClick(faculty.id)}
                                    >
                                        <th className="p-2 ps-3">{index + 1}</th>
                                        <td className="p-2 ps-3 tb-fullname">{`${faculty.lname}, ${faculty.fname}`}</td>
                                        <td className="p-2 ps-3">{faculty.role}</td>
                                        <td className="p-2 ps-3">{faculty.position}</td>
                                        <td className="p-2 ps-3">
                                            { checked ? 
                                            <>
                                                <InertiaLink 
                                                    method="delete"
                                                    href={route('admin.destroy', { id: faculty.id })} 
                                                    className="p-0"
                                                    as="button"
                                                >
                                                    <i className="fa-solid fa-trash-can"></i>
                                                </InertiaLink>
                                            </> : 
                                            <>
                                                <i className="fa-solid fa-chevron-right"></i>
                                            </> }
                                            
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>

                {/* Agri-Management Table */}
                <div className="admin-dept-am-title">
                    <p>Agri-Management</p>
                </div>
                <div className="agri-dept-am-table-cont mb-3">
                    {faculty_data.fd_agri_management.length === 0 ? (
                        <div className="d-flex justify-content-center align-items-center h-100">
                            <p className="m-0">No data to show</p>
                        </div>
                    ) : (
                        <table className="admin-table">
                            <thead>
                                <tr>
                                    <th scope="col" className="p-3 pb-2">#</th>
                                    <th scope="col" className="p-3 pb-2 tb-fullname">Full Name</th>
                                    <th scope="col" className="p-3 pb-2">Role</th>
                                    <th scope="col" className="p-3 pb-2">Rank</th>
                                </tr>
                            </thead>
                            <tbody>
                                {faculty_data.fd_agri_management.map((faculty, index) => (
                                    <tr 
                                        key={index}
                                        onClick={() => checked ? null : handleRowClick(faculty.id)}
                                    >
                                        <th className="p-2 ps-3">{index + 1}</th>
                                        <td className="p-2 ps-3 tb-fullname">{`${faculty.lname}, ${faculty.fname}`}</td>
                                        <td className="p-2 ps-3">{faculty.role}</td>
                                        <td className="p-2 ps-3">{faculty.position}</td>
                                        <td className="p-2 ps-3">
                                            { checked ? 
                                            <>
                                                <InertiaLink 
                                                    method="delete"
                                                    href={route('admin.destroy', { id: faculty.id })} 
                                                    className="p-0"
                                                    as="button"
                                                >
                                                    <i className="fa-solid fa-trash-can"></i>
                                                </InertiaLink>
                                            </> : 
                                            <>
                                                <i className="fa-solid fa-chevron-right"></i>
                                            </> }
                                            
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>

                {/* Animal Science Table */}
                <div className="admin-dept-as-title">
                    <p>Animal Science</p>
                </div>
                <div className="agri-dept-as-table-cont mb-3">
                    {faculty_data.fd_animal_science.length === 0 ? (
                        <div className="d-flex justify-content-center align-items-center h-100">
                            <p className="m-0">No data to show</p>
                        </div>
                    ) : (
                        <table className="admin-table">
                            <thead>
                                <tr>
                                    <th scope="col" className="p-3 pb-2">#</th>
                                    <th scope="col" className="p-3 pb-2 tb-fullname">Full Name</th>
                                    <th scope="col" className="p-3 pb-2">Role</th>
                                    <th scope="col" className="p-3 pb-2">Rank</th>
                                </tr>
                            </thead>
                            <tbody>
                                {faculty_data.fd_animal_science.map((faculty, index) => (
                                    <tr 
                                        key={index}
                                        onClick={() => checked ? null : handleRowClick(faculty.id)}
                                    >
                                        <th className="p-2 ps-3">{index + 1}</th>
                                        <td className="p-2 ps-3 tb-fullname">{`${faculty.lname}, ${faculty.fname}`}</td>
                                        <td className="p-2 ps-3">{faculty.role}</td>
                                        <td className="p-2 ps-3">{faculty.position}</td>
                                        <td className="p-2 ps-3">
                                            { checked ? 
                                            <>
                                                <InertiaLink 
                                                    method="delete"
                                                    href={route('admin.destroy', { id: faculty.id })} 
                                                    className="p-0"
                                                    as="button"
                                                >
                                                    <i className="fa-solid fa-trash-can"></i>
                                                </InertiaLink>
                                            </> : 
                                            <>
                                                <i className="fa-solid fa-chevron-right"></i>
                                            </> }
                                            
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>

                {/* Crop Protection Table */}
                <div className="admin-dept-cp-title">
                    <p>Crop Protection</p>
                </div>
                <div className="agri-dept-cp-table-cont mb-3">
                    {faculty_data.fd_crop_protection.length === 0 ? (
                        <div className="d-flex justify-content-center align-items-center h-100">
                            <p className="m-0">No data to show</p>
                        </div>
                    ) : (
                        <table className="admin-table">
                            <thead>
                                <tr>
                                    <th scope="col" className="p-3 pb-2">#</th>
                                    <th scope="col" className="p-3 pb-2 tb-fullname">Full Name</th>
                                    <th scope="col" className="p-3 pb-2">Role</th>
                                    <th scope="col" className="p-3 pb-2">Rank</th>
                                </tr>
                            </thead>
                            <tbody>
                                {faculty_data.fd_crop_protection.map((faculty, index) => (
                                    <tr 
                                        key={index}
                                        onClick={() => checked ? null : handleRowClick(faculty.id)}
                                    >
                                        <th className="p-2 ps-3">{index + 1}</th>
                                        <td className="p-2 ps-3 tb-fullname">{`${faculty.lname}, ${faculty.fname}`}</td>
                                        <td className="p-2 ps-3">{faculty.role}</td>
                                        <td className="p-2 ps-3">{faculty.position}</td>
                                        <td className="p-2 ps-3">
                                            { checked ? 
                                            <>
                                                <InertiaLink 
                                                    method="delete"
                                                    href={route('admin.destroy', { id: faculty.id })} 
                                                    className="p-0"
                                                    as="button"
                                                >
                                                    <i className="fa-solid fa-trash-can"></i>
                                                </InertiaLink>
                                            </> : 
                                            <>
                                                <i className="fa-solid fa-chevron-right"></i>
                                            </> }
                                            
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>

                {/* Crop Science Table */}
                <div className="admin-dept-cs-title">
                    <p>Crop Science</p>
                </div>
                <div className="agri-dept-cs-table-cont mb-3">
                    {faculty_data.fd_crop_science.length === 0 ? (
                        <div className="d-flex justify-content-center align-items-center h-100">
                            <p className="m-0">No data to show</p>
                        </div>
                    ) : (
                        <table className="admin-table">
                            <thead>
                                <tr>
                                    <th scope="col" className="p-3 pb-2">#</th>
                                    <th scope="col" className="p-3 pb-2 tb-fullname">Full Name</th>
                                    <th scope="col" className="p-3 pb-2">Role</th>
                                    <th scope="col" className="p-3 pb-2">Rank</th>
                                </tr>
                            </thead>
                            <tbody>
                                {faculty_data.fd_crop_science.map((faculty, index) => (
                                    <tr 
                                        key={index}
                                        onClick={() => checked ? null : handleRowClick(faculty.id)}
                                    >
                                        <th className="p-2 ps-3">{index + 1}</th>
                                        <td className="p-2 ps-3 tb-fullname">{`${faculty.lname}, ${faculty.fname}`}</td>
                                        <td className="p-2 ps-3">{faculty.role}</td>
                                        <td className="p-2 ps-3">{faculty.position}</td>
                                        <td className="p-2 ps-3">
                                            { checked ? 
                                            <>
                                                <InertiaLink 
                                                    method="delete"
                                                    href={route('admin.destroy', { id: faculty.id })} 
                                                    className="p-0"
                                                    as="button"
                                                >
                                                    <i className="fa-solid fa-trash-can"></i>
                                                </InertiaLink>
                                            </> : 
                                            <>
                                                <i className="fa-solid fa-chevron-right"></i>
                                            </> }
                                            
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>

                {/* Soil Science Table */}
                <div className="admin-dept-ss-title">
                    <p>Soil Science</p>
                </div>
                <div className="agri-dept-ss-table-cont mb-3">
                    {faculty_data.fd_soil_science.length === 0 ? (
                        <div className="d-flex justify-content-center align-items-center h-100">
                            <p className="m-0">No data to show</p>
                        </div>
                    ) : (
                        <table className="admin-table">
                            <thead>
                                <tr>
                                    <th scope="col" className="p-3 pb-2">#</th>
                                    <th scope="col" className="p-3 pb-2 tb-fullname">Full Name</th>
                                    <th scope="col" className="p-3 pb-2">Role</th>
                                    <th scope="col" className="p-3 pb-2">Rank</th>
                                </tr>
                            </thead>
                            <tbody>
                                {faculty_data.fd_soil_science.map((faculty, index) => (
                                    <tr 
                                        key={index}
                                        onClick={() => checked ? null : handleRowClick(faculty.id)}
                                    >
                                        <th className="p-2 ps-3">{index + 1}</th>
                                        <td className="p-2 ps-3 tb-fullname">{`${faculty.lname}, ${faculty.fname}`}</td>
                                        <td className="p-2 ps-3">{faculty.role}</td>
                                        <td className="p-2 ps-3">{faculty.position}</td>
                                        <td className="p-2 ps-3">
                                            { checked ? 
                                            <>
                                                <InertiaLink 
                                                    method="delete"
                                                    href={route('admin.destroy', { id: faculty.id })} 
                                                    className="p-0"
                                                    as="button"
                                                >
                                                    <i className="fa-solid fa-trash-can"></i>
                                                </InertiaLink>
                                            </> : 
                                            <>
                                                <i className="fa-solid fa-chevron-right"></i>
                                            </> }
                                            
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>

            </div>
        </AdminFaculties>
    )
}
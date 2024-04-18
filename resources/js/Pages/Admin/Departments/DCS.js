import React from "react";
import AdminDepartments from "../AdminDepartments";
import { usePage } from "@inertiajs/inertia-react";
import { useEditContext } from "@/Contexts/EditButtons";
import { InertiaLink } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

export default function DCS() {
    const { cs } = usePage().props;
    const { checked } = useEditContext()

    const handleRowClick = (id) => {
        Inertia.visit(route('admin.faculty.show', { id: id }));
    }

    return (
        <AdminDepartments>
            <div className="admin-dept-cs-cont h-100">
                <div className="admin-dept-cs-title">
                    <p>Crop Science</p>
                </div>
                <div className="agri-dept-cs-table-cont">
                    {cs.length === 0 ? (
                        <div className="d-flex justify-content-center align-items-center h-100">
                            <p className="m-0">No data to show</p>
                        </div>
                    ) : (
                        <table className="admin-table">
                            <thead>
                                <tr>
                                    <th scope="col" className="p-3 pb-2">#</th>
                                    <th scope="col" className="p-3 pb-2">Full Name</th>
                                    <th scope="col" className="p-3 pb-2">Role</th>
                                    <th scope="col" className="p-3 pb-2">Rank</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cs.map((faculty, index) => (
                                    <tr 
                                        key={index}
                                        href={route('admin.faculties')}
                                        onClick={() => handleRowClick(faculty.id)} 
                                    >
                                        <th className="p-2 ps-3">{index + 1}</th>
                                        <td className="p-2 ps-3">{`${faculty.lname}, ${faculty.fname}`}</td>
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
        </AdminDepartments>
    )
}
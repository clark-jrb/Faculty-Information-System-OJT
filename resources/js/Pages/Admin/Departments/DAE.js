import React, { useEffect } from "react";
import AdminDepartments from "../AdminDepartments";
import { usePage } from "@inertiajs/inertia-react";

export default function DAE() {
    const { ae } = usePage().props;

    useEffect(() => {
        console.log(ae);
    }, [ae]);

    return (
        <AdminDepartments>
            <div className="admin-dept-ae-cont h-100">
                <div className="admin-dept-ae-title">
                    <p>Agricultural Extension</p>
                </div>
                <div className="agri-dept-ae-table-cont">
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
                            {ae.map((faculty) => (
                                <tr key={faculty.id}>
                                    <th className="p-2 ps-3">{faculty.id}</th>
                                    <td className="p-2 ps-3">{`${faculty.lname}, ${faculty.fname}`}</td>
                                    <td className="p-2 ps-3">{faculty.role}</td>
                                    <td className="p-2 ps-3">{faculty.position}</td>
                                    <td className="p-2 ps-3">
                                        <i className="fa-solid fa-chevron-right"></i>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AdminDepartments>
    )
}
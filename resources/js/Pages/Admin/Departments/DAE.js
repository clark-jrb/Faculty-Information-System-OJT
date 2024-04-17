import React, { useEffect } from "react";
import AdminDepartments from "../AdminDepartments";
import { usePage } from "@inertiajs/inertia-react";
import { useEditContext } from "@/Contexts/EditButtons";

export default function DAE() {
    const { ae } = usePage().props;
    const { checked } = useEditContext()


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
                            {ae.map((faculty, index) => (
                                <tr key={index}>
                                    <th className="p-2 ps-3">{index + 1}</th>
                                    <td className="p-2 ps-3">{`${faculty.lname}, ${faculty.fname}`}</td>
                                    <td className="p-2 ps-3">{faculty.role}</td>
                                    <td className="p-2 ps-3">{faculty.position}</td>
                                    <td className="p-2 ps-3">
                                        { checked ? 
                                        <>
                                            <i className="fa-solid fa-trash-can"></i>
                                        </> : 
                                        <>
                                            <i className="fa-solid fa-chevron-right"></i>
                                        </> }
                                        
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
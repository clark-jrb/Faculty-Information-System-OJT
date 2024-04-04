import React from "react";
import AdminDepartments from "../AdminDepartments";

export default function DAE() {
    return (
        <AdminDepartments>
            <div className="admin-dept-ae-cont h-100">
                <div className="admin-dept-ae-title">
                    <p>Agricultural Extension</p>
                </div>
                <div className="agri-dept-ae-table-cont">
                    <table class="admin-table">
                        <thead>
                            <tr>
                                <th scope="col" className="p-3 pb-2">#</th>
                                <th scope="col" className="p-3 pb-2">Full Name</th>
                                <th scope="col" className="p-3 pb-2">Role</th>
                                <th scope="col" className="p-3 pb-2">Rank</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className="p-2 ps-3">1</th>
                                <td className="p-2 ps-3">Dela Cruz, Juan</td>
                                <td className="p-2 ps-3">Faculty</td>
                                <td className="p-2 ps-3">Instructor II</td>
                                <td className="p-2 ps-3">
                                    <i class="fa-solid fa-chevron-right"></i>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </AdminDepartments>
    )
}
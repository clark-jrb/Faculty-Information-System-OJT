import React from "react";
import AdminFaculties from "./AdminFaculties";
import NavLink from "@/Components/NavLink";

export default function AdminDepartments({ children }) {
    return (
        <AdminFaculties>
            <div className="admin-departments-cont h-100">
                <div className="admin-departments-lists">
                    <div className="admin-departments-title">
                        <p>Departments</p>
                    </div>
                    
                    <NavLink href={route('admin.departments.ae')} active={route().current('admin.departments.ae')}>
                        <div className="admin-department-ae p-3 mb-2">
                            <div>
                                <i class="fa-solid fa-building-wheat"></i> &nbsp;Department of Agricultural Extension
                            </div>
                            <div className="ms-auto">
                                <i class="fa-solid fa-chevron-right"></i>
                            </div>
                        </div>
                    </NavLink>

                    <NavLink href={route('admin.departments.am')} active={route().current('admin.departments.am')}>
                        <div className="admin-department-am p-3 mb-2">
                            <div>
                                <i class="fa-solid fa-building-wheat"></i> &nbsp;Department of Agri-Management
                            </div>
                            <div className="ms-auto">
                                <i class="fa-solid fa-chevron-right"></i>
                            </div>
                        </div>
                    </NavLink>

                    <NavLink href={route('admin.departments.as')} active={route().current('admin.departments.as')}>
                        <div className="admin-department-as p-3 mb-2">
                            <div>
                                <i class="fa-solid fa-building-wheat"></i> &nbsp;Department of Animal Science
                            </div>
                            <div className="ms-auto">
                                <i class="fa-solid fa-chevron-right"></i>
                            </div>
                        </div>
                    </NavLink>

                    <NavLink href={route('admin.departments.cp')} active={route().current('admin.departments.cp')}>
                        <div className="admin-department-cp p-3 mb-2">
                            <div>
                                <i class="fa-solid fa-building-wheat"></i> &nbsp;Department of Crop Protection
                            </div>
                            <div className="ms-auto">
                                <i class="fa-solid fa-chevron-right"></i>
                            </div>
                        </div>
                    </NavLink>

                    <NavLink href={route('admin.departments.cs')} active={route().current('admin.departments.cs')}>
                        <div className="admin-department-cs p-3 mb-2">
                            <div>
                                <i class="fa-solid fa-building-wheat"></i> &nbsp;Department of Crop Science
                            </div>
                            <div className="ms-auto">
                                <i class="fa-solid fa-chevron-right"></i>
                            </div>
                        </div>
                    </NavLink>

                    <NavLink href={route('admin.departments.ss')} active={route().current('admin.departments.ss')}>
                        <div className="admin-department-ss p-3 mb-2">
                            <div>
                                <i class="fa-solid fa-building-wheat"></i> &nbsp;Department of Soil Science
                            </div>
                            <div className="ms-auto">
                                <i class="fa-solid fa-chevron-right"></i>
                            </div>
                        </div>
                    </NavLink>
                </div>
                
                <div className="admin-faculties-table-cont">
                    { children }
                </div>
            </div>
        </AdminFaculties>
    )
}
import React, { useEffect } from "react";
import AdminFaculties from "./AdminFaculties";
import NavLink from "@/Components/NavLink";
import { useFilterDataContext } from "@/Contexts/FilterData";
import { Inertia } from "@inertiajs/inertia";

export default function AdminDepartments() {
    const { filters, handleSelectedDepartment, activeDept, handleActiveDept } = useFilterDataContext()
    // useEffect(() => {
    //     console.log(facultyData);
    // }, [facultyData]);

    const handleChangeDepartment = (e) => {
        handleSelectedDepartment(e)
        handleActiveDept(e)
        Inertia.get('/admin/faculties', { ...filters, department: e })
    }

    return (
            <div className="admin-departments-cont h-100">
                <div className="admin-departments-lists">
                    <div className="admin-departments-title">
                        <p>Departments</p>
                    </div>
                    
                    {/* <NavLink href={route('admin.departments.ae')} active={route().current('admin.departments.ae')}> */}
                        <div className={`admin-department-ae p-3 mb-2 ${activeDept === 'Agricultural Extension' ? 'active' : ''}`} onClick={() => handleChangeDepartment('Agricultural Extension')}>
                            <div>
                                <i className="fa-solid fa-building-wheat"></i> &nbsp;Department of Agricultural Extension
                            </div>
                            <div className="ms-auto">
                                <i className="fa-solid fa-chevron-right"></i>
                            </div>
                        </div>
                    {/* </NavLink> */}

                    {/* <NavLink href={route('admin.departments.am')} active={route().current('admin.departments.am')}> */}
                        <div className={`admin-department-am p-3 mb-2 ${activeDept === 'Agri-Management' ? 'active' : ''}`} onClick={() => handleChangeDepartment('Agri-Management')}>
                            <div>
                                <i className="fa-solid fa-building-wheat"></i> &nbsp;Department of Agri-Management
                            </div>
                            <div className="ms-auto">
                                <i className="fa-solid fa-chevron-right"></i>
                            </div>
                        </div>
                    {/* </NavLink> */}

                    {/* <NavLink href={route('admin.departments.as')} active={route().current('admin.departments.as')}> */}
                        <div className={`admin-department-as p-3 mb-2 ${activeDept === 'Animal Science' ? 'active' : ''}`} onClick={() => handleChangeDepartment('Animal Science')}>
                            <div>
                                <i className="fa-solid fa-building-wheat"></i> &nbsp;Department of Animal Science
                            </div>
                            <div className="ms-auto">
                                <i className="fa-solid fa-chevron-right"></i>
                            </div>
                        </div>
                    {/* </NavLink> */}

                    {/* <NavLink href={route('admin.departments.cp')} active={route().current('admin.departments.cp')}> */}
                        <div className={`admin-department-cp p-3 mb-2 ${activeDept === 'Crop Protection' ? 'active' : ''}`} onClick={() => handleChangeDepartment('Crop Protection')}>
                            <div>
                                <i className="fa-solid fa-building-wheat"></i> &nbsp;Department of Crop Protection
                            </div>
                            <div className="ms-auto">
                                <i className="fa-solid fa-chevron-right"></i>
                            </div>
                        </div>
                    {/* </NavLink> */}

                    {/* <NavLink href={route('admin.departments.cs')} active={route().current('admin.departments.cs')}> */}
                        <div className={`admin-department-cs p-3 mb-2 ${activeDept === 'Crop Science' ? 'active' : ''}`} onClick={() => handleChangeDepartment('Crop Science')}>
                            <div>
                                <i className="fa-solid fa-building-wheat"></i> &nbsp;Department of Crop Science
                            </div>
                            <div className="ms-auto">
                                <i className="fa-solid fa-chevron-right"></i>
                            </div>
                        </div>
                    {/* </NavLink> */}

                    {/* <NavLink href={route('admin.departments.ss')} active={route().current('admin.departments.ss')}> */}
                        <div className={`admin-department-ss p-3 mb-2 ${activeDept === 'Soil Science' ? 'active' : ''}`} onClick={() => handleChangeDepartment('Soil Science')}>
                            <div>
                                <i className="fa-solid fa-building-wheat"></i> &nbsp;Department of Soil Science
                            </div>
                            <div className="ms-auto">
                                <i className="fa-solid fa-chevron-right"></i>
                            </div>
                        </div>
                    {/* </NavLink> */}
                </div>
                
                {/* <div className="admin-faculties-table-cont">
                    { children }
                </div> */}
            </div>
    )
}
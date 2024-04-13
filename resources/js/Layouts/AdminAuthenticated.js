import React from "react";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import agri_logo from "../../../public/images/agri_logo.png"
import NavLink from "@/Components/NavLink";
import Dropdown from "@/Components/Dropdown";

export default function AdminAuthenticated({ children }) {
    const routeNames = [
        'admin.faculties',
        'admin.departments',
        'admin.departments.ae',
        'admin.departments.as',
        'admin.departments.am',
        'admin.departments.cp',
        'admin.departments.cs',
        'admin.departments.ss',
        'admin.create'
    ];

    const side_nav_active = routeNames.includes(route().current());

    return (
        <div className="admin-screen">
            {/* Admin Nav  */}
            <div className="admin-nav">
                <div className="admin-logo-cont px-4">
                    <div className="admin-logo">
                        <img src={agri_logo} alt="clsu_logo"></img>
                    </div>
                    <div className="admin-logo-title">
                        <p className="m-0">CAg FIS</p>
                    </div>
                </div>

                <div className="admin-nav-cont px-4">
                    <div className="admin-nav-title-cont px-4">
                        <p className="m-0">CAg FIS Administrator</p>
                    </div>
                    <div className="admin-logout-cont">
                        <Dropdown>
                            <Dropdown.Trigger>
                                <div className="p-2 d-flex justify-content-center align-items-center gap-1">
                                    <i className="fa-regular fa-user"></i> Admin
                                </div>
                            </Dropdown.Trigger> 
                            <Dropdown.Content>
                                <Dropdown.Link href={route('logout')}>Log Out</Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    </div>
                    
                </div>
            </div>

            {/* Admin main content  */}
            <main className="admin-content">
                <div className="side-nav-admin p-4">
                    <ul className="py-4">
                        <li className="mb-4">
                            <NavLink href={route('admin.dashboard')} active={route().current('admin.dashboard')}>
                                <i className="fa-solid fa-gauge-high"></i>  &nbsp;Dashboard
                            </NavLink>
                        </li>
                        <li className="mb-4">
                            <NavLink href={route('admin.departments')} active={side_nav_active}>
                                <i className="fa-solid fa-users"></i> &nbsp;Faculties
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="admin-container p-4">
                    { children }
                </div>
            </main>
        </div>
    )
}
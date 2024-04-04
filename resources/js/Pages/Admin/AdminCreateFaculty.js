import React from "react";
import AdminAuthenticated from "@/Layouts/AdminAuthenticated";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import NavLink from "@/Components/NavLink";

export default function AdminFaculties({ children }) {
    return (
        <AdminAuthenticated>
            <div className="admin-create-faculty-cont m-4">
                <div className="d-flex">
                    <NavLink href={route('admin.departments')}>
                        <div className="admin-create-cont-title">
                            <p className="m-0">Faculties/&nbsp;</p>
                        </div>
                    </NavLink>
                    <div className="admin-faculty-cont-title">
                        <p className="m-0">Create</p>
                    </div>
                </div>

                <div className="admin-create-fields">
                    
                </div>
            </div>
        </AdminAuthenticated>
    )
}
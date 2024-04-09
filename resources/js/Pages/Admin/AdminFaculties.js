import React from "react";
import AdminAuthenticated from "@/Layouts/AdminAuthenticated";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import NavLink from "@/Components/NavLink";

export default function AdminFaculties({ children }) {
    return (
        <AdminAuthenticated>
            <div className="admin-faculty-cont m-4">
                <div className="admin-faculty-cont-title">
                    <p className="m-0">Faculties</p>
                </div>

                <div className="admin-filter-add-cont">
                    <div className="admin-filter-search">
                        <InputGroup className="mb-3">
                            <Button variant="outline-secondary" id="button-addon1">
                            Button
                            </Button>
                            <Form.Control
                            aria-label="Example text with button addon"
                            aria-describedby="basic-addon1"
                            placeholder="Search faculty..."
                            />
                        </InputGroup>
                    </div>

                    <div className="admin-add-faculty ms-auto">
                        <NavLink href={route('admin.create')}>
                            <Button variant="success">
                                Add Faculty
                            </Button>
                        </NavLink>
                    </div>
                </div>
                
                <div className="admin-faculties-cont">
                    { children }
                </div>
            </div>
        </AdminAuthenticated>
    )
}
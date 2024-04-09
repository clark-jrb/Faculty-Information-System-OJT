import React from "react";
import AdminAuthenticated from "@/Layouts/AdminAuthenticated";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import NavLink from "@/Components/NavLink";
import { useNotifContext } from "@/Contexts/Notification";

export default function AdminFaculties({ children }) {
    const { notif, message } = useNotifContext()
    
    return (
        <AdminAuthenticated>
            <div className="admin-faculty-cont m-4">
                <div className="admin-faculty-cont-title d-flex">
                    <p className="m-0">Faculties</p>
                    {notif && (
                        <span className="notif-bar-f my-2 px-3">
                            <p className="m-0">{message}</p>
                        </span>
                    )}
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
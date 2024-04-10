import React from "react";
import AdminAuthenticated from "@/Layouts/AdminAuthenticated";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useNotifContext } from "@/Contexts/Notification";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";

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

                <div className="admin-filter-add-cont mb-3">
                    <div className="admin-filter-search">
                        <InputGroup className="">
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
                        <ResponsiveNavLink href={route('admin.create')} as="button">
                            Add Faculty
                        </ResponsiveNavLink>
                    </div>
                </div>
                
                <div className="admin-faculties-cont">
                    { children }
                </div>
            </div>
        </AdminAuthenticated>
    )
}
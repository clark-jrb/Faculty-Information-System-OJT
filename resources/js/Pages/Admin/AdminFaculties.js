import React from "react";
import AdminAuthenticated from "@/Layouts/AdminAuthenticated";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useNotifContext } from "@/Contexts/Notification";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Switch } from "@headlessui/react";
import { useEditContext } from "@/Contexts/EditButtons";

export default function AdminFaculties({ children }) {
    const { notif, message } = useNotifContext()
    const { checked, handleChecked } = useEditContext()
    
    return (
        <AdminAuthenticated>
            <div className="admin-faculty-cont m-4">
                <div className="admin-faculty-cont-title d-flex justify-content-between">
                    <p className="m-0">Faculties</p>
                    {notif && (
                        <span className="notif-bar-f my-2 px-3 w-50">
                            <p className="m-0 text-center w-100">{message}</p>
                        </span>
                    )}
                    <div className="d-flex gap-2 align-items-center" style={{ fontSize: 'small' }}>
                        <p className="m-0">Delete button</p>
                        <Switch
                            checked={checked}
                            onChange={handleChecked}
                            className={`${
                            checked ? 'bg-green-700' : 'bg-gray-200'
                            } relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-300`}
                        >
                            <span className="sr-only">Enable notifications</span>
                            <span
                            className={`${
                                checked ? 'translate-x-6' : 'translate-x-1'
                            } inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-300`}
                            />
                        </Switch>
                    </div>
                    

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
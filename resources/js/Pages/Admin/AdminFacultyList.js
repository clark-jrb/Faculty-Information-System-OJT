import React, { useEffect, useState } from 'react';
import AdminFaculties from './AdminFaculties';
import { usePage } from '@inertiajs/inertia-react';
import { useEditContext } from '@/Contexts/EditButtons';
import { InertiaLink } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import { Modal } from 'react-bootstrap';

export default function AdminFacultyList() {
    const {
        faculty_data
    } = usePage().props;

    const { checked } = useEditContext()
    const [selectedID, setSelectedID] = useState(null)
    const [showModal, setShowModal] = useState(false);

    const handleRowClick = (id) => {
        Inertia.visit(route('admin.faculty.show', { id: id }));
    }

    // useEffect(() => {
    //     console.log(faculty_data);
    // }, [faculty_data]);

    const handleConfirmDel = (id) => {
        setSelectedID(id)
        setShowModal(true)
    }

    const handleCloseModal = () => { setShowModal(false) }

    const handleDelete = () => {
        Inertia.delete(route('admin.destroy', { id: selectedID }))
        setSelectedID(null)
        if (showModal) {
            setShowModal(false)
        }
    }

    // useEffect(() => {
    //     console.log('selected id: ' + selectedID);
    // }, [selectedID]);

    return (
        <AdminFaculties>
            <Modal show={showModal} onHide={handleCloseModal} centered>
                <Modal.Body>
                    Are you sure you want to delete this faculty data?
                </Modal.Body>
                <Modal.Footer>
                    <div className="d-flex w-100 justify-content-center align-items-center gap-3">
                        <button className='yes-btn p-1 px-3' onClick={() => handleDelete()}>Yes</button>
                        <button className='no-btn p-1 px-3' onClick={() => handleCloseModal()}>No</button>
                    </div>
                </Modal.Footer>
            </Modal>
            <div className='lists-of-faculties flex-fill'>
                {/* Agricultural Extension Table  */}
                {faculty_data.fd_agricultural_extension && (
                    <>
                    <div className="admin-dept-ae-title">
                        <p>Agricultural Extension</p>
                    </div>
                    <div className="agri-dept-ae-table-cont mb-3">
                        {faculty_data.fd_agricultural_extension.length === 0 ? (
                            <div className="d-flex justify-content-center align-items-center h-100">
                                <p className="m-0">No data to show</p>
                            </div>
                            
                        ) : (
                            <table className="admin-table shadow-sm">
                                <thead>
                                    <tr>
                                        <th scope="col" className="p-3 pb-2 tb-no">#</th>
                                        <th scope="col" className="p-3 pb-2 tb-fullname">Full Name</th>
                                        <th scope="col" className="p-3 pb-2 tb-role">Role</th>
                                        <th scope="col" className="p-3 pb-2 tb-rank">Rank</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {faculty_data.fd_agricultural_extension.map((faculty, index) => (
                                        <tr 
                                            key={index}
                                            onClick={() => checked ? null : handleRowClick(faculty.faculty_id)}
                                        >
                                            <th className="p-2 ps-3 tb-no">{index + 1}</th>
                                            <td className="p-2 ps-3 tb-fullname">{`${faculty.lname}, ${faculty.fname}`}</td>
                                            <td className="p-2 ps-3 tb-role">{faculty.role}</td>
                                            <td className="p-2 ps-3 tb-rank">{faculty.position}</td>
                                            <td className="p-2 ps-3">
                                                { checked ? 
                                                <>
                                                    <button onClick={() => handleConfirmDel(faculty.faculty_id)}>
                                                        <i className="fa-solid fa-trash-can"></i>
                                                    </button>
                                                </> : 
                                                <>
                                                    <i className="fa-solid fa-chevron-right"></i>
                                                </> }
                                                
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                    </>
                )}
                

                {/* Agri-Management Table */}
                {faculty_data.fd_agri_management && (
                    <>
                    <div className="admin-dept-am-title">
                        <p>Agri-Management</p>
                    </div>
                    <div className="agri-dept-am-table-cont mb-3">
                        {faculty_data.fd_agri_management.length === 0 ? (
                            <div className="d-flex justify-content-center align-items-center h-100">
                                <p className="m-0">No data to show</p>
                            </div>
                            
                        ) : (
                            <table className="admin-table shadow-sm">
                                <thead>
                                    <tr>
                                        <th scope="col" className="p-3 pb-2 tb-no">#</th>
                                        <th scope="col" className="p-3 pb-2 tb-fullname">Full Name</th>
                                        <th scope="col" className="p-3 pb-2 tb-role">Role</th>
                                        <th scope="col" className="p-3 pb-2 tb-rank">Rank</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {faculty_data.fd_agri_management.map((faculty, index) => (
                                        <tr 
                                            key={index}
                                            onClick={() => checked ? null : handleRowClick(faculty.faculty_id)}
                                        >
                                            <th className="p-2 ps-3 tb-no">{index + 1}</th>
                                            <td className="p-2 ps-3 tb-fullname">{`${faculty.lname}, ${faculty.fname}`}</td>
                                            <td className="p-2 ps-3 tb-role">{faculty.role}</td>
                                            <td className="p-2 ps-3 tb-rank">{faculty.position}</td>
                                            <td className="p-2 ps-3">
                                                { checked ? 
                                                <>
                                                    <button onClick={() => handleConfirmDel(faculty.faculty_id)}>
                                                        <i className="fa-solid fa-trash-can"></i>
                                                    </button>
                                                </> : 
                                                <>
                                                    <i className="fa-solid fa-chevron-right"></i>
                                                </> }
                                                
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                    </>
                )}
                

                {/* Animal Science Table */}
                {faculty_data.fd_animal_science && (
                    <>
                    <div className="admin-dept-as-title">
                        <p>Animal Science</p>
                    </div>
                    <div className="agri-dept-as-table-cont mb-3">
                        {faculty_data.fd_animal_science.length === 0 ? (
                            <div className="d-flex justify-content-center align-items-center h-100">
                                <p className="m-0">No data to show</p>
                            </div>
                            
                        ) : (
                            <table className="admin-table shadow-sm">
                                <thead>
                                    <tr>
                                        <th scope="col" className="p-3 pb-2 tb-no">#</th>
                                        <th scope="col" className="p-3 pb-2 tb-fullname">Full Name</th>
                                        <th scope="col" className="p-3 pb-2 tb-role">Role</th>
                                        <th scope="col" className="p-3 pb-2 tb-rank">Rank</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {faculty_data.fd_animal_science.map((faculty, index) => (
                                        <tr 
                                            key={index}
                                            onClick={() => checked ? null : handleRowClick(faculty.faculty_id)}
                                        >
                                            <th className="p-2 ps-3 tb-no">{index + 1}</th>
                                            <td className="p-2 ps-3 tb-fullname">{`${faculty.lname}, ${faculty.fname}`}</td>
                                            <td className="p-2 ps-3 tb-role">{faculty.role}</td>
                                            <td className="p-2 ps-3 tb-rank">{faculty.position}</td>
                                            <td className="p-2 ps-3">
                                                { checked ? 
                                                <>
                                                    <button onClick={() => handleConfirmDel(faculty.faculty_id)}>
                                                        <i className="fa-solid fa-trash-can"></i>
                                                    </button>
                                                </> : 
                                                <>
                                                    <i className="fa-solid fa-chevron-right"></i>
                                                </> }
                                                
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                    </>
                )}
                

                {/* Crop Protection Table */}
                {faculty_data.fd_crop_protection && (
                    <>
                    <div className="admin-dept-cp-title">
                        <p>Crop Protection</p>
                    </div>
                    <div className="agri-dept-cp-table-cont mb-3">
                        {faculty_data.fd_crop_protection.length === 0 ? (
                            <div className="d-flex justify-content-center align-items-center h-100">
                                <p className="m-0">No data to show</p>
                            </div>
                            
                        ) : (
                            <table className="admin-table shadow-sm">
                                <thead>
                                    <tr>
                                        <th scope="col" className="p-3 pb-2 tb-no">#</th>
                                        <th scope="col" className="p-3 pb-2 tb-fullname">Full Name</th>
                                        <th scope="col" className="p-3 pb-2 tb-role">Role</th>
                                        <th scope="col" className="p-3 pb-2 tb-rank">Rank</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {faculty_data.fd_crop_protection.map((faculty, index) => (
                                        <tr 
                                            key={index}
                                            onClick={() => checked ? null : handleRowClick(faculty.faculty_id)}
                                        >
                                            <th className="p-2 ps-3 tb-no">{index + 1}</th>
                                            <td className="p-2 ps-3 tb-fullname">{`${faculty.lname}, ${faculty.fname}`}</td>
                                            <td className="p-2 ps-3 tb-role">{faculty.role}</td>
                                            <td className="p-2 ps-3 tb-rank">{faculty.position}</td>
                                            <td className="p-2 ps-3">
                                                { checked ? 
                                                <>
                                                    <button onClick={() => handleConfirmDel(faculty.faculty_id)}>
                                                        <i className="fa-solid fa-trash-can"></i>
                                                    </button>
                                                </> : 
                                                <>
                                                    <i className="fa-solid fa-chevron-right"></i>
                                                </> }
                                                
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                    </>
                )}
                

                {/* Crop Science Table */}
                {faculty_data.fd_crop_science && (
                    <>
                    <div className="admin-dept-cs-title">
                        <p>Crop Science</p>
                    </div>
                    <div className="agri-dept-cs-table-cont mb-3">
                        {faculty_data.fd_crop_science.length === 0 ? (
                            <div className="d-flex justify-content-center align-items-center h-100">
                                <p className="m-0">No data to show</p>
                            </div>
                        ) : (
                            <table className="admin-table shadow-sm">
                                <thead>
                                    <tr>
                                        <th scope="col" className="p-3 pb-2 tb-no">#</th>
                                        <th scope="col" className="p-3 pb-2 tb-fullname">Full Name</th>
                                        <th scope="col" className="p-3 pb-2 tb-role">Role</th>
                                        <th scope="col" className="p-3 pb-2 tb-rank">Rank</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {faculty_data.fd_crop_science.map((faculty, index) => (
                                        <tr 
                                            key={index}
                                            onClick={() => checked ? null : handleRowClick(faculty.faculty_id)}
                                        >
                                            <th className="p-2 ps-3 tb-no">{index + 1}</th>
                                            <td className="p-2 ps-3 tb-fullname">{`${faculty.lname}, ${faculty.fname}`}</td>
                                            <td className="p-2 ps-3 tb-role">{faculty.role}</td>
                                            <td className="p-2 ps-3 tb-rank">{faculty.position}</td>
                                            <td className="p-2 ps-3">
                                                { checked ? 
                                                <>
                                                    <button onClick={() => handleConfirmDel(faculty.faculty_id)}>
                                                        <i className="fa-solid fa-trash-can"></i>
                                                    </button>
                                                </> : 
                                                <>
                                                    <i className="fa-solid fa-chevron-right"></i>
                                                </> }
                                                
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                    </>
                )}
                

                {/* Soil Science Table */}
                {faculty_data.fd_soil_science && (
                    <>
                    <div className="admin-dept-ss-title">
                        <p>Soil Science</p>
                    </div>
                    <div className="agri-dept-ss-table-cont mb-3">
                        {faculty_data.fd_soil_science.length === 0 ? (
                            <div className="d-flex justify-content-center align-items-center h-100">
                                <p className="m-0">No data to show</p>
                            </div>
                            
                        ) : (
                            <table className="admin-table shadow-sm">
                                <thead>
                                    <tr>
                                        <th scope="col" className="p-3 pb-2 tb-no">#</th>
                                        <th scope="col" className="p-3 pb-2 tb-fullname">Full Name</th>
                                        <th scope="col" className="p-3 pb-2 tb-role">Role</th>
                                        <th scope="col" className="p-3 pb-2 tb-rank">Rank</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {faculty_data.fd_soil_science.map((faculty, index) => (
                                        <tr 
                                            key={index}
                                            onClick={() => checked ? null : handleRowClick(faculty.faculty_id)}
                                        >
                                            <th className="p-2 ps-3 tb-no">{index + 1}</th>
                                            <td className="p-2 ps-3 tb-fullname">{`${faculty.lname}, ${faculty.fname}`}</td>
                                            <td className="p-2 ps-3 tb-role">{faculty.role}</td>
                                            <td className="p-2 ps-3 tb-rank">{faculty.position}</td>
                                            <td className="p-2 ps-3">
                                                { checked ? 
                                                <>
                                                    <button onClick={() => handleConfirmDel(faculty.faculty_id)}>
                                                        <i className="fa-solid fa-trash-can"></i>
                                                    </button>
                                                </> : 
                                                <>
                                                    <i className="fa-solid fa-chevron-right"></i>
                                                </> }
                                                
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                    </>
                )}
                
            </div>
        </AdminFaculties>
    )
}
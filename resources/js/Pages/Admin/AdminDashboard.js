import React, { useEffect } from "react";
import AdminAuthenticated from "@/Layouts/AdminAuthenticated";
import ae_logo from '../../../../public/images/dept_logo/agri_extension.png'
import am_logo from '../../../../public/images/dept_logo/agri_management.png'
import as_logo from '../../../../public/images/dept_logo/animal_sci.png'
import cp_logo from '../../../../public/images/dept_logo/crop_protect.png'
import cs_logo from '../../../../public/images/dept_logo/crop_sci.png'
import ss_logo from '../../../../public/images/dept_logo/soil_sci.png'
import { usePage } from "@inertiajs/inertia-react";

export default function AdminDashboard() {
    const {
        faculty_data
    } = usePage().props

    const ae_faculties = faculty_data.filter(faculty => faculty.department === 'Agricultural Extension')
    const am_faculties = faculty_data.filter(faculty => faculty.department === 'Agri-Management')
    const as_faculties = faculty_data.filter(faculty => faculty.department === 'Animal Science')
    const cp_faculties = faculty_data.filter(faculty => faculty.department === 'Crop Protection')
    const cs_faculties = faculty_data.filter(faculty => faculty.department === 'Crop Science')
    const ss_faculties = faculty_data.filter(faculty => faculty.department === 'Soil Science')

    const prof = faculty_data.filter(faculty => new RegExp(`^Professor [IVX]+$`).test(faculty.position))
    const assoc_prof = faculty_data.filter(faculty => new RegExp(`^Associate Professor [IVX]+$`).test(faculty.position))
    const asst_prof = faculty_data.filter(faculty => new RegExp(`^Assistant Professor [IVX]+$`).test(faculty.position))
    const inst = faculty_data.filter(faculty => new RegExp(`^Instructor [IVX]+$`).test(faculty.position))

    return (
        <AdminAuthenticated>
            <div className="admin-dash-cont m-4">
                {/* TOTALS 1 */}
                <div className="d-flex gap-3 mb-3">
                    <div className="total-dept d-flex flex-fill p-3 px-4">
                        <div>
                            <p className="m-0">Agricultural Extension</p>
                            <span style={{ fontSize: 'xx-large', fontWeight: 'bold' }}>
                                <p className="m-0">
                                    <i className="fa-solid fa-users" style={{ color: 'var(--green)' }}></i>
                                    &nbsp;
                                    {ae_faculties.length}
                                </p>
                            </span>
                        </div>
                        <div className="dept-logo ms-auto">
                            <img src={ae_logo} alt="ae_logo" />
                        </div>
                    </div>

                    <div className="total-dept d-flex flex-fill p-3 px-4">
                        <div>
                            <p className="m-0">Agri-Management</p>
                            <span style={{ fontSize: 'xx-large', fontWeight: 'bold' }}>
                                <p className="m-0">
                                    <i className="fa-solid fa-users" style={{ color: 'var(--green)' }}></i>
                                    &nbsp;
                                    {am_faculties.length}
                                </p>
                            </span>
                        </div>
                        <div className="dept-logo ms-auto">
                            <img src={am_logo} alt="am_logo" />
                        </div>
                    </div>

                    <div className="total-dept d-flex flex-fill p-3 px-4">
                        <div>
                            <p className="m-0">Animal Science</p>
                            <span style={{ fontSize: 'xx-large', fontWeight: 'bold' }}>
                                <p className="m-0">
                                    <i className="fa-solid fa-users" style={{ color: 'var(--green)' }}></i>
                                    &nbsp;
                                    {as_faculties.length}
                                </p>
                            </span>
                        </div>
                        <div className="dept-logo ms-auto">
                            <img src={as_logo} alt="as_logo" />
                        </div>
                    </div>
                </div>
                {/* TOTALS 2 */}
                <div className="d-flex gap-3 mb-3">
                    <div className="total-dept d-flex flex-fill p-3 px-4">
                        <div className="m-0">
                            <p className="m-0">Crop Protection</p>
                            <span style={{ fontSize: 'xx-large', fontWeight: 'bold' }}>
                                <p className="m-0">
                                    <i className="fa-solid fa-users" style={{ color: 'var(--green)' }}></i>
                                    &nbsp;
                                    {cp_faculties.length}
                                </p>
                            </span>
                        </div>
                        <div className="dept-logo ms-auto">
                            <img src={cp_logo} alt="cp_logo" />
                        </div>
                    </div>

                    <div className="total-dept d-flex flex-fill p-3 px-4">
                        <div className="m-0">
                            <p className="m-0">Crop Science</p>
                            <span style={{ fontSize: 'xx-large', fontWeight: 'bold' }}>
                                <p className="m-0">
                                    <i className="fa-solid fa-users" style={{ color: 'var(--green)' }}></i>
                                    &nbsp;
                                    {cs_faculties.length}
                                </p>
                            </span>
                        </div>
                        <div className="dept-logo ms-auto">
                            <img src={cs_logo} alt="cs_logo" />
                        </div>
                    </div>

                    <div className="total-dept d-flex flex-fill p-3 px-4">
                        <div className="m-0">
                            <p className="m-0">Soil Science</p>
                            <span style={{ fontSize: 'xx-large', fontWeight: 'bold' }}>
                                <p className="m-0">
                                    <i className="fa-solid fa-users" style={{ color: 'var(--green)' }}></i>
                                    &nbsp;
                                    {ss_faculties.length}
                                </p>
                            </span>
                        </div>
                        <div className="dept-logo ms-auto">
                            <img src={ss_logo} alt="ss_logo" />
                        </div>
                    </div>
                </div>

                {/* TOTALS OF RANKS  */}
                <div className="total-per-ranks d-flex gap-3">
                    <div className="total-rank-data d-flex w-25 p-3 shadow">
                        <div>
                            <p className="m-0">Professors</p>
                        </div>
                        <div className="ms-auto">
                            <p className="m-0 fs-4">
                                {prof.length}
                            </p>
                        </div>
                    </div>
                    <div className="total-rank-data d-flex w-25 p-3 shadow">
                        <div>
                            <p className="m-0">Associate Professors</p>
                        </div>
                        <div className="ms-auto">
                            <p className="m-0 fs-4">
                                {assoc_prof.length}
                            </p>
                        </div>
                    </div>
                    <div className="total-rank-data d-flex w-25 p-3 shadow">
                        <div>
                            <p className="m-0">Assistant Professors</p>
                        </div>
                        <div className="ms-auto">
                            <p className="m-0 fs-4">
                                {asst_prof.length}
                            </p>
                        </div>
                    </div>
                    <div className="total-rank-data d-flex w-25 p-3 shadow">
                        <div>
                            <p className="m-0">Instructors</p>
                        </div>
                        <div className="ms-auto">
                            <p className="m-0 fs-4">
                                {inst.length}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </AdminAuthenticated>
    )
}
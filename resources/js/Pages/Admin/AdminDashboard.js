import React from "react";
import AdminAuthenticated from "@/Layouts/AdminAuthenticated";
import ae_logo from '../../../../public/images/dept_logo/agri_extension.png'
import am_logo from '../../../../public/images/dept_logo/agri_management.png'
import as_logo from '../../../../public/images/dept_logo/animal_sci.png'
import cp_logo from '../../../../public/images/dept_logo/crop_protect.png'
import cs_logo from '../../../../public/images/dept_logo/crop_sci.png'
import ss_logo from '../../../../public/images/dept_logo/soil_sci.png'

export default function AdminDashboard() {
    return (
        <AdminAuthenticated>
            <div className="admin-dash-cont m-4">
                {/* TOTALS 1 */}
                <div className="d-flex gap-3 mb-3">
                    <div className="total-dept d-flex flex-fill p-3 px-4">
                        <div>
                            <p className="m-0">Agricultural Extension</p>
                            <span style={{ fontSize: 'xx-large', fontWeight: 'bold' }}>
                                <p className="m-0">3</p>
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
                                <p className="m-0">3</p>
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
                                <p className="m-0">3</p>
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
                                <p className="m-0">3</p>
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
                                <p className="m-0">3</p>
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
                                <p className="m-0">3</p>
                            </span>
                        </div>
                        <div className="dept-logo ms-auto">
                            <img src={ss_logo} alt="ss_logo" />
                        </div>
                    </div>
                </div>

                <div className="total-per-ranks d-flex gap-3">
                    <div className="total-rank-data d-flex w-25 p-3">
                        <div>
                            <p className="m-0">Professors</p>
                        </div>
                        <div className="ms-auto">
                            <p className="m-0 fs-4">3</p>
                        </div>
                    </div>
                    <div className="total-rank-data d-flex w-25 p-3">
                        <div>
                            <p className="m-0">Associate Professors</p>
                        </div>
                        <div className="ms-auto">
                            <p className="m-0 fs-4">3</p>
                        </div>
                    </div>
                    <div className="total-rank-data d-flex w-25 p-3">
                        <div>
                            <p className="m-0">Assistant Professors</p>
                        </div>
                        <div className="ms-auto">
                            <p className="m-0 fs-4">3</p>
                        </div>
                    </div>
                    <div className="total-rank-data d-flex w-25 p-3">
                        <div>
                            <p className="m-0">Instructors</p>
                        </div>
                        <div className="ms-auto">
                            <p className="m-0 fs-4">3</p>
                        </div>
                    </div>
                </div>
            </div>
        </AdminAuthenticated>
    )
}
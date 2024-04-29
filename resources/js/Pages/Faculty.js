import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import Table1 from './Tables/Table1';
import Table2 from './Tables/Table2';

export default function Faculty(props) {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            // header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >

            <div className="lists-content pt-4">
                <div className="lists-container px-4 pt-3">
                    <div className="title-filters-legend py-1 d-flex">
                        <div className="faculty-title">
                            <p className="m-0">Faculty List</p>
                        </div>
                        
                        <div className="filters d-flex">
                            <button id="resetFilter" className="filter-reset d-flex p-1 px-2">
                                <i className="fa-solid fa-rotate-right"></i>
                                <p className="m-0">
                                    &nbsp;Reset
                                </p>
                            </button>

                            <div className="filter-rank">
                                <select id="rankFilter" className="form-select" aria-label="Default select example">
                                    <option disabled>Select Rank</option>
                                    <option value="1">Dean</option>
                                    <option value="2">Professor</option>
                                    <option value="3">Associate Professor</option>
                                    <option value="4">Assistant Professor</option>
                                    <option value="5">Instructor</option>
                                </select>
                            </div>

                            <div className="filter-degree">
                                <select id="degreeFilter" className="form-select" aria-label="Default select example">
                                    <option disabled>Select Degree</option>
                                    <option value="1">Doctoral</option>
                                    <option value="2">Masteral</option>
                                    <option value="3">Bachelor</option>
                                </select>
                            </div>

                            <div className="filter-department">
                                <select id="departmentFilter" className="form-select" aria-label="Default select example">
                                    <option disabled>Select Department</option>
                                    <option value="1">Agricultural Extension</option>
                                    <option value="2">Agri-Management</option>
                                    <option value="3">Animal Science</option>
                                    <option value="4">Crop Protection</option>
                                    <option value="5">Crop Science</option>
                                    <option value="6">Soil Science</option>
                                </select>
                            </div>
                        </div>

                        <div className="legend d-flex">
                            <div className="legend-dean">
                                <p className="m-0">
                                    <i className="fa-solid fa-user" style={{color: "var(--yellow)"}}></i> Dean
                                </p>
                            </div>
                            <div className="legend-head">
                                <p className="m-0">
                                    <i className="fa-solid fa-user" style={{color: "var(--light-green)"}}></i> Head
                                </p>
                            </div>
                            <div className="legend-faculty">
                                <p className="m-0">
                                    <i className="fa-solid fa-user" style={{color: "var(--grey)"}}></i> Faculty
                                </p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="lists-tables py-3">
                        <Table1/>
                        <Table2/>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}

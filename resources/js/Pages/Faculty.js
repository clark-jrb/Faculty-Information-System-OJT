import React from 'react';
import Authenticated from '@/Layouts/Authenticated';

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
                            <button className="filter-reset d-flex p-1 px-2">
                                <i className="fa-solid fa-rotate-right"></i>
                                <p className="m-0">
                                    &nbsp;Reset
                                </p>
                            </button>

                            <div className="filter-rank">
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Rank</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>

                            <div className="filter-degree">
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Degree</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>

                            <div className="filter-department">
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Department</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
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
                                    <i className="fa-solid fa-user" style={{color: "var(--green)"}}></i> Head
                                </p>
                            </div>
                            <div className="legend-faculty">
                                <p className="m-0">
                                    <i className="fa-solid fa-user" style={{color: "var(--grey)"}}></i> Faculty
                                </p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="lists-tables">

                    </div>
                </div>
            </div>
        </Authenticated>
    );
}

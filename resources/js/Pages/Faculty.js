import React, { useState, useEffect } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import Table1 from './Tables/Table1';
import Table2 from './Tables/Table2';
import { usePage } from '@inertiajs/inertia-react';
import { filterFaculty } from '@/utils/filters';

export default function Faculty(props) {
    const { 
        faculty_data_ae,
        faculty_data_am,
        faculty_data_as,
        faculty_data_cp,
        faculty_data_cs,
        faculty_data_ss
    } = usePage().props;

    const [selectedRank, setSelectedRank] = useState('');
    const [selectedDegree, setSelectedDegree] = useState('');

    const handleSelectedRank = (e) => {
        setSelectedRank(e.target.value);
    };

    const handleSelectedDegree = (e) => {
        setSelectedDegree(e.target.value);
    };

    useEffect(() => {
        console.log(selectedDegree);
    }, [selectedDegree]);

    const filteredFacultyAE = filterFaculty(faculty_data_ae, selectedRank, selectedDegree);
    const filteredFacultyAM = filterFaculty(faculty_data_am, selectedRank, selectedDegree);
    const filteredFacultyAS = filterFaculty(faculty_data_as, selectedRank, selectedDegree);
    const filteredFacultyCP = filterFaculty(faculty_data_cp, selectedRank, selectedDegree);
    const filteredFacultyCS = filterFaculty(faculty_data_cs, selectedRank, selectedDegree);
    const filteredFacultySS = filterFaculty(faculty_data_ss, selectedRank, selectedDegree);


    const resetFilter = () => {
        setSelectedRank('')
        setSelectedDegree('')
    }

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
                            {selectedRank !== '' || selectedDegree !== '' ? 
                            <>
                            <button id="resetFilter" className="filter-reset d-flex p-1 px-2" onClick={() => resetFilter()}>
                                <i className="fa-solid fa-rotate-right"></i>
                                <p className="m-0">
                                    &nbsp;Reset
                                </p>
                            </button>
                            </> : 
                            <>
                            </>}

                            <div className="filter-rank">
                                <select 
                                    id="rankFilter" 
                                    className="form-select" 
                                    aria-label="Default select example"
                                    value={selectedRank}
                                    onChange={handleSelectedRank}
                                >
                                    <option disabled value="">Select Rank</option>
                                    <option value="College Dean">Dean</option>
                                    <option value="Professor">Professor</option>
                                    <option value="Associate Professor">Associate Professor</option>
                                    <option value="Assistant Professor">Assistant Professor</option>
                                    <option value="Instructor">Instructor</option>
                                </select>
                            </div>

                            <div className="filter-degree">
                                <select 
                                    id="degreeFilter" 
                                    className="form-select" 
                                    aria-label="Default select example"
                                    value={selectedDegree}
                                    onChange={handleSelectedDegree}
                                >
                                    <option disabled value="">Select Degree</option>
                                    <option value="doctoral">Doctoral</option>
                                    <option value="masteral">Masteral</option>
                                    <option value="bachelor">Bachelor</option>
                                </select>
                            </div>

                            {/* <div className="filter-department">
                                <select id="departmentFilter" className="form-select" aria-label="Default select example">
                                    <option disabled>Select Department</option>
                                    <option value="1">Agricultural Extension</option>
                                    <option value="2">Agri-Management</option>
                                    <option value="3">Animal Science</option>
                                    <option value="4">Crop Protection</option>
                                    <option value="5">Crop Science</option>
                                    <option value="6">Soil Science</option>
                                </select>
                            </div> */}
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
                        <Table1 
                            ae_data={filteredFacultyAE} 
                            am_data={filteredFacultyAM} 
                            as_data={filteredFacultyAS}
                        />
                        <Table2 
                            cp_data={filteredFacultyCP} 
                            cs_data={filteredFacultyCS} 
                            ss_data={filteredFacultySS}
                        />
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}

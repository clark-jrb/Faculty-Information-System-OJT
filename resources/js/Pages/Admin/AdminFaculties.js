import React, { useState, useEffect } from "react";
import AdminAuthenticated from "@/Layouts/AdminAuthenticated";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useNotifContext } from "@/Contexts/Notification";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Switch } from "@headlessui/react";
import { useEditContext } from "@/Contexts/EditButtons";
import AdminDepartments from "./AdminDepartments";
import { usePage } from "@inertiajs/inertia-react";
import { filter } from "lodash";
import { Inertia } from "@inertiajs/inertia";
import { useFilterDataContext } from "@/Contexts/FilterData";
import { searchFaculty } from "@/utils/filters";
import BackToTopButton from "@/Components/BackToTopButton";

export default function AdminFaculties({ children }) {
    const deptRoutes = [
        'admin.departments.ae',
        'admin.departments.as',
        'admin.departments.am',
        'admin.departments.cp',
        'admin.departments.cs',
        'admin.departments.ss',
    ];

    const {
        faculty_data
    } = usePage().props;

    const toDisable = deptRoutes.includes(route().current());

    const { notif, message } = useNotifContext()
    const { checked, handleChecked } = useEditContext()
    const [filterName, setFilterName] = useState('');
    const [isSearchBoxActive, setIsSearchBoxActive] = useState(false);
    // const [selectedRank, setSelectedRank] = useState('');
    // const [selectedDegree, setSelectedDegree] = useState('');
    const { 
        selectedRank, 
        selectedDegree, 
        selectedDepartment,
        handleSelectedRank, 
        handleSelectedDegree,
        filters,
        handleResetFilter
    } = useFilterDataContext()

    const handleFilterName = (e) => {
        setFilterName(e.target.value);
    };

    const handleSearchBoxFocus = () => {
        setIsSearchBoxActive(true);
    };

    const handleSearchBoxBlur = () => {
        setIsSearchBoxActive(false);
    };

    const resetFilter = () => {
        handleResetFilter()
        Inertia.visit(route('admin.faculties'))
    }

    // const filterFacultyData = () => {
    //     // console.log('filters: ' + filters);
    //     Inertia.get('/admin/faculties', filters)
    // }

    const handlePrint = () => {
        // console.log('filters: ' + filters);
        Inertia.get('/admin/print', filters)
    }

    // const searchResults = faculty_data.map(({ data }) => ({
    //     results: searchFaculty(data, filterName)
    // }));

    const facultyNames = [
        { data: faculty_data.fd_agricultural_extension, key: 'AE' },
        { data: faculty_data.fd_agri_management, key: 'AM' },
        { data: faculty_data.fd_animal_science, key: 'AS' },
        { data: faculty_data.fd_crop_protection, key: 'CP' },
        { data: faculty_data.fd_crop_science, key: 'CS' },
        { data: faculty_data.fd_soil_science, key: 'SS' }
    ];

    const searchResults = facultyNames.map(({ data, key }) => ({
        key,
        results: searchFaculty(data, filterName)
    }));

    const handleClickSearched = (e, id) => {
        e.preventDefault();
        // console.log('click');
        Inertia.visit(route('admin.faculty.show', { id: id }))
    }

    // useEffect(() => {
    //     console.log(facultyNames);
    // }, [facultyNames]);

    
    return (
        <AdminAuthenticated>
            <div className="admin-faculty-cont p-4">
                {/* Title and delete switch  */}
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
                
                {/* Filters  */}
                <div className="admin-filter-add-cont justify-content-between mb-3 w-100">
                    {/* Search faculty  */}
                    <div className="search-faculty h-100 align-items-center justify-content-center">
                        <button className="search-icon px-2">
                            <i className="fa-solid fa-magnifying-glass fa-sm"></i>
                        </button>
                        <input 
                            type="text" 
                            className="search-box px-5" 
                            placeholder="Search faculty..."
                            value={filterName}
                            onChange={handleFilterName}
                            onFocus={handleSearchBoxFocus} // Set isSearchBoxActive to true when focused
                            onBlur={handleSearchBoxBlur}
                        />
                        {isSearchBoxActive && filterName !== '' && (
                            <div className='searches-container'>
                                {searchResults.map(({ key, results }) => (
                                    results.length > 0 && 
                                    <div key={key}>
                                        {results.map(faculty => (
                                            <div key={faculty.id} className='p-3 d-flex align-items-center searched-data' onMouseDown={(e) => handleClickSearched(e, faculty.faculty_id)}>
                                                {`${faculty.fname} ${faculty.lname}`}
                                                <i 
                                                className="fa-solid fa-user ms-auto fa-sm" 
                                                style={
                                                    {color: faculty.role === 'Faculty' ? "var(--grey)" : 
                                                    faculty.role === 'Department Head' ? "var(--light-green)" : 
                                                    faculty.role === 'College Dean' ? "var(--yellow)" : "white"}
                                                }></i>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* <div className="admin-filter-search">
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
                    </div> */}

                    {/* Filter degree and rank  */}
                    <div className="d-flex gap-3 align-items-center flex-fill justify-content-center">
                        {selectedRank !== '' || selectedDegree !== '' || selectedDepartment !== '' ? 
                        <div>
                        <button id="resetFilter" className="filter-reset d-flex p-1 px-2" onClick={() => resetFilter()}>
                            <i className="fa-solid fa-rotate-right"></i>
                            <p className="m-0">
                                &nbsp;Reset
                            </p>
                        </button>
                        </div> : 
                        <>
                        </>}

                        <div className="filter-rank">
                            <select 
                                id="rankFilter" 
                                className="form-select-admin" 
                                aria-label="Default select example"
                                value={selectedRank}
                                onChange={handleSelectedRank}
                                // disabled={toDisable}
                            >
                                <option disabled value="">Select Rank</option>
                                {/* <option value="College Dean">Dean</option> */}
                                <option value="Professor">Professor</option>
                                <option value="Associate Professor">Associate Professor</option>
                                <option value="Assistant Professor">Assistant Professor</option>
                                <option value="Instructor">Instructor</option>
                            </select>
                        </div>

                        <div className="filter-degree">
                            <select 
                                id="degreeFilter" 
                                className="form-select-admin" 
                                aria-label="Default select example"
                                value={selectedDegree}
                                onChange={handleSelectedDegree}
                                // disabled={toDisable}
                            >
                                <option disabled value="">Select Degree</option>
                                <option value="doctoral">Doctoral</option>
                                <option value="masteral">Masteral</option>
                                <option value="bachelor">Bachelor</option>
                            </select>
                        </div>

                        {/* {selectedRank !== '' || selectedDegree !== '' ? 
                        <div>
                            <button className="filter-btn d-flex p-1 px-2" onClick={() => filterFacultyData()}>
                                <i className="fa-solid fa-filter"></i>
                                <p className="m-0">
                                    &nbsp;Filter
                                </p>
                            </button>
                        </div> :
                        <></>
                        } */}
                    </div>
                    
                    {/* Add faculty button  */}
                    {/* <div className="admin-add-faculty">
                        <ResponsiveNavLink href={route('admin.create')} as="button">
                            Add Faculty
                        </ResponsiveNavLink>
                    </div> */}

                    <div className="admin-add-faculty">
                        <button className="print-btn px-2 py-1" onClick={() => handlePrint()}>
                            <i className="fa-solid fa-print fa-sm"></i> Print
                        </button>
                    </div>
                </div>
                
                <div className="admin-faculties-cont d-flex gap-3">
                    <AdminDepartments/>
                    { children }
                </div>
            </div>
            <BackToTopButton/>
        </AdminAuthenticated>
    )
}
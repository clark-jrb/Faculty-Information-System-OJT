import React, { useState } from "react";
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
    const [filterName, setFilterName] = useState('');
    const [isSearchBoxActive, setIsSearchBoxActive] = useState(false);
    const [selectedRank, setSelectedRank] = useState('');
    const [selectedDegree, setSelectedDegree] = useState('');

    const handleSelectedRank = (e) => {
        setSelectedRank(e.target.value);
    };

    const handleSelectedDegree = (e) => {
        setSelectedDegree(e.target.value);
    };

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
        setSelectedRank('')
        setSelectedDegree('')
    }
    
    return (
        <AdminAuthenticated>
            <div className="admin-faculty-cont m-4">
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
                    <div className="search-faculty h-100">
                        <button className="search-icon px-2">
                            <i className="fa-solid fa-magnifying-glass fa-sm"></i>
                        </button>
                        <input 
                            type="text" 
                            className="search-box px-5 py-1" 
                            placeholder="Search faculty..."
                            value={filterName}
                            onChange={handleFilterName}
                            onFocus={handleSearchBoxFocus} // Set isSearchBoxActive to true when focused
                            onBlur={handleSearchBoxBlur}
                        />
                        {/* {isSearchBoxActive && filterName !== '' && (
                            <div className='searches-container'>
                                {searchResults.map(({ key, results }) => (
                                    results.length > 0 && 
                                    <div key={key} className='searched-data'>
                                        {results.map(faculty => (
                                            <div key={faculty.id} className='p-3 d-flex align-items-center' onMouseDown={(e) => handleClickSearched(e, faculty.id)}>
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
                        )} */}
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
                    <div className="d-flex gap-3">
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
                    </div>
                    
                    {/* Add faculty button  */}
                    <div className="admin-add-faculty">
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
import React from 'react';
import { usePage } from '@inertiajs/inertia-react';

export default function Table1 () {
    const { 
        faculty_data_cp,
        faculty_data_cs,
        faculty_data_ss
    } = usePage().props;

    return (
        <div className='d-flex gap-3 pt-3'>
            <div className='faculty-per-table flex-fill'>
                <div className="faculty-department-ae p-3">
                    <div>
                        <i className="fa-solid fa-building-wheat" style={{ color: 'var(--yellow)'}}></i> &nbsp;Department of Crop Protection
                    </div>
                    <div className='ms-auto'>
                        <p className='m-0'>
                            <i className="fa-regular fa-user fa-sm"></i>&nbsp;{faculty_data_cp.length}
                        </p>
                    </div>
                </div>
                <div className="agri-dept-ae-table-cont">
                    {faculty_data_cp.length === 0 ? (
                        <div className="d-flex justify-content-center align-items-center h-100">
                            <p className="m-0">No data to show</p>
                        </div>
                    ) : (
                        <table className="faculties-table">
                            <thead>
                                <tr>
                                    <th scope="col" className="p-3 pb-2">#</th>
                                    <th scope="col" className="p-3 pb-2">Full Name</th>
                                    <th scope="col" className="p-3 pb-2">Role</th>
                                    <th scope="col" className="p-3 pb-2">Rank</th>
                                </tr>
                            </thead>
                            <tbody>
                                {faculty_data_cp.map((faculty, index) => (
                                    <tr 
                                        key={index}
                                        onClick={() => checked ? null : handleRowClick(faculty.id)}
                                    >
                                        <th className="p-2 ps-3">{index + 1}</th>
                                        <td className="p-2 ps-3 text-wrap" style={{ width: '150px' }}>{`${faculty.lname}, ${faculty.fname}`}</td>
                                        <td className="p-2 ps-3">
                                            <i className="fa-solid fa-user" style={
                                                faculty.role  === 'Faculty' ?
                                                {color: "var(--grey)"} : faculty.role  === 'Department Head' ?
                                                {color: "var(--light-green)"} : faculty.role  === 'College Dean' ?
                                                {color: "var(--yellow)"} : {color: "white"}
                                            }></i>
                                        </td>
                                        <td className="p-2 ps-3">{faculty.position}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
            
            <div className='faculty-per-table flex-fill'>
                <div className="faculty-department-am p-3">
                    <div>
                        <i className="fa-solid fa-building-wheat" style={{ color: 'var(--yellow)'}}></i> &nbsp;Department of Crop Science
                    </div>
                    <div className='ms-auto'>
                        <p className='m-0'>
                            <i className="fa-regular fa-user fa-sm"></i>&nbsp;{faculty_data_cs.length}
                        </p>
                    </div>
                </div>
                <div className="agri-dept-ae-table-cont">
                    {faculty_data_cs.length === 0 ? (
                        <div className="d-flex justify-content-center align-items-center h-100">
                            <p className="m-0">No data to show</p>
                        </div>
                    ) : (
                        <table className="faculties-table">
                            <thead>
                                <tr>
                                    <th scope="col" className="p-3 pb-2">#</th>
                                    <th scope="col" className="p-3 pb-2">Full Name</th>
                                    <th scope="col" className="p-3 pb-2">Role</th>
                                    <th scope="col" className="p-3 pb-2">Rank</th>
                                </tr>
                            </thead>
                            <tbody>
                                {faculty_data_cs.map((faculty, index) => (
                                    <tr 
                                        key={index}
                                        onClick={() => checked ? null : handleRowClick(faculty.id)}
                                    >
                                        <th className="p-2 ps-3">{index + 1}</th>
                                        <td className="p-2 ps-3 text-wrap" style={{ width: '150px' }}>{`${faculty.lname}, ${faculty.fname}`}</td>
                                        <td className="p-2 ps-3">
                                            <i className="fa-solid fa-user" style={
                                                faculty.role  === 'Faculty' ?
                                                {color: "var(--grey)"} : faculty.role  === 'Department Head' ?
                                                {color: "var(--light-green)"} : faculty.role  === 'College Dean' ?
                                                {color: "var(--yellow)"} : {color: "white"}
                                            }></i>
                                        </td>
                                        <td className="p-2 ps-3">{faculty.position}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>

            <div className='faculty-per-table flex-fill'>
                <div className="faculty-department-as p-3">
                    <div>
                        <i className="fa-solid fa-building-wheat" style={{ color: 'var(--yellow)'}}></i> &nbsp;Department of Soil Science
                    </div>
                    <div className='ms-auto'>
                        <p className='m-0'>
                            <i className="fa-regular fa-user fa-sm"></i>&nbsp;{faculty_data_ss.length}
                        </p>
                    </div>
                </div>
                <div className="agri-dept-ae-table-cont">
                    {faculty_data_ss.length === 0 ? (
                        <div className="d-flex justify-content-center align-items-center h-100">
                            <p className="m-0">No data to show</p>
                        </div>
                    ) : (
                        <table className="faculties-table">
                            <thead>
                                <tr>
                                    <th scope="col" className="p-3 pb-2">#</th>
                                    <th scope="col" className="p-3 pb-2">Full Name</th>
                                    <th scope="col" className="p-3 pb-2">Role</th>
                                    <th scope="col" className="p-3 pb-2">Rank</th>
                                </tr>
                            </thead>
                            <tbody>
                                {faculty_data_ss.map((faculty, index) => (
                                    <tr 
                                        key={index}
                                        onClick={() => checked ? null : handleRowClick(faculty.id)}
                                    >
                                        <th className="p-2 ps-3">{index + 1}</th>
                                        <td className="p-2 ps-3 text-wrap" style={{ width: '150px' }}>{`${faculty.lname}, ${faculty.fname}`}</td>
                                        <td className="p-2 ps-3">
                                            <i className="fa-solid fa-user" style={
                                                faculty.role  === 'Faculty' ?
                                                {color: "var(--grey)"} : faculty.role  === 'Department Head' ?
                                                {color: "var(--light-green)"} : faculty.role  === 'College Dean' ?
                                                {color: "var(--yellow)"} : {color: "white"}
                                            }></i>
                                        </td>
                                        <td className="p-2 ps-3">{faculty.position}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    )
}
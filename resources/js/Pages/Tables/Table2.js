import React from 'react';
import { Inertia } from '@inertiajs/inertia';

export default function Table1 ({cp_data, cs_data, ss_data}) {
    
    const handleRowClick = (id) => {
        Inertia.visit(route('basic', { id: id }))
    }

    return (
        <div className='d-flex gap-3 pt-3'>
            <div className='faculty-per-table flex-fill'>
                <div className="faculty-department-cp p-3">
                    <div>
                        <i className="fa-solid fa-building-wheat" style={{ color: 'var(--yellow)'}}></i> &nbsp;Department of Crop Protection
                    </div>
                    <div className='ms-auto'>
                        <p className='m-0'>
                            <i className="fa-regular fa-user fa-xs"></i>&nbsp;{cp_data.length}
                        </p>
                    </div>
                </div>
                <div className="agri-dept-ae-table-cont">
                    {cp_data.length === 0 ? (
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
                                {cp_data.map((faculty, index) => (
                                    <tr 
                                        key={index}
                                        onClick={() => handleRowClick(faculty.id)}
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
                <div className="faculty-department-cs p-3">
                    <div>
                        <i className="fa-solid fa-building-wheat" style={{ color: 'var(--yellow)'}}></i> &nbsp;Department of Crop Science
                    </div>
                    <div className='ms-auto'>
                        <p className='m-0'>
                            <i className="fa-regular fa-user fa-xs"></i>&nbsp;{cs_data.length}
                        </p>
                    </div>
                </div>
                <div className="agri-dept-ae-table-cont">
                    {cs_data.length === 0 ? (
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
                                {cs_data.map((faculty, index) => (
                                    <tr 
                                        key={index}
                                        onClick={() => handleRowClick(faculty.id)}
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
                <div className="faculty-department-ss p-3">
                    <div>
                        <i className="fa-solid fa-building-wheat" style={{ color: 'var(--yellow)'}}></i> &nbsp;Department of Soil Science
                    </div>
                    <div className='ms-auto'>
                        <p className='m-0'>
                            <i className="fa-regular fa-user fa-xs"></i>&nbsp;{ss_data.length}
                        </p>
                    </div>
                </div>
                <div className="agri-dept-ae-table-cont">
                    {ss_data.length === 0 ? (
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
                                {ss_data.map((faculty, index) => (
                                    <tr 
                                        key={index}
                                        onClick={() => handleRowClick(faculty.id)}
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
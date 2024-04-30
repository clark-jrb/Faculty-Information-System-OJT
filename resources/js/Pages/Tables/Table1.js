import React, { useEffect } from 'react';

export default function Table1 ({ae_data, am_data, as_data}) {

    // useEffect(() => {
    //     console.log(faculty_data_ae);
    // }, [faculty_data_ae]);

    return (
        <div className='d-flex gap-3'>
            <div className='faculty-per-table flex-fill'>
                <div className="faculty-department-ae p-3">
                    <div>
                        <i className="fa-solid fa-building-wheat" style={{ color: 'var(--yellow)'}}></i> &nbsp;Department of Agricultural Extension
                    </div>
                    <div className='ms-auto'>
                        <p className='m-0'>
                            <i className="fa-regular fa-user fa-xs"></i>&nbsp;{ae_data.length}
                        </p>
                    </div>
                </div>
                <div className="agri-dept-ae-table-cont">
                    {ae_data.length === 0 ? (
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
                                {ae_data.map((faculty, index) => (
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
                        <i className="fa-solid fa-building-wheat" style={{ color: 'var(--yellow)'}}></i> &nbsp;Department of Agri-Management
                    </div>
                    <div className='ms-auto'>
                        <p className='m-0'>
                            <i className="fa-regular fa-user fa-xs"></i>&nbsp;{am_data.length}
                        </p>
                    </div>
                </div>
                <div className="agri-dept-ae-table-cont">
                    {am_data.length === 0 ? (
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
                                {am_data.map((faculty, index) => (
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
                        <i className="fa-solid fa-building-wheat" style={{ color: 'var(--yellow)'}}></i> &nbsp;Department of Animal Science
                    </div>
                    <div className='ms-auto'>
                        <p className='m-0'>
                            <i className="fa-regular fa-user fa-xs"></i>&nbsp;{as_data.length}
                        </p>
                    </div>
                </div>
                <div className="agri-dept-ae-table-cont">
                    {as_data.length === 0 ? (
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
                                {as_data.map((faculty, index) => (
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
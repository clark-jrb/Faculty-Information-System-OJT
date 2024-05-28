import React from 'react';
import '../../../public/css/print.css'

const Print = React.forwardRef(({ data }, ref) => (
    
    <div className='print-page-paper p-4' ref={ref}>
        <div className='print-header mb-3'>
            <h1>College of Agriculture <br /> Faculty Members 2024</h1>
        </div>


        <div>
            {/* Agricultural Extension Table  */}
            {data.fd_agricultural_extension && (
                <>
                    {data.fd_agricultural_extension.length === 0 ? (
                        <></>
                    ) : (
                        <div className="agri-dept-ae-table-cont mb-3">
                            <div className="admin-dept-ae-title">
                                <p className='m-0'>Agricultural Extension</p>
                            </div>
                            <table className="admin-table">
                                <thead>
                                    <tr>
                                        <th scope="col" className="p-3 pb-2 tb-no">#</th>
                                        <th scope="col" className="p-3 pb-2 tb-fullname">Full Name</th>
                                        {/* <th scope="col" className="p-3 pb-2 tb-role">Role</th> */}
                                        <th scope="col" className="p-3 pb-2 tb-rank">Rank</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.fd_agricultural_extension.map((faculty, index) => (
                                        <tr 
                                            key={index}
                                        >
                                            <th className="p-2 ps-3 tb-no">{index + 1}</th>
                                            <td className="p-2 ps-3 tb-fullname">{`${faculty.lname}, ${faculty.fname}`}</td>
                                            {/* <td className="p-2 ps-3 tb-role">{faculty.role}</td> */}
                                            <td className="p-2 ps-3 tb-rank">{faculty.position}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </>
            )}

            {/* Agri-Management Table */}
            {data.fd_agri_management && (
                <>
                    {data.fd_agri_management.length === 0 ? (
                        <></>
                    ) : (
                        <div className="agri-dept-am-table-cont mb-3">
                            <div className="admin-dept-am-title">
                                <p className='m-0'>Agri-Management</p>
                            </div>
                            <table className="admin-table">
                                <thead>
                                    <tr>
                                        <th scope="col" className="p-3 pb-2 tb-no">#</th>
                                        <th scope="col" className="p-3 pb-2 tb-fullname">Full Name</th>
                                        {/* <th scope="col" className="p-3 pb-2 tb-role">Role</th> */}
                                        <th scope="col" className="p-3 pb-2 tb-rank">Rank</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.fd_agri_management.map((faculty, index) => (
                                        <tr 
                                            key={index}
                                        >
                                            <th className="p-2 ps-3 tb-no">{index + 1}</th>
                                            <td className="p-2 ps-3 tb-fullname">{`${faculty.lname}, ${faculty.fname}`}</td>
                                            {/* <td className="p-2 ps-3 tb-role">{faculty.role}</td> */}
                                            <td className="p-2 ps-3 tb-rank">{faculty.position}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </>
            )}

            {/* Animal Science Table */}
            {data.fd_animal_science && (
                <>
                    {data.fd_animal_science.length === 0 ? (
                        <></>
                    ) : (
                        <div className="agri-dept-as-table-cont mb-3">
                            <div className="admin-dept-as-title">
                                <p className='m-0'>Animal Science</p>
                            </div>
                            <table className="admin-table">
                                <thead>
                                    <tr>
                                        <th scope="col" className="p-3 pb-2 tb-no">#</th>
                                        <th scope="col" className="p-3 pb-2 tb-fullname">Full Name</th>
                                        {/* <th scope="col" className="p-3 pb-2 tb-role">Role</th> */}
                                        <th scope="col" className="p-3 pb-2 tb-rank">Rank</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.fd_animal_science.map((faculty, index) => (
                                        <tr 
                                            key={index}
                                        >
                                            <th className="p-2 ps-3 tb-no">{index + 1}</th>
                                            <td className="p-2 ps-3 tb-fullname">{`${faculty.lname}, ${faculty.fname}`}</td>
                                            {/* <td className="p-2 ps-3 tb-role">{faculty.role}</td> */}
                                            <td className="p-2 ps-3 tb-rank">{faculty.position}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </>
            )}

            {/* Crop Protection Table */}
            {data.fd_crop_protection && (
                <>
                    {data.fd_crop_protection.length === 0 ? (
                        <></>
                    ) : (
                        <div className="agri-dept-cp-table-cont mb-3">
                            <div className="admin-dept-cp-title">
                                <p className='m-0'>Crop Protection</p>
                            </div>
                            <table className="admin-table">
                                <thead>
                                    <tr>
                                        <th scope="col" className="p-3 pb-2 tb-no">#</th>
                                        <th scope="col" className="p-3 pb-2 tb-fullname">Full Name</th>
                                        {/* <th scope="col" className="p-3 pb-2 tb-role">Role</th> */}
                                        <th scope="col" className="p-3 pb-2 tb-rank">Rank</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.fd_crop_protection.map((faculty, index) => (
                                        <tr 
                                            key={index}
                                        >
                                            <th className="p-2 ps-3 tb-no">{index + 1}</th>
                                            <td className="p-2 ps-3 tb-fullname">{`${faculty.lname}, ${faculty.fname}`}</td>
                                            {/* <td className="p-2 ps-3 tb-role">{faculty.role}</td> */}
                                            <td className="p-2 ps-3 tb-rank">{faculty.position}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </>
            )}

            {/* Crop Science Table */}
            {data.fd_crop_science && (
                <>
                    {data.fd_crop_science.length === 0 ? (
                        <></>
                    ) : (
                        <div className="agri-dept-cs-table-cont mb-3">
                            <div className="admin-dept-cs-title">
                                <p className='m-0'>Crop Science</p>
                            </div>
                            <table className="admin-table">
                                <thead>
                                    <tr>
                                        <th scope="col" className="p-3 pb-2 tb-no">#</th>
                                        <th scope="col" className="p-3 pb-2 tb-fullname">Full Name</th>
                                        {/* <th scope="col" className="p-3 pb-2 tb-role">Role</th> */}
                                        <th scope="col" className="p-3 pb-2 tb-rank">Rank</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.fd_crop_science.map((faculty, index) => (
                                        <tr 
                                            key={index}
                                            
                                        >
                                            <th className="p-2 ps-3 tb-no">{index + 1}</th>
                                            <td className="p-2 ps-3 tb-fullname">{`${faculty.lname}, ${faculty.fname}`}</td>
                                            {/* <td className="p-2 ps-3 tb-role">{faculty.role}</td> */}
                                            <td className="p-2 ps-3 tb-rank">{faculty.position}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </>
            )}

            {/* Soil Science Table */}
            {data.fd_soil_science && (
                <>
                    {data.fd_soil_science.length === 0 ? (
                        <></>
                    ) : (
                        <div className="agri-dept-ss-table-cont mb-3">
                            <div className="admin-dept-ss-title">
                                <p className='m-0'>Soil Science</p>
                            </div>
                            <table className="admin-table">
                                <thead>
                                    <tr>
                                        <th scope="col" className="p-3 pb-2 tb-no">#</th>
                                        <th scope="col" className="p-3 pb-2 tb-fullname">Full Name</th>
                                        {/* <th scope="col" className="p-3 pb-2 tb-role">Role</th> */}
                                        <th scope="col" className="p-3 pb-2 tb-rank">Rank</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.fd_soil_science.map((faculty, index) => (
                                        <tr 
                                            key={index}
                                        >
                                            <th className="p-2 ps-3 tb-no">{index + 1}</th>
                                            <td className="p-2 ps-3 tb-fullname">{`${faculty.lname}, ${faculty.fname}`}</td>
                                            {/* <td className="p-2 ps-3 tb-role">{faculty.role}</td> */}
                                            <td className="p-2 ps-3 tb-rank">{faculty.position}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </>
            )}
        </div>
        
    </div>
));

export default Print;
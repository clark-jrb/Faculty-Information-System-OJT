import React, { useState, useEffect } from 'react';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import clsu_logo from '../../../public/images/logos_bgs/clsu_logo.png';
import agri_logo from '../../../public/images/logos_bgs/agri_logo.png';
import Dropdown from '@/Components/Dropdown';
import { abbreviateName } from '@/utils/abbreviateName';

export default function Authenticated({ auth, children }) {
    const routeNames = [
        'profile', 
        'basic', 
        'academic', 
        'publication',
        'research', 
        'documents', 
        'extensions',
        'faculties'
    ];

    // useEffect(() => {
    //     console.log(userName);
    // }, [userName]);

    const userName = abbreviateName(auth.user.name)

    const active = routeNames.includes(route().current());

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Navbar */}
            <div className="navbar-agri">
                {/* Nav Logo */}
                <div className="nav-logo-label-cont d-flex py-2 px-4">
                    <div className="nav-logo-cont">
                        <img src={agri_logo} alt="clsu-logo"/>
                    </div>
                    <div className="nav-logo-label px-2">
                        <span style={{fontSize: "large", fontWeight: "bold"}}>
                            <p className="m-0">
                                CAg FIS
                            </p>
                        </span> 
                        <p className="m-0" style={{fontSize: "small"}}>Central Luzon State University</p>
                    </div>
                    {/* <div className='ms-auto' style={{ color: "var(--yellow)" }}>
                        <i className="fa-solid fa-wheat-awn fa-lg"></i>
                    </div> */}
                </div>
                {/* Links */}
                <div className='nav-cont d-flex flex-fill pe-4'>
                    <div className="ms-auto w-50 d-flex">
                        <div className="flex-fill">
                            <ul className="px-4 h-100">
                                <li className="px-3" >
                                    <NavLink href={route('home')} active={route().current('home')}>
                                        <p className="p-1 m-0">
                                            <i className="fa-solid fa-house"></i> Home
                                        </p>
                                    </NavLink>
                                </li>
                                <li className="px-3" >
                                    <NavLink href={route('basic')} active={active}>
                                        <p className="p-1 m-0">
                                            <i className="fa-solid fa-address-card"></i> Profile
                                        </p>
                                    </NavLink>
                                </li>    
                            </ul>
                        </div>
                        {/* Sign Out Button */}
                        <div className="sign-out-cont flex-fill">
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <div className="user-name-cont p-2 d-flex justify-content-center align-items-center gap-1">
                                        {userName}&nbsp;<i className="fa-solid fa-chevron-down fa-sm"></i> 
                                    </div>
                                </Dropdown.Trigger> 
                                <Dropdown.Content>
                                    <Dropdown.Link href={route('logout')} as="button">Log Out</Dropdown.Link>
                                </Dropdown.Content>
                            </Dropdown>
                            {/* <ResponsiveNavLink method="post" href={route('logout')} as="button">
                                Log Out
                            </ResponsiveNavLink> */}
                        </div>
                    </div>
                    
                </div>
            </div>

            {/* Main Content */}
            <main>
                {children}
            </main>
        </div>
    );
}

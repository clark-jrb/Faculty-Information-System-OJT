import React, { useState } from 'react';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import clsu_logo from '../../../public/images/clsu_logo.png';
import Dropdown from '@/Components/Dropdown';

export default function Authenticated({ auth, children }) {
    const routeNames = [
        'profile', 
        'basic', 
        'academic', 
        'research', 
        'documents', 
        'extensions'
    ];
    const active = routeNames.includes(route().current());

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Navbar */}
            <div className="navbar-agri px-4">
                {/* Nav Logo */}
                <div className="nav-logo-label-cont flex-fill d-flex py-2">
                    <div className="nav-logo-cont">
                        <img src={clsu_logo} alt="clsu-logo"/>
                    </div>
                    <div className="nav-logo-label px-2">
                        <span style={{fontSize: "large", fontWeight: "bold"}}>
                            <p className="m-0">
                                Faculty Information System
                            </p>
                        </span> 
                        <p className="m-0">Central Luzon State University</p>
                    </div>
                </div>
                {/* Search bar */}
                <div className="search-faculty flex-fill w-25">
                    <button className="search-icon p-0">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                    <input type="text" className="search-box px-5" placeholder="Search faculty..."/>
                </div>
                {/* Links */}
                <div className="flex-fill w-25">
                    <ul className="px-4 h-100">
                        <li className="px-3" >
                            <NavLink href={route('facilities')} active={route().current('facilities')}>
                                <p className="p-1 m-0">
                                    <i className="fa-solid fa-building-wheat"></i> Facilities
                                </p>
                            </NavLink>
                        </li>
                        <li className="px-3" >
                            <NavLink href={route('faculty')} active={route().current('faculty')}>
                                <p className="p-1 m-0">
                                    <i className="fa-solid fa-bars-staggered"></i> Faculty
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
                    <ResponsiveNavLink method="post" href={route('logout')} as="button">
                        Log Out
                    </ResponsiveNavLink>
                    <Dropdown>
                        
                    </Dropdown>
                </div>
            </div>

            {/* Main Content */}
            <main className="px-4">
                {children}
            </main>
        </div>
    );
}

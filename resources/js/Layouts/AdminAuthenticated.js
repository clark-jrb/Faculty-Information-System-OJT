import React from "react";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";

export default function AdminAuthenticated({ children }) {
    return (
        <div className="admin-screen">
            {/* Admin Nav  */}
            <div className="admin-nav">
                <div className="admin-logo-cont">
                    
                </div>

                <div className="admin-nav-cont">
                    <div className="admin-logout-cont">
                        <ResponsiveNavLink method="post" href={route('logout')} as="button">
                            Log Out
                        </ResponsiveNavLink>
                    </div>
                </div>
            </div>

            {/* Admin main content  */}
            <main className="admin-content">
                <div className="side-nav-admin">

                </div>
                { children }
            </main>
        </div>
    )
}
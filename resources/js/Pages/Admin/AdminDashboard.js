import React from "react";
import AdminAuthenticated from "@/Layouts/AdminAuthenticated";

export default function AdminDashboard() {
    return (
        <AdminAuthenticated>
            <div className="admin-container">
                <p>Admin contents here...</p>
                
            </div>
        </AdminAuthenticated>
    )
}
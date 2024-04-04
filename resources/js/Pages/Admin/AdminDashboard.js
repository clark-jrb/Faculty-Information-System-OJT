import React from "react";
import AdminAuthenticated from "@/Layouts/AdminAuthenticated";

export default function AdminDashboard() {
    return (
        <AdminAuthenticated>
            <div className="admin-dash-cont h-100 m-4">
                <p>Welcome Admin!</p>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
        </AdminAuthenticated>
    )
}
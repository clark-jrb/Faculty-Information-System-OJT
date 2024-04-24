import React from 'react';
import AdminAuthenticated from '@/Layouts/AdminAuthenticated';

export default function AdminFiles ({ children }) {
    return (
        <AdminAuthenticated>
            <div className="admin-doc-content h-100 m-4">
                <div className="admin-doc-title">
                    <p className="m-0">Files</p>
                </div>
            </div>
        </AdminAuthenticated>
    )
}
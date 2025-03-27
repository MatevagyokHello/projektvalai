import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style/AdminDashboard.css';

function AdminDashboard() {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/admin/login');
    };

    return (
        <div className="admin-dashboard-container">
            <h2>Admin Dashboard</h2>
            <div className="admin-dashboard-buttons">
                <button onClick={() => navigate('/admin/products')}>Termékek kezelése</button>
                <button onClick={() => navigate('/admin/orders')}>Rendelések kezelése</button>
                <button onClick={() => navigate('/admin/users')}>Felhasználók kezelése</button>
                <button onClick={handleLogout}>Kijelentkezés</button>
            </div>
        </div>
    );
}

export default AdminDashboard;

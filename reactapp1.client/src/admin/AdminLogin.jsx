import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style/AdminLogin.css';

function AdminLogin() {
    const [felhasznalonev, setFelhasznalonev] = useState('');
    const [jelszo, setJelszo] = useState('');
    const [hiba, setHiba] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('https://localhost:7136/api/admin/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ felhasznalonev, jelszo })
        });

        if (response.ok) {
            navigate('/admin/dashboard');
        } else {
            setHiba('Hibás felhasználónév vagy jelszó.');
        }
    };

    return (
        <div className="admin-login-container">
            <form onSubmit={handleSubmit} className="admin-login-form">
                <h2>Admin bejelentkezés</h2>
                <input type="text" placeholder="Felhasználónév" value={felhasznalonev} onChange={(e) => setFelhasznalonev(e.target.value)} />
                <input type="password" placeholder="Jelszó" value={jelszo} onChange={(e) => setJelszo(e.target.value)} />
                {hiba && <p className="error">{hiba}</p>}
                <button type="submit">Bejelentkezés</button>
            </form>
        </div>
    );
}

export default AdminLogin;

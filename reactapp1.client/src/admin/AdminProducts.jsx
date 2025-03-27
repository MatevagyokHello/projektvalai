import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style/AdminProducts.css';

function AdminProducts() {
    const [nev, setNev] = useState('');
    const [ar, setAr] = useState('');
    const [kategoriaId, setKategoriaId] = useState('');
    const [file, setFile] = useState(null);
    const [hiba, setHiba] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('file', file);
        formData.append('nev', nev);
        formData.append('ar', ar);
        formData.append('kategoriaId', kategoriaId);

        const response = await fetch('https://localhost:7136/api/admin/upload-product', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            navigate('/admin/dashboard');
        } else {
            setHiba('Hiba történt a termék feltöltésekor.');
        }
    };

    return (
        <div className="admin-products-container">
            <form onSubmit={handleSubmit} className="admin-products-form">
                <h2>Új termék hozzáadása</h2>
                <input
                    type="text"
                    placeholder="Termék neve"
                    value={nev}
                    onChange={(e) => setNev(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Ár (Ft)"
                    value={ar}
                    onChange={(e) => setAr(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Kategória ID"
                    value={kategoriaId}
                    onChange={(e) => setKategoriaId(e.target.value)}
                />
                <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                />
                {hiba && <p className="error">{hiba}</p>}
                <button type="submit">Termék feltöltése</button>
                <button type="button" onClick={() => navigate('/admin/dashboard')}>Vissza</button>
            </form>
        </div>
    );
}

export default AdminProducts;

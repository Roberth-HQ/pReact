import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faAngleDown } from '@fortawesome/free-solid-svg-icons';

const MainPage = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div style={{ 
            backgroundColor: 'rgba(80, 160, 80, 1.2)',
            padding: '20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <div>
                <h1>Unidad educativa McLovin</h1>
                <div style={{ display: 'flex', alignItems: 'flex-end', marginTop: '20px' }}>
                    <button style={{ marginRight: '20px' }}>Mis documentos</button>
                    <button style={{ marginRight: '20px' }}>Administracion Personal</button>
                    <button style={{ marginRight: '20px' }}>Cursos</button>
                    <button style={{ marginRight: '20px' }}>Seguridad</button>
                </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                <div style={{ marginRight: '20px', display: 'flex', alignItems: 'center' }}>
                    <FontAwesomeIcon icon={faUser} style={{ marginRight: '5px' }} />
                    <span>Jhon Miguel Cuevas Carillo</span>
                    <FontAwesomeIcon icon={faAngleDown} onClick={handleDropdownToggle} style={{ marginLeft: '5px', cursor: 'pointer' }} />
                </div>
                {isDropdownOpen && (
                    <div style={{ position: 'absolute', top: '50px', right: '20px', backgroundColor: 'rgba(80, 160, 80, 0.8)', padding: '10px', borderRadius: '5px' }}>
                        <p>Estudiante</p>
                        <p onClick={() => setIsDropdownOpen(false)}>Cerrar sesión</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MainPage;
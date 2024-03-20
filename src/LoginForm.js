import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import backgroundImage from './assets/fondoLogin.jpg';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = () => {
        if (username === 'usuario' && password === 'contraseña') {
            setIsLoggedIn(true);
            setError('');
        } else {
            setError('Usuario o contraseña incorrectos');
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUsername('');
        setPassword('');
        setError('');
    };

    if (isLoggedIn) {
        return (
            <div>
                <h1>Bienvenido, {username}!</h1>
                <button onClick={handleLogout}>Cerrar sesión</button>
            </div>
        );
    }

    return (
        <div style={{ 
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh', // Ocupar todo el alto de la pantalla
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            }}>
            <div style={{ 
                maxWidth: '400px', 
                width: '100%',
                margin: '0 auto', 
                padding: '20px', 
                border: '5px solid white', 
                borderRadius: '15px', 
                backgroundColor: 'rgba(144, 238, 144, 0.5)' }}>
                <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Iniciar sesión</h1>
                {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <FontAwesomeIcon icon={faUser} style={{ marginRight: '10px' }} />
                    <input
                        type="text"
                        placeholder="Usuario"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={{ padding: '10px', flex: 1, borderRadius: '10px', fontSize: '16px' }}
                    />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <FontAwesomeIcon icon={faLock} style={{ marginRight: '10px' }} />
                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ padding: '10px', flex: 1, borderRadius: '10px', fontSize: '16px' }}
                    />
                </div>
                <button onClick={handleLogin} style={{ 
                    padding: '10px 20px', 
                    backgroundColor: '#007bff', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '10px', 
                    cursor: 'pointer',
                    width: '100%',
                    fontSize: '18px',
                    fontWeight: 'bold'
                }}>
                    Iniciar sesión
                </button>
            </div>
            <div style={{ color: 'white', textAlign: 'center', marginTop: '20px' }}>
                <p>Sistema de control académico</p>
                <p>Sistema para colegio McLovin tiene derechos de propiedad intelectual con la tecnología utilizada en el desarrollo de software, por lo que toda copia será sancionada</p>
            </div>
        </div>
    );
};

export default LoginForm;
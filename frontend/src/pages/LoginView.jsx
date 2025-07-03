import React from 'react';
import './LoginView.css';
import logo from '../assets/background.webp';

const LoginView = () => {
    return (
        <div className="login-container">
            <div className="login-content">
                {/* Formulario */}
                <div className="login-form-section">
                    <div className="login-form">
                        <h2 className="shop-title">ACME-SHOP</h2>
                        <p className="register-text">
                            Don't have an account? <a href="#">Register</a>
                        </p>

                        <form className="login-form-fields">
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" placeholder="Enter email" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" placeholder="Password" />
                            </div>

                            <div className="form-links">
                                <a href="#">Forgot your password?</a>
                            </div>

                            <button type="button" className="login-button" disabled>
                                Login
                            </button>
                        </form>
                    </div>
                </div>

                {/* Imagen */}
                <div className="login-image-section">
                    <img src={logo} alt="Productos tecnológicos" />
                </div>
            </div>
        </div>
    );
};

export default LoginView;

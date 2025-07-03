import React from 'react';
import './HomeView.css';
import logo from '../assets/background.webp';

const HomeView = () => {
    return (
        <div className="home-container">
            {/* Header */}
            <header className="header">
                <div className="logo">ACME-SHOP</div>

                <div className="search-bar">
                    <input type="text" placeholder="Search..." />
                    <button>🔍</button>
                </div>

                <div className="header-links">
                    <a href="#">Login</a>
                    <a href="#">My Account</a>
                    <span className="cart-icon">🛒</span>
                </div>
            </header>

            {/* Banner */}
            <div className="banner">
                <img
                    src={logo}
                    alt="Banner"
                />
                <h2 className="welcome-text">Welcome ✘</h2>
            </div>

            {/* Product grid */}
            <section className="product-grid ">
                <div className="related-item">Item 1</div>
                <div className="related-item">Item 2</div>
                <div className="related-item">Item 3</div>
                <div className="related-item">Item 4</div>
                <div className="related-item">Item 5</div>
                <div className="related-item">Item 6</div>
                <div className="related-item">Item 7</div>
                <div className="related-item">Item 8</div>
            </section>
        </div>
    );
};

export default HomeView;

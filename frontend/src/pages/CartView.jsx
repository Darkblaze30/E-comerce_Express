import React from 'react';
import './CartView.css';

const CartView = () => {
    return (
        <div className="cart-container">
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

            {/* Cart Title */}
            <div className="cart-title">
                <h2>Your shopping cart</h2>
                <div className="cart-icon-large">🛒</div>
            </div>

            {/* Cart Items */}
            <div className="cart-items">
                <div className="cart-item">
                    <div className="cart-img">Image</div>
                    <div className="cart-details">
                        <h3>Product Name</h3>
                        <p>Short description of the product.</p>
                    </div>
                </div>

                <div className="cart-item">
                    <div className="cart-img">Image</div>
                    <div className="cart-details">
                        <h3>Product Name</h3>
                        <p>Short description of the product.</p>
                    </div>
                </div>

                <div className="cart-item">
                    <div className="cart-img">Image</div>
                    <div className="cart-details">
                        <h3>Product Name</h3>
                        <p>Short description of the product.</p>
                    </div>
                </div>
            </div>

            {/* Total & Pay */}
            <div className="cart-footer">
                <span><strong>Total:</strong> $599.97</span>
                <button className="pay-btn">Pay</button>
            </div>
        </div>
    );
};

export default CartView;

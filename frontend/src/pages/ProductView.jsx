import React from 'react';
import './ProductView.css';

const ProductView = () => {
    return (
        <div className="product-container">
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

            {/* Main content */}
            <main className="product-main">
                <div className="product-image">Image</div>

                <div className="product-description">
                    <h2>Product Name</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
                        feugiat nisl eu velit suscipit.
                    </p>
                </div>

                <div className="product-actions">
                    <p className="price">$199.99</p>
                    <button className="buy-btn">Buy</button>
                    <button className="cart-btn">Add to cart</button>
                </div>
            </main>

            {/* Related products */}
            <section className="related-products">
                <div className="related-item">Item 1</div>
                <div className="related-item">Item 2</div>
                <div className="related-item">Item 3</div>
                <div className="related-item">Item 4</div>
            </section>
        </div>
    );
};

export default ProductView;

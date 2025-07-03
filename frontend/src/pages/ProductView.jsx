import React from 'react';
import './ProductView.css';

class ProductView extends React.Component {
     constructor(props) {
    super(props);
    this.state = {
      product: "",
    };
  }

  async componentDidMount() {
    try {
      const params = new URLSearchParams(window.location.search);
      const _id = params.get('id');
      const response = await fetch(`http://127.0.0.1:4000/products/${_id}`);
      const data = await response.json();
      this.setState({ product: data});
    } catch (error) {
      this.setState({ error: error.message});
    }
  }

  render() {
    const {product} = this.state
    console.log(product)

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
        {product && 
         <main className="product-main">
          <div className="product-image"><img src={product.image} alt="" /></div>

          <div className="product-description">
            <h2>{product.name}</h2>
            <p>
              {product.description}
            </p>
          </div>

          <div className="product-actions">
            <p className="price">${product.price}</p>
            <button className="buy-btn">Buy</button>
            <button className="cart-btn">Add to cart</button>
          </div>
        </main>}
       

        {/* Related products */}
        <section className="related-products">
          <div className="related-item">Item 1</div>
          <div className="related-item">Item 2</div>
          <div className="related-item">Item 3</div>
          <div className="related-item">Item 4</div>
        </section>
      </div>
    );
  }
}

export default ProductView;

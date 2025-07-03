import React from 'react';
import './HomeView.css';
import logo from '../assets/background.webp';

class HomeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: "",
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch(`http://localhost:4000/products`);
      const data = await response.json();
      this.setState({ products: data});
    } catch (error) {
      this.setState({ error: error.message});
    }
  }

  render() {
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
          <img src={logo} alt="Banner" />
          <h2 className="welcome-text">Welcome ✘</h2>
        </div>

        {/* Product grid */}
        <section className="product-grid ">
            {this.state.products && this.state.products.map(product => {
                return(
                    <div className='product-card'>
                        <div className="product-img"><img src={product.image} alt="" /></div>
                    </div>
                )
            })}

        </section>
      </div>
    );
  }
}

export default HomeView;


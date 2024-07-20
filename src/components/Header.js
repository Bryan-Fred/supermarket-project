import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';

const Header = ({ cartCount, products, setSearchResults }) => {
  const navigate = useNavigate();

  function toggleMenu() {
    const links = document.querySelector('.nav-bar');
    links.classList.toggle('show');
  }

  const handleSearch = (query) => {
    const results = products.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
    navigate('/search');
  };

  return (
    <div className="header">
      <nav className='nav-bar'>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <SearchBar onSearch={handleSearch} />
      {/*
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      */}
      <Link to="/cart" className='nav-link'>
        <div className="cart-icon">
          <FiShoppingCart />
          <span className="cart-count">{cartCount}</span>
        </div>
      </Link>
    </div>
  );
};

export default Header;

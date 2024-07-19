import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Header = ({ cartCount }) => {
  function toggleMenu() {
    const links = document.querySelector('.nav-bar');
    links.classList.toggle('show');
  }

  return (
    <div className="header">
      <nav className='nav-bar'>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
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

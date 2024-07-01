import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <div className="hamburger-meu"></div>
    </header>
  );
};

export default Header;

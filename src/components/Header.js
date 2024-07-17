import React from 'react';

const Header = () => {
  function toggleMenu(){
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
    </div>
  );
};

export default Header;

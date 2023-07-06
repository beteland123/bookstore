import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/navbar.css';

function NavBar() {
  return (
    <nav className="navBar">

      <span className="logo">Bookstore CMS</span>
      <div className="nav-links">
        <li className="book-link"><Link to="/">BOOKS</Link></li>
        <li className="catego-link"><Link to="/categories">CATEGORIES</Link></li>
      </div>
      <button type="button" className="avator">avator</button>
    </nav>
  );
}

export default NavBar;

import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/navbar.css';
import pic from '../image/avatorSrc.png';

function NavBar() {
  return (
    <nav className="navBar">

      <span className="logo">Bookstore CMS</span>
      <div className="nav-links">
        <li className="book-link"><Link to="/">BOOKS</Link></li>
        <li className="catego-link"><Link to="/categories">CATEGORIES</Link></li>
      </div>
      <button type="button" className="avator"><img src={pic} alt="avator" className="img" /></button>
    </nav>
  );
}

export default NavBar;

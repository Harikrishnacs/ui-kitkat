import React, { useState } from "react";

import { Link } from "react-router-dom";
import "./Navbar.css";
import { ServiceDdown, ProductDdown } from "./Dropdown";
// import { Services } from "./MenuItems";

function Navbar() {
  const [click, setClick] = useState(false);
  const [prodropdown, setproDropdown] = useState(false);
  const [serdropdown, setserDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = (g) => {
    if (g === 1) {
      if (window.innerWidth < 0) {
        setserDropdown(false);
      } else {
        setserDropdown(true);
      }
    }
    if (g === 2) {
      if (window.innerWidth < 0) {
        setproDropdown(false);
      } else {
        setproDropdown(true);
      }
    }
  };

  const onMouseLeave = (g) => {
    if (g === 1) {
      if (window.innerWidth < 0) {
        setserDropdown(false);
      } else {
        setserDropdown(false);
      }
    }
    if (g === 2) {
      if (window.innerWidth < 0) {
        setproDropdown(false);
      } else {
        setproDropdown(false);
      }
    }
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img
            src="https://res.cloudinary.com/denokpulg/image/upload/v1659683872/logo_3_mdyv1t.png"
            alt=""
          />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>

          <li
            className="nav-item"
            onMouseEnter={() => onMouseEnter(2)}
            onMouseLeave={() => onMouseLeave(2)}
          >
            <Link to="/product" className="nav-links" onClick={closeMobileMenu}>
              Products
              <i className="fas fa-caret-down" />
            </Link>
            {prodropdown && <ProductDdown />}
          </li>
          <li
            className="nav-item"
            onMouseEnter={() => onMouseEnter(1)}
            onMouseLeave={() => onMouseLeave(1)}
          >
            <Link
              to="/services"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Services <i className="fas fa-caret-down" />
            </Link>
            {serdropdown && <ServiceDdown />}
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/career" className="nav-links" onClick={closeMobileMenu}>
              Career
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;

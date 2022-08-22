import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__product">
          <h2>Product</h2>
          <ul>
            <li>
              <Link to="/ecommerce">E-Commerce</Link>
            </li>
            <li>
              <Link to="/officeerp">Office ERP</Link>
            </li>
            <li>
              <Link to="/biometric">Biometric Based HRM</Link>
            </li>
            <li>
              <Link to="/minibank">Mini Banking</Link>
            </li>
            <li>
              <Link to="/goldloan">Gold Loan Management</Link>
            </li>
            <li>
              <Link to="/medicalbill">Medical Billing</Link>
            </li>
            <li>
              <Link to="/trabelerp">Travel ERP</Link>
            </li>
            <li>
              <Link to="/posbill">POS on Billing</Link>
            </li>
          </ul>
        </div>
        <div className="footer__service">
          <h2>Services</h2>
          <ul>
            <li>
              <Link to="/customized">Customized Web</Link>
            </li>
            <li>
              <Link to="/webhosting">Web Hosting</Link>
            </li>
            <li>
              <Link to="/design&develop">Website Design and Development</Link>
            </li>
            <li>
              <Link to="/application&develop">
                Android Application Development
              </Link>
            </li>
            <li>
              <Link to="/iosdevelop">IOS Application Development</Link>
            </li>
            <li>
              <Link to="/bulksms">Bulk SMS</Link>
            </li>
            <li>
              <Link to="/hrm">HRM</Link>
            </li>
            <li>
              <Link to="/erp">ERP</Link>
            </li>
            <li>
              <Link to="/crm">CRM </Link>
            </li>
          </ul>
        </div>
        <div className="footer__contact">
          <h2>Contact</h2>
          <p>No.70/77,1st floor, Krishna complex,</p>
          <p>Kattor Road,Papanaickenpalayam,</p>
          <p>Coimbatore-641037,</p>
          <p>Tamil Nadu</p>
          <p>Phone : 0422 495 7272</p>
          <p>Mobile : 7010816299</p>
          <p>kitkatsoftwaretechnologies@gmail.com </p>
        </div>

        <div className="footer__socialinks">
          <h2>Find us on</h2>
          <div className="links">
            <a href="https://www.facebook.com/kitkatsolutions/">
              <span className="link__circle">
                <i class="fa-brands fa-facebook-f icon"></i>
              </span>
            </a>

            <a href="https://in.linkedin.com/in/kitkat-software-technologies-67029a147">
              <span className="link__circle">
                <i class="fa-brands fa-linkedin-in icon"></i>
              </span>
            </a>
            <a href="https://www.instagram.com/kitkatsoftwaretechnologies/?igshid=kbjcwvv7w6aq">
              <span className="link__circle">
                <i class="fa-brands fa-instagram icon"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="footer__copy">
        <p>
          © Copyright 2022 All Right Reserved - Kitkat Software Technologies
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';

import './footer.css';

import { Link } from 'react-router-dom';

import bg from '../../assets/footer-bg.jpg';
import logo from '../../assets/tmovie.png';

const Footer = () => {
  return (
    <div className="footer" style={{ backgroundImage: `url(${bg})` }}>
      <div className="footer__content">
        <div className="footer__content__logo">
          <div className="logo">
            <img src={logo} alt="logo" />
            <Link to="/">tMovies</Link>
          </div>
        </div>
        <div className="footer__content__menus">
          <div className="footer__content__menu">
            <Link to="/" className="footer__index">
              Home
            </Link>
            <Link to="/" className="footer__index">
              Contact Us
            </Link>
            <Link to="/" className="footer__index">
              Terms of Service
            </Link>
            <Link to="/" className="footer__index">
              About Us
            </Link>
          </div>
          <div className="footer__content__menu">
            <Link to="/" className="footer__index">
              Live
            </Link>
            <Link to="/" className="footer__index">
              FAQ
            </Link>
            <Link to="/" className="footer__index">
              Premium
            </Link>
            <Link to="/" className="footer__index">
              Privacy Policy
            </Link>
          </div>
          <div className="footer__content__menu">
            <Link to="/" className="footer__index">
              You Must Watch
            </Link>
            <Link to="/" className="footer__index">
              Recent Releases
            </Link>
            <Link to="/" className="footer__index">
              Top IMDB
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

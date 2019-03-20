import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

function ListItemLink({
  to,
  text,
}) {
  return (
    <li>
      <Link
        activeStyle={{
          color: '#555',
          backgroundColor: '#e7e7e7',
        }}
        to={to}
      >
        {text}
      </Link>
    </li>
  );
}

ListItemLink.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default function Navbar() {
  return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <Link className="navbar-brand" to="/">
            AEROTRIKE AVIATION
          </Link>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav">
            <ListItemLink
              to="/"
              text="Home"
            />
            <ListItemLink
              to="/about"
              text="About"
            />
            <li><a href="./training.html">Training</a></li>
            <li><a href="./gift-certificates.html">Gift Certificates</a></li>
            <li><a href="./sales.html">Sales</a></li>
            <li><a href="./gallery.html">Gallery</a></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><a href="./contact.html">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

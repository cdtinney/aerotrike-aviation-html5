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
            <ListItemLink
              to="/training"
              text="Training"
            />
            <ListItemLink
              to="/gift-certificates"
              text="Gift Certificates"
            />
            <ListItemLink
              to="/sales"
              text="Sales"
            />
            <ListItemLink
              to="/gallery"
              text="Gallery"
            />
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <ListItemLink to="/contact" text="Contact Us" />
          </ul>
        </div>
      </div>
    </nav>
  );
}

import React from 'react';

import Address from './contact/Address';
import Email from './contact/Email';
import Phone from './contact/Phone';
import Social from './contact/Social';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            <div className="col-md-3 col-sm-4 col-xs-8 contact-info-container">
              <Email />
            </div>
            <div className="col-md-3 col-sm-2 col-xs-12 contact-info-container">
              <Phone />
            </div>
            <div className="col-md-3 col-sm-3 col-xs-8 contact-info-container">
              <Address />
            </div>
            <div className="col-md-3 col-sm-3 col-xs-4 contact-info-container">
              <Social />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

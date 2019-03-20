import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            <div className="col-md-3 col-sm-4 col-xs-8 contact-info-container">
              <h5>EMAIL</h5>
              <p><a href="mailto:montgomery@nexicom.net?subject=Hello!">montgomery@nexicom.net</a></p>
            </div>
            <div className="col-md-3 col-sm-2 col-xs-12 contact-info-container">
              <h5>PHONE</h5>
              <p style={{ marginBottom: 0 }}>
                705 927 1256
                <br />
              </p>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-8 contact-info-container">
              <h5>ADDRESS</h5>
              <div>
                Aerotrike Aviation
                <br />
                Peterborough Municipal Airport (YPQ)
                <br />
                925 Airport Road
                <br />
                Peterborough, ON K9J 6X6
                <br />
              </div>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-4 contact-info-container">
              <h5>SOCIAL</h5>
              <a
                href="https://www.facebook.com/www.aerotrikeaviation.net"
                style={{
                  display: 'block',
                }}
              >
                <img alt="Facebook" src="img/fb_logo.png" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

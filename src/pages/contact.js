import React from 'react';

import Navbar from '../components/Navbar';
import SEO from '../components/SEO';

import FacebookLogo from '../images/FacebookLogo.png';
import DefaultLayoutContent from '../layouts/DefaultLayoutContent';

const ContactPage = () => (
  <React.Fragment>
    <Navbar />
    <SEO title="Contact" />
    <DefaultLayoutContent>
      <div className="row">
        <div className="col-md-6 col-sm-6">
          <h3>Get in touch</h3>
          <p>Want to book lessons? Buy a gift certificate? Learn more about flying? </p>
          <p>Call, e-mail, or visit us today.</p>
        </div>
        <div style={{ marginTop: '20px' }}>
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
        </div>
      </div>
      <div className="row">
        <div id="map-embed-container">
          <div id="map-embed-lg" className="col-md-6 map-embed">
            <iframe
              title="map-lg"
              width="370"
              height="260"
              frameBorder="0"
              style={{
                border: 0,
              }}
              src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJN-ZoZ2mS1YkRkuIOIMfirMY&key=AIzaSyBNJ7_cipz7IHf2b8v49DXvRlb-Vs-VNp0"
              allowFullScreen
            />
          </div>

          <div id="map-embed-sm" className="col-md-6 col-sm-6 map-embed">
            <iframe
              title="map-sm"
              width="320"
              height="200"
              frameBorder="0"
              style={{
                border: 0,
              }}
              src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJN-ZoZ2mS1YkRkuIOIMfirMY&key=AIzaSyBNJ7_cipz7IHf2b8v49DXvRlb-Vs-VNp0"
              allowFullScreen
            />
          </div>

          <div id="map-embed-xs" className="col-md-6 map-embed">
            <iframe
              title="map-xs"
              width="200"
              height="100"
              frameBorder="0"
              style={{
                border: 0,
              }}
              src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJN-ZoZ2mS1YkRkuIOIMfirMY&key=AIzaSyBNJ7_cipz7IHf2b8v49DXvRlb-Vs-VNp0"
              allowFullScreen
            />
          </div>
        </div>

        <div className="col-md-3 col-sm-4 col-xs-8 contact-info-container">
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

        <div className="col-md-3 col-sm-2 col-xs-4 contact-info-container">
          <h5>SOCIAL</h5>
          <a
            href="https://www.facebook.com/www.aerotrikeaviation.net"
            style={{
              display: 'block',
            }}
          >
            <img alt="Facebook" src={FacebookLogo} />
          </a>
        </div>
      </div>
    </DefaultLayoutContent>
  </React.Fragment>
);

export default ContactPage;

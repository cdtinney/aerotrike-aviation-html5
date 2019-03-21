import React from 'react';

import Navbar from '../components/Navbar';
import SEO from '../components/SEO';

import DefaultLayoutContent from '../layouts/DefaultLayoutContent';

import Address from '../components/contact/Address';
import Email from '../components/contact/Email';
import Phone from '../components/contact/Phone';
import Social from '../components/contact/Social';

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
            <Email />
          </div>

          <div className="col-md-3 col-sm-2 col-xs-12 contact-info-container">
            <Phone />
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
          <Address />
        </div>

        <div className="col-md-3 col-sm-2 col-xs-4 contact-info-container">
          <Social />
        </div>
      </div>
    </DefaultLayoutContent>
  </React.Fragment>
);

export default ContactPage;

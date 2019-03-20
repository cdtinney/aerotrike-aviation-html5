import React from 'react';

import DefaultLayout from '../layouts/DefaultLayout';
import SEO from '../components/SEO';
import Jumbotron from '../components/Jumbotron';

const IndexPage = () => (
  <DefaultLayout>
    <SEO title="Home" />
    <Jumbotron />
    <div className="container">
      <div className="row">
        <div className="col-md-10 col-md-offset-1">
          <div className="col-md-4">
            <h2>Gift Certificates</h2>
            <p>Young and old will enjoy the gift of flight with a gift certificate. </p>
            <p><a className="btn btn-default" href="./gift-certificates.html" role="button">Get yours now &raquo;</a></p>
          </div>
          <div className="col-md-4">
            <h2>Training</h2>
            <p>Safe and comprehensive ultralight trike training.</p>
            <p><a className="btn btn-default" href="./training.html" role="button">Book lessons today &raquo;</a></p>
          </div>
          <div className="col-md-4">
            <h2>Sales</h2>
            <p>Used and new aircraft and equipment available for purchase.</p>
            <p><a className="btn btn-default" href="./sales.html" role="button">View listings&raquo;</a></p>
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
);

export default IndexPage;

import React from 'react';
import { Link } from 'gatsby';

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
            <p>
              <Link className="btn btn-default" to="/gift-certificates">Get yours now &raquo;</Link>
            </p>
          </div>
          <div className="col-md-4">
            <h2>Training</h2>
            <p>Safe and comprehensive ultralight trike training.</p>
            <p>
              <Link className="btn btn-default" to="/training">Book lessons today &raquo;</Link>
            </p>
          </div>
          <div className="col-md-4">
            <h2>Sales</h2>
            <p>Used and new aircraft and equipment available for purchase.</p>
            <p>
              <Link className="btn btn-default" to="/sales">View listings&raquo;</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
);

export default IndexPage;

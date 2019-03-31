import React from 'react';
import { Link } from 'gatsby';

import DefaultLayout from '../layouts/DefaultLayout';
import SEO from '../components/SEO';
import Jumbotron from '../components/Jumbotron';
import DefaultLayoutContent from '../layouts/DefaultLayoutContent';

const IndexPage = () => (
  <DefaultLayout>
    <SEO title="Home" />
    <Jumbotron />
    <DefaultLayoutContent>
      <div className="col-md-4">
        <h2>Gift Certificates</h2>
        <p>Young and old will enjoy the gift of flight with a gift certificate. </p>
        <Link className="btn btn-primary" to="/gift-certificates">Get yours now</Link>
      </div>
      <div className="col-md-4">
        <h2>Training</h2>
        <p>Safe and comprehensive ultralight trike training.</p>
        <Link className="btn btn-primary" to="/training">Book lessons</Link>
      </div>
      <div className="col-md-4">
        <h2>Sales</h2>
        <p>Used and new aircraft and equipment available for purchase.</p>
        <Link className="btn btn-primary" to="/sales">View listings</Link>
      </div>
    </DefaultLayoutContent>
  </DefaultLayout>
);

export default IndexPage;

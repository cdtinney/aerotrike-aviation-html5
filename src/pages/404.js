import React from 'react';

import DefaultLayout from '../layouts/DefaultLayout';
import SEO from '../components/SEO';

const PageNotFoundPage = () => (
  <DefaultLayout>
    <SEO title="About" />
    <div className="container">
      <div className="row">
        <div className="col-md-10 col-md-offset-1">
          <h3>404 - Page not found</h3>
        </div>
      </div>
    </div>
  </DefaultLayout>
);

export default PageNotFoundPage;

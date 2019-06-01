import React from 'react';

import DefaultLayout from '../layouts/DefaultLayout';
import DefaultLayoutContent from '../layouts/DefaultLayoutContent';
import SEO from '../components/SEO';

const PageNotFoundPage = () => (
  <DefaultLayout>
    <SEO title="404" />
    <DefaultLayoutContent>
      <h3>404 - Page not found</h3>
    </DefaultLayoutContent>
  </DefaultLayout>
);

export default PageNotFoundPage;

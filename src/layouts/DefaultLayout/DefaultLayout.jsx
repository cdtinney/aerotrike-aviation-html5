import React from 'react';
import PropTypes from 'prop-types';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function DefaultLayout({
  children,
}) {
  return (
    <div>
      <Navbar />
      {children}
      <hr />
      <Footer />
    </div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node,
};

DefaultLayout.defaultProps = {
  children: null,
};

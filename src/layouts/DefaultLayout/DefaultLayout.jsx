import React from 'react';
import PropTypes from 'prop-types';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function DefaultLayout({
  className,
  children,
}) {
  return (
    <div className={className}>
      <Navbar />
      {children}
      <hr />
      <Footer />
    </div>
  );
}

DefaultLayout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

DefaultLayout.defaultProps = {
  className: undefined,
  children: null,
};

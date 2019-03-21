import React from 'react';
import PropTypes from 'prop-types';

export default function DefaultLayoutContent({
  children,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10 col-md-offset-1">
          {children}
        </div>
      </div>
    </div>
  );
}

DefaultLayoutContent.propTypes = {
  children: PropTypes.node,
};

DefaultLayoutContent.defaultProps = {
  children: null,
};

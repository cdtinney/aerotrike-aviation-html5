import React from 'react';

import FacebookLogo from '../../images/FacebookLogo.png';

function Social() {
  return (
    <React.Fragment>
      <h5>SOCIAL</h5>
      <a
        href="https://www.facebook.com/www.aerotrikeaviation.net"
        style={{
          display: 'block',
        }}
      >
        <img alt="Facebook" src={FacebookLogo} />
      </a>
    </React.Fragment>
  );
}

export default Social;

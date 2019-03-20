import React from 'react';

import './styles/Jumbotron.css';

function Jumbotron() {
  return (
    <div id="home__jumbotron" className="jumbotron">
      <div className="container">
        <div className="row">
          <div className="jumbotron__content col-md-7 col-md-offset-1">
            <h1><span>Ultralight flight training at its best.</span></h1>
            <p>Located in Peterborough, Ontario. Since 1999.</p>
            <p>
              <a className="btn btn-primary btn-lg" href="about" role="button">
                Learn more
              </a>
            </p>
          </div>
          <div className="jumbotron__image-container">
            <img className="jumbotron__image" alt="jumbotron" src="img/jumbotron_image.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;

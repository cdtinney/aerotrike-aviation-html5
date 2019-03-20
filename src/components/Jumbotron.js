import React from 'react';
import { Link } from 'gatsby';

import JumbotronImage from '../images/JumbotronImage.png';
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
              <Link className="btn btn-primary btn-lg" to="/about">
                Learn more &raquo;
              </Link>
            </p>
          </div>
          <div className="jumbotron__image-container">
            <img className="jumbotron__image" alt="jumbotron" src={JumbotronImage} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;

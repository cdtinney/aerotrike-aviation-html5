import React from 'react';

import DefaultLayout from '../layouts/DefaultLayout';
import SEO from '../components/SEO';

import './styles/sales.css';

const SalesPage = () => (
  <DefaultLayout>
    <SEO title="Sales" />
    <div className="container">
      <div className="row">
        <div className="col-md-10 col-md-offset-1">
          <h3>New</h3>
          <p>
            Aerotrike Aviation is an authorized agent/distributor for the following manufacturers:
          </p>
          <div className="row">
            <div className="col-md-6 col-sm-3 col-xs-6 authorized-manufacturer">
              <a href="http://www.airborne.com.au/">
                <img className="logo" src="img/manufacturers/airborne.jpg" alt="Airborne Australia" />
              </a>
            </div>

            <div className="col-md-6 col-sm-3 col-xs-6 authorized-manufacturer">
              <a href="http://www.northwing.com">
                <img className="logo" src="img/manufacturers/north-wing.jpg" alt="North Wing" />
              </a>
            </div>

            <div className="col-md-6 col-sm-3 col-xs-6 authorized-manufacturer">
              <a href="http://www.lynx-avionics.com">
                <img className="logo" src="img/manufacturers/lynx-avionics.png" alt="Lynx Avionics" />
              </a>
            </div>

            <div className="col-md-6 col-sm-3 col-xs-6 authorized-manufacturer">
              <a href="http://www.microavionics.co.uk">
                <img className="logo" src="img/manufacturers/micro-avionics.jpg" alt="MicroAvionics" />
              </a>
            </div>
          </div>

          <h3>Used</h3>
          <div className="panel panel-default used-sale">
            <div className="panel-heading">
              <h3 className="panel-title">2003 Airborne Edge</h3>
              <span className="price">$17,000 CAD</span>
            </div>
            <div className="panel-body">
              <img alt="airborne edge" className="thumbnail" src="img/used-sales/2003_airborne_edge.jpg" />
              <span className="information">
                <ul>
                  <li>
                    <i>Rotax 582 </i>
                    (61 hours TT)
                  </li>
                  <li>
                    2002
                    <i>Wizard </i>
                    wing (98 hours)
                  </li>
                  <li>Instructors package - dual steering, training bars, and rear throttle</li>
                  <li>
                    <i>Comtronics </i>
                    helmets and headsets
                  </li>
                </ul>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
);

export default SalesPage;

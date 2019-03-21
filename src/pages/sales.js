import React from 'react';

import DefaultLayout from '../layouts/DefaultLayout';
import DefaultLayoutContent from '../layouts/DefaultLayoutContent';
import SEO from '../components/SEO';

import Airborne from '../images/manufacturers/airborne.jpg';
import NorthWing from '../images/manufacturers/north-wing.jpg';
import LynxAvionics from '../images/manufacturers/lynx-avionics.png';
import MicroAvionics from '../images/manufacturers/micro-avionics.jpg';

import AirborneEdge from '../images/used-sales/2003_airborne_edge.jpg';

import './styles/sales.css';

const SalesPage = () => (
  <DefaultLayout>
    <SEO title="Sales" />
    <DefaultLayoutContent>
      <h3>New</h3>
      <p>
        Aerotrike Aviation is an authorized agent/distributor for the following manufacturers:
      </p>
      <div className="row">
        <div className="col-md-6 col-sm-3 col-xs-6 authorized-manufacturer">
          <a href="http://www.airborne.com.au/">
            <img className="logo" src={Airborne} alt="Airborne Australia" />
          </a>
        </div>

        <div className="col-md-6 col-sm-3 col-xs-6 authorized-manufacturer">
          <a href="http://www.northwing.com">
            <img className="logo" src={NorthWing} alt="North Wing" />
          </a>
        </div>

        <div className="col-md-6 col-sm-3 col-xs-6 authorized-manufacturer">
          <a href="http://www.lynx-avionics.com">
            <img className="logo" src={LynxAvionics} alt="Lynx Avionics" />
          </a>
        </div>

        <div className="col-md-6 col-sm-3 col-xs-6 authorized-manufacturer">
          <a href="http://www.microavionics.co.uk">
            <img className="logo" src={MicroAvionics} alt="MicroAvionics" />
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
          <img alt="airborne edge" className="thumbnail" src={AirborneEdge} />
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
    </DefaultLayoutContent>
  </DefaultLayout>
);

export default SalesPage;

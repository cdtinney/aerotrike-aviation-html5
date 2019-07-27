import React from 'react';

import DefaultLayout from '../layouts/DefaultLayout';
import DefaultLayoutContent from '../layouts/DefaultLayoutContent';
import SEO from '../components/SEO';

import Airborne from '../images/manufacturers/airborne.jpg';
import NorthWing from '../images/manufacturers/north-wing.jpg';
import LynxAvionics from '../images/manufacturers/lynx-avionics.png';
import MicroAvionics from '../images/manufacturers/micro-avionics.jpg';

import AirborneEdge from '../images/used-sales/2003_airborne_edge.jpg';
import Airborne9121 from '../images/used-sales/2004_airborne_912xt/1.jpg';
import AirborneRedback1 from '../images/used-sales/airborne_redback/1.jpg';
import AirborneTLite1 from '../images/used-sales/airborne_t-lite/1.jpg';

import './styles/sales.css';

const SalesPage = () => (
  <DefaultLayout>
    <SEO title="Sales" />
    <DefaultLayoutContent>
      <h3>Used</h3>
      <div className="panel panel-default used-sale">
        <div className="panel-heading">
          <h3 className="panel-title">2004 Airborne 912XT</h3>
          <span className="price">$25,000 CAD</span>
        </div>
        <div className="panel-body">
          <img alt="airborne edge" className="thumbnail" src={Airborne9121} />
          <span className="information">
            <ul>
              <li>Engine - Rotax 912 (885 hours)</li>
              <li>Wing - 2007 Streak 3 (665 hours)</li>
              <li>2004 Parachute</li>
              <li>Fully setup for training</li>
              <li>Custom-made foot steering - height-adjustable and removable</li>
              <li>Pick-up only</li>
            </ul>
          </span>
        </div>
      </div>
      <div className="panel panel-default used-sale">
        <div className="panel-heading">
          <h3 className="panel-title">Airborne Redback</h3>
          <span className="price">$11,900 CAD</span>
        </div>
        <div className="panel-body">
          <img alt="airborne edge" className="thumbnail" src={AirborneRedback1} />
          <span className="information">
            <ul>
              <li>Engine - Rotax 503 (300 hours) - 2-stroke</li>
              <li>Wing - Aeros Stream</li>
              <li>New flying wires, extra base tube</li>
              <li>2017 BRS Repack</li>
              <li>Comms gear with two intercom helmets</li>
              <li>Training bars</li>
            </ul>
          </span>
        </div>
      </div>
      <div className="panel panel-default used-sale">
        <div className="panel-heading">
          <h3 className="panel-title">2012 Airborne T-Lite</h3>
          <span className="price">$12,000 CAD</span>
        </div>
        <div className="panel-body">
          <img alt="airborne edge" className="thumbnail" src={AirborneTLite1} />
          <span className="information">
            <ul>
              <li>Engine - Bailey (55 hours) - 4-stroke</li>
              <li>Wing - Core</li>
              <li>Recovery parachute</li>
            </ul>
          </span>
        </div>
      </div>
      <div className="panel panel-default used-sale">
        <div className="panel-heading">
          <h3 className="panel-title">2000 Sabre Folding Style</h3>
          <span className="price">$5,000 CAD</span>
        </div>
        <div className="panel-body">
          <span className="information">
            <ul>
              <li>Engine - Rotax 447 (35-40 hours TT)</li>
              <li>Wing - SS Wing 16m (2nd Generation)</li>
              <li>Ski Package</li>
              <li>Stored indoors</li>
            </ul>
          </span>
        </div>
      </div>
      <div className="panel panel-default used-sale">
        <div className="panel-heading">
          <h3 className="panel-title">2003 Airborne Edge</h3>
          <span className="price">$17,000 CAD</span>
        </div>
        <div className="panel-body">
          <img alt="airborne edge" className="thumbnail" src={AirborneEdge} />
          <span className="information">
            <ul>
              <li>Engine - Rotax 582 (61 hours TT)</li>
              <li>Wing - 2002 Wizard (98 hours)</li>
              <li>Instructor Package - dual steering, training bars, and rear throttle</li>
              <li>Comtronics helmet and headsets</li>
            </ul>
          </span>
        </div>
      </div>

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
    </DefaultLayoutContent>
  </DefaultLayout>
);

export default SalesPage;

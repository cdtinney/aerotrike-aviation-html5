import React from 'react';

import DefaultLayout from '../layouts/DefaultLayout';
import SEO from '../components/SEO';

const TrainingPage = () => (
  <DefaultLayout>
    <SEO title="Training" />
    <div className="container">
      <div className="row">
        <div className="col-md-10 col-md-offset-1">
          <h3>Prerequisites</h3>

          <p>So, you want to learn to fly? All you truly need is...</p>
          <ul className="body-font">
            <li>A strong desire to learn,</li>
            <li>Good health, and</li>
            <li>A sense of adventure</li>
          </ul>

          <h3>Costs</h3>

          <p>All prices exclude applicable taxes.</p>

          <table className="table table-bordered table-striped">
            <tbody>
              <tr>
                <th>Service</th>
                <th>Cost</th>
              </tr>
              <tr>
                <td>Lessons</td>
                <td>$145 / hour</td>
              </tr>
              <tr>
                <td>5 hours of lessons</td>
                <td>$700 (save $25!)</td>
              </tr>
              <tr>
                <td>Set-up, inspection, and test flight with student-owned aircraft</td>
                <td>$300</td>
              </tr>
              <tr>
                <td>Flight Test for Instructors Rating</td>
                <td>$500</td>
              </tr>
            </tbody>
          </table>

          <p>{'Solo flight requirements will be completed with the student\'s aircraft.'}</p>

          <br />
          <div className="panel panel-danger">
            <div className="panel-heading">
              <div className="panel-title">
                Important Information
              </div>
            </div>
            <div className="panel-body">
              No passengers are allowed on basic ultralights (trikes) unless the pilot has an
              instructor rating or the passenger is themselves a licensed pilot.
              <br />
              <br />
              To ensure each student gets their reserved flight lesson time, always arrive
              <b> at least 30 minutes prior </b>
              to your scheduled flight time.
              <br />
              <br />
              All flights will be
              <b> confirmed by phone </b>
              the evening before a flight.
              <br />
              <br />
              It is the students responsibility to notify Aerotrike Aviation of a cancellation
              a minimum of 12 hours before the pre-arranged flight time.
              Failure to do so will result in a
              <b> $50.00 cancellation fee.</b>
            </div>
          </div>

          <h3>Remote Training</h3>

          <p>
            I will travel to your airfield - out of town, out of province or out of country.
            There is an expectation that your aircraft is in excellent working order and
            ready for flight.
          </p>

          <h4>Costs</h4>

          <table className="table table-bordered table-striped">
            <tbody>
              <tr>
                <td>Training in your aircraft (at your field)</td>
                <td>$80 / hour</td>
              </tr>
              <tr>
                <td>Preflight inspections and repairs (at your field)</td>
                <td>$25 / hour</td>
              </tr>
              <tr>
                <td>Downtime/day fee (not flying due to weather or aircraft problems</td>
                <td>$100</td>
              </tr>
              <tr>
                <td>Accomodations (home or motel)</td>
                <td>{'Student\'s expense'}</td>
              </tr>
            </tbody>
          </table>

          <h4>Travel Costs</h4>
          <table className="table table-bordered table-striped">
            <tbody>
              <tr>
                <td>Flight to your field</td>
                <td>{'Student\'s expense'}</td>
              </tr>
              <tr>
                <td>Parking</td>
                <td>$80 / week</td>
              </tr>
              <tr>
                <td>Travel to/from Pearson</td>
                <td>$25 / direction</td>
              </tr>
            </tbody>
          </table>

          <div className="panel panel-danger">
            <div className="panel-heading">
              <div className="panel-title">
                Important Information
              </div>
            </div>
            <div className="panel-body">
              There are obviously other dealers and private parties supplying new and
              used aircraft to the market. With respect to your safety and mine, I cannot promise
              I will test fly, service or train you in an aircraft that is unfamiliar, unsafe or
              simply not equipped for effective training instruction. Safety is foremost.
              If the aircraft or the flying environment is not safe, I will not fly.
              The student is responsible for any costs I have incurred traveling to and
              from your field.
            </div>
          </div>

          <h3>Ground School</h3>

          <p>
            A minimum of 20 hours ground school (conducted by Aerotrike Aviation) is required by
            <a href="http://www.tc.gc.ca/"> Transport Canada.</a>
          </p>

          <h4>Costs</h4>
          <table className="table table-bordered table-striped">
            <tbody>
              <tr>
                <td>Course</td>
                <td>$300</td>
              </tr>
              <tr>
                <td>Books/course materials</td>
                <td>Approx. $300</td>
              </tr>
            </tbody>
          </table>

          <h3>Steps to Licensing</h3>

          <p>
            The requirements listed here are meant as a
            <b> general guide. </b>
            Information about pilot licensing is available in the
            CARS Part 4 (Canadian Aviation Regulations).
            All requirements need to be met within
            <b> 24 months following date of medical.</b>
          </p>

          <ul>
            <li>
              Self-declared
              <a href="http://www.tc.gc.ca/wwwdocs/forms/26-0297_0712-06_bo.pdf">
                &nbsp;medical form&nbsp;
              </a>
              submitted by student (no fee)
            </li>
            <li>
              Ground School (20 hours) and Radio License -
              <a href="http://www.ic.gc.ca/eic/site/smt-gst.nsf/eng/sf01397.html"> study guide</a>
            </li>
            <li>Flight time minimum of 5 hours required prior to writing Transport Canada exam</li>
            <li>
              Pre-solo exam administered by Aerotrike Aviation (60 questions,
              90% passing grade required)
            </li>
            <li>Student Pilot Permit issued by Aerotrike Aviation (no fee)</li>
            <li>
              Skill experience completed (approximately 20-25 hours of dual flight instruction)
            </li>
            <li>
              Solo flight, in students own aircraft,
              requires radio operator certificate and above conditions
            </li>
            <li>
              Write Ultralight Pilot Permit at
              <a href="http://www.tc.gc.ca/eng/regions.htm"> Transport Canada </a>
              or designate within 60 days of completing ground school and after
              completing 5 hours flight time -
              <a href="http://www.tc.gc.ca/eng/civilaviation/publications/tp14454-menu-2790.htm"> Practice Exam</a>
            </li>
            <li>
              <b>Minimum </b>
              10 hours flight time, including 2 hours solo and 30
              takeoffs/landings (10 of which must be solo).
              Flight training times specified are minimums required
              by Transport Canada. Realistically,
              <b> 20 to 25 hours </b>
              will be required by Aerotrike Aviation
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr />
  </DefaultLayout>
);

export default TrainingPage;

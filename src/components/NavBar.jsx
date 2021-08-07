import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChurch, faEnvelope, faHotel } from '@fortawesome/free-solid-svg-icons';

import Paths from '../helpers/paths';

const NavBar = () => (
  <div className="Navbar">
    <div className="navbar-expand-lg">
        <div className="collapse navbar-collapse">
          <nav className="navbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <FontAwesomeIcon icon={faHome} size="lg"/>
                <Link to={Paths.HOME}>Home</Link>
              </li>
              <li className="nav-item">
                <FontAwesomeIcon icon={faChurch} size="lg" />
                <Link to={Paths.VENUE}>Venue</Link>
              </li>
              <li className="nav-item">
                <FontAwesomeIcon icon={faHotel} size="lg" />
                <Link to={Paths.ACCOMODATION}>Accomodation</Link>
              </li>
              <li className="nav-item">
                <FontAwesomeIcon icon={faEnvelope} size="lg" />
                <Link to={Paths.RSVP}>RSVP</Link>
              </li>
            </ul>
          </nav>
        </div>
    </div>
  </div>
    
)

export default NavBar;
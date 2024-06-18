import React from 'react';
import { Link } from 'react-router-dom';
import NavNotice from './NavNotice';
import NavMessage from './NavMessage';
import NavProfile from './NavProfile';

function Nav() {
  return (
    <nav className="header-nav ms-auto">
        <ul className="d-flex align-items-center">
            <li className="nav-item d-block d-lg-none">
              <Link className="nav-link nav-icon search-bar-toggle " to="#">
                <i className="bi bi-search" />
              </Link>
            </li>
            <NavNotice/>
            <NavMessage/>
            <NavProfile/>
        </ul>
    </nav>
  )
}

export default Nav
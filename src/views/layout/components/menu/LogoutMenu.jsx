import React from 'react';
import { Link } from 'react-router-dom';

function LogoutMenu() {
  return (
    <li className="nav-item">
        <Link className="nav-link collapsed" to="users-profile.html">
          <i className="bi bi-box-arrow-left" />
          <span>Logout</span>
        </Link>
    </li>
  )
}

export default LogoutMenu
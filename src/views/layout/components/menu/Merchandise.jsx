import React from 'react';
import { Link } from 'react-router-dom';


function Merchandise() {
  return (
    <li className="nav-item">
        <Link className="nav-link collapsed" data-bs-target="#mer-nav" data-bs-toggle="collapse" to="#">
        <i className="bi bi-file-earmark-text-fill" /><span>Merchandise</span><i className="bi bi-chevron-down ms-auto" />
        </Link>
        <ul id="mer-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
        <li>
            <Link to="/styles">
            <i className="bi bi-arrow-right-short"/><span>Style</span>
            </Link>
        </li>
        <li>
            <Link to="/styles/create">
            <i className="bi bi-arrow-right-short" /><span>Style Category</span>
            </Link>
        </li>
        <li>
            <Link to="/system/user">
            <i className="bi bi-arrow-right-short" /><span>Style Attachment</span>
            </Link>
        </li>
        </ul>
    </li>
  )
}

export default Merchandise
import React from 'react'
import { Link } from 'react-router-dom'

function SystemMenu() {
  return (
    <li className="nav-item">
        <Link className="nav-link collapsed" data-bs-target="#system-nav" data-bs-toggle="collapse" to="#">
          <i className="bi bi-gear-fill" /><span>System</span><i className="bi bi-chevron-down ms-auto" />
        </Link>
        <ul id="system-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <Link to="components-alerts.html">
              <i className="bi bi-circle" /><span>Manage Role</span>
            </Link>
          </li>
          <li>
            <Link to="/system/user">
              <i className="bi bi-circle" /><span>Manage User</span>
            </Link>
          </li>
        </ul>
    </li>
  )
}

export default SystemMenu
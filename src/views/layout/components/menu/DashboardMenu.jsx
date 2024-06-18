import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function DashboardMenu() {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    // current location matches the dashboard page
    if (location.pathname === '/home') {
      // If it matches, set collapsed to false to remove the collapsed class
      setCollapsed(false);
    } else {
      // If not, set collapsed to true to add the collapsed class
      setCollapsed(true);
    }
  }, [location.pathname]);

  return (
    <li className="nav-item">
        <Link className={`nav-link ${collapsed ? 'collapsed' : ''}`} to="/home">
          <i className="bi bi-grid" />
          <span>Dashboard</span>
        </Link>
    </li>
  )
}

export default DashboardMenu
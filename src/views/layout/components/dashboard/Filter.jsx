import React from 'react'
import { Link } from 'react-router-dom';
function Filter({filterChange}) {
  return (
    <div className="filter">
        <Link className="icon" to="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots" /></Link>
        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
            <li className="dropdown-header text-start">
                <h6>Filter</h6>
            </li>
            <li><Link className="dropdown-item" onClick={()=>filterChange("Today")}>Today</Link></li>
            <li><Link className="dropdown-item" onClick={()=>filterChange("This Month")}>This Month</Link></li>
            <li><Link className="dropdown-item" onClick={()=>filterChange("This Year")}>This Year</Link></li>
        </ul>
    </div>
  )
}

export default Filter
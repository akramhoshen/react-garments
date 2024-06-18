import React from 'react'
import { Link } from 'react-router-dom'

function OrderMenu() {
  return (
    <li className="nav-item">
        <Link className="nav-link collapsed" data-bs-target="#order-nav" data-bs-toggle="collapse" to="#">
          <i className="bi bi-cart-check-fill" /><span>Buyer's Order</span><i className="bi bi-chevron-down ms-auto" />
        </Link>
        <ul id="order-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <Link to="/orders/create">
              <i className="bi bi-arrow-right-short" /><span>Create Order</span>
            </Link>
          </li>
          <li>
            <Link to="/orders">
              <i className="bi bi-arrow-right-short" /><span>Manage Order</span>
            </Link>
          </li>
        </ul>
    </li>
  )
}

export default OrderMenu
import React from 'react';
import { Link } from 'react-router-dom';

function PageTitle({page}) {
  return (
    <div className="pagetitle">
      <h1>{page}</h1>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">
                <i class="bi bi-house-door"></i>
            </Link>
          </li>
          <li className="breadcrumb-item active">{page}</li>
        </ol>
      </nav>
    </div>
  )
}

export default PageTitle
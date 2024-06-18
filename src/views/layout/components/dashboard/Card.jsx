import React, { useState } from 'react';
import Filter from './Filter';

function Card({cssClass,title,icon,valueCount,percentCount,subTitle,textColor}) {
    const [filter, setFilter] = useState('Today');
    const handleFilterChange = filter =>{
        setFilter(filter);
    }

  return (
    <div className={`card info-card ${cssClass}`}>
      <Filter filterChange={handleFilterChange} />
      <div className="card-body">
        <h5 className="card-title">
          {title} <span>| {filter}</span>
        </h5>
        <div className="d-flex align-items-center">
          <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
            <i className={`bi ${icon}`} />
          </div>
          <div className="ps-3">
            <h6>{valueCount}</h6>
            {subTitle === "increase" ? (
              <span className="text-success small pt-1 fw-bold">
                {percentCount}
              </span>
            ) : (
              <span className="text-danger small pt-1 fw-bold">
                {percentCount}
              </span>
            )}
            <span className="text-muted small pt-2 ps-1">{subTitle}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card
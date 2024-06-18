import React, { useState } from 'react';
import Filter from './Filter';
import BudgetChart from './BudgetChart';

function BudgetReports() {
    const [filter, setFilter] = useState('Today');
    const handleFilterChange = filter =>{
        setFilter(filter);
    }
  return (
    <div className="card">
        <Filter filterChange={handleFilterChange} /> 
        <div className="card-body">
            <h5 className="card-title">
                Budget Report <span>/{filter}</span>
            </h5>
            <BudgetChart/>
        </div>
    </div>
  )
}

export default BudgetReports
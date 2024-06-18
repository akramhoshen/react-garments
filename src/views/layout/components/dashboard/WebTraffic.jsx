import React, {useState} from 'react'
import Filter from './Filter';
import WebTrafficChart from './WebTrafficChart';

function WebTraffic() {
    const [filter, setFilter] = useState('Today');
    const handleFilterChange = filter =>{
        setFilter(filter);
    }
  return (
    <div className="card">
        <Filter filterChange={handleFilterChange} /> 
        <div className="card-body">
            <h5 className="card-title">
                Website Traffic <span>/{filter}</span>
            </h5>
            <WebTrafficChart/>
        </div>
    </div>
  )
}

export default WebTraffic;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Filter from './Filter';

function TopSelling() {
    const [filter, setFilter] = useState('Today');
    const handleFilterChange = filter =>{
        setFilter(filter);
    }
  return (
    <div className="card top-selling overflow-auto">
                <Filter filterChange={handleFilterChange} />
                <div className="card-body pb-0">
                  <h5 className="card-title">Top Selling <span>| {filter}</span></h5>
                  <table className="table table-borderless">
                    <thead>
                      <tr>
                        <th scope="col">Preview</th>
                        <th scope="col">Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Sold</th>
                        <th scope="col">Revenue</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row"><Link to="#"><img src="assets/img/product-1.jpg" alt='' /></Link></th>
                        <td><Link to="#" className="text-primary fw-bold">Ut inventore ipsa voluptas nulla</Link></td>
                        <td>$64</td>
                        <td className="fw-bold">124</td>
                        <td>$5,828</td>
                      </tr>
                      <tr>
                        <th scope="row"><Link to="#"><img src="assets/img/product-2.jpg" alt='' /></Link></th>
                        <td><Link to="#" className="text-primary fw-bold">Exercitationem similique doloremque</Link></td>
                        <td>$46</td>
                        <td className="fw-bold">98</td>
                        <td>$4,508</td>
                      </tr>
                      <tr>
                        <th scope="row"><Link to="#"><img src="assets/img/product-3.jpg" alt='' /></Link></th>
                        <td><Link to="#" className="text-primary fw-bold">Doloribus nisi exercitationem</Link></td>
                        <td>$59</td>
                        <td className="fw-bold">74</td>
                        <td>$4,366</td>
                      </tr>
                      <tr>
                        <th scope="row"><Link to="#"><img src="assets/img/product-4.jpg" alt='' /></Link></th>
                        <td><Link to="#" className="text-primary fw-bold">Officiis quaerat sint rerum error</Link></td>
                        <td>$32</td>
                        <td className="fw-bold">63</td>
                        <td>$2,016</td>
                      </tr>
                      <tr>
                        <th scope="row"><Link to="#"><img src="assets/img/product-5.jpg" alt='' /></Link></th>
                        <td><Link to="#" className="text-primary fw-bold">Sit unde debitis delectus repellendus</Link></td>
                        <td>$79</td>
                        <td className="fw-bold">41</td>
                        <td>$3,239</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
  )
}

export default TopSelling
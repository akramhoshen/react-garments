import React, { useEffect, useState } from 'react';
import Http from '../../../../model/Http';
import { Link, useParams } from 'react-router-dom';

function ShowStyle(props) {
  const [inputs, setInputs] = useState({});
  const {id} = useParams();

  useEffect(()=>{
    Http.get(`/styles/${id}`).then((res) => {
      setInputs({
        id: res.data.id,
        code: res.data.code,
        style_category_id: res.data.style_category_id,
        description: res.data.description,
      });
    })
  }, [id]);
  

  
  return (
    <div>
      <div className="card" style={{ marginTop: 30,}}>
        <div className="card-header d-flex justify-content-between align-items-center" style={{ backgroundColor: '#c6d9ff' }}>
          <div style={{ fontSize: 21, color: '#012970', fontWeight: 600 }} className="flex-fill">
            Show style
            <nav style={{ BsBreadcrumbDivider: '">"' }} aria-label="breadcrumb">
              <ol className="breadcrumb m-0">
                <li className="breadcrumb-item"><a href="/home">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Show style</li>
              </ol>
            </nav>
          </div>
          <Link className="btn btn-success my-primary-btn" to="/styles">Manage style</Link>
        </div>
        <div className="card-body">
          <table className='table'>
            <tr>
              <th>ID</th>
              <td>{inputs.id}</td>
            </tr>
            <tr>
              <th>Code</th>
              <td>{inputs.code}</td>
            </tr>
            <tr>
              <th>Category</th>
              <td>{inputs.style_category_id}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{inputs.description}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>

  )
}

export default ShowStyle;
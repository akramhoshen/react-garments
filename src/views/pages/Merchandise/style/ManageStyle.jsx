import React, { useEffect, useState } from 'react';
import Http from '../../../../model/Http';
import { Link, useNavigate } from 'react-router-dom';

function ManageStyle() {
  const [styles,setStyles] = useState([]);
  const navigate = useNavigate();

  useEffect (()=>{
    fetchAllData()
  },[]);

  const fetchAllData = ()=>{
    Http.get('/styles').then(res=>{
      setStyles(res.data);
    })
  }

  const handleDelete=(id)=>{
    const isConfirmed = window.confirm('Are you sure you want to delete this?');
    if (isConfirmed) {
      Http.delete('/styles/'+id).then(res=>{       
        fetchAllData();
      });
    }
        
  }

  const handleEdit=(id)=>{
      navigate('/styles/'+id+'/edit');
  }

  const handleView=(id)=>{
    navigate('/styles/'+id);
  }

  return (
    <div>
      <div className="card" style={{ marginTop: 30,}}>
        <div className="card-header d-flex justify-content-between align-items-center" style={{ backgroundColor: '#c6d9ff' }}>
          <div style={{ fontSize: 21, color: '#012970', fontWeight: 600 }} className="flex-fill">
            Manage style
            <nav style={{ BsBreadcrumbDivider: '">"' }} aria-label="breadcrumb">
              <ol className="breadcrumb m-0">
                <li className="breadcrumb-item"><a href="/home">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Manage style</li>
              </ol>
            </nav>
          </div>
          <Link className="btn btn-success my-primary-btn" to="/styles/create">Create style</Link>
        </div>
        <div className="card-body">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Code</th>
                <th>Category</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {styles.map((style) => (
                <tr key={style.id}>
                  <td>{style.id}</td>
                  <td>{style.code}</td>
                  <td>{style.category}</td>
                  <td>{style.description}</td>
                  <td>
                    <div className="btn-group" role="group">
                      <button style={{background: '#0fb9b1', color: '#fff'}} className="btn" onClick={() =>handleView(style.id)}><i className="bi bi-eye-fill" /></button>
                      <button style={{background: '#3867d6', color: '#fff'}} className="btn" onClick={() =>handleEdit(style.id)}><i className="bi bi-pencil-square" /></button>
                      <button style={{ background: '#eb3b5a', color: '#fff' }} className="btn rounded-start-0" onClick={() =>handleDelete(style.id)}><i className="bi bi-trash-fill" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* <div className="card-footer">
          <div className="row">
            <div className="col-sm-12">
              
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default ManageStyle
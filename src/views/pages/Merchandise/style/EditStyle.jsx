import React, { useEffect, useState } from 'react';
import Http from '../../../../model/Http';
import { Link, useNavigate, useParams } from 'react-router-dom';

function EditStyle(props) {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const {id} = useParams();

  useEffect(()=>{
      Http.get(`/styles/${id}`).then((res) => {
        setInputs({
          code: res.data.code,
          style_category_id: res.data.style_category_id,
          description: res.data.description,
        });
      })
  },[id]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((prevInputs) => ({
      ...prevInputs,[name]: value,
    }));
  }

  
  const submitForm = () => {
    Http.put(`/styles/${id}`,inputs).then((res)=>{
      navigate('/styles')
      console.log(res);
    }).catch((error) => {
      console.error('Error creating style:', error);
    });
  }
  
  return (
    <div>
      <div className="card" style={{ marginTop: 30,}}>
        <div className="card-header d-flex justify-content-between align-items-center" style={{ backgroundColor: '#c6d9ff' }}>
          <div style={{ fontSize: 21, color: '#012970', fontWeight: 600 }} className="flex-fill">
            Edit style
            <nav style={{ BsBreadcrumbDivider: '">"' }} aria-label="breadcrumb">
              <ol className="breadcrumb m-0">
                <li className="breadcrumb-item"><a href="/home">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Edit style</li>
              </ol>
            </nav>
          </div>
          <Link className="btn btn-success my-primary-btn" to="/styles">Manage style</Link>
        </div>
        <div className="card-body">
          <div className="row mb-3">
            <label htmlFor="code" className="col-sm-2 col-form-label">Code</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" name="code" id="code" value={inputs.code || ''} onChange={handleChange} placeholder="" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" name="description" id="description" value={inputs.description || ''} onChange={handleChange} placeholder="" />
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Style Category</label>
            <div className="col-sm-10">
              <select name="style_category_id" className="form-control" style={{ width: '100%' }} value={inputs.style_category_id || ''} onChange={handleChange}>
                <option value={1}>Shirt</option>
                <option value={2}>Dress</option>
                <option value={3}>Trouser</option>
                <option value={4}>Skirts</option>
                <option value={6}>Pant</option>
              </select>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <div className="row">
            <div className="col-sm-12">
              <button type="button" onClick={submitForm} className="btn btn-info">Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default EditStyle
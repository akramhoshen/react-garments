import React, { useEffect, useState } from 'react';
import Http from '../../../model/Http';
import { Link, useNavigate } from 'react-router-dom';

function ManageOrder() {
  const [orders,setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect (()=>{
    fetchAllData()
  },[]);

  const fetchAllData = ()=>{
    Http.get('/orders').then(res=>{
      setOrders(res.data);
    })
  }

  const handleDelete=(id)=>{
    const isConfirmed = window.confirm('Are you sure you want to delete this?');
    if (isConfirmed) {
      Http.delete('/orders/'+id).then(res=>{       
        fetchAllData();
      });
    }
        
  }

  const handleEdit=(id)=>{
      navigate('/orders/'+id+'/edit');
  }

  const handleView=(id)=>{
    navigate('/orders/'+id);
  }

  return (
    <div>
      <div className="card" style={{ marginTop: 30,}}>
        <div className="card-header d-flex justify-content-between align-items-center" style={{ backgroundColor: '#c6d9ff' }}>
          <div style={{ fontSize: 21, color: '#012970', fontWeight: 600 }} className="flex-fill">
            Manage Order
            <nav style={{ BsBreadcrumbDivider: '">"' }} aria-label="breadcrumb">
              <ol className="breadcrumb m-0">
                <li className="breadcrumb-item"><a href="/home">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Manage Order</li>
              </ol>
            </nav>
          </div>
          <Link className="btn btn-success my-primary-btn" to="/orders/create">Create Order</Link>
        </div>
        <div className="card-body">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>style_id</th>
                <th>buyer_id</th>
                <th>order_date</th>
                <th>delivery_date</th>
                <th>shipping_address</th>
                <th>status_id</th>
                <th>order_total</th>
                <th>paid_amount</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.style_id}</td>
                  <td>{order.buyer_id}</td>
                  <td>{order.order_date}</td>
                  <td>{order.delivery_date}</td>
                  <td>{order.shipping_address}</td>
                  <td>{order.status_id}</td>
                  <td>{order.order_total}</td>
                  <td>{order.paid_amount}</td>
                  <td>
                    <div className="btn-group" role="group">
                      <button style={{background: '#0fb9b1', color: '#fff'}} className="btn" onClick={() =>handleView(order.id)}><i className="bi bi-eye-fill" /></button>
                      <button style={{background: '#3867d6', color: '#fff'}} className="btn" onClick={() =>handleEdit(order.id)}><i className="bi bi-pencil-square" /></button>
                      <button style={{ background: '#eb3b5a', color: '#fff' }} className="btn rounded-start-0" onClick={() =>handleDelete(order.id)}><i className="bi bi-trash-fill" /></button>
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

export default ManageOrder;
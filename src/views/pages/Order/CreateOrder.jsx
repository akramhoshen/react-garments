import React, { useState, useEffect } from 'react';
import Http from '../../../model/Http';

function CreateOrder() {

  // Order
  const [remark, setRemark] = useState('');
  const [styleId, setStyleId] = useState('');
  const [buyerId, setBuyerId] = useState('');
  const [orderDate, setOrderDate] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [shippingAddress, setShippingAddress] = useState('');
  const [statusId, setStatusId] = useState('');

  //For Dropdown
  const [sizes, setSizes] = useState([]);
  const [styles, setStyles] = useState([]);
  const [buyers, setBuyers] = useState([]);
  const [status, setStatus] = useState([]);

  // Order Details
  const [items, setItems] = useState([]);

  // Cart
  const [price, setPrice] = useState(0);
  const [qty, setQty] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [size, setSize] = useState(0);

  // Payment
  const [paidAmount, setPaidAmount] = useState(0);
  const [dueAmount, setDueAmount] = useState(0);

  useEffect(()=>{

    //list of Sizes
    Http.get('/sizes').then(res => {
      // console.log(res.data);
      setSizes(res.data);
    })
  
    //list of Styles
    Http.get('/styles').then(res => {
      // console.log(res.data);
      setStyles(res.data);
    })
    
    //list of Buyers
    Http.get('/buyers').then(res => {
      // console.log(res.data);
      setBuyers(res.data);
    })
  
    //list of status
    Http.get('/status').then(res => {
      // console.log(res.data);
      setStatus(res.data);
    })

  },[]);
  
  function handleSize(p) {
    setQty(1);
    setPrice(p.price)
    setSize(p);
    // priceRef.current.focus();
}

function Summary() {

  let total = 0;
  items.forEach(item => {
      total += item.price * item.qty - item.discount;
  });

  return total;
}

  function addToCart() {

    if (qty === 0) setQty(1);

    setItems(obj => [...obj, { size_id: size.id, name: size.name, price: price, qty: qty, discount: discount }])

}

function removeLast() {
    setItems(items.slice(0, -1));

}

function handlePaidAmountChange(event) {
  const paid = parseFloat(event.target.value);
  setPaidAmount(paid);
  const total = Summary();
  const tax = 15;
  const tax_amount = total * (tax / 100);
  const netTotal = total + tax_amount;
  const newDueAmount = netTotal - paid;
  setDueAmount(newDueAmount >= 0 ? newDueAmount : 0);
}

const total = Summary();
const tax = 15;
const tax_amount = total * (tax / 100);
// const shipping = 70;
const nettotal = total + tax_amount;


const handleOrderSubmit = async () => {
  const orderData = {
    style_id: styleId,
    buyer_id: buyerId,
    order_date: orderDate,
    delivery_date: deliveryDate,
    shipping_address: shippingAddress,
    status_id: statusId,
    paid_amount: paidAmount,
    remark: remark,
    discount: discount,
    vat: tax_amount,
    order_total: nettotal,
    sizes: items,
  };

  try {
    Http.post('/orders',orderData).then((res)=>{
      console.log(res);
    })
    // console.log('Order data:', orderData);
    setItems([]);
  } catch (error) {
    console.error('Error saving order:', error);
  }
};

  return (
    <div className="card">
      <div className="card-header bg-light">
        <div className="w-100 d-flex justify-content-between align-items-end">
          <h4 className="color-primary">Create Order</h4>
          <a href="/orders" className="btn btn-lg btn-primary rounded">Manage Order</a>
        </div>
      </div>

      <div className="card-body">
        <div className="row">
          <div className="col-sm-6">
            <div className="mb-2">
              <label>Style</label>
              <div className="">
                <select onChange={(e) => { setStyleId(e.target.value) }} name="cmbStyleId" id="cmbStyleId" className="form-control">
                  {styles.map((style) => (
                    <option key={style.id} value={style.id}>{style.code}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mb-2">
              <label>Buyer</label>
              <div className="">
                <select onChange={(e) => { setBuyerId(e.target.value) }} name="cmbBuyerId" id="cmbBuyerId" className="form-control">
                  {buyers.map((buyer) => (
                    <option key={buyer.id} value={buyer.id}>{buyer.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <label>Shipping Address</label>
            <textarea onChange={(e) => { setShippingAddress(e.target.value) }} name="txtShippingAddress" id="txtShippingAddress" className="form-control"></textarea>
          </div>
          <div className="col-sm-6">
            <div className="mb-2">
              <label htmlFor="txtOrderDate" className="">Order Date</label>
              <div className=""><input onChange={(e) => { setOrderDate(new Date(e.target.value).toISOString().split('T')[0]) }} type="date" className="form-control" name="txtOrderDate" id="txtOrderDate" value={orderDate} placeholder="" /></div>
            </div>
            <div className="mb-2">
              <label htmlFor="txtDeliveryDate" className="">Delivery Date</label>
              <div className=""><input onChange={(e) => { setDeliveryDate(new Date(e.target.value).toISOString().split('T')[0]) }} type="date" className="form-control" name="txtDeliveryDate" id="txtDeliveryDate" value={deliveryDate} placeholder="" /></div>
            </div>
            <div className="mb-2">
              <label>Status</label>
              <div className="">
                <select onChange={(e) => { setStatusId(e.target.value) }} name="cmbStatusId" id="cmbStatusId" className="form-control">
                  {status.map((s) => (
                    <option key={s.id} value={s.id}>{s.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="col-12">
            <hr />
            <h6 className="color-primary">Add Item Details</h6>
          </div>
          <div className="col mx-auto">
            <div className="mb-2">
              <label>Size Id</label>
              <div className="">
                <select onChange={(e) => { handleSize(JSON.parse(e.target.value)) }} name="cmbSizeId" id="cmbSizeId" className="form-control">
                  {sizes.map((size) => (
                    <option key={size.id} value={JSON.stringify(size)}>{size.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="col mx-auto">
            <div className="mb-2">
              <label htmlFor="txtQuantity" className="">Quantity</label>
              <div className=""><input type="text" className="form-control" value={qty} onChange={(e) => setQty(e.target.value)} name="txtQuantity" id="txtQuantity" /></div>
            </div>
          </div>
          <div className="col mx-auto">
            <div className="mb-2">
              <label htmlFor="txtPrice" className="">Price</label>
              <div className=""><input type="text" value={price} onChange={(e) => setPrice(e.target.value)} className="form-control" name="txtPrice" id="txtPrice" /></div>
            </div>
          </div>
          <div className="col mx-auto">
            <div className="mb-2">
              <label htmlFor="txtDiscount" className="">Discount</label>
              <div className=""><input type="text" className="form-control" value={discount} onChange={(e) => setDiscount(e.target.value)} name="txtDiscount" id="txtDiscount" /></div>
            </div>
          </div>
          <div className="col-12">
            {/* <input type="button" id="btnAddToCart" name="btnAddToCart" className="btn btn-sm btn-outline-dark" value="Add item" />
            <input type="button" id="clearAll" className="btn btn-sm btn-outline-danger" value="Empty" /> */}
            <div className='btn-group'>
              <button className='btn btn-success' onClick={() => addToCart()} > + </button>
              <button className='btn btn-warning' onClick={() => removeLast()} > - </button>
            </div>
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th>SN</th>
                  <th>Size</th>
                  <th className="">Price</th>
                  <th className="">Quantity</th>
                  <th className="">Discount</th>
                  <th className="">Subtotal</th>
                </tr>
              </thead>
              <tbody id="items">
              {
                    items.map((item, i) => (
                        <tr key={item.size_id}>
                            <td>{i + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.qty}</td>
                            <td>{item.discount}</td>
                            <td>{item.price * item.qty - item.discount}</td>
                        </tr>
                    ))
                }
              </tbody>
            </table>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-5 order-lg-1 order-2">
            <div className="mb-2">
              <label htmlFor="txtRemark" className="">Remarks</label>
              <div className=""><input onChange={(e) => setRemark(e.target.value)} type="text" className="form-control" name="txtRemark" id="txtRemark" value={remark} placeholder="" /></div>
            </div>
          </div>
          <div className="col-lg-6 order-lg-2 order-1 ms-auto">
            <table className="table table-light text-end">
              <tfoot>
                <tr>
                  <th>Subtotal</th>
                  <th><input type="text" className="form-control form-control-sm text-right" name="txtSubtotal" id="txtSubtotal" value={total} /></th>
                </tr>
                <tr className="d-none">
                  <th></th>
                  <th><input type="text" className="form-control form-control-sm text-right" name="discount" id="discount" value="0" /></th>
                </tr>
                <tr>
                  <th>VAT</th>
                  <th><input type="text" className="form-control form-control-sm text-right" name="txtVat" id="txtVat" value={tax_amount} /></th>
                </tr>
                <tr>
                  <th>Paid Amount</th>
                  <th><input type="text" className="form-control form-control-sm text-right" name="txtPaidAmount" id="txtPaidAmount" value={paidAmount} onChange={handlePaidAmountChange}/></th>
                </tr>
                <tr>
                  <th>Due Amount</th>
                  <th><input type="text" className="form-control form-control-sm text-right text-danger" name="txtDueAmount" id="txtDueAmount" value={dueAmount} readOnly /></th>
                </tr>
                <tr>
                  <th>Total</th>
                  <th><input type="text" className="form-control form-control-sm text-right h6" name="txtTotalAmount" id="txtTotalAmount" value={nettotal} /></th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
      <div className="card-footer border-top">
        <button onClick={handleOrderSubmit} type="button" value="Create" name="btnProcessOrder" id="btnProcessOrder" className="btn btn-info">Process Order</button>
      </div>
    </div>
  );
}

export default CreateOrder;
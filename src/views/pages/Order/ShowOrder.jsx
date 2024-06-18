import React, { useEffect, useState } from 'react';
import Http from '../../../model/Http';
import { useParams } from 'react-router-dom';

function ShowOrder() {

  const [inputs, setInputs] = useState({});
  const {id} = useParams();

  useEffect(()=>{
    Http.get(`/orders/${id}`).then((res) => {
      setInputs({
        id: res.data.id,
        style_id: res.data.style_id,
        buyer_id: res.data.buyer_id,
        order_date: res.data.order_date,
        delivery_date: res.data.delivery_date,
        shipping_address: res.data.shipping_address,
        status_id: res.data.status_id,
        order_total: res.data.order_total,
        paid_amount: res.data.paid_amount,
        remark: res.data.remark,
        discount: res.data.discount,
        vat: res.data.vat,
      });
    })
  }, [id]);

  // Function to print the specified area
  const printDiv = (divId) => {
    const printContents = document.getElementById(divId).innerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  }

  return (
    <div className="card">
      <div className="card-header bg-light">
        <div className="w-100 d-flex justify-content-between align-items-end">
          <h4 className="color-primary">Create Order</h4>
          <a href="/orders" className="btn btn-lg btn-primary rounded">Manage Order</a>
        </div>
      </div>

      <div id="printableArea" className="card-body">
        <div className="row">
          <div className="col-sm-6">
            <div className="mb-2">
              <label>Style</label>
              <div className="">
                ST102
              </div>
            </div>
            <div className="mb-2">
              <label>Buyer</label>
              <div className="">
                Janifer
              </div>
            </div>
            <label>Shipping Address</label>
            N/A
          </div>
          <div className="col-sm-6">
            <div className="mb-2">
              <label htmlFor="txtOrderDate" className="">Order Date</label>
              <div className="">2024-04-03</div>
            </div>
            <div className="mb-2">
              <label htmlFor="txtDeliveryDate" className="">Delivery Date</label>
              <div className="">2024-04-03</div>
            </div>
            <div className="mb-2">
              <label>Status</label>
              <div className="">
                Processing
              </div>
            </div>
          </div>
          <div className="col-12">
            <hr />
            <h6 className="color-primary">Item Details</h6>
          </div>
          <div className="col-12">
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
                        <tr>
                            <td>1</td>
                            <td>S</td>
                            <td>100</td>
                            <td>5</td>
                            <td>50</td>
                            <td>450</td>
                        </tr>
              </tbody>
            </table>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-5 order-lg-1 order-2">
            <div className="mb-2">
              <label htmlFor="txtRemark" className="">Remarks</label>
              <div className="">N/A</div>
            </div>
          </div>
          <div className="col-lg-6 order-lg-2 order-1 ms-auto">
            <table className="table table-light text-end">
              <tfoot>
                <tr>
                  <th>Subtotal</th>
                  <th><input type="text" className="form-control form-control-sm text-right" name="txtSubtotal" id="txtSubtotal" value='450'/></th>
                </tr>
                <tr className="d-none">
                  <th></th>
                  <th><input type="text" className="form-control form-control-sm text-right" name="discount" id="discount" value={50} /></th>
                </tr>
                <tr>
                  <th>VAT</th>
                  <th><input type="text" className="form-control form-control-sm text-right" name="txtVat" id="txtVat" value={67.5} /></th>
                </tr>
                <tr>
                  <th>Paid Amount</th>
                  <th><input type="text" className="form-control form-control-sm text-right" name="txtPaidAmount" id="txtPaidAmount" value={500}/></th>
                </tr>
                <tr>
                  <th>Total</th>
                  <th><input type="text" className="form-control form-control-sm text-right h6" name="txtTotalAmount" id="txtTotalAmount" value={517} /></th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
      <div className="card-footer border-top">
        <button onClick={() => printDiv('printableArea')} className="btn btn-primary"><i className="fa fa-print" /> Print</button>
      </div>
    </div>
  );
}

export default ShowOrder;
import React, { useEffect, useState } from "react";
import "./OrderItem.css";
import { useLocation } from "react-router-dom"; 
import { useDispatch, useSelector } from "react-redux";
import { get_user_item_data, post_Order } from "../../Redux/action";

function OrderItem() {
  const location = useLocation();
  const dispatch = useDispatch();
  const [amount,setAmount] = useState(null)
  const { order_buyer, order_product } = useSelector((state) => {
    return state.item;
  });
  const [buy,setBuy] = useState(order_buyer[0] || {})
  const [pro,setPro] = useState( order_product[0] || {})

  const [order,setOrder] = useState({
    buyer_id:buy?._id, buyer_name:buy?.name, buyer_email:buy?.email, buyer_address:"", buyer_mob:"",
    buyer_pin:"",  buyer_state:"", buyer_dist:"", 
    order_amount:null, order_Item:pro?.product_name, order_quantity:"" ,
    productId:pro?._id, product_price:pro?.product_price,
     order_id:"" , order_mode:"Ordinary", order_status:"Ordered", order_paymentMode:"COD",order_date:"", expected_delivery:""
  })
// console.log(pro.product_price)

const handleCal = (qty)=>{
 console.log(qty)
 console.log(qty);
 if (pro.product_quantity >= +qty) {
   const sum = pro.product_price * (+qty);
   setAmount(sum);
   setOrder({
     ...order,
     order_quantity: qty,
     order_amount: sum 
   });
 } else {
   setAmount(''); 
   setOrder({
     ...order,
     order_quantity: qty,
     order_amount: '' 
   });
 }

}

const handleOrder = (val)=>{

  console.log(val)
dispatch(post_Order(val))

}



  return (
    <div className="container orderItem">
      <div className="orderItem-buyer">
        <h4 style={{ color: "green" }}>ORDER</h4>
        <div className="card d-flex flex-row align-items-center justify-content-evenly orderItem-card">
          <div className="card-body d-flex flex-column align-items-start t1">
            <p style={{ overflowX: "auto", marginTop: "0px" }}>
              EMAIL:<span style={{ padding: "0px 5px" }}></span>
              {buy?.email}
            </p>
            <p>
              NAME:<span style={{ padding: "0px 5px" }}></span>
              {buy?.name}
            </p>
          </div>
          <div className="card-body d-flex flex-column align-items-end t2">
            <p>
              PRODUCT:<span style={{ padding: "0px 5px" }}></span>
              {pro?.product_name}
            </p>
            {/* <p>
              COMPANY:<span style={{ padding: "0px 5px" }}></span>
              {order_product.brand}
            </p> */}
            <p>
              REF ID:<span style={{ padding: "0px 5px" }}></span>
              {pro?.productId}
            </p>
          </div>
        </div>

        <div className="table-responsive mt-3 orderItem-product">
          <table class="table table-info table-striped table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>NAME</th>
                <th>BRAND</th>
                <th>$PRICE</th>
                <th>QUANTITY</th>
                <th>TOTAL</th>
              </tr>
            </thead>
            {
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>{pro.product_name}</td>
                  <td>{pro.product_brand}</td>
                  <td>{pro.product_price}</td>
                  <td >
                    <input 
                     onChange={(e)=>handleCal(e.target.value)}
                      placeholder="Enter quantity required"
                    />
                  </td>
                  <td>{amount}</td>
                </tr>
              </tbody>
            }
          </table>

          <div className="d-flex flex-column orderItem-address">
            <h5
              style={{
                color: "rgb(35 15 125)",
                textAlign: "left",
                padding: "10px 0px 0px 8px",
              }}
            >
              CUSTOMER ADDRESS
            </h5>


<div className="d-flex flex-column gap-2 ">




<div className="d-flex flex-row px-2 pt-3">
  <label className="formLabel">STATE</label>
  <span span style={{ padding: "0px 5px" }}></span>
  <select onChange={(e)=>setOrder({...order,buyer_state:e.target.value})} style={{ width: "30%" }} name="" id="">
    <option value="">Select State</option>
    <option value="Kerala">Kerala</option>
    <option value="Mumbai">Mumbai</option>
    <option value="TamilNadu">TamilNadu</option>
    <option value="Goa">Goa</option>
  </select>
</div>


<div className="d-flex flex-row px-2 pt-3">
  <label className="formLabel">DISTRICT</label>
  <span span style={{ padding: "0px 5px" }}></span>
  <input onChange={(e)=>setOrder({...order,buyer_dist:e.target.value})} className="ip1" type="text" />
</div>

<div className="d-flex flex-row px-2 pt-3">
  <label className="formLabel">PIN CODE</label>
  <span span style={{ padding: "0px 5px" }}></span>
  <input onChange={(e)=>setOrder({...order,buyer_pin:e.target.value})} className="ip1" type="text" />
</div>


<div className="d-flex flex-row px-2 pt-3">
  <label className="formLabel">MOBILE NO</label>
  <span span style={{ padding: "0px 5px" }}></span>
  <input onChange={(e)=>setOrder({...order,buyer_mob:e.target.value})} className="ip1" type="number" />
</div>


<div className="d-flex flex-row px-2 pt-3">
  <label className="formLabel">DELIVERY MODE</label>
  <span span style={{ padding: "0px 5px" }}></span>
  <select onChange={(e)=>setOrder({...order,order_mode:e.target.value})} style={{ width: "30%" }} name="" id="">
    {/* <option value="">Select delivery mode</option> */}
    <option value="Ordinary">Ordinary</option>
    <option value="FastTrack">FastTrack</option>
    <option value="Express">Express</option>
  </select>
</div>




<div className="d-flex flex-row px-2 pt-3">
  <label className="formLabel">ORDER STATUS</label>
  <span span style={{ padding: "0px 5px" }}></span>

  <select onChange={(e)=>setOrder({...order,order_status:e.target.value})} style={{ width: "30%" }} name="" id="">
    <option value="Ordered">Ordered</option>
    <option value="Delivered">Delivered</option>
    <option value="Return">Return</option>
    <option value="Cancelled">Cancelled</option>
  </select>
</div>

<div className="d-flex flex-row px-2 pt-3">
  <label className="formLabel">ADDRESS</label>
  <span span style={{ padding: "0px 5px" }}></span>
  <textarea onChange={(e)=>setOrder({...order,buyer_address:e.target.value})} className="ip1" type="text" />
</div>



</div>

          </div>
        </div>
      </div>
      <div className="orderItem-item">

<img src={pro?.product_url
} className="orderItem-img" alt="pic" />

<h5 style={{ padding: "0px 5px",textAlign:"left", color:"darkblue",marginTop:"10px" }}>TOTAL AMOUNT<span span style={{ padding: "0px 5px" }}></span>:{amount}</h5>

<div className="d-flex flex-row px-2 gap-2">
  <label className="formLabel-2">PAYMENT MODE</label>
  <span span style={{ padding: "0px 5px" }}></span>
  <select onChange={(e)=>setOrder({...order,order_paymentMode:e.target.value})} style={{ width: "30%", marginBottom:"20px" }} name="" id="">
    
    <option value="COD">COD</option>
    <option value="Bank">Bank</option>
    <option value="UPI">UPI</option>
  </select>
</div>
      <button onClick={()=>handleOrder(order)} className="orderitem-btn">ORDER</button>
      </div>
    </div>
  );
}

export default OrderItem;

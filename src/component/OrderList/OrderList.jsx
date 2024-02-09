import React, { useEffect } from "react";
import "./OrderList.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cancelOrder_Byuser, editOrder, get_ALL_orders } from "../../Redux/orderAction";

function OrderList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let role = JSON.parse(localStorage.getItem("user")).role;
  // console.log(role);
  const { orders, failedReq, isError, isLoading, isAddProduct } = useSelector(
    (state) => {
      return state.order;
    }
  );
  // console.log(orders);
  useEffect(() => {
    dispatch(get_ALL_orders());
  }, []);


  const getClass = (stat)=>{

    switch(stat){
    
      case "Ordered" : return "order-class";
      case "Delivered" : return "delivered-class";
      case "Return" : return "return-class";
      case "Cancelled" : return "cancel-class";
      default : return ""
    }
    
    }


const handleChangeStatus = (order_status,el)=>{
  // console.log(order_status)
  // console.log(el)
if(role==="buyer"){
  alert("Only seller can change order status")
  return
}

  let _id = el._id
let payload = {
  id:_id,
  order_status:order_status
}

dispatch( editOrder(payload))
}
const handleOrderCancel = (status,el)=>{

  // alert("Are you sure you want to cancel this order?")
  console.log(status)
  console.log(el)
  // if(role!=="buyer"){
  //   alert("Only buyer can change order status")
  //   return
  // }
  
    let _id = el._id
  let payload = {
    id:_id,
    order_status:status
  }
  
  dispatch(cancelOrder_Byuser(payload))
}



  return (
    <div className="orderlist-cont">
      <div className="orderlist-top">
        <h4 style={{ textAlign: "left" }}>Order List</h4>
        <div className="orderlist-top-all">
          <div className="orderlist-top-filter">filter</div>
          <div className="orderlist-top-sort">sort</div>
          <div className="orderlist-top-pagination">pagination</div>
        </div>

        <div className="orderlist-top-display"></div>
      </div>



{ orders?.map((el,i) => {
  

   return<div  key={i}> <div className="p-3 m-0 border-0 bd-example m-0 border-0 orderlist-body">
        <div className="row">
          <div className="col-sm-12 col-md-8 col-lg-8 mb-3">
            <div className="card d-flex justify-content-center">
              <div className="d-flex align-items-center justify-content-center orderlist-body-img">
            
              </div>

              <div className="orderitem-div">
                <div className="orderitem-p1">
                  <span className="orderlist-title1">CUSTOMER NAME</span>:
                  <span className="orderlist-title">{ el.buyer_name}</span>
                </div>
                <hr />
                <div className="orderitem-p1">
                  <span className="orderlist-title1">CUSTOMER MODE</span>:
                  <span className="orderlist-title">
                   
                    <select onChange = {(e)=>handleOrderCancel(e.target.value,el)} >
                      <option value="">Proceed</option>
                      <option value="Cancelled">Cancelled</option>
                      <option value="Return">Return</option>
                      {/* <option value="Express">Express</option> */}
                    </select>
                  </span>
                </div>
                <hr />

                <div className={`orderitem-p1`}>
                  <span className={`orderlist-title1`}>ORDER STATUS</span>:
                  <span className="orderlist-title">
                    <select value={el.order_status}  onChange={(e)=>handleChangeStatus(e.target.value,el)} className={`${getClass(el.order_status)}`} name="" id="">
                      <option value="Ordered">Ordered</option>
                      <option value="Delivered">Delivered</option>
                      <option value="Return">Return</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </span>
                </div>
                <hr />
                <div className="orderitem-p1">
                  <span className="orderlist-title1">PAYMENT MODE</span>:
                  <span className="orderlist-title">{el.order_paymentMode}</span>
                </div>
                <hr />
                <div className="orderitem-p1">
                  <span className="orderlist-title1">DELIVERY DATE</span>:
                  <span className="orderlist-title">{el.expected_delivery}</span>
                </div>
                <hr />
                <div className="orderitem-p1">
                  <span className="orderlist-title1">ORDER DATE</span>:
                  <span className="orderlist-title">{el.order_date}</span>
                </div>
                <hr />
                <div className="orderitem-p1">
                  <span className="orderlist-title1">AMOUNT</span>:
                  <span className="orderlist-title"> {el.order_amount}</span>
                </div>
                <hr />
              </div>
              {/* <div className="card-body"></div> */}
            </div>
          </div>
        </div>
      </div>

<div className="table-responsive table-cont">
        <table className="table table-info table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col"> ORDER ID</th>
              <th scope="col">ORDER ITEM</th>
              <th scope="col">QUANTITY</th>
              <th scope="col">PRICE/UNIT</th>
              {/* <th scope="col">PRODUCT NAME</th> */}
              <th scope="col">BUYER PHONE</th>
              <th scope="col">BUYER PIN</th>
              <th scope="col">BUYER STATE</th>
              <th scope="col">BUY DIST</th>
              <th scope="col">ADDRESS</th>
            </tr>
          </thead>
          {/* {orders?.map((el, i) => {
            return ( */}
              <tbody >
                <tr>
                  <th scope="row">@</th>
                  <td>{el.order_id}</td>
                  <td>{el.order_Item}</td>
                  <td>{el.order_quantity}</td>
                  <td>{el.product_price}</td>
                  {/* <td>{el.order_item}</td> */}
                  <td>{el.buyer_mob}</td>
                  <td>{el.buyer_pin}</td>
                  <td>{el.buyer_state}</td>
                  <td>{el.buyer_dist}</td>
                  <td>{el.buyer_address}</td>

                
                </tr>
              </tbody>
            
         
        </table>
      </div>
</div>

}) }
      </div>
  
  );
}

export default OrderList;

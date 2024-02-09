import React from "react";  
import "./ProductList.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { get_All_Item } from '../../Redux/action';
import { useEffect } from "react";

import { del_single_Item, get_user_item_data } from "../../Redux/action";

function ProductList({ product, failedReq, isError, isLoading, isAddProduct }) {


  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {users} = useSelector((state) => {
    return state.user
  })

  const token = JSON.parse(localStorage.getItem("token"))
const user =  JSON.parse(localStorage.getItem("user"))
const role = user.role;

  console.log(users);

  const handleBuy = async (id) => {
    try {
      await dispatch(get_user_item_data(id));
     
      navigate("/order");
    } catch (error) {
      
      console.error(error);
    }
  };

const handleDelete = (id)=>{
    // console.log(id);
 if(role==="seller" || role==="admin"){

    dispatch(del_single_Item(id))
 }
}

  return (
    <div className="d-flex flex-column mt-2 pro-cont">
      <p className="text-center fw-bold mt-2 pro-head">Product List</p>
      <div className="table-responsive table-cont">
        <table className="table table-info table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">NAME</th>
              <th scope="col">BRAND</th>
              <th scope="col">CATEGORY</th>
              <th scope="col">ID</th>
              {/* <th scope="col">DESCRIPTION</th> */}
              <th scope="col">STOCK</th>
              <th scope="col">PRICE/UNIT</th>
              <th scope="col">LISTED DATE</th>
              <th scope="col">BUY</th>
              <th scope="col">*</th>
            </tr>
          </thead>
          {product?.map((el, i) => {
            return (
              <tbody key={i}>
                <tr>
                  <th scope="row">{i + 1}</th>
                  <td>{el.product_name}</td>
                  <td>{el.product_brand}</td>
                  <td>@{el.product_category}</td>
                  <td>{el.productId}</td>
                  {/* <td>{el.description}</td> */}
                  <td>{el.product_quantity}</td>
                  <td>{el.product_price}</td>
                  <td>{el.product_date}</td>
                  <td style={{ color: "green" }}>
                    {" "}
                    <button
                      className="btn btn-success"
                      onClick={() => handleBuy(el._id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-fast-forward-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M7.596 7.304a.802.802 0 0 1 0 1.392l-6.363 3.692C.713 12.69 0 12.345 0 11.692V4.308c0-.653.713-.998 1.233-.696z" />
                        <path d="M15.596 7.304a.802.802 0 0 1 0 1.392l-6.363 3.692C8.713 12.69 8 12.345 8 11.692V4.308c0-.653.713-.998 1.233-.696z" />
                      </svg>
                    </button>
                  </td>
                  <td onClick={()=>handleDelete(el._id)} style={{ color: "maroon" }} className="color-danger">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-trash3-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                    </svg>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default ProductList;

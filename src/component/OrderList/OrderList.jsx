import React, { useEffect, useState } from "react";
import "./OrderList.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  delete_Orders,
  // cancelOrder_Byuser,
  editOrder,
  filter_Order,
  get_ALL_orders,
} from "../../Redux/orderAction";
import axios from "axios";
import SideBar1 from "../SideMenu1/SideBar1";
import SideSort from "../SideMenu1/SideSort";

function OrderList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [show1, setShow1] = useState(false);
  const [bool, setBool] = useState(false);
  const [bool2, setBool2] = useState(false);
  const [stateFilt, setStateFilt] = useState();
  const [page, setPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("");

  let role = JSON.parse(localStorage.getItem("user")).role;
  // console.log(role);
  const { orders, filterData, failedReq, isError, isLoading, isAddProduct } =
    useSelector((state) => {
      return state.order;
    });

  useEffect(() => {
    dispatch(get_ALL_orders(page));
  }, [page]);

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const handleNextPage = () => {
    setPage(page + 1);
  };

  const getClass = (stat) => {
    switch (stat) {
      case "Ordered":
        return "order-class";
      case "Delivered":
        return "delivered-class";
      case "Return":
        return "return-class";
      case "Cancelled":
        return "cancel-class";
      default:
        return "";
    }
  };

  const getTrans = (el) => {
    switch (el) {
      case "Ordinary":
        return "tranf-ord";
      case "FastTrack":
        return "tranf-fast";
      case "Express":
        return "tranf-express";
      default:
        return "";
    }
  };

  const handleChangeStatus = (order_status, el) => {
    // console.log(order_status)
    // console.log(el)
    if (role === "buyer") {
      setBool(!bool);
    }

    let _id = el._id;
    let payload = {
      id: _id,
      order_status: order_status,
    };

    dispatch(editOrder(payload));
  };
  console.log(orders);
  // const handleOrderCancel = (status, el) => {
  //   console.log(status);
  //   console.log(el);
  //   if (role !== "buyer") {
  //     alert("Only buyer can change order status");
  //     return;
  //   }

  //   let _id = el._id;
  //   let payload = {
  //     id: _id,
  //     order_status: status,
  //   };

  // dispatch(cancelOrder_Byuser(payload));
  // };

  // console.log(stateFilt)

  // const handleCheck = async (e) => {
  //   e.stopPropagation();
  //   let ar2 = [];
  //   const { value, checked } = e.target;

  //   if (checked) {
  //     ar2.push(value);
  //   } else {
  //     const index = ar2.indexOf(value);
  //     if (index !== -1) {
  //       ar2.splice(index, 1);
  //     }
  //   }

  //   const payload = {
  //     order_status: ar2.filter((status) =>
  //       ["Ordered", "Delivered", "Return", "Cancelled"].includes(status)
  //     ),
  //     order_mode: ar2.filter((mode) =>
  //       ["Ordinary", "FastTrack", "Express"].includes(mode)
  //     ),
  //     order_paymentMode: ar2.filter((paymentMode) =>
  //       ["COD", "Bank", "UPI"].includes(paymentMode)
  //     ),
  //   };

  //   // const filteredPayload = payload.filter((item) => ar2.includes(item.values));

  //   console.log(payload);
  //   // dispatch(filter_Order(filteredPayload));
  // };

  const handleSort = (sortOrder, sortVal) => {
    // let sortOrder = el === 'asc' ? 'desc' : 'asc'

    let payload = {
      sortOrder:sortOrder,
      sortVal:sortVal ,
      page:page,
    };
    // console.log(e, el);
    console.log(payload.page);
dispatch(get_ALL_orders(payload))

  };

  const [arr1, setArr1] = useState([]);

  const handleCheck = async (e) => {
    e.stopPropagation();

    const { value, checked } = e.target;
    if (checked) {
      arr1.push(value);
    } else {
      const index = arr1.indexOf(value);
      if (index !== -1) {
        arr1.splice(index, 1);
      }
    }

    console.log(arr1);
    dispatch(filter_Order(arr1));
  };

  const handleDel = (id, el) => {
    console.log(id, el);
    dispatch(delete_Orders(id));
  };

  const refreshToast = () => {
    setBool(false);
    // window.location.reload()
  };

  if (bool) {
    return (
      <div className="toast-item">
        <div
          className="toast fade show toast-item-div"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-body bg-warning-subtle">
            {"YOU CAN'T CHANGE ORDER STATUS"}
            <div className="mt-2 pt-2 border-top">
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={refreshToast}
                data-bs-dismiss="toast"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
 
  const refreshToast2 = () => {
    setBool2(!false);
    window.location.reload();
  };

  if (Object.keys(failedReq).length) {
    return (
      <div className="toast-item">
        <div
          className="toast fade show toast-item-div"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-body bg-danger bg-opacity-10">
            {failedReq.message}
            <div className="mt-2 pt-2 border-top">
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={refreshToast2}
                data-bs-dismiss="toast"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // order_sta =3 input
  // order_mode  check oedr ()= 4
  // paymode = 3

  return (
    <div className="orderlist-cont">
      <div className="orderlist-top">
        <h4 style={{ textAlign: "left" }}>Order List</h4>
        <div className="orderlist-top-all">
          <div className="orderlist-top-filter">
            <div className="dropdown ">
              <a
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                role="button"
                aria-expanded="false"
              >
                <span style={{ padding: "0px 5px" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-funnel"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2z" />
                  </svg>{" "}
                </span>{" "}
                FILTER
              </a>
              <div className="dropdown-menu drope-menu">
                <div className="d-flex dropdown-item gap-1 m-0 px-2">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      // value={"Ordered"}
                      defaultValue={"Ordered"}
                      onClick={handleCheck}
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Ordered
                    </label>
                  </div>
                </div>

                <div className="d-flex dropdown-item gap-1 m-0 px-2">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      // value={"Delivered"}
                      defaultValue={"Delivered"}
                      onClick={handleCheck}
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Delivered
                    </label>
                  </div>
                </div>

                <div className="d-flex dropdown-item gap-1 m-0 px-2">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      // value={"Return"}
                      defaultValue={"Return"}
                      onClick={handleCheck}
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Return
                    </label>
                  </div>
                </div>

                <div className="d-flex dropdown-item gap-1 m-0 px-2">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      // value={"Cancelled"}
                      defaultValue={"Cancelled"}
                      onClick={handleCheck}
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Cancelled
                    </label>
                  </div>
                </div>

                <div className="d-flex dropdown-item gap-1 m-0 px-2">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      // value={"Cancelled"}
                      defaultValue={"FastTrack"}
                      onClick={handleCheck}
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      {/* order_mode */}
                      FastTrack
                    </label>
                  </div>
                </div>

                <div className="d-flex dropdown-item gap-1 m-0 px-2">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      // value={"Cancelled"}
                      defaultValue={"Express"}
                      onClick={handleCheck}
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      {/* order_mode */}
                      Express
                    </label>
                  </div>
                </div>

                <div className="d-flex dropdown-item gap-1 m-0 px-2">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      // value={"Cancelled"}
                      defaultValue={"COD"}
                      onClick={handleCheck}
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      {/* order_mode */}
                      COD
                    </label>
                  </div>
                </div>
                <div className="d-flex dropdown-item gap-1 m-0 px-2">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      // value={"Cancelled"}
                      defaultValue={"UPI"}
                      onClick={handleCheck}
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      {/* order_mode */}
                      UPI
                    </label>
                  </div>
                </div>

                <div className="d-flex dropdown-item gap-1 m-0 px-2">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      // value={"Cancelled"}
                      defaultValue={""}
                      onClick={handleCheck}
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      {/* order_mode */}
                      ALL
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="orderlist-top-sort">
            <div className="dropdown ">
              <a
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                role="button"
                aria-expanded="false"
              >
                <span style={{ padding: "0px 5px" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-funnel"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2z" />
                  </svg>{" "}
                </span>{" "}
                SORT
              </a>
              <div className="dropdown-menu drope-menu">
                <div className="d-flex dropdown-item gap-1 m-0 px-2">
                  <div className="form-check">
                  <input className="form-check-input" type="radio" 
                   value={"asc"}
                   // defaultValue={"Ordered"}
                   onClick={(e) =>
                     handleSort("asc", "order_amount")
                   }
                  name="flexRadioDefault" id="flexRadioDefault1" />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      INCRE AMOUNT
                    </label>
                  </div>
                </div>

                <div className="d-flex dropdown-item gap-1 m-0 px-2">
                  <div className="form-check">
                  <input className="form-check-input" type="radio" 
                   value={"desc"}
                   // defaultValue={"Ordered"}
                   onClick={(e) =>
                     handleSort("desc", "order_amount")
                   }
                  name="flexRadioDefault" id="flexRadioDefault1" />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      DESC AMOUNT
                    </label>
                  </div>
                </div>

                <div className="d-flex dropdown-item gap-1 m-0 px-2">
                  <div className="form-check">
                  <input className="form-check-input" type="radio" 
                   value={""}
                   // defaultValue={"Ordered"}
                   onClick={(e) =>
                     handleSort("", "order_amount")
                   }
                  name="flexRadioDefault" id="flexRadioDefault1" />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      ALL
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="orderlist-top-pagination">
            <button
              onClick={handlePrevPage}
              disabled={page === 1}
              style={{
                marginRight: "10px",
                border: "none",
                color: "goldenrod",
                // display: "flex",
                // alignItems: "center",
                // justifyContent: "center",
              }}
            >
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "5px 2px",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-left-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                </svg>
              </span>
            </button>
            <button style={{ border: "none" }}>{page}</button>
            <button
              onClick={handleNextPage}
              disabled={orders.length === 0}
              style={{
                marginLeft: "10px",
                border: "none",
                color: "goldenrod",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "5px 2px",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-right-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </span>
            </button>
          </div>
        </div>

        <div className="orderlist-top-display">
          <div
            className="page color-white"
            style={{
              color: "goldenrod",
              padding: "0px 8px",
              // border: "1px solid goldenrod",
              width: "auto",
              display: "flex",
            }}
          >
            <button
              onClick={handlePrevPage}
              disabled={page === 1}
              style={{
                marginRight: "10px",
                border: "none",
                color: "goldenrod",
                // display: "flex",
                // alignItems: "center",
                // justifyContent: "center",
              }}
            >
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "5px 2px",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-left-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                </svg>
              </span>
            </button>
            <button style={{ border: "none" }}>{page}</button>
            <button
              onClick={handleNextPage}
              disabled={orders.length === 0}
              style={{
                marginLeft: "10px",
                border: "none",
                color: "goldenrod",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "5px 2px",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-right-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </span>
            </button>
          </div>
          <div className="dropdown">
            <a
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              style={{ color: "goldenrod" }}
              role="button"
              aria-expanded="false"
            >
              <span style={{ padding: "0px 5px", color: "goldenrod" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  style={{ color: "goldenrod" }}
                  className="bi bi-filter-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M3.5 5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1M5 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m2 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5" />
                </svg>{" "}
              </span>
            </a>
            <div className="dropdown-menu drope-menu2">
              <span
                // onMouseEnter={() => setShow1(true)}
                // onMouseLeave={() => setShow1(true)}
                className="verySmall"
              >
                <span
                  onClick={() => setShow1(true)}
                  className="sp1"
                  style={{ color: "goldenrod", padding: "0px 8px" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-funnel"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2z" />
                  </svg>
                </span>
                {<SideBar1 handleCheck={handleCheck} />}
              </span>
              <hr />
              <div className="d-flex dropdown-item gap-1 m-0 px-2">
                <span className="">
                  <span style={{ color: "goldenrod", padding: "0px 8px" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-arrow-down-up"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5m-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5"
                      />
                    </svg>
                  </span>
                  <SideSort />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {orders?.map((el, i) => {
        return (
          <div key={i}>
            {" "}
            <div className="p-3 m-0 border-0 bd-example m-0 border-0 orderlist-body">
              <div className="row">
                <div className="col-sm-12 col-md-8 col-lg-8 mb-3">
                  <div className="card d-flex justify-content-center">
                    <div className="d-flex align-items-center justify-content-center orderlist-body-img"></div>

                    <div className="orderitem-div">
                      <div
                        onClick={() => handleDel(el._id, el)}
                        className="orderitem-delIcon"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-x"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                        </svg>
                      </div>

                      <div className="orderitem-p1">
                        <span className="orderlist-title1">CUSTOMER NAME</span>:
                        <span className="orderlist-title">{el.buyer_name}</span>
                      </div>
                      <hr />
                      {/* <span><button className="btn orderitem-del">icon</button></span> */}

                      <div className="orderitem-p1">
                        <span className="orderlist-title1">CUSTOMER MODE</span>:
                        <span className="orderlist-title">
                          <select
                          // value={el.order_status}
                          // onChange={(e) =>
                          //   handleOrderCancel(e.target.value, el)
                          // }
                          >
                            <option value={el.order_status}>Proceed</option>
                          </select>
                        </span>
                      </div>
                      <hr />
                      <div className={`orderitem-p1`}>
                        <span className={`orderlist-title1`}>ORDER STATUS</span>
                        :
                        <span className="orderlist-title">
                          <select
                            value={el.order_status}
                            onChange={(e) =>
                              handleChangeStatus(e.target.value, el)
                            }
                            className={`${getClass(el.order_status)}`}
                            name=""
                            id=""
                          >
                            <option value="Ordered">Ordered</option>
                            <option value="Delivered">Delivered</option>
                            <option value="Return">Return</option>
                            <option value="Cancelled">Cancelled</option>
                          </select>
                        </span>
                      </div>
                      <hr />
                      <div className="orderitem-p1">
                        <span className="orderlist-title1">TRANSPORT</span>:
                        <span
                          className={`${getTrans(el.order_mode)}`}
                          id="orderlist-title"
                        >
                          {el.order_mode}
                        </span>
                      </div>
                      <hr />
                      <div className="orderitem-p1">
                        <span className="orderlist-title1">PAYMENT MODE</span>:
                        <span className="orderlist-title">
                          {el.order_paymentMode}
                        </span>
                      </div>
                      <hr />
                      <div className="orderitem-p1">
                        <span className="orderlist-title1">DELIVERY DATE</span>:
                        <span className="orderlist-title">
                          {el.expected_delivery}
                        </span>
                      </div>
                      <hr />
                      <div className="orderitem-p1">
                        <span className="orderlist-title1">ORDER DATE</span>:
                        <span className="orderlist-title">{el.order_date}</span>
                      </div>
                      <hr />
                      <div className="orderitem-p1">
                        <span className="orderlist-title1">AMOUNT</span>:
                        <span className="orderlist-title">
                          {" "}
                          {el.order_amount}
                        </span>
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
                <tbody>
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
        );
      })}
    </div>
  );
}

export default OrderList;

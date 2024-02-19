// very imp condition should use in input tag is

// checked={arr1.order_status.includes("Ordered")}

    //   <input
    //                     className="form-check-input"
    //                     type="radio"
    //                     value={"Ordered"}
    //                     name="orderStatus"
    //                     // defaultValue={"Ordered"}
    //                     // checked={obj.order_status.includes("Ordered")}
    //                     // checked={arr1.order_status.includes("Ordered")}
    //                     // onClick={handleCheckSt}
    //                     id="flexCheckDefault"
    //                   />
    //                   <label
    //                     className="form-check-label"
    //                     htmlFor="flexCheckDefault"
    //                   >
    //                     Ordered
    //                   </label>


// ................................................................................

let obj = {
  order_mode: null,
  order_status: null,
  order_paymentMode: null,
};

const handleCheckTr = (e) => {
  let { value, checked } = e.target;

  obj.order_paymentMode = value;

  document.getElementsByName("transfer").forEach((el) => {
    if (el.value !== value) {
      el.checked = false;
    }
  });
  console.log(obj);
    dispatch(filter_Order(obj));
};

const handleCheckBn = (e) => {
  let { value, checked } = e.target;
  obj.order_mode = value;

  document.getElementsByName("bank").forEach((el) => {
    if (el.value !== value) {
      el.checked = false;
    }
  });

  console.log(obj);
    dispatch(filter_Order(obj));
};

const handleCheckSt = (e) => {
  const { value, checked } = e.target;

  obj.order_status = value;

  document.getElementsByName("orderStatus").forEach((el) => {
    if (el.value !== value) {
      el.checked = false;
    }
  });

  console.log(obj);
    dispatch(filter_Order(obj));
};





// .............................................................


















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










    // "date-from": "",
  // "date-till": "",
  // const [arr1, setArr1] = useState([]);
  // const [arr1, setArr1] = useState({
  //   order_status: [],
  //   order_mode: [],
  //   order_paymentMode: [],
  // });

  // const handleCheckSt = (e) => {
  //   e.stopPropagation();
  //   const { value, checked } = e.target;
  //   const updatedOrderStatus = checked
  //     ? [...arr1.order_status, value]
  //     : arr1.order_status.filter((item) => item !== value);

  //   setArr1((prevArr1) => ({
  //     ...prevArr1,
  //     order_status: updatedOrderStatus,
  //   }));
  //  console.log(arr1);
  //   dispatch(filter_Order({ ...arr1, order_status: updatedOrderStatus }));
  // };

  // const handleCheckTr = (e) => {
  //   e.stopPropagation();
  //   const { value, checked } = e.target;
  //   const updatedOrderMode = checked
  //     ? [...arr1.order_mode, value]
  //     : arr1.order_mode.filter((item) => item !== value);

  //   setArr1((prevArr1) => ({
  //     ...prevArr1,
  //     order_mode: updatedOrderMode,
  //   }));

  //   console.log(arr1)
  //   dispatch(filter_Order({ ...arr1, order_mode: updatedOrderMode }));
  // };

  // const handleCheckBn = (e) => {
  //   e.stopPropagation();
  //   const { value, checked } = e.target;
  //   const updatedPaymentMode = checked
  //     ? [...arr1.order_paymentMode, value]
  //     : arr1.order_paymentMode.filter((item) => item !== value);

  //   setArr1((prevArr1) => ({
  //     ...prevArr1,
  //     order_paymentMode: updatedPaymentMode,
  //   }));
  //  console.log(arr1);
  //   dispatch(filter_Order({ ...arr1, order_paymentMode: updatedPaymentMode }));
  // };

  // const [arr1, setArr1] = useState({
  //   order_status: [],
  //   order_mode: [],
  //   order_paymentMode: [],
  // });

  // const handleCheckSt = async (e) => {
  //   e.stopPropagation();

  //   const { value, checked } = e.target;
  //   if (checked) {
  //     arr1.order_status.push(value);
  //   } else {
  //     const index = arr1.order_status.indexOf(value);
  //     if (index !== -1) {
  //       arr1.order_status.splice(index, 1);
  //     }
  //   }

  //   console.log(arr1);
  //   dispatch(filter_Order(arr1));
  // };

  // const handleCheckTr = async (e) => {
  //   e.stopPropagation();

  //   const { value, checked } = e.target;
  //   if (checked) {
  //     arr1.order_mode.push(value);
  //   } else {
  //     const index = arr1.order_mode.indexOf(value);
  //     if (index !== -1) {
  //       arr1.order_mode.splice(index, 1);
  //     }
  //   }

  //   console.log(arr1);
  //   dispatch(filter_Order(arr1));
  // };

  // const handleCheckBn = async (e) => {
  //   e.stopPropagation();

  //   const { value, checked } = e.target;
  //   if (checked) {
  //     arr1.order_paymentMode.push(value);
  //   } else {
  //     const index = arr1.order_paymentMode.indexOf(value);
  //     if (index !== -1) {
  //       arr1.order_paymentMode.splice(index, 1);
  //     }
  //   }

  //   console.log(arr1);
  //   dispatch(filter_Order(arr1));
  // };
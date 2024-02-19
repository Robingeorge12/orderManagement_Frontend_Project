// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { filter_Order } from "../../Redux/orderAction";

// function Tra() {

//   const dispatch = useDispatch()

//   const [arr1, setArr1] = useState({
//     order_status: "",
//     order_mode: "",
//     order_paymentMode: "",
//   });

//   const handleCheckSt = (e) => {
//     e.stopPropagation();
//     const { value, checked } = e.target;
//     const updatedOrderStatus = checked
//       ? [...arr1.order_status, value]
//       : arr1.order_status.filter((item) => item !== value);

//     setArr1((prevArr1) => ({
//       ...prevArr1,
//       order_status: updatedOrderStatus,
//     }));
//    console.log(arr1);
//     dispatch(filter_Order({ ...arr1, order_status: updatedOrderStatus }));
//   };

//   const handleCheckTr = (e) => {
//     e.stopPropagation();
//     const { value, checked } = e.target;
//     const updatedOrderMode = checked
//       ? [...arr1.order_mode, value]
//       : arr1.order_mode.filter((item) => item !== value);

//     setArr1((prevArr1) => ({
//       ...prevArr1,
//       order_mode: updatedOrderMode,
//     }));

//     console.log(arr1)
//     dispatch(filter_Order({ ...arr1, order_mode: updatedOrderMode }));
//   };

//   const handleCheckBn = (e) => {
//     e.stopPropagation();
//     const { value, checked } = e.target;
//     const updatedPaymentMode = checked
//       ? [...arr1.order_paymentMode, value]
//       : arr1.order_paymentMode.filter((item) => item !== value);

//     setArr1((prevArr1) => ({
//       ...prevArr1,
//       order_paymentMode: updatedPaymentMode,
//     }));
//    console.log(arr1);
//     dispatch(filter_Order({ ...arr1, order_paymentMode: updatedPaymentMode }));
//   };

 

//   return (
//     <div>
//       <div onChange={handleCheckSt}>
//         <input
//           className="form-check-input"
//           type="radio"
//           value={"Ordered"}
//           name="orderStatus"
//           checked={arr1.order_status.includes("Ordered")}
//           id="ordered"
//           // defaultValue={"Ordered"}
//         />
//         <label className="form-check-label" htmlFor="flexCheckDefault">
//           Ordered
//         </label>

//         <input
//           className="form-check-input"
//           type="radio"
//           value={"Delivered"}
//           name="orderStatus"
//           id="delivered"
//           defaultValue={"Delivered"}
//         />
//         <label className="form-check-label" htmlFor="delivered">
//           Delivered
//         </label>

//         <input
//           className="form-check-input"
//           type="radio"
//           value={"Return"}
//           name="orderStatus"
//           checked={arr1.order_status.includes("Return")}
//           id="return"
//           // defaultValue={"Return"}
//         />
//         <label className="form-check-label" htmlFor="return">
//           Return
//         </label>

//         <input
//           className="form-check-input"
//           type="radio"
//           value={"Cancelled"}
//           name="orderStatus"
//           id="cancelled"
//           checked={arr1.order_status.includes("Cancelled")}
//           // defaultValue={"Cancelled"}
//         />
//         <label className="form-check-label" htmlFor="cancelled">
//           Cancelled
//         </label>

//         <input
//           className="form-check-input"
//           type="radio"
//           name="orderStatus"
//           value={""}
//           checked={arr1.order_status.includes("")}
//           id="none"
//           // defaultValue={""}
//         />
//         <label className="form-check-label" htmlFor="none">
//           None
//         </label>
//       </div>

//       {/* sd////////////////////////////////////////////////////////////// */}

//       <p className="filt-one"> TRANSPORT</p>
//       <div onChange={handleCheckTr}>
//         <div className="d-flex dropdown-item gap-1 m-0 px-2">
//           <div className="form-check">
//             <input
//               className="form-check-input"
//               type="radio"
//               value={"FastTrack"}
//               // defaultValue={"FastTrack"}
//               //   onClick={handleCheckTr}
//               checked={arr1.order_mode.includes("FastTrack")}
//               id="flexCheckDefault"
//             />
//             <label className="form-check-label" htmlFor="flexCheckDefault">
//               {/* order_mode */}
//               FastTrack
//             </label>
//           </div>
//         </div>

//         <div className="d-flex dropdown-item gap-1 m-0 px-2">
//           <div className="form-check">
//             <input
//               className="form-check-input"
//               type="radio"
//               value={"Express"}
//               // defaultValue={"Express"}
//               checked={arr1.order_mode.includes("Express")}
//               //   onClick={handleCheckTr}
//               id="flexCheckDefault"
//             />
//             <label className="form-check-label" htmlFor="flexCheckDefault">
//               {/* order_mode */}
//               Express
//             </label>
//           </div>
//         </div>

//         {/* asd//////////////////////////////////////////////////////////////////////////////////// */}
//         <div onChange={handleCheckBn}></div>
//         <p className="filt-one"> PAYMENT</p>

//         <div className="d-flex dropdown-item gap-1 m-0 px-2">
//           <div className="form-check">
//             <input
//               className="form-check-input"
//               type="radio"
//               value={"COD"}
//               defaultValue={"COD"}
//               //   onClick={handleCheckBn}
//               id="flexCheckDefault"
//             />
//             <label className="form-check-label" htmlFor="flexCheckDefault">
//               {/* order_mode */}
//               COD
//             </label>
//           </div>
//         </div>
//         <div className="d-flex dropdown-item gap-1 m-0 px-2">
//           <div className="form-check">
//             <input
//               className="form-check-input"
//               type="checkbox"
//               value={"UPI"}
//               defaultValue={"UPI"}
//               //   onClick={handleCheckBn}
//               id="flexCheckDefault"
//             />
//             <label className="form-check-label" htmlFor="flexCheckDefault">
//               {/* order_mode */}
//               UPI
//             </label>
//           </div>
//         </div>

//         <div className="d-flex dropdown-item gap-1 m-0 px-2">
//           <div className="form-check">
//             <input
//               className="form-check-input"
//               type="radio"
//               value={"Bank"}
//               defaultValue={"Bank"}
//               //   onClick={handleCheckBn}
//               id="flexCheckDefault"
//             />
//             <label className="form-check-label" htmlFor="flexCheckDefault">
//               {/* order_mode */}
//               Bank
//             </label>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Tra;




import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filter_Order } from "../../Redux/orderAction";

function Tra() {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    order_status: "",
    order_mode: "",
    order_paymentMode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    dispatch(filter_Order({ ...formData, [name]: value }));
  };
  console.log(formData)

  return (
    <div>
      <div>
        <input
          className="form-check-input"
          type="radio"
          value="Ordered"
          name="order_status"
          checked={formData.order_status === "Ordered"}
          onChange={handleChange}
          id="ordered"
        />
        <label className="form-check-label" htmlFor="ordered">
          Ordered
        </label>

        <input
          className="form-check-input"
          type="radio"
          value="Delivered"
          name="order_status"
          checked={formData.order_status === "Delivered"}
          onChange={handleChange}
          id="delivered"
        />
        <label className="form-check-label" htmlFor="delivered">
          Delivered
        </label>

        <input
          className="form-check-input"
          type="radio"
          value="Return"
          name="order_status"
          checked={formData.order_status === "Return"}
          onChange={handleChange}
          id="return"
        />
        <label className="form-check-label" htmlFor="return">
          Return
        </label>

        <input
          className="form-check-input"
          type="radio"
          value="Cancelled"
          name="order_status"
          checked={formData.order_status === "Cancelled"}
          onChange={handleChange}
          id="cancelled"
        />
        <label className="form-check-label" htmlFor="cancelled">
          Cancelled
        </label>

        <input
          className="form-check-input"
          type="radio"
          value=""
          name="order_status"
          checked={!formData.order_status}
          onChange={handleChange}
          id="none"
        />
        <label className="form-check-label" htmlFor="none">
          None
        </label>
      </div>

      <p className="filt-one">TRANSPORT</p>

      <div>
        <input
          className="form-check-input"
          type="radio"
          value="Ordinary"
          name="order_mode"
          checked={formData.order_mode === "Ordinary"}
          onChange={handleChange}
          id="ordinary"
        />
        <label className="form-check-label" htmlFor="express">
          Ordinary
        </label>
      </div>

      <div>
        <input
          className="form-check-input"
          type="radio"
          value="FastTrack"
          name="order_mode"
          checked={formData.order_mode === "FastTrack"}
          onChange={handleChange}
          id="fastTrack"
        />
        <label className="form-check-label" htmlFor="fastTrack">
          FastTrack
        </label>

        <input
          className="form-check-input"
          type="radio"
          value="Express"
          name="order_mode"
          checked={formData.order_mode === "Express"}
          onChange={handleChange}
          id="express"
        />
        <label className="form-check-label" htmlFor="express">
          Express
        </label>
      </div>

      <input
        className="form-check-input"
        type="radio"
        value=""
        name="order_status"
        checked={!formData.order_mode}
        onChange={handleChange}
        id="none1"
      />
      <label className="form-check-label" htmlFor="none">
        None
      </label>

      <p className="filt-one">PAYMENT</p>
      <div>
        <input
          className="form-check-input"
          type="radio"
          value="COD"
          name="order_paymentMode"
          checked={formData.order_paymentMode === "COD"}
          onChange={handleChange}
          id="cod"
        />
        <label className="form-check-label" htmlFor="cod">
          COD
        </label>

        <input
          className="form-check-input"
          type="checkbox"
          value="UPI"
          name="order_paymentMode"
          checked={formData.order_paymentMode === "UPI"}
          onChange={handleChange}
          id="upi"
        />
        <label className="form-check-label" htmlFor="upi">
          UPI
        </label>

        <input
          className="form-check-input"
          type="radio"
          value="Bank"
          name="order_paymentMode"
          checked={formData.order_paymentMode === "Bank"}
          onChange={handleChange}
          id="bank"
        />
        <label className="form-check-label" htmlFor="bank">
          Bank
        </label>

        <input
          className="form-check-input"
          type="radio"
          value="Bank"
          name="order_paymentMode"
          checked={!formData.order_paymentMode}
          onChange={handleChange}
          id="bank"
        />
        <label className="form-check-label" htmlFor="bank">
          None
        </label>
      </div>
    </div>
  );
}

export default Tra;
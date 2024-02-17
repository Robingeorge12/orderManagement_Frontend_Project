import React from "react";

function Tra() {
  let om = {
    order_mode: "",
  };
  let os = {
    order_status: "",
  };
  let op = {
    order_paymentMode: "",
  };
  let ob = { ...om, ...os, ...op };

  const handleCheckBn = (e) => {
    let { value, checked } = e.target;
    if (checked) {
      ob.order_paymentMode = value;
      // dispatch(filter_Order(ob));
    } else {
      ob.order_paymentMode = "null";
      // dispatch(filter_Order(ob));
    }
    console.log(ob);
  };

  const handleCheckTr = (e) => {
    let { value, checked } = e.target;
    if (checked) {
      ob.order_mode = value;
      // dispatch(filter_Order(ob));
    } else {
      ob.order_mode = "null";
      // dispatch(filter_Order(ob));
    }
    // document.getElementsByName("orderStatus").forEach((el) => {
    //   if (el.value !== value) {
    //     el.checked = false;
    //   }
    // })
    console.log(ob);
  };

    const handleCheckSt = (e) => {
        const { value, checked } = e.target;
     os.order_status = value;
console.log(value)
     document.getElementsByName("orderStatus").forEach((radio) => {
       if (radio.value !== value) {
         radio.checked = false;
       }
     });
        
         ob = { ...om, ...os, ...op };
    console.log(ob);
  };

  console.log(ob);

  return (
    <div>
      <div onChange={handleCheckSt}>
        <input
          className="form-check-input"
          type="radio"
          value={"Ordered"}
          name="orderStatus"
          id="ordered"
          defaultValue={"Ordered"}
        />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          Ordered
        </label>

        <input
          className="form-check-input"
          type="radio"
          value={"Delivered"}
          name="orderStatus"
          id="delivered"
          defaultValue={"Delivered"}
        />
        <label className="form-check-label" htmlFor="delivered">
          Delivered
        </label>

        <input
          className="form-check-input"
          type="radio"
          value={"Return"}
          name="orderStatus"
          id="return"
          defaultValue={"Return"}
        />
        <label className="form-check-label" htmlFor="return">
          Return
        </label>

        <input
          className="form-check-input"
          type="radio"
          value={"Cancelled"}
          name="orderStatus"
          id="cancelled"
          defaultValue={"Cancelled"}
        />
        <label className="form-check-label" htmlFor="cancelled">
          Cancelled
        </label>

        <input
          className="form-check-input"
          type="radio"
          name="orderStatus"
          value={""}
          id="none"
          defaultValue={""}
        />
        <label className="form-check-label" htmlFor="none">
          None
        </label>
      </div>

      {/* sd////////////////////////////////////////////////////////////// */}

      <p className="filt-one"> TRANSPORT</p>
      <div onChange={handleCheckTr}>
        <div className="d-flex dropdown-item gap-1 m-0 px-2">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              value={"FastTrack"}
              defaultValue={"FastTrack"}
              //   onClick={handleCheckTr}
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              {/* order_mode */}
              FastTrack
            </label>
          </div>
        </div>

        <div className="d-flex dropdown-item gap-1 m-0 px-2">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              value={"Express"}
              defaultValue={"Express"}
              //   onClick={handleCheckTr}
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              {/* order_mode */}
              Express
            </label>
          </div>
        </div>

        {/* asd//////////////////////////////////////////////////////////////////////////////////// */}
        <div onChange={handleCheckBn}></div>
        <p className="filt-one"> PAYMENT</p>

        <div className="d-flex dropdown-item gap-1 m-0 px-2">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              value={"COD"}
              defaultValue={"COD"}
              //   onClick={handleCheckBn}
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
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
              value={"UPI"}
              defaultValue={"UPI"}
              //   onClick={handleCheckBn}
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              {/* order_mode */}
              UPI
            </label>
          </div>
        </div>

        <div className="d-flex dropdown-item gap-1 m-0 px-2">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              value={"Bank"}
              defaultValue={"Bank"}
              //   onClick={handleCheckBn}
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              {/* order_mode */}
              Bank
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tra;

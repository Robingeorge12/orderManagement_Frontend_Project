import React, { useState } from 'react'
import "./SideBar1.css"
 
function SideBar1({handleCheck}) {
    // const [show1, setShow1] = useState(false);
// const handleCheckSide = ()=>{

// }

  return (
    <div className='sidebar1'>
        
        <div className="d-flex dropdown-item gap-1 m-0 px-2">
        {/* <div className="d-flex dropdown-item gap-1 m-0 px-2"> */}
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
  )
}

export default SideBar1
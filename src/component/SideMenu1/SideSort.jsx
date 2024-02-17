import React from 'react'
import "./SideSort.css"

function SideSort({ handleSort }) {
  return (
    <div className="side-sort">
      <div
        style={{
          display: "flex",
          gap: "4px",
          marginBottom: "10px",
          marginTop: "10px",
        }}
      >
        <input
          className="form-check-input"
          type="radio"
          value={"asc"}
          // defaultValue={"Ordered"}
          onClick={(e) => handleSort("asc", "order_amount")}
          name="flexRadioDefault"
          id="flexRadioDefault1"
        />
        <label
          className="form-check-label"
          style={{ fontSize: "14px" }}
          htmlFor="flexCheckDefault"
        >
          INCRE AMOUNT
        </label>
      </div>

      <div style={{ display: "flex", gap: "4px", marginBottom: "10px" }}>
        <input
          className="form-check-input"
          type="radio"
          value={"desc"}
          // defaultValue={"Ordered"}
          onClick={(e) => handleSort("desc", "order_amount")}
          name="flexRadioDefault"
          id="flexRadioDefault1"
          style={{ fontSize: "14px" }}
        />
        <label
          style={{ fontSize: "14px" }}
          className="form-check-label"
          htmlFor="flexCheckDefault"
        >
          DESC AMOUNT
        </label>
      </div>

      <div style={{ display: "flex", gap: "4px", marginBottom: "10px" }}>
        <input
          style={{ fontSize: "14px" }}
          className="form-check-input"
          type="radio"
          value={""}
          // defaultValue={"Ordered"}
          onClick={(e) => handleSort("", "order_amount")}
          name="flexRadioDefault"
          id="flexRadioDefault1"
        />
        <label
          style={{ fontSize: "14px" }}
          className="form-check-label"
          htmlFor="flexCheckDefault"
        >
          ALL
        </label>
      </div>
    </div>
  );
}

export default SideSort
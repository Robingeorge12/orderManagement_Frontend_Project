import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";





export const cancelOrder_Byuser = createAsyncThunk(
    "order/cancelOrder_Byuser",
    async (payload, options) => {
      console.log(payload);
  
      try {
        const token = JSON.parse(localStorage.getItem("token"));
        
        let auth = {
          headers: { Authorization: token },
        };
        // if we pass destructured value then pass like {order_status} ist payload.order_status
        const res = await axios.patch(
          `http://localhost:7800/order/cancel/${payload.id}`,
          payload,auth
        );
        console.log(res.data.message);
        return res.data;
      } catch (er) {
        const { rejectedWithValue } = options;
        console.log(er);
        return rejectedWithValue({ message: er });
      }
    }
  );
  


export const editOrder = createAsyncThunk(
  "order/editOrdere",
  async (payload, options) => {
    console.log(payload);

    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const user = JSON.parse(localStorage.getItem("user"));
      const role = user.role;
      let auth = {
        headers: { Authorization: token },
      };
      // if we pass destructured value then pass like {order_status} ist payload.order_status
      const res = await axios.patch(
        `http://localhost:7800/order/edit/${payload.id}`,
        payload,
        { ...auth, role }
      );
      console.log(res.data.message);
      return res.data;
    } catch (er) {
      const { rejectedWithValue } = options;
      console.log(er);
      return rejectedWithValue({ message: er });
    }
  }
);

export const get_ALL_orders = createAsyncThunk(
  "order/get_ALL_orders",
  async (payload, options) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      let auth = {
        headers: {
          Authorization: token,
        },
      };

      const res = await axios.get(`http://localhost:7800/order`, auth);
      // console.log(res.data.message)
      return res.data.message;
    } catch (er) {
      const { rejectWithValue } = options;
      console.log(er);
      return rejectWithValue({ message: er });
    }
  }
);

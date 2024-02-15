import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



 
// fiter


export const Only_User_orderFilter = createAsyncThunk("order/Only_User_orderFilter",async(payload,options)=>{

  try{
console.log(payload)
const token = JSON.parse(localStorage.getItem("token"));
        
let auth = {
  headers: { Authorization: token },
};
    let res = await axios.post(`http://localhost:7800/order/filter_user`,{payload:payload},auth)

    console.log(res.data.message)
    return res.data.message

  }catch(er){
    const {rejectWithValue} = options

    console.log(er)
    return rejectWithValue({message:er})

  }

})



export const filter_Order = createAsyncThunk("order/filter_Order",async(payload,options)=>{
 
 
  try{
console.log({payload})

const token = JSON.parse(localStorage.getItem("token"));
        
let auth = {
  headers: { Authorization: token },
};

let res = await axios.post(`http://localhost:7800/order/filter`,{payload},auth,{headers:{"Content-Type":"application/json"}})

console.log(res.data.message)
return res.data.message

  }catch(er){

    const {rejectWithValue} = options

    console.log(er)
    return rejectWithValue({message:er})

  }


})


// fil.........................................................................................................






export const UserOnly_order = createAsyncThunk("order/UserOnly_order",async(payload,options)=>{

  try{
    // console.log("res.data")
    const token = JSON.parse(localStorage.getItem("token"));
        
    let auth = {
      headers: { Authorization: token },
    };    

    // console.log(token)
let res = await axios.get(`http://localhost:7800/order/user_order_data`,auth)
// console.log(res.data)
  return res.data.message
  }catch(er){


    const { rejectWithValue } = options;
    // console.log(er); 
    return rejectWithValue({ message: er });

  }

})


export const get_home = createAsyncThunk("order/get_home",async(payload,options)=>{

  try{
 

    // console.log(token)
let res = await axios.get(`http://localhost:7800/order/home`)
// console.log(res.data)
  return res.data.message
  }catch(er){


    const { rejectWithValue } = options;
    // console.log(er);
    return rejectWithValue({ message: er });

  }

})



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
        const { rejectWithValue } = options;
        console.log(er);
        return rejectWithValue({ message: er });
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
      const { rejectWithValue } = options;
      console.log(er);
      return rejectWithValue({ message: er });
    }
  }
);

export const get_ALL_orders = createAsyncThunk(
  "order/get_ALL_orders",
  async (payload, options) => {
    try {
      console.log(payload)
      let {page,sortVal,sortOrder} = payload
      console.log(page,sortVal,sortOrder)
      const token = JSON.parse(localStorage.getItem("token"));
      let auth = {
        headers: {
          Authorization: token,
        },
      };

      const res = await axios.get(`http://localhost:7800/order?sortOrder=${sortOrder}&sortVal=${sortVal}&page=${payload}`, auth,{headers:{"Content-Type":"application/json"}});
      console.log(res.data.message)
      return res.data.message;
    } catch (er) {
      const { rejectWithValue } = options;
      console.log(er);
      return rejectWithValue({ message: er });
    }
  }
);

export const delete_Orders = createAsyncThunk("order/delete_Orders",async(payload,options)=>{

  try{
let id = payload
    // console.log(id)
let token = JSON.parse(localStorage.getItem("token"))
let auth = {
  headers:{
    Authorization:token,
  }
}
let role = JSON.parse(localStorage.getItem("user")).role
let x = {...auth,role}
// console.log(x)

let res = await axios.delete(`http://localhost:7800/order/remove/${id}`,{...auth,role},{headers:{"Content-Type":"application/json"}})

console.log(res.data.message)
return res.data.message


  }catch(er){
const {rejectWithValue} = options
console.log(er.response.data.message)
return rejectWithValue({message:er.response.data.message})


  }


})
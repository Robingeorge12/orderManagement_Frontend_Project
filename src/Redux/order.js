import { createSlice } from "@reduxjs/toolkit";
import {  get_user_item_data,post_Order } from "./action";
import { editOrder, get_ALL_orders } from "./orderAction";

const initialState = {
    orders: [],
  isLoading: false,
  isError: false, 
  isAddProduct:"",
  isOrderStatus:"",
  failedReq:{},
  order_buyer:[],
  order_product :[]
};

export const orderSlice = createSlice({
    name:"order",
    initialState:initialState,
    extraReducers:(builder)=>{


        builder.addCase(post_Order.pending,(state,action)=>{

            state.isLoading = true;
            state.isError = false;
      
          }).addCase(post_Order.fulfilled,(state,action)=>{
      
            state.isLoading = false;
            state.isError = false;
            console.log(action.payload)
            state.isAddProduct = "Successfully Ordered"
            // state.product = action.payload
      
          }).addCase(post_Order.rejected,(state,action)=>{
            state.isLoading = false;
            state.isError = true;
            console.log(action.payload)
            // state.failedReq = {...state.failedReq,...action.payload.message.message}
      
          })
      


builder.addCase(get_ALL_orders.pending,(state,action)=>{

  state.isLoading = true;
  state.isError = false;

}).addCase(get_ALL_orders.fulfilled,(state,action)=>{

  state.isLoading = false;
  state.isError = false;
  console.log(action.payload)
  state.orders = action.payload
  
}).addCase(get_ALL_orders.rejected,(state,action)=>{
  state.isLoading = false;
  state.isError = true;
    // state.failedReq = {...state.failedReq,...action.payload.message.message}
})

builder.addCase(editOrder.pending,(state,action)=>{

  state.isLoading = true;
  state.isError = false;

}).addCase(editOrder.fulfilled,(state,action)=>{

  state.isLoading = false;
  state.isError = false;
  console.log(action.payload)
  state.isOrderStatus = "Order Status Has Been Changed"
  
}).addCase(editOrder.rejected,(state,action)=>{
  state.isLoading = false;
  state.isError = true;
    // state.failedReq = {...state.failedReq,...action.payload.message.message}
})





    }
})

export default orderSlice.reducer
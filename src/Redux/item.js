import { createSlice } from "@reduxjs/toolkit";
import { del_single_Item, get_All_Item, get_user_item_data } from "./action";

const initialState = {
    product: [],
  isLoading: false,
  isError: false, 
  isAddProduct:"",
  failedReq:{},
  order_buyer:[],
  order_product :[]
};

export const itemSlice = createSlice({
  name: "item",
  initialState: initialState,
  extraReducers:(builder)=>{

    builder.addCase(get_All_Item.pending,(state,action)=>{

      state.isLoading = true;
      state.isError = false;

    }).addCase(get_All_Item.fulfilled,(state,action)=>{

      state.isLoading = false;
      state.isError = false;
      console.log(action.payload)
      state.product = action.payload

    }).addCase(get_All_Item.rejected,(state,action)=>{
      state.isLoading = false;
      state.isError = true;
      console.log(action.payload.message.message)
      state.failedReq = {...state.failedReq,...action.payload.message.message}

    })


    builder.addCase(del_single_Item.pending,(state,action)=>{

      state.isLoading = true;
      state.isError = false;
      // console.log(action)

    } ).addCase(del_single_Item.fulfilled,(state,action)=>{

      state.isLoading = false;
      state.isError = false;
      console.log(action)

    } ).addCase(del_single_Item.rejected,(state,action)=>{

      state.isLoading = false;
      state.isError = false;
      console.log(action)

    } )





    builder.addCase(get_user_item_data.pending,(state,action)=>{

      state.isLoading = true;
      state.isError = false;
      // console.log(action.payload)

    } ).addCase(get_user_item_data.fulfilled,(state,action)=>{

      state.isLoading = false;
      state.isError = false;
      console.log(action.payload)
      let {buyer,product} = action.payload
      console.log(buyer,product)
      state.order_buyer = buyer;
      state. order_product = product

    } ).addCase(get_user_item_data.rejected,(state,action)=>{

      state.isLoading = false;
      state.isError = true;
      console.log(action.error)

    } )



  }

})

export default itemSlice.reducer
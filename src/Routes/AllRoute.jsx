import React, { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Signup from '../component/Signup/Signup'
import Login from '../component/Login/Login'
import PrivateRoute from '../PrivateRoute/PrivateRoute'
import Dashboard from '../component/Dashboard/Dashboard'
import Item from '../component/ItemPage/Item'

import Order from '../component/Order/Order' 

import OrderListHome from '../component/OrderList/OrderListHome'


function AllRoute() {

  const [tokenVal, setTokenVal] = useState(JSON.parse(localStorage.getItem("token")))

  return (
    <div>
        <Routes>
<Route path="/signup" element={<Signup />} />
<Route path="/login" element={<Login tokenVal={tokenVal} setTokenVal={setTokenVal} />} />

<Route path="/list_orders" element={<OrderListHome />} />
<>

<Route path="/" element={ tokenVal ?  <Dashboard />
    : <Navigate to="/login" />} />
<Route path="/items" element={<Item />} />



</>
<Route path="/order" element={<Order />} />
        </Routes>
    </div>
  )
}

export default AllRoute
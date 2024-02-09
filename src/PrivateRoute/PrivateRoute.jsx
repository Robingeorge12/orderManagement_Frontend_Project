import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'

function PrivateRoute({children}) {
    const navigate = useNavigate()
    const {token} = useSelector((state) => state.user)
    let validToken = JSON.parse(localStorage.getItem("token"))
    useEffect(()=>{

    },[validToken])
   
    // console.log(token)
console.log(validToken)


if(validToken){
    // console.log(children)
   navigate("/")
}

return <Navigate to="/login" />
}

export default PrivateRoute
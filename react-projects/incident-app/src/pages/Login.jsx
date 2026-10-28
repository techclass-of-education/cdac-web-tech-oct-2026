import { useEffect, useState } from "react"
import { authProcess } from "./redux/AuthSlicer"
import { useSelector,useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"


export function Login()
{
    const dispatch=useDispatch()
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate()
    const msg=useSelector((state)=>state.AuthReducer.msg)
    const isLogin=useSelector((state)=>state.AuthReducer.isLogin)

useEffect(function()
{
  
        if(isLogin)
        {
            alert(msg)
            navigate("/list")
        }
        else{
            alert("Wrong credentials")
        }
    
},[isLogin])

    return (<>
    
    <input placeholder="Enter email-id" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <input placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)}/>

    <button onClick={()=>dispatch(authProcess({email,password}))}>Login</button>
    
    </>)
}
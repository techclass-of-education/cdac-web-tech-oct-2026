import { useContext, useEffect } from "react"
import { TitleContext } from "../App"

export function Login()
{
     const {setTitle,title}=useContext(TitleContext)
    useEffect(function()
        {
        setTitle("Login")
        },[])
    return(<>
    
    <h1>Login Component</h1>
    </>)
}
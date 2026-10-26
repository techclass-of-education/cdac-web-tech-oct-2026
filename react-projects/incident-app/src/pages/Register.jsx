import { useContext, useEffect } from "react"
import { TitleContext } from "../App"

export function Register()
{
     const {setTitle,title}=useContext(TitleContext)
    useEffect(function()
            {
            setTitle("Register")
            },[])
    return(<>
    
    <h1>Register Component</h1>
    </>)
}